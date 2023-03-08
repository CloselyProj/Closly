export default function Home(){
    return(
        <div id='Home'>
            <form action="/Room" method="post" className="search_form">
                <label htmlFor="search" className="search_label">Search for stuff</label>
                <input name="movie_link" id="search" type="search" placeholder="Search..." autoFocus required />
                <button className="search_btn" type="submit">Go</button>    
            </form>
            <div className="text-center">
                <h1 className="display-4">Welcome</h1>
                <p>Learn about <a href="https://docs.microsoft.com/aspnet/core">building Web apps with ASP.NET Core</a>.</p>
            </div>

            <h2>Test app</h2>
        </div>
    );
}