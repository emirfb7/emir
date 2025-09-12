import './musictable.css';
import Frame2Image from '../../assets/Frame-2.svg';
import Vector3Image from '../../assets/Vector-3.svg';
import Frame3Image from '../../assets/Frame-3.svg';

interface MusicTrack {
  id: number;
  number: number;
  title: string;
  artist: string;
  album: string;
  dateAdded: string;
  duration: string;
  isLiked: boolean;
}

const MusicTable: React.FC = () => {
  const tracks: MusicTrack[] = [
    {
      id: 1,
      number: 1,
      title: "Silhouette",
      artist: "GAYLE",
      album: "Silhouette",
      dateAdded: "Oct 26, 2021",
      duration: "3:50",
      isLiked: true
    },
    {
      id: 2,
      number: 2,
      title: "Iffy",
      artist: "Chris Brown",
      album: "Iffy",
      dateAdded: "Oct 26, 2021",
      duration: "3:50",
      isLiked: true
    },
    {
      id: 3,
      number: 3,
      title: "Viva la vida",
      artist: "Romain Ughetto",
      album: "Génération 2000",
      dateAdded: "Oct 26, 2021",
      duration: "3:50",
      isLiked: true
    },
    {
      id: 4,
      number: 4,
      title: "Sooner Or Later",
      artist: "Years & Years",
      album: "Sooner Or Later",
      dateAdded: "Oct 26, 2021",
      duration: "3:50",
      isLiked: true
    },
    {
      id: 5,
      number: 5,
      title: "Shut Off The Lights",
      artist: "Bastille",
      album: "Shut Off The Lights",
      dateAdded: "Oct 26, 2021",
      duration: "3:50",
      isLiked: true
    },
    {
      id: 6,
      number: 6,
      title: "Easy On Me",
      artist: "Adele",
      album: "Easy On Me",
      dateAdded: "Oct 26, 2021",
      duration: "3:50",
      isLiked: true
    },
    {
      id: 7,
      number: 7,
      title: "My Universe",
      artist: "Coldplay",
      album: "My Universe",
      dateAdded: "Oct 26, 2021",
      duration: "3:50",
      isLiked: true
    },
    {
      id: 8,
      number: 8,
      title: "Permanence",
      artist: "David Guetta",
      album: "Permanence",
      dateAdded: "Oct 26, 2021",
      duration: "3:50",
      isLiked: true
    },
    {
      id: 9,
      number: 9,
      title: "Human disorder",
      artist: "Skip the Use",
      album: "Human disorder",
      dateAdded: "Oct 26, 2021",
      duration: "3:50",
      isLiked: true
    },
    {
      id: 10,
      number: 10,
      title: "Pepas",
      artist: "Farruko",
      album: "Pepas",
      dateAdded: "Oct 26, 2021",
      duration: "3:50",
      isLiked: true
    },
    {
      id: 11,
      number: 11,
      title: "Shivers",
      artist: "Ed Sheeran",
      album: "Shivers",
      dateAdded: "Oct 26, 2021",
      duration: "3:50",
      isLiked: true
    },
    {
      id: 12,
      number: 12,
      title: "BB",
      artist: "Cinco",
      album: "BB",
      dateAdded: "Oct 26, 2021",
      duration: "3:50",
      isLiked: true
    }
  ];

  return (
    <div className="music-table-container">
      {/* Desktop Table */}
      <table className="music-table">
        <thead>
          <tr className="table-header">
            <th className="col-number">#</th>
            <th className="col-image"></th>
            <th className="col-title">TITLE</th>
            <th className="col-album">ALBUM</th>
            <th className="col-date">DATE ADDED</th>
            <th className="col-duration">
              <img src={Frame2Image} alt="Duration" className="duration-header-icon" />
            </th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track) => (
            <tr key={track.id} className="table-row">
              <td className="col-number">{track.number}</td>
              <td className="col-image">
                <div className="track-image">♪</div>
              </td>
              <td className="col-title">
                <div className="track-info">
                  <span className="track-title">{track.title}</span>
                  <span className="track-artist">{track.artist}</span>
                </div>
              </td>
              <td className="col-album">{track.album}</td>
              <td className="col-date">{track.dateAdded}</td>
              <td className="col-duration">
                <div className="duration-container">
                  <img src={Vector3Image} alt="Like" className="heart-icon" />
                  <span className="duration">{track.duration}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Cards */}
      <div className="mobile-music-list">
        {tracks.map((track) => (
          <div key={track.id} className="mobile-music-card">
            <img src={Frame3Image} alt="Play" className="mobile-play-icon" />
            <div className="mobile-card-image">♪</div>
            <div className="mobile-card-info">
              <div className="mobile-card-title">{track.title}</div>
              <div className="mobile-card-artist">{track.artist}</div>
            </div>
            <div className="mobile-card-actions">
              <img src={Vector3Image} alt="Like" className="mobile-heart-icon" />
              <span className="mobile-duration">{track.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicTable;
