import './Banner.css'

// Props:
//   movie  — the featured movie object
//   onSelect — called when user clicks "More Info"
function Banner({ movie, onSelect }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie.backdrop})`,
      }}
    >
      {/* Dark overlay so text is readable */}
      <div className="banner__overlay" />

      {/* Content positioned on the left */}
      <div className="banner__content">
        <p className="banner__label">Featured Movie</p>
        <h1 className="banner__title">{movie.title}</h1>
        <p className="banner__description">{movie.description}</p>
        <div className="banner__meta">
          <span className="banner__year">{movie.year}</span>
          <span className="banner__dot">·</span>
          <span className="banner__genre">{movie.genre}</span>
          <span className="banner__dot">·</span>
          <span className="banner__rating">⭐ {movie.rating}</span>
        </div>
        <div className="banner__buttons">
          <button className="banner__btn banner__btn--play">▶ Play</button>
          <button
            className="banner__btn banner__btn--info"
            onClick={() => onSelect(movie)}
          >
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
