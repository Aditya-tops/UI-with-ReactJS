import React from 'react'
import MovieLine from './components/MovieLine'
import './App.css'

const App = () => {
  return (
    <div className='app' >
            <h2>I'm App components</h2>
            <MovieLine/>
            <MovieLine/>
            <MovieLine/>
    </div>
  )
}

export default App

