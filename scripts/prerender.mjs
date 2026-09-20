import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

/* =========================================
   ROUTES TO PRERENDER
========================================= */

const routes = [
  '/',
  '/about',
  '/experiences',
  '/protocol',
  '/gallery',
  '/guides',
  '/application',
];

/* =========================================
   PATHS
========================================= */

const projectRoot = process.cwd();

const distDir = path.resolve(projectRoot, 'dist');
const ssrDir = path.resolve(projectRoot, 'dist-ssr');

const templatePath = path.join(distDir, 'index.html');

/* =========================================
   FIND SSR ENTRY
========================================= */

async function findServerEntry() {
  const files = await fs.readdir(ssrDir);

  const entryFile = files.find(
    (file) => file.startsWith('entry-server') && file.endsWith('.js')
  );

  if (!entryFile) {
    throw new Error('Could not find the built SSR entry inside dist-ssr.');
  }

  return path.join(ssrDir, entryFile);
}

/* =========================================
   REMOVE DEFAULT HOMEPAGE SEO

   Used only for non-home routes.
========================================= */

function removeDefaultSeo(html) {
  let output = html;

  /* TITLE */

  output = output.replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '');

  /* CANONICAL */

  output = output.replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, '');

  /* META TAGS */

  const removableNames = new Set([
    'description',
    'robots',
    'twitter:card',
    'twitter:title',
    'twitter:description',
    'twitter:image',
    'twitter:creator',
  ]);

  const removableProperties = new Set([
    'og:title',
    'og:description',
    'og:image',
    'og:type',
    'og:url',
    'og:site_name',
    'og:locale',
  ]);

  output = output.replace(/<meta\b[^>]*>/gi, (tag) => {
    const nameMatch = tag.match(/\bname=["']([^"']+)["']/i);

    const propertyMatch = tag.match(/\bproperty=["']([^"']+)["']/i);

    if (nameMatch && removableNames.has(nameMatch[1].toLowerCase())) {
      return '';
    }

    if (
      propertyMatch &&
      removableProperties.has(propertyMatch[1].toLowerCase())
    ) {
      return '';
    }

    return tag;
  });

  return output;
}

/* =========================================
   EXTRACT REACT SEO FROM RENDERED APP

   React 19 supports title/meta/link inside
   page components. We move those elements
   into the final document <head>.
========================================= */

function extractHeadElements(renderedHtml) {
  const headElements = [];

  let bodyHtml = renderedHtml;

  /* TITLE */

  bodyHtml = bodyHtml.replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, (match) => {
    headElements.push(match);

    return '';
  });

  /* META */

  bodyHtml = bodyHtml.replace(/<meta\b[^>]*>/gi, (match) => {
    headElements.push(match);

    return '';
  });

  /* LINK */

  bodyHtml = bodyHtml.replace(/<link\b[^>]*>/gi, (match) => {
    headElements.push(match);

    return '';
  });

  return {
    headHtml: headElements.join('\n'),
    bodyHtml,
  };
}

/* =========================================
   OUTPUT PATH

   /about
   becomes:
   dist/about/index.html
========================================= */

function getOutputPath(route) {
  if (route === '/') {
    return path.join(distDir, 'index.html');
  }

  const cleanRoute = route.replace(/^\/+|\/+$/g, '');

  return path.join(distDir, cleanRoute, 'index.html');
}

/* =========================================
   PRERENDER
========================================= */

async function prerender() {
  const originalTemplate = await fs.readFile(templatePath, 'utf8');

  const serverEntryPath = await findServerEntry();

  const serverModule = await import(pathToFileURL(serverEntryPath).href);

  if (typeof serverModule.render !== 'function') {
    throw new Error('SSR entry does not export a render() function.');
  }

  for (const route of routes) {
    console.log(`Prerendering ${route}`);

    const rendered = await serverModule.render(route);

    const { headHtml, bodyHtml } = extractHeadElements(rendered);

    /*
     * Homepage keeps the metadata already
     * defined in the main index.html.
     *
     * Other routes remove the homepage SEO
     * metadata and replace it with the
     * metadata rendered by their component.
     */

    let finalHtml =
      route === '/' ? originalTemplate : removeDefaultSeo(originalTemplate);

    /* INSERT PAGE-SPECIFIC HEAD DATA */

    if (headHtml.trim()) {
      finalHtml = finalHtml.replace('</head>', `\n${headHtml}\n</head>`);
    }

    /* INSERT PRERENDERED REACT CONTENT */

    finalHtml = finalHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${bodyHtml}</div>`
    );

    const outputPath = getOutputPath(route);

    await fs.mkdir(path.dirname(outputPath), {
      recursive: true,
    });

    await fs.writeFile(outputPath, finalHtml, 'utf8');

    console.log(`✓ ${route} → ${path.relative(projectRoot, outputPath)}`);
  }

  console.log('');
  console.log('✓ Prerendering complete.');
}

prerender().catch((error) => {
  console.error('');
  console.error('Prerendering failed:');

  console.error(error);

  process.exit(1);
});
