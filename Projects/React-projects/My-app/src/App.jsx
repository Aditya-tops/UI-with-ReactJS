import React,{useState} from 'react'
import './App.css'
import Data from './components/Data'
import List from './components/list'

function App() {
  const [catoons,setCatoon] = useState(Data)
  return (
    <>
      <div className='container' >
        <h3>Total Catoons are {catoons.length} </h3>
        <List catoons={catoons} />
        <button onClick={()=>setCatoon([])} >Clear All</button>
      </div>
    </>
  )
}

export default App
