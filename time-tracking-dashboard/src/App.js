import {useState} from 'react'
import Header from './components/Header'
import Block from './components/Block'
import data from './data.json'
import './App.scss';

import iconWork from './images/icon-work.svg'
import iconPlay from './images/icon-play.svg'
import iconStudy from './images/icon-study.svg'
import iconExercise from './images/icon-exercise.svg'
import iconSocial from './images/icon-social.svg'
import iconSelfcare from './images/icon-self-care.svg'

const App = () => {
  const [timeframe, setTimeframe] = useState('weekly')

  const blocks = [
    { title: 'Work', icon: iconWork, color: 'var(--orange)'},
    { title: 'Play', icon: iconPlay, color: 'var(--light-blue)'},
    { title: 'Study', icon: iconStudy, color: 'var(--red)'},
    { title: 'Exercise', icon: iconExercise, color: 'var(--green)'},
    { title: 'Social', icon: iconSocial, color: 'var(--violet)'},
    { title: 'Self Care', icon: iconSelfcare, color: 'var(--yellow)'}
  ]
  
  blocks.map(block => {
    block.timeframes = data.find((el) => el.title === block.title).timeframes
    return block
  })

  return (
    <main className="grid">
      <Header timeframe={timeframe} setTimeframe={setTimeframe}/>
      {blocks.map((el, idx) => <Block timeframe={timeframe} obj={el} key={idx}/>)}
    </main>
  );
}

export default App;
