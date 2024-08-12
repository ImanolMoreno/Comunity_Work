import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from "./components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Community from './Components/Community/Community';
import RegisterModal from './Components/Modals/RegisterModal/RegisterModal';
import LoginModal from './Components/Modals/LoginModal/LoginModal';


export default function App() {

  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => setRegisterModalOpen(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  return (
    <Router>
      <Header openRegisterModal={openRegisterModal} openLoginModal={openLoginModal} />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/community" element={<Community />} name="community"/>
      </Routes>
      <RegisterModal isRegisterModalOpen={isRegisterModalOpen} closeRegisterModal={closeRegisterModal}></RegisterModal>
      <LoginModal isLoginModalOpen={isLoginModalOpen} closeLoginModal={closeLoginModal}></LoginModal>
      <Footer />
    </Router>
  );
}
