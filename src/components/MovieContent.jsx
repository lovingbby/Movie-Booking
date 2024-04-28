

function MovieContent({movieOne}){

    const { Title, Actors, Awards,Poster,
        totalSeasons,Language,Ratings,Country,Writer,Plot
       } = movieOne;

    return(
        <div>
            <h1>{Title}</h1>
     <p>{Plot}</p>
    <p>Writer: {Writer}</p>
    <p>Language: {Language}</p>
    <p>Actors: {Actors}</p>
    <p>Country: {Country}</p>
    {/* <p>Rating: {Ratings}</p> */}
    <p>Awards: {Awards}</p>
        </div>
    );

}


export default MovieContent;