import { useEffect } from "react";



function MovieContent({movieOne,handleCount}){

    const { Title, Actors, Awards,
        totalSeasons,Language,Country,Writer,Plot
       } = movieOne;

useEffect(() => {
    setValue();   
},[setValue]);

function setValue(){
    handleCount(totalSeasons);
    }

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