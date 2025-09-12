import './playlistheader.css';
import Vector2Image from '../../assets/Vector-2.svg';
import VectorImage from '../../assets/Vector.svg';
import Group27Image from '../../assets/Group 27.svg';

const PlaylistHeader: React.FC = () => {
  return (
    <div className="playlist-header">
      <div className="playlist-actions">
        <img src={Group27Image} alt="Play" className="play-button" />
        <img src={Vector2Image} alt="Like" className="heart-icon" />
        <img src={VectorImage} alt="More" className="more-icon" />
      </div>
    </div>
  );
};

export default PlaylistHeader;
