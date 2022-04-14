import './App.css';
import './css/normalize.css';
import './css/style.css';
import './components/Home';
import Home from './components/Home';

function App() {
  const img1 = require('./assets/images/gallery/car10.jpg')
  return (
    <div className="App">
		<Home />
    </div>
  );
}

export default App;
