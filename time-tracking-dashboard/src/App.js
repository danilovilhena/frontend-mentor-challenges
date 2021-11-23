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
  const blocks = [
    {
      title: 'Work',
      icon: iconWork,
      color: 'var(--orange)',
      time: '32hrs',
      last: 'Last Week - 36hrs'
    },
    {
      title: 'Play',
      icon: iconPlay,
      color: 'var(--light-blue)',
      time: '10hrs',
      last: 'Last Week - 8hrs'
    },
    {
      title: 'Study',
      icon: iconStudy,
      color: 'var(--red)',
      time: '4hrs',
      last: 'Last Week - 7hrs'
    },
    {
      title: 'Exercise',
      icon: iconExercise,
      color: 'var(--green)',
      time: '4hrs',
      last: 'Last Week - 5hrs'
    },
    {
      title: 'Social',
      icon: iconSocial,
      color: 'var(--violet)',
      time: '5hrs',
      last: 'Last Week - 10hrs'
    },
    {
      title: 'Self Care',
      icon: iconSelfcare,
      color: 'var(--yellow)',
      time: '2hrs',
      last: 'Last Week - 2hrs'
    }
  ]

  const [timeframe, setTimeframe] = useState('weekly')

  blocks.map(block => {
    block.timeframes = data.find((el) => el.title === block.title).timeframes
    return block
  })

  return (
    <section className="grid">
      <Header />
      {blocks.map((el, idx) => <Block timeframe={timeframe} obj={el} key={idx}/>)}
    </section>
  );
}

export default App;
