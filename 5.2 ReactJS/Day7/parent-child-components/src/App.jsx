import React from 'react'
import MovieLine from './components/MovieLine'
import './App.css'

const App = () => {
  const movieCategories = {
    Action: [
      {
        title: "Mad Max: Fury Road",
        poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
        url: "https://www.imdb.com/title/tt1392190/"
      },
      {
        title: "John Wick",
        poster: "https://image.tmdb.org/t/p/w500/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
        url: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg"
      },
      {
        title: "Gladiator",
        poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
        url: "https://www.imdb.com/title/tt0172495/"
      },
      {
        title: "The Dark Knight",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        url: "https://www.imdb.com/title/tt0468569/"
      }
    ],
    Horror: [
      {
        title: "The Conjuring",
        poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
        url: "https://www.imdb.com/title/tt1457767/"
      },
      {
        title: "Hereditary",
        poster: "https://image.tmdb.org/t/p/w500/4G6FNNzS1yG0n3p1Gf1DgZ1kjsA.jpg",
        url: "https://www.imdb.com/title/tt7784604/"
      },
      {
        title: "A Quiet Place",
        poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
        url: "https://www.imdb.com/title/tt6644200/"
      },
      {
        title: "The Babadook",
        poster: "https://image.tmdb.org/t/p/w500/aymDZiVYwMZdRNdT1kzR4Mzn8fW.jpg",
        url: "https://www.imdb.com/title/tt2321549/"
      }
    ],
    Comedy: [
      {
        title: "The Hangover",
        poster: "https://image.tmdb.org/t/p/w500/kMwC6T93d3rY5xU0KjvS9SJgYdP.jpg",
        url: "https://www.imdb.com/title/tt1119646/"
      },
      {
        title: "Superbad",
        poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
        url: "https://www.imdb.com/title/tt0829482/"
      },
      {
        title: "21 Jump Street",
        poster: "https://image.tmdb.org/t/p/w500/8v3Sqv2qjsXj3IhZfOayFstnxgL.jpg",
        url: "https://www.imdb.com/title/tt1232829/"
      },
      {
        title: "Step Brothers",
        poster: "https://image.tmdb.org/t/p/w500/jcEXIiQ9KPwBvAMpF6fOBwA1Ihx.jpg",
        url: "https://www.imdb.com/title/tt0838283/"
      }
    ],
    "Sci-Fi": [
      {
        title: "Interstellar",
        poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        url: "https://www.imdb.com/title/tt0816692/"
      },
      {
        title: "Inception",
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        url: "https://www.imdb.com/title/tt1375666/"
      },
      {
        title: "The Matrix",
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        url: "https://www.imdb.com/title/tt0133093/"
      },
      {
        title: "Blade Runner 2049",
        poster: "https://image.tmdb.org/t/p/w500/aMpyrCizvS4Zf8lvI6CA8p164NQ.jpg",
        url: "https://www.imdb.com/title/tt1856101/"
      }
    ],
    Thriller: [
      {
        title: "Gone Girl",
        poster: "https://image.tmdb.org/t/p/w500/qymaJhucquUwjpb8oiqynMeXnID.jpg",
        url: "https://www.imdb.com/title/tt2267998/"
      },
      {
        title: "Prisoners",
        poster: "https://image.tmdb.org/t/p/w500/sBvFkXCEGzmzGzEvKnIrVA8xP6S.jpg",
        url: "https://www.imdb.com/title/tt1392214/"
      },
      {
        title: "Se7en",
        poster: "https://image.tmdb.org/t/p/w500/69Sns8WoET6CfaYlIkHbla4l7nC.jpg",
        url: "https://www.imdb.com/title/tt0114369/"
      },
      {
        title: "Shutter Island",
        poster: "https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg",
        url: "https://www.imdb.com/title/tt1130884/"
      }
    ]
  };

  return (
    <div className='app'>
      <h1>🎬 Movie Library</h1>
      {Object.entries(movieCategories).map(([category, movies], index) => (
        <div key={index}>
          <h2>{category}</h2>
          <MovieLine movies={movies} />
        </div>
      ))}
    </div>
  );
};

export default App;
