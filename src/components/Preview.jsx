import './Preview.css'

// Props:
//   movie   — the movie to display
//   onClose — callback to close/dismiss the preview
function Preview({ movie, onClose }) {
  return (
    <div className="preview">
      {/* Backdrop image fills the top */}
      <div
        className="preview__backdrop"
        style={{ backgroundImage: `url(${movie.backdrop})` }}
      >
        <div className="preview__backdrop-overlay" />
      </div>

      {/* Main content */}
      <div className="preview__content">
        {/* Left: movie poster */}
        <img
          className="preview__poster"
          src={movie.image}
          alt={movie.title}
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/200x300/1f1f1f/e50914?text=${encodeURIComponent(movie.title)}`
          }}
        />

        {/* Right: movie details */}
        <div className="preview__details">
          <button className="preview__close" onClick={onClose}>✕ Close</button>
          <h1 className="preview__title">{movie.title}</h1>
          <div className="preview__meta">
            <span className="preview__year">{movie.year}</span>
            <span className="preview__genre">{movie.genre}</span>
            <span className="preview__rating">⭐ {movie.rating} / 10</span>
          </div>
          <p className="preview__description">{movie.description}</p>
          <div className="preview__actions">
            <button className="preview__btn preview__btn--play">▶ Play Now</button>
            <button className="preview__btn preview__btn--list">+ My List</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview
