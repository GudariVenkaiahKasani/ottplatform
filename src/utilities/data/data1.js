const movies = [
  {
    id: 1,
    title: "The Matrix",
    year: 1999,
    genre: ["Action", "Sci-Fi"],
    duration: "2h 30m",
    rating: 8.7,
    image:
      "https://i.etsystatic.com/23402008/r/il/d98a8a/3270846282/il_fullxfull.3270846282_7hib.jpg",
    description:
      "A hacker discovers the reality he's living in is a simulated world created by machines.",
    trailer_url: "https://dummytrailer.com/matrix",
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    genre: ["Action", "Sci-Fi"],
    duration: "2h 28m",
    rating: 8.8,
    image:
      "https://m.media-amazon.com/images/I/91G0gTLz6GL._AC_UF1000,1000_QL80_.jpg",
    description:
      "A thief who steals secrets through the use of dream-sharing technology is given a final chance to redeem himself.",
    trailer_url: "https://dummytrailer.com/inception",
  },
  {
    id: 3,
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: ["Action", "Sci-Fi"],
    duration: "2h 0m",
    rating: 8.1,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10854488_p_v8_ac.jpg",
    description:
      "In a post-apocalyptic wasteland, Max teams up with a mysterious woman to escape a tyrant.",
    trailer_url: "https://dummytrailer.com/madmax",
  },
  {
    id: 4,
    title: "Gladiator",
    year: 2000,
    genre: ["Action", "Drama"],
    duration: "2h 35m",
    rating: 8.5,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24674_p_v13_bc.jpg",
    description:
      "A former Roman General seeks revenge against the corrupt emperor who murdered his family.",
    trailer_url: "https://dummytrailer.com/gladiator",
  },
  {
    id: 5,
    title: "John Wick",
    year: 2014,
    genre: ["Action", "Thriller"],
    duration: "1h 41m",
    rating: 7.4,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
    description:
      "An ex-hitman comes out of retirement to track down the gangsters that took everything from him.",
    trailer_url: "https://dummytrailer.com/johnwick",
  },
  {
    id: 6,
    title: "The Dark Knight",
    year: 2008,
    genre: ["Action", "Drama"],
    duration: "2h 32m",
    rating: 9.0,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg",
    description:
      "Batman faces a rising criminal mastermind known as the Joker, who seeks to plunge Gotham City into anarchy.",
    trailer_url: "https://dummytrailer.com/darkknight",
  },
  {
    id: 7,
    title: "Avengers: Endgame",
    year: 2019,
    genre: ["Action", "Sci-Fi"],
    duration: "3h 2m",
    rating: 8.4,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    description:
      "The Avengers assemble to reverse the damage caused by Thanos in the Infinity War.",
    trailer_url: "https://dummytrailer.com/endgame",
  },
  {
    id: 8,
    title: "Die Hard",
    year: 1988,
    genre: ["Action", "Thriller"],
    duration: "2h 12m",
    rating: 8.2,
    image:
      "https://m.media-amazon.com/images/I/819cf1ZR2WL._AC_UF1000,1000_QL80_.jpg",
    description:
      "An NYPD officer tries to save his wife and others taken hostage by terrorists during a Christmas party.",
    trailer_url: "https://dummytrailer.com/diehard",
  },
  {
    id: 9,
    title: "Black Panther",
    year: 2018,
    genre: ["Action", "Sci-Fi"],
    duration: "2h 14m",
    rating: 7.3,
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0%2C0%2C540%2C810",
    description:
      "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation.",
    trailer_url: "https://dummytrailer.com/blackpanther",
  },
  {
    id: 10,
    title: "Mission: Impossible - Fallout",
    year: 2018,
    genre: ["Action", "Thriller"],
    duration: "2h 28m",
    rating: 7.8,
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg",
    description:
      "Ethan Hunt and his IMF team join forces to prevent a nuclear disaster.",
    trailer_url: "https://dummytrailer.com/missionimpossible",
  },
  {
    id: 11,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: ["Drama"],
    duration: "2h 22m",
    rating: 9.3,
    image:
      "https://resizing.flixster.com/tdMXmsVnR-vIj4Q5IACpEZ7O1ak=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15987_v_h8_au.jpg",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    trailer_url: "",
  },
  {
    id: 12,
    title: "Forrest Gump",
    year: 1994,
    genre: ["Drama", "Romance"],
    duration: "2h 22m",
    rating: 8.8,
    image:
      "https://resizing.flixster.com/hqcqFfWf1syt2OrGlbW7LDvfj9Y=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15829_v_v13_aa.jpg",
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, and more are seen through the eyes of a man with a low IQ.",
    trailer_url: "",
  },
  {
    id: 13,
    title: "The Godfather",
    year: 1972,
    genre: ["Drama", "Crime"],
    duration: "2h 55m",
    rating: 9.2,
    image:
      "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    trailer_url: "",
  },
  {
    id: 14,
    title: "Schindler's List",
    year: 1993,
    genre: ["Drama", "History"],
    duration: "3h 15m",
    rating: 8.9,
    image:
      "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_.jpg",
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    trailer_url: "",
  },
  {
    id: 15,
    title: "Fight Club",
    year: 1999,
    genre: ["Drama", "Thriller"],
    duration: "2h 19m",
    rating: 8.8,
    image:
      "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
    description:
      "An insomniac office worker forms an underground fight club as a form of male bonding.",
    trailer_url: "",
  },
  {
    id: 16,
    title: "The Green Mile",
    year: 1999,
    genre: ["Drama", "Fantasy"],
    duration: "3h 9m",
    rating: 8.6,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24429_p_v12_bf.jpg",
    description:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    trailer_url: "",
  },
  {
    id: 17,
    title: "12 Angry Men",
    year: 1957,
    genre: ["Drama"],
    duration: "1h 36m",
    rating: 9.0,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
    description:
      "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    trailer_url: "",
  },
];

const subscriptions = [
  {
    id: 1,
    name: "Basic",
    price: "$8.99",
    quality: "HD",
    screens: 1,
  },
  {
    id: 2,
    name: "Standard",
    price: "$13.99",
    quality: "Full HD",
    screens: 2,
  },
  {
    id: 3,
    name: "Premium",
    price: "$17.99",
    quality: "Ultra HD",
    screens: 4,
  },
];

const categories = [
  { category_name: "Trending Now", movies: [1, 2] },
  { category_name: "New Releases", movies: [3] },
  { category_name: "Featured", movies: [1, 3] },
];

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Drama" },
  { id: 3, name: "Sci-Fi" },
  { id: 4, name: "Fantasy" },
  { id: 5, name: "Comedy" },
];
const trendingNow = [
  {
    id: 1,
    title: "The Matrix",
    year: 1999,
    genre: ["Action", "Sci-Fi"],
    duration: "2h 30m",
    rating: 8.7,
    image:
      "https://i.etsystatic.com/23402008/r/il/d98a8a/3270846282/il_fullxfull.3270846282_7hib.jpg",
    description:
      "A hacker discovers the reality he's living in is a simulated world created by machines.",
    trailer_url: "https://dummytrailer.com/matrix",
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    genre: ["Action", "Sci-Fi"],
    duration: "2h 28m",
    rating: 8.8,
    image:
      "https://m.media-amazon.com/images/I/91G0gTLz6GL._AC_UF1000,1000_QL80_.jpg",
    description:
      "A thief who steals secrets through the use of dream-sharing technology is given a final chance to redeem himself.",
    trailer_url: "https://dummytrailer.com/inception",
  },
  {
    id: 3,
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: ["Action", "Sci-Fi"],
    duration: "2h 0m",
    rating: 8.1,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10854488_p_v8_ac.jpg",
    description:
      "In a post-apocalyptic wasteland, Max teams up with a mysterious woman to escape a tyrant.",
    trailer_url: "https://dummytrailer.com/madmax",
  },
  {
    id: 4,
    title: "Gladiator",
    year: 2000,
    genre: ["Action", "Drama"],
    duration: "2h 35m",
    rating: 8.5,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24674_p_v13_bc.jpg",
    description:
      "A former Roman General seeks revenge against the corrupt emperor who murdered his family.",
    trailer_url: "https://dummytrailer.com/gladiator",
  },
  {
    id: 5,
    title: "John Wick",
    year: 2014,
    genre: ["Action", "Thriller"],
    duration: "1h 41m",
    rating: 7.4,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
    description:
      "An ex-hitman comes out of retirement to track down the gangsters that took everything from him.",
    trailer_url: "https://dummytrailer.com/johnwick",
  },
  {
    id: 16,
    title: "The Green Mile",
    year: 1999,
    genre: ["Drama", "Fantasy"],
    duration: "3h 9m",
    rating: 8.6,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24429_p_v12_bf.jpg",
    description:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    trailer_url: "",
  },
];
const moreReasonsToJoin = [
  {
    title: "Enjoy on your TV",
    discription:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more",
  },
  {
    title: "Download your shows to watch offline",
    discription:
      "Save your favourites easily and always have something to watch",
  },
  {
    title: "Watch everywhere",
    discription:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
  },
  {
    title: "Create profiles for kids",
    discription:
      "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
  },
];
const questions = [
  {
    id: "12",
    question: "What Is Movieflix?",
    answer:
      "Movieflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices",
  },
  {
    id: "123",
    question: "How Much Does Movieflix Cost?",
    answer:
      "Watch Movieflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
  },
  {
    id: "1234",
    question: "Where Can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Movieflix account to watch instantly on the web at movieflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    id: "12345",
    question: "How Do I Cancle?",
    answer:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },

  {
    id: "123456",
    question: "What CAn I watch In Movieflix?",
    answer:
      "Movieflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    id: "65",
    question: "Is Movieflix is Good For Kids?",
    answer:
      "The Movieflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
  },
];
const indianMovies = [
  {
    title: "RRR",
    language: "Telugu",
    releaseYear: 2022,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
    rating: 8.8,
    genre: "Action",
  },
  {
    title: "K.G.F: Chapter 1",
    language: "Kannada",
    releaseYear: 2018,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BM2M0YmIxNzItOWI4My00MmQzLWE0NGYtZTM3NjllNjIwZjc5XkEyXkFqcGc@._V1_.jpg",
    rating: 8.5,
    genre: "Action",
  },
  {
    title: "Baahubali: The Beginning",
    language: "Telugu",
    releaseYear: 2015,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5f/Baahubali_The_Beginning_poster.jpg",
    rating: 8.9,
    genre: "Thriller",
  },
  {
    title: "Dangal",
    language: "Hindi",
    releaseYear: 2016,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_QL75_UY281_CR6,0,190,281_.jpg",
    rating: 7.8,
    genre: "Drama",
  },

  {
    title: "Super Deluxe",
    language: "Tamil",
    releaseYear: 2019,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a1/Super_Deluxe_film_poster.jpg",
    rating: 6.8,
    genre: "Drama",
  },
  {
    title: "Pushpa: The Rise",
    language: "Telugu",
    releaseYear: 2021,
    imageUrl:
      "https://flixpatrol.com/runtime/cache/files/posters/j/jfhbrnh6lmnkksz7nlflfyrwk5t.jpg",
    rating: 8.0,
    genre: "Action",
  },
  {
    title: "3 Idiots",
    language: "Hindi",
    releaseYear: 2009,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzc4ZWQ3NmYtODE0Ny00YTQ4LTlkZWItNTBkMGQ0MmUwMmJlXkEyXkFqcGc@._V1_.jpg",
    rating: 7.5,
    genre: "Comedy",
  },
  {
    title: "Soorarai Pottru",
    language: "Tamil",
    releaseYear: 2020,
    imageUrl:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17982732_p_v8_aa.jpg",
    rating: 7.2,
    genre: "Comedy",
  },
  {
    title: "Kumbalangi Nights",
    language: "Malayalam",
    releaseYear: 2019,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/98/Kumbalangi_Nights_poster.jpg",
    rating: 7.5,
    genre: "Romance",
  },
  {
    title: "Sholay",
    language: "Hindi",
    releaseYear: 1975,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BOGQ2NjU0MjktMTUyYi00NjQwLTg0ZTAtNzg5NTk0YTRlMWNhXkEyXkFqcGc@._V1_.jpg",
    rating: 8.8,
    genre: "Action",
  },
  {
    title: "Sita Ramam",
    language: "Telugu",
    releaseYear: 2022,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1d/Sita_Ramam.jpg",
    rating: 7.8,
    genre: "Romance",
  },
  {
    title: "Mersal",
    language: "Tamil",
    releaseYear: 2017,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNjk2NGQwNmYtMDViZS00NjE5LWI4MzMtZWJjZmIwNmI5ODk2XkEyXkFqcGc@._V1_.jpg",
    rating: 8.9,
    genre: "Comedy",
  },

  {
    title: "Kabir Singh",
    language: "Hindi",
    releaseYear: 2019,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Kabir_Singh.jpg/220px-Kabir_Singh.jpg",
    rating: 8.3,
    genre: "Action",
  },
  {
    title: "Sarkaru Vaari Paata",
    language: "Telugu",
    releaseYear: 2022,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Sarkaru_Vaari_Paata.jpg/220px-Sarkaru_Vaari_Paata.jpg",
    rating: 7.8,
    genre: "Triller",
  },
  {
    title: "Papanasam",
    language: "Tamil",
    releaseYear: 2015,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Papanasam_film_poster.jpg",
    rating: 6.8,
    genre: "Thriller",
  },
  {
    title: "Gully Boy",
    language: "Hindi",
    releaseYear: 2019,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/07/Gully_Boy_poster.jpg",
    rating: 7.8,
    genre: "Thriller",
  },
  {
    title: "Anniyan",
    language: "Tamil",
    releaseYear: 2005,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTRlM2Y1MjQtNzkyMS00YTI4LWIzMDktMTMyY2U4NmI2N2U2XkEyXkFqcGc@._V1_.jpg",
    rating: 8.3,
    genre: "Drama",
  },
  {
    title: "Master",
    language: "Tamil",
    releaseYear: 2021,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Master_2021_poster.jpg",
    rating: 8.2,
    genre: "Comedy",
  },
  {
    title: "Vikram",
    language: "Tamil",
    releaseYear: 2022,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/93/Vikram_2022_poster.jpg",
    rating: 8.4,
    genre: "Action",
  },
  {
    title: "Article 15",
    language: "Hindi",
    releaseYear: 2019,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZGEzOTIyNzItMTlkZC00MGZlLThjZjAtMTBhYzU3OGNjMWIxXkEyXkFqcGc@._V1_.jpg",
    rating: 8.8,
    genre: "Drama",
  },
  {
    title: "KGF: Chapter 2",
    language: "Kannada",
    releaseYear: 2022,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZmQzZjVkZTUtYjI4ZC00ZDJmLWI0ZDUtZTFmMGM1Mzc5ZjIyXkEyXkFqcGc@._V1_.jpg",
    rating: 8.4,
    genre: "Action",
  },
  {
    title: "Bajrangi Bhaijaan",
    language: "Hindi",
    releaseYear: 2015,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/dd/Bajrangi_Bhaijaan_Poster.jpg",
    rating: 8.4,
    genre: "Action",
  },
  {
    title: "Lucifer",
    language: "Malayalam",
    releaseYear: 2019,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYzMwNzI3MWItZTIzYi00YjkxLThhOWQtYmUwYjg4NWM0ZWI1XkEyXkFqcGc@._V1_.jpg",
    rating: 8.8,
    genre: "Romance",
  },
  {
    title: "Vedam",
    language: "Telugu",
    releaseYear: 2010,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BOTEwZDE2YTUtYzk0Ny00MjNhLWIxZTctOWZiOTVkNjYzZmY2XkEyXkFqcGc@._V1_.jpg",
    rating: 6.8,
    genre: "Romance",
  },
  {
    title: "Pink",
    language: "Hindi",
    releaseYear: 2016,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/ae/Pinkmovieposter.jpg",
    rating: 8.8,
    genre: "Drama",
  },
  {
    title: "Visaranai",
    language: "Tamil",
    releaseYear: 2015,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Visaranai_film_release_poster.jpg",
    rating: 8.8,
    genre: "Romance",
  },
  {
    title: "Karnan",
    language: "Tamil",
    releaseYear: 2021,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/62/Karnan_2021_poster.jpg",
    rating: 8.8,
    genre: "Romance",
  },
  {
    title: "Rangasthalam",
    language: "Telugu",
    releaseYear: 2018,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNDllZGJlMjAtN2FkMS00OTNkLTllNmUtMDU1NTkxM2IwZDJiXkEyXkFqcGc@._V1_.jpg",
    rating: 8.4,
    genre: "Drama",
  },
  {
    title: "Uri: The Surgical Strike",
    language: "Hindi",
    releaseYear: 2019,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/URI_-_New_poster.jpg",
    rating: 8.1,
    genre: "Drama",
  },
  {
    title: "Minnal Murali",
    language: "Malayalam",
    releaseYear: 2021,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/bf/Minnal_Murali.jpg",
    rating: 6.2,
    genre: "Comedy",
  },
  {
    title: "Chhichhore",
    language: "Hindi",
    releaseYear: 2019,
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chhichhore-et00111656-12-09-2019-02-13-48.jpg",
    rating: 8.8,
    genre: "Comedy",
  },
  {
    title: "Jai Bhim",
    language: "Tamil",
    releaseYear: 2021,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Jai_Bhim_film_poster.jpg/220px-Jai_Bhim_film_poster.jpg",
    rating: 7.8,
    genre: "Drama",
  },
  {
    title: "Singham",
    language: "Hindi",
    releaseYear: 2011,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xf_1zunfHdpClXFhvaYmHAHGaG12ypTdWA&s",
    rating: 8.8,
    genre: "Action",
  },
  {
    title: "Pelli Choopulu",
    language: "Telugu",
    releaseYear: 2016,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b3/Pelli_Choopulu_poster.jpg",
    rating: 7.2,
    genre: "Comedy",
  },
  {
    title: "Sarpatta Parambarai",
    language: "Tamil",
    releaseYear: 2021,
    imageUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/2db0b2d3ff20303927ba1a8cd9377da2d16be558357bc4ae3febb7832c89f92d.jpg",
    rating: 8.2,
    genre: "Comedy",
  },

  {
    title: "Kahaani",
    language: "Hindi",
    releaseYear: 2012,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BY2RjNjZlOWYtOTQxOC00NjQ4LThiMDQtM2RmNWJhZDdlNjhhXkEyXkFqcGc@._V1_.jpg",
    rating: 7.8,
    genre: "Romance",
  },
  {
    title: "Ayyappanum Koshiyum",
    language: "Malayalam",
    releaseYear: 2020,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1c/Ayyappanum_Koshiyum_Poster.jpg",
    rating: 8.8,
    genre: "Romance",
  },
  {
    title: "Barfi!",
    language: "Hindi",
    releaseYear: 2012,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Barfi%21_poster.jpg",
    rating: 6.8,
    genre: "Action",
  },

  {
    title: "Queen",
    language: "Hindi",
    releaseYear: 2013,
    imageUrl:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10608434_p_v10_ab.jpg",
    rating: 8.8,
    genre: "Action",
  },
  {
    title: "Drishyam",
    language: "Hindi",
    releaseYear: 2015,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8a/Drishyam_2015_film.jpg",
    rating: 8.8,
    genre: "Action",
  },
  {
    title: "Enthiran",
    language: "Tamil",
    releaseYear: 2010,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0f/Enthiran_poster.jpg",
    rating: 8.8,
    genre: "Action",
  },
  {
    title: "Madhura Raja",
    language: "Malayalam",
    releaseYear: 2019,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZWNiZTE4ZDYtY2Y0OC00NDIyLWFjZmUtZDk4NTQyMzIyNWM5XkEyXkFqcGc@._V1_.jpg",
    rating: 8.8,
    genre: "Action",
  },
  {
    title: "PK",
    language: "Hindi",
    releaseYear: 2014,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_FMjpg_UX1000_.jpg",
    rating: 7.2,
    genre: "Drama",
  },
  {
    title: "Asuran",
    language: "Tamil",
    releaseYear: 2019,
    imageUrl:
      "https://venkatarangan.com/wp-content/uploads/2019/10/asuran-pictures.jpg",
    rating: 7.8,
    genre: "Thriller",
  },
];
const dummyCredentials = [
  {
    mail: "gudari183@gmail.com",
  },
  {
    mail: "viratkohli@gmail.com",
  },
];

const mockData = {
  movies,
  subscriptions,
  categories,
  genres,
  trendingNow,
  moreReasonsToJoin,
  questions,
  indianMovies,
  dummyCredentials,
};

export default mockData;
