import { Header } from '../Components/Header';
import { Player } from '../Components/Player';

import '../styles/global.scss';
import styles from '../styles/app.module.scss';
import { PlayerContext } from '../contexts/PlayerContext';
import { useState } from 'react';



function MyApp({ Component, pageProps }) {

const [episodeList, setEpisodeList] = useState([]);
const [isPlaying, setIsPlaying] = useState(false);
const[currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

function play(episode){
  setEpisodeList([episode]);
  setCurrentEpisodeIndex(0);
  setIsPlaying(true);
}

function togglePlay(){
  setIsPlaying(!isPlaying);
}

function setPlayingState(state: boolean){
  setIsPlaying(state);
}
  return(
    <PlayerContext.Provider value={{episodeList, currentEpisodeIndex, play, isPlaying, togglePlay, setPlayingState}}>
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
    </PlayerContext.Provider>
  );
}

export default MyApp
