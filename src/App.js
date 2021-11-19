import { useState } from "react";
import './App.css';
import './Styling.css';

function App(){
  const [wl,setwl]=useState([]);
  const [overview,setoverview]=useState([]);
  const [page,setpage]=useState('movie')

const [movie]=useState(
  [
    {
      name: 'The Shawshank Redemption',
      rating: '9.3/10',
      image: 'https://upload.wikimedia.org/wikipedia/id/8/81/ShawshankRedemptionMoviePoster.jpg',
      overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    },
    {
      name: 'The Godfather (1972)',
      rating: '9.2/10',
      image: 'https://asset.kompas.com/crops/m2nSp8X-g8zaAsOHGWLJrTWCt24=/266x132:2570x1668/750x500/data/photo/2020/10/13/5f8580f90fab7.jpg',
      overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    },
    
  ]
);

const addwl = (movie) => {
  setwl([...wl, {...movie}]);
};

const removewl = (movieremove) => {
  setwl(
    wl.filter((movie)=>movie !== movieremove)
  );
};

const toOverview=(movie)=>{
  setoverview([...overview, {...movie}]);
  setpage('overview');
};

const fromOverview = (overviewremove) => {
  setoverview(
    overview.filter((movie)=>movie!==overviewremove)
  );
  navigate('movie');
};

const navigate =(nextpage) => {
  setpage(nextpage);
};

const rendermovie = () => (
  <>
       <div className='tab'>
          <ul>
            <li>
              <h4>Top 2 IMDB</h4>
            </li>
            <li>
              <a onClick={()=>navigate('movie')} className='Home'>Home</a>
            </li>
            <li>
              <a onClick={()=>navigate('wl')} className='wlbutton'>Wishlist</a>
            </li>

          </ul>
         </div> 
         <div className='card'>
           {movie.map((movie, idx) => (
             <div className='moviecard' key={idx}>
               <img onClick={()=>toOverview(movie)} className='poster' src={movie.image}></img>
               <div className='container'>
                 <h4>{movie.name}</h4>
                 <h4>{movie.rating}</h4>
                 <div onClick={()=>addwl(movie)} className='button'>
                   <p>Add to Wishlist</p>
                 </div>
               </div>
             </div> 
           ))}
         </div>
   </>      
);

const renderOverview = () =>(
  <>
       <div className='tab'>
          <ul>
            <li>
              <h4>Top 2 IMDB</h4>
            </li>
            <li>
              <a onClick={()=>navigate('movie')} className='Home'>Home</a>
            </li>
            <li>
              <a onClick={()=>navigate('wl')} className='wlbutton'>Wishlist</a>
            </li>

          </ul>
         </div> 
        <div className='overviewheader'>
          <h4>Overview</h4>
        </div>
        <div className='overviewcontent'>
          <div className='overview'>
            {overview.map((movies,idx)=>(
              <div className='overviewcontainer'>
                <img classname='overviewposter' src = {movie.image}></img>
                <div className='movieoverview'>
                  <p>{movie.overview}</p>
                </div>
              <h5 classname='backbutton' onClick={()=>fromOverview(movie)}>Back</h5>
              </div>
          ))}
        
        </div>
      </div>
      
      </>           
);

const renderwl=()=>(
  <>
        <div className='tab'>
          <ul>
            <li>
              <h4>Top 2 IMDB</h4>
            </li>
            <li>
              <a onClick={()=>navigate('movie')} className='Home'>Home</a>
            </li>
            <li>
              <a onClick={()=>navigate('wl')} className='wlbutton'>Wishlist</a>
            </li>

          </ul>
         </div> 

    <div className="wl">
      <div className='wlcontent'>
        <div className='wlheader'>
          <h4>Wishlist</h4>
        </div>
      <div className='wlbody'>
        <div className='wlcard'>
          {wl.map((movies,idx)=>(
            <div className='wlcard'>
          <div className='detail'>
            <img src={movie.image}></img>
            <h5>{movie.name}</h5>
          </div>
          <div className='removebutton'>
            <h5 onClick={()=> removewl(movie)}>Remove</h5>
          </div>
          </div>
          ))}
        </div>
        </div>  
      </div>
    </div>
   </>   
);
return(
  <div className='App'>
    {page=='movie' && rendermovie()}
    {page=='overview' && renderOverview()}
    {page=='wl' && renderwl()}
  </div>
);
}
export default App;
