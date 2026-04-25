// Static movie data — no API needed
// Images are served from TMDB's public CDN (no key required for images)

export const movies = [
  {
    id: 1,
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    genre: "Sci-Fi / Thriller",
    year: 2010,
    rating: "8.8",
    image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    genre: "Action / Crime",
    year: 2008,
    rating: "9.0",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    genre: "Sci-Fi / Drama",
    year: 2014,
    rating: "8.6",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    description:
      "After the devastating events of Infinity War, the universe is in ruins. The Avengers assemble once more to reverse Thanos' actions.",
    genre: "Action / Superhero",
    year: 2019,
    rating: "8.4",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
  },
  {
    id: 5,
    title: "The Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    genre: "Sci-Fi / Action",
    year: 1999,
    rating: "8.7",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/ncEsesgOJDNrTUED89hYbA117eo.jpg",
  },
  {
    id: 6,
    title: "Parasite",
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    genre: "Thriller / Drama",
    year: 2019,
    rating: "8.5",
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
  },
  {
    id: 7,
    title: "Spider-Man: No Way Home",
    description:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    genre: "Action / Superhero",
    year: 2021,
    rating: "8.2",
    image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
  },
  {
    id: 8,
    title: "Dune",
    description:
      "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe.",
    genre: "Sci-Fi / Epic",
    year: 2021,
    rating: "8.0",
    image: "https://image.tmdb.org/t/p/w500/d5NXSklpcvkCl.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
  },
  {
    id: 9,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    genre: "Drama",
    year: 1994,
    rating: "9.3",
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
  },
  {
    id: 10,
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man with a low IQ.",
    genre: "Drama / Comedy",
    year: 1994,
    rating: "8.8",
    image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/qdIMHd4sEooeesqc3Vea7PGcVYV.jpg",
  },
  {
    id: 11,
    title: "Joker",
    description:
      "In Gotham City, mentally troubled comedian Arthur Fleck embarks on a downward spiral that leads to the creation of an iconic villain.",
    genre: "Thriller / Crime",
    year: 2019,
    rating: "8.4",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
  },
  {
    id: 12,
    title: "Oppenheimer",
    description:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    genre: "Biography / Drama",
    year: 2023,
    rating: "8.3",
    image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
  },
  {
    id: 13,
    title: "Gladiator",
    description:
      "A former Roman general sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    genre: "Action / Epic",
    year: 2000,
    rating: "8.5",
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/hND2rFHFBp5J8fRBfHFXGGLJLEm.jpg",
  },
  {
    id: 14,
    title: "The Lion King",
    description:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    genre: "Animation / Drama",
    year: 1994,
    rating: "8.5",
    image: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/wXsQvli6tWqja6KmYQPku5A4M8h.jpg",
  },
  {
    id: 15,
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    genre: "Crime / Drama",
    year: 1994,
    rating: "8.9",
    image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
  },
  {
    id: 16,
    title: "John Wick",
    description:
      "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and stole his car.",
    genre: "Action / Thriller",
    year: 2014,
    rating: "7.4",
    image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/umC04Cozevu8nn3ZTIU9br9e5wF.jpg",
  },
  {
    id: 17,
    title: "Barbie",
    description:
      "Barbie suffers a crisis that leads her to question her world and her existence, embarking on a journey to the real world.",
    genre: "Comedy / Fantasy",
    year: 2023,
    rating: "6.9",
    image: "https://image.tmdb.org/t/p/w500/iuFNMS8vlzmIGaxyD8bVnRUDDW1.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/ctMserH8g2SeOAnCmOqheGDG3kq.jpg",
  },
  {
    id: 18,
    title: "Avatar",
    description:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    genre: "Sci-Fi / Adventure",
    year: 2009,
    rating: "7.9",
    image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/s16H6tpK2utvwpaALsyiJpsk9TO.jpg",
  },
  {
    id: 19,
    title: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    genre: "Drama / Thriller",
    year: 1999,
    rating: "8.8",
    image: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
  },
  {
    id: 20,
    title: "Blade Runner 2049",
    description:
      "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.",
    genre: "Sci-Fi / Neo-Noir",
    year: 2017,
    rating: "8.0",
    image: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/7pSd7gXB85XWL0PdCz4ORjQELKCm.jpg",
  },
];

// Organized rows for the homepage
export const rows = [
  {
    id: "trending",
    title: "🔥 Trending Now",
    movies: [1, 2, 3, 4, 5, 6, 7].map((id) => movies.find((m) => m.id === id)),
  },
  {
    id: "toprated",
    title: "⭐ Top Rated",
    movies: [9, 15, 2, 19, 10, 13, 11].map((id) => movies.find((m) => m.id === id)),
  },
  {
    id: "originals",
    title: "🎬 Netflux Originals",
    movies: [12, 8, 17, 7, 18, 16, 20].map((id) => movies.find((m) => m.id === id)),
  },
  {
    id: "scifi",
    title: "🚀 Sci-Fi Universe",
    movies: [1, 3, 5, 8, 18, 20, 4].map((id) => movies.find((m) => m.id === id)),
  },
];

// The featured banner movie
export const featuredMovie = movies[0];
