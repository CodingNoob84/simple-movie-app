import React from 'react'
import MovieData from '../Data/data'

function MovieCard() {
console.log(MovieData);
  return (
    <>
    <div className="text-2xl my-2 display:block">Upcoming Movies</div>
    <div className="flex flex-col sm:justify-center md:flex-row md:flex-start md:flex-wrap">
    {MovieData.map((movie,i)=>
            <div key={i} className="w-42 mx-4">
                <div className="flex flex-col justify-center m-auto" style={{ width:"220px", height:"440px"}}>
                    <img className="w-full h-full object-center object-cover" 
                    style={{ width:"220px", height:"320px"}}
                    src={movie.imageurl}></img>
                    <div className="text-xl text-center"> {movie.title}</div>
                    <div className="text-xl text-center"> {movie.lang}</div>
                    <button className="bg-yellow-500 w-full h-10">Buy Ticket</button>
                </div>
            </div>

       )}

    </div>
        
    </>
  )
}

export default MovieCard