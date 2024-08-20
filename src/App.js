import './App.css';
import './styles.css'
import Header from './components/Header';
import MoviesGrid from './components/MoviesGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <div className="container">
        <Header></Header>
        <MoviesGrid></MoviesGrid>
      </div>



      <Footer></Footer>

    </div>
  );
}

export default App;
