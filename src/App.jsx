import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Row from './components/Row'
import Preview from './components/Preview'
import { rows, featuredMovie } from './data/movies'

function App() {
  // selectedMovie holds the movie the user clicked on (or null if none)
  const [selectedMovie, setSelectedMovie] = useState(null)

  // Called when any MovieCard is clicked
  const handleSelectMovie = (movie) => {
    // If you click the same card again, close the preview
    if (selectedMovie && selectedMovie.id === movie.id) {
      setSelectedMovie(null)
    } else {
      setSelectedMovie(movie)
    }
    // Scroll to top so user can see the preview
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Called when the preview's close button is clicked
  const handleClosePreview = () => {
    setSelectedMovie(null)
  }

  return (
    <div className="app">
      {/* ── Top navigation bar ── */}
      <Navbar />

      {/* ── If a movie is selected, show Preview. Otherwise show Banner ── */}
      {selectedMovie ? (
        <Preview movie={selectedMovie} onClose={handleClosePreview} />
      ) : (
        <Banner movie={featuredMovie} onSelect={handleSelectMovie} />
      )}

      {/* ── Movie rows ── */}
      <div className="rows-container">
        {rows.map((row) => (
          <Row
            key={row.id}
            title={row.title}
            movies={row.movies}
            onSelectMovie={handleSelectMovie}
            selectedMovieId={selectedMovie?.id}
          />
        ))}
      </div>
    </div>
  )
}

export default App
