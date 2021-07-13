import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes'
import NavBar from './components/Navbar/index'


function App() {
  return (
    <div className="App">
     <NavBar />
     <Routes />
    </div>
  );
}

export default App;
