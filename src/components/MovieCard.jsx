import './MovieCard.css'

// Props:
//   movie      — the movie object
//   onSelect   — callback when user clicks the card
//   isSelected — boolean, true if this card is the currently selected movie
function MovieCard({ movie, onSelect, isSelected }) {
  return (
    <div
      className={`movie-card ${isSelected ? 'movie-card--active' : ''}`}
      onClick={() => onSelect(movie)}
      title={movie.title}
    >
      {/* Movie poster image */}
      <img
        className="movie-card__img"
        src={movie.image}
        alt={movie.title}
        loading="lazy"
        // Fallback if image fails to load
        onError={(e) => {
          e.target.src = `https://via.placeholder.com/200x300/1f1f1f/e50914?text=${encodeURIComponent(movie.title)}`
        }}
      />

      {/* Overlay that appears on hover */}
      <div className="movie-card__overlay">
        <p className="movie-card__title">{movie.title}</p>
        <span className="movie-card__rating">⭐ {movie.rating}</span>
        <span className="movie-card__year">{movie.year}</span>
      </div>

      {/* "Selected" indicator */}
      {isSelected && <div className="movie-card__selected-badge">▶ Playing</div>}
    </div>
  )
}

export default MovieCard
