import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyPic from '../src/assets/image-victor.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='card'>
      <div id='MyInfo'>
        <img id='myPic' src={MyPic}/>

        <div id='firstLine'>
          <label className='black'>Victor Crest</label>
          <label className='gray'>26</label>
        </div>

        <label className='gray'>London</label>

        <hr></hr>

        <div id='MyReact'>
          <div className='lines'>
            <label className='black'>80K</label>
            <label className='gray'>Followers</label>
          </div>

          <div className='lines'>
            <label className='black'>803K</label>
            <label className='gray'>Likes</label>
          </div>

          <div className='lines'>
            <label className='black'>1.4K</label>
            <label className='gray'>Photos</label>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
