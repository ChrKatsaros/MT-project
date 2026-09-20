import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ageWarning.css';

const AGE_VERIFIED_KEY = 'tabitha-age-verified';

function AgeWarning() {
  const navigate = useNavigate();

  /*
   * Start hidden so the prerendered HTML and the
   * browser's first render are identical.
   */
  const [showWarning, setShowWarning] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const isVerified = sessionStorage.getItem(AGE_VERIFIED_KEY) === 'true';

    if (!isVerified) {
      setShowWarning(true);
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem(AGE_VERIFIED_KEY, 'true');

    setFadeOut(true);

    setTimeout(() => {
      setShowWarning(false);
      setFadeOut(false);
    }, 500);
  };

  const handleLeave = () => {
    sessionStorage.removeItem(AGE_VERIFIED_KEY);

    navigate('/underage');
  };

  if (!showWarning) {
    return null;
  }

  return (
    <div className={`age-warning-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="age-warning-box">
        <span className="warning-badge">18+</span>

        <h1>Adults Only</h1>

        <p>
          This website contains adult-oriented content intended only for
          visitors who are 18 years of age or older.
        </p>

        <p className="small-text">
          By entering this website, you confirm that you are at least 18 years
          old and legally permitted to view adult material in your location.
        </p>

        <div className="buttons">
          <button className="enter-btn" onClick={handleEnter}>
            I am Over 18
          </button>

          <button className="leave-btn" onClick={handleLeave}>
            I am Under 18
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgeWarning;
