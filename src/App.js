import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container-fluid p-0 bg-light">
      <Header></Header>
      <Courses></Courses>
      <Footer></Footer>
    </div>
  );
}

export default App;
