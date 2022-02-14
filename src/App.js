import './App.css';
import Search from './components/search/search';

import TabletManSVG from './imgs/tabletman.svg';
import JunkFoodSVG from './imgs/junkfood.svg';

function App() {
  return (
    <div className="App">
      <img className='tabletman-svg' src={TabletManSVG} alt="svgimage" />
      <img className='junkfood-svg' src={JunkFoodSVG} alt="svgimage" />
      <div className='background-wrapper'>
        <svg className='background-wave' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 890.45">
          <path d="M1920,786c-37.09-12.79-93.15-27.28-161-25-77.39,2.6-101.68,24.71-218,48-82.83,16.58-147.24,20.73-198,24-111.45,7.18-138.38-2.33-222,0-210.49,5.85-207.09,70.71-325,55C636,866.68,614.12,745.2,442,742c-72.39-1.34-144,14-144,14-83.15,17.82-119.29,43.36-192,45A335.62,335.62,0,0,1,0,786V0H1920Z" />
        </svg>
      </div>

      <header className='header-wrapper'>
        <div>
          <h1 className='fancy-header'>Foodtastic</h1>
        </div>
      </header>

      <main className='main-wrapper'>
        <h1 className='fancy-header'>
          Search from 300,000 recipes you crave in just seconds
        </h1>
        <Search />
      </main>
    </div>
  );
}

export default App;
