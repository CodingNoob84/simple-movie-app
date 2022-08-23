import React, { useEffect, useRef, useState  } from 'react';
import { FaFilter, FaAngleDown , FaTimes} from 'react-icons/fa';




function Filter() {
    const Languages=['Tamil', 'Hindi', 'Telugu','English','Marathi', 'Bengali'];
    const Genres=['Action', 'Drama', 'Fantasy','Crime','Horror', 'Mystery'];
    const LanguageRef = useRef()
    const GenreRef = useRef()
    const [languageDD, setLanguageDD]= useState(false);
    const [genresDD, setGenresDD]= useState(false);
    const [FilteredLang, setFilteredLang]=useState([]);
    const [FilteredGenre, setFilteredGenre]=useState([]);
    
  
    
    useEffect(() => {
      const checkIfClickedOutside = e => {
        if (languageDD && LanguageRef.current && !LanguageRef.current.contains(e.target)) {
          setLanguageDD(false)
        } else if(genresDD && GenreRef.current && !GenreRef.current.contains(e.target)){
            
            setGenresDD(false) 
        }
      }
      document.addEventListener("click", checkIfClickedOutside)
      return () => {
        // Cleanup the event listener
        document.removeEventListener("click", checkIfClickedOutside)
      }
    }, [languageDD,genresDD])
  
    const onSetFiltered=(type, value)=>{
      if(type ==="Languages"){
        if(FilteredLang.includes(value)){
          setFilteredLang(FilteredLang.filter(item => item !== value))
          } else{
            setFilteredLang(prevArr=>{
            return [...prevArr,value]
            })
          }   
      } else if(type ==="Genres"){
        if(FilteredGenre.includes(value)){
          setFilteredGenre(FilteredGenre.filter(item => item !== value))
          } else{
            setFilteredGenre(prevArr=>{
            return [...prevArr,value]
            })
          }   
      }

    
    }
   
    const handleClearAll=(type)=>{
        console.log("loop")
        if(type ==="Languages"){
          setFilteredLang(FilteredLang.filter(item => !Languages.includes(item)))
        }else if(type ==="Genres"){
          setFilteredGenre(FilteredGenre.filter(item => !Genres.includes(item)))
        }
        
    }
    
    const handleSelectAll=(type)=>{
        console.log(type)
        if(type ==="Languages"){
            Languages.forEach((lang)=>{
                if(!FilteredLang.includes(lang)){
                  setFilteredLang(prevArr=>{
                        return [...prevArr,lang]
                        })
                    } 
                
            })
        }else 
        if(type ==="Genres"){
            console.log(type)
            Genres.forEach((genre)=>{
                if(!FilteredGenre.includes(genre)){
                  setFilteredGenre(prevArr=>{
                        return [...prevArr,genre]
                        })
                    } 
                
            })
        }
    }
    const RemoveFilteredItem=(type, item)=>{
      if(type ==="Languages"){
        setFilteredLang(FilteredLang.filter(val => val !== item))
      }else if(type ==="Genres"){
        setFilteredGenre(FilteredGenre.filter(val => val !== item))
      }
      
    }

    return (
<>
<div className="max-w-6xl h-200">
  <img src="https://img.ticketnew.com/tn/offer_banner/Legend/1920_400_T.jpg" alt="banner" />
      </div>	
       <div className="flex my-3">
        <FaFilter  size={35}  className="w-50 mx-3 text-gray-400 p-1"/>
        <button className={`h-10 w-40 bg-gray-300 text-black p-2 rounded mx-3 hover:bg-red-700 hover:text-white
        ${FilteredLang.length >0 ? 'bg-red-600' : ' bg-gray-300'}`}
         ref={LanguageRef} onClick={() => setLanguageDD(prev => !prev)}>Languages <FaAngleDown className="inline"/> </button>
        <button className={`h-10 w-40 bg-gray-300 text-black p-2 rounded mx-3 hover:bg-red-700 hover:text-white
        ${FilteredGenre.length >0 ? 'bg-red-600' : ' bg-gray-300'}`} 
         ref={GenreRef} onClick={() => setGenresDD(prev => !prev)}>Genres<FaAngleDown  className="inline" /> </button>
  
  </div>
  
  { languageDD ? <div className="flex flex-col bg-gray-100 border-black p-4 w-full rounded md:w-2/3" 
  ref={LanguageRef}>
    <div className="flex row justify-between mb-8">
      <a href="#0" className="text-blue-600" onClick={()=>handleSelectAll("Languages")}> Select All</a>
      <a href="#0"  className="text-red-600" onClick={()=>handleClearAll("Languages")}> Clear All</a>
    </div>
    <div className="flex justify-start flex-wrap">
    {Languages.map((lang,i)=> 
      <button key={i} 
      className={` px-4 hover:bg-red-600 hover:text-white m-1 border-2 
      ${FilteredLang.includes(lang) ? 'bg-red-600' : ' bg-gray-300'}`} 
      onClick={()=>onSetFiltered('Languages',lang)}>{lang}</button>
      )}
    </div>
  </div> : null }

  { genresDD ? <div className="flex flex-col bg-gray-100 border-black p-4 w-full rounded md:w-2/3" 
  ref={GenreRef}>
    <div className="flex row justify-between mb-8">
      <a href="#0" className="text-blue-600" onClick={()=>handleSelectAll("Genres")}> Select All</a>
      <a href="#0"  className="text-red-600" onClick={()=>handleClearAll("Genres")}> Clear All</a>
    </div>
    <div className="flex justify-start flex-wrap ">
    {Genres.map((genre,i)=> 
      <button key={i} 
      className={` px-4 hover:bg-red-600 hover:text-white m-1 border-2 
      ${FilteredGenre.includes(genre) ? 'bg-red-600' : ' bg-gray-300'}`} 
      onClick={()=>onSetFiltered('Genres',genre)}>{genre}</button>
      )}
    </div>
  </div> : null }
  
  
  <div className="flex justify-start flex-wrap">
  {FilteredLang.map((item,i)=> 
        <span key={i} className=" h-7 rounded-full px-4  bg-red-500 hover:text-white m-2">{item} 
        <a  className="pl-2 align-center" href="#0"><FaTimes size={10} className="inline" onClick={()=>RemoveFilteredItem('Languages',item)}/></a></span>
     )
      }
      {FilteredGenre.map((item,i)=> 
        <span key={i} className=" h-7 rounded-full px-4  bg-red-500 hover:text-white m-2">{item} 
        <a  className="pl-2 align-center" href="#0"><FaTimes size={10} className="inline" onClick={()=>RemoveFilteredItem('Genres',item)}/></a></span>
     )
      }
  </div>
</>
       
    );
}

export default Filter