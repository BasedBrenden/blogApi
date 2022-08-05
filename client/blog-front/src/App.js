import logo from './logo.svg';
import './App.css';
import Blogs from './components/Blogs';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Blogs/>
      </header>
    </div>
  );
}

export default App;
