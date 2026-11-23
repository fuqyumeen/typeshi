import {CardSizeImage}from "../src/components/Imagie"
import Paragraph from "../src/components/Paragraph"
import Title from "../src/components/Title"

type Movie = {
  nameM: string;
  yearM: string;
  imgM: string;
  linkM: string;
};

const movies: Movie[] = [
  {
    nameM: "Inception",
    yearM: "2010",
    imgM: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    linkM: "https://www.imdb.com/title/tt1375666/",
  },
  {
    nameM: "Interstellar",
    yearM: "2014",
    imgM: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    linkM: "https://www.imdb.com/title/tt0816692/",
  },
  {
    nameM: "The Dark Knight",
    yearM: "2008",
    imgM: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    linkM: "https://www.imdb.com/title/tt0468569/",
  },
  {
    nameM: "Avatar",
    yearM: "2009",
    imgM: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    linkM: "https://www.imdb.com/title/tt0499549/",
  },
  {
    nameM: "Avengers: Endgame",
    yearM: "2019",
    imgM: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    linkM: "https://www.imdb.com/title/tt4154796/",
  },
  {
    nameM: "Spider-Man: No Way Home",
    yearM: "2021",
    imgM: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    linkM: "https://www.imdb.com/title/tt10872600/",
  },
  {
    nameM: "Joker",
    yearM: "2019",
    imgM: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    linkM: "https://www.imdb.com/title/tt7286456/",
  },
  {
    nameM: "Dune: Part Two",
    yearM: "2024",
    imgM: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    linkM: "https://www.imdb.com/title/tt15239678/",
  },
];

type Twin = {
  nameT: string;
}

const amaanTwin:Twin[]= [
  {
    nameT: "everything bout the internet"
  },

]


function Page3() {
  return (
    <>
      <Title title="ShoutOut" date="21 nov 2026" />
    <div>
      <ul><h1> vaibhav twizzy</h1>
        {movies.map((movie, index) => (
          <li key={index}>
            <CardSizeImage
              src={movie.imgM}
              alt={movie.nameM}
            />

            <h3>{movie.nameM}</h3>
            <p>{movie.yearM}</p>

            <a href={movie.linkM} target="_blank" rel="noreferrer">
              Watch Details
            </a>
          </li>
        ))}
      </ul>
      </div>
      <div>
        <ul><h1>Amaan twizzy</h1>

         {amaanTwin.map((twin, index)=>(
          <li key={index}>
            {twin.nameT}
          </li>
         ))}
        </ul>
      </div>
      <div>
        
      </div>
    </>
  );
}
export default Page3