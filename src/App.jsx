import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Community from './Components/Community/Community';

export default function App() {
  return (

    //organizacio de rutas, agregar router englobando todo y routes para varias rutas
    //agregar un nombre a las rutas y VERIFICAR EL NOMBRE CUAANDO SE LLAMA EN EL HEADER
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/community" element={<Community />} name="community"/>
      </Routes>
      <Footer />
    </Router>
  );
}
