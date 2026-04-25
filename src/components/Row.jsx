import MovieCard from './MovieCard'
import './Row.css'

// Props:
//   title          — the row heading (e.g. "Trending Now")
//   movies         — array of movie objects
//   onSelectMovie  — callback to pass the clicked movie up to App
//   selectedMovieId — id of the currently selected movie (so card can show active state)
function Row({ title, movies, onSelectMovie, selectedMovieId }) {
  return (
    <section className="row">
      <h2 className="row__title">{title}</h2>
      {/* The horizontal scroll container */}
      <div className="row__scroll">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onSelect={onSelectMovie}
            isSelected={selectedMovieId === movie.id}
          />
        ))}
      </div>
    </section>
  )
}

export default Row
