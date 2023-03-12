import React from 'react';
import Card from '../../CustomComponents/Card';
import '../../css/Home.css';

const Home = () => {
  return (
    <div>
      <div class="page">
          <header tabindex="0">
            <a asp-page=""><button class="custom-btn btn-6"><span>Films</span></button></a>
            <a class="btn" href='#'><button class="custom-btn btn-6"><span>YouTube</span></button></a>
            <a class="btn" href='#'><button class="custom-btn btn-6"><span>My Video</span></button></a>
            <a class="profile" href='#'><button class="custom-btn btn-6"><span>Login</span></button></a>
          </header>
      </div>
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