import './playerbar.css';
import Vector3Image from '../../assets/Vector-3.svg';
import Frame40Image from '../../assets/Frame 40.svg';
import Vector4Image from '../../assets/Vector-4.svg';
import Frame3Image from '../../assets/Frame-3.svg';

const PlayerBar: React.FC = () => {
  return (
    <div className="player-bar">
      <div className="player-left">
        <div className="current-track">
          <div className="track-image">
            <div className="album-art">♪</div>
          </div>
          <div className="track-details">
            <div className="track-name">Torna a casa</div>
            <div className="track-artist">Måneskin</div>
          </div>
          <img src={Vector3Image} alt="Like" className="track-heart desktop-heart" />
        </div>
      </div>
      
      <div className="player-center">
        <img src={Frame40Image} alt="Player Controls" className="player-controls-svg" />
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
      
      <div className="player-right">
        <img src={Vector3Image} alt="Like" className="track-heart mobile-heart" />
        <img src={Frame3Image} alt="Play" className="pause-icon" />
        <img src={Vector4Image} alt="Volume" className="volume-icon" />
        <div className="volume-bar">
          <div className="volume-fill"></div>
        </div>
      </div>
      
      {/* Mobile Progress Bar */}
      <div className="mobile-progress-bar">
        <div className="mobile-progress-fill"></div>
      </div>
    
    </div>
  );
};

export default PlayerBar;
