import React from 'react';
import Filter from './Filter'
import MovieCard from './MovieCard'




function Home() {
  return(
    <>
          <section className="p-6 w-full lg:w-4/5 mx-auto">
          <Filter />
    <MovieCard />

          </section>
    
    </>
  )
}

export default Home;
