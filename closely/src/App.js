import Home from './Pages/Home/Home';
import {BrowserRouter , Route} from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
      <Route path="/">
        <Home/>
      </Route>
   </BrowserRouter>
  );
}

export default App;
