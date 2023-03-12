import React from 'react';
import Card from '../../CustomComponents/Card';
import '../../css/Home.css';

const Home = () => {
  return (
    <div>

      {/*Search box*/}
      <form asp-page="/Room" method="post" class="search_form">
          <label for="search" class="search_label">Search for stuff</label>
          <input name="movie_link" id="search" type="search" placeholder="Search..." autofocus required />
          <button class="search_btn" type="submit">Go</button>    
      </form>
      {/*Search box end*/} 
      <div className='cards'>
        <Card card={{link:'../img/link.png'}}/>
        <Card card={{link:'../img/search.png'}}/>
        <Card card={{link:'../img/video.png'}}/>
      </div>
    </div>
  );
}

export default Home;