function MovieCard({ title, image }) {
  return (
    <div>
      <img src={image} alt={title} style={{ width: "150px" }} />
      <p>{title}</p>
    </div>
  );
}

export default MovieCard;
