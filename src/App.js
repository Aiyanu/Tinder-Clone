import './App.css';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import TinderCards from './components/TinderCards';


function App() {
  return (
    <div className="App">
      {/* header */}
      <Header/>
      {/* TinderCards */}
      <TinderCards/>
      {/* SwipeButton */}
      <SwipeButtons/>
    </div>
  );
}

export default App;
