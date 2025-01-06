import { useState } from 'react'
import './App.css'
import MainPage from './Pages/MainPage';
import SelectionPage from './Pages/SelectionPage';
import Footer from './Pages/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
function Header (){
  return (
    <header>
      <img src="images/iteration-1-images/logo.svg" alt="logo" />
    </header>
  );
}
  return (
    <>
     <Header/>
     <MainPage/>
     <Footer />
    </>
  )
}

export default App
