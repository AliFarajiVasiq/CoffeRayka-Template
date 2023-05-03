import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import FoodMenu from './Components/FoodMenu/FoodMenu';
import Chefs from './Components/Chefs/Chefs';
import Reservation from './Components/Reservation/Reservation';
import PapularFood from './Components/PapularFood/PapularFood';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <FoodMenu />
      <Chefs />
      <Reservation />
      <PapularFood />
      <Services />
      <Footer />
    </>
  );
}

export default App;