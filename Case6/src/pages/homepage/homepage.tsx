import Banner from '../../compoments/banner/banner';
import PlaylistHeader from '../../compoments/playlistheader/playlistheader';
import MusicTable from '../../compoments/musictable/musictable';
import PlayerBar from '../../compoments/playerbar/playerbar';
import './homepage.css';
import logo from '../../assets/Frame.svg';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      
      
      <main className="main-content">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <Banner />
        
        <section className="content-section">
          <PlaylistHeader />
          <MusicTable />
        </section>
      </main>
      <PlayerBar />
      
    </div>
  );
};

export default HomePage;
