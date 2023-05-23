import React, { useEffect, useState } from 'react';
import "./Nav.css";
import {Link} from "react-router-dom"




// import { ScrollListener } from "react-scroll";


function Nav() {

const [menuVisible, setMenuVisible] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);
function handleClick() {
  setMenuVisible(!menuVisible);
}

useEffect(() => {
  if (menuVisible) {
    // Ajouter la classe "no-scroll" au corps de la page
    document.body.classList.add("no-scroll");
  } else {
    // Supprimer la classe "no-scroll" du corps de la page
    document.body.classList.remove("no-scroll");
  }
}, [menuVisible]);

function handleClose() {
  setMenuVisible(false);
}

function handleItemClick(item) {
  setSelectedItem(item);
}



const [isScrolled, setIsScrolled] = useState(false);


useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const handleScroll = () => {
  if (window.scrollY > 0) {
    setIsScrolled(true);
  } else {
    setIsScrolled(false);
  }
};

const headerStyle = {
  backgroundColor: isScrolled ? 'black' : 'transparent',
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "transparent",
  color: "white",
  height: "80px",
  position: "fixed",
  top: "0",
  zIndex:" 1",
  width: "100%",
  transition: "all 0.2s",
  transitionTimingFunction: "ease-in",
};

return(
  <div>


    <div style={headerStyle} className='nav nav_black'>
  <div className=' logo'>
  <span className="material-symbols-outlined" onClick={handleClick}>menu</span>
  <img className='logo_img' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Logo'></img>
  </div>

     


  <div className='account'>
    <Link to="/search"><span className="material-symbols-outlined">search</span></Link>
    <span className="material-symbols-outlined">notifications</span>
  <img className='profil' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Logo'></img>
  </div>
</div>


{menuVisible && (<div className='menu'>
  <div className='user'>
  <img className='profil' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Logo'></img>
  <h1>User Name</h1>
  <span className="material-symbols-outlined"onClick={handleClose}>close</span>
  </div>
  <div className='wrapper'>

  <div className='notification'>
    <p>Notifications</p>
    <span  className="material-symbols-outlined">chevron_right</span>
  </div>

  <div className='laod'>
  <span className="material-symbols-outlined">download</span>
    <p>Mes vidéos</p>
  </div>
  <div className='category'>
    <ul>
    <Link to="/home"><li  className={selectedItem === 1 ? "is-active" : ""} onClick={() => handleItemClick(1)}>Acceuil</li></Link>
        <Link to="/Animes"><li  className={selectedItem === 2 ? "is-active" : ""} onClick={() => handleItemClick(2)}>Animes</li></Link>
        <Link to="/Comédie"><li  className={selectedItem === 3 ? "is-active" : ""} onClick={() => handleItemClick(3)}>Comédie</li></Link>
        <Link to="/Films"><li  className={selectedItem === 4 ? "is-active" : ""} onClick={() => handleItemClick(4)}>Films d'horreur</li></Link>
        <Link to="/Séries"><li  className={selectedItem === 5 ? "is-active" : ""} onClick={() => handleItemClick(5)}>Séries</li></Link>
            <li  className={selectedItem === 6 ? "is-active" : ""} onClick={() => handleItemClick(6)}>Thrillers</li>
            <li  className={selectedItem === 7 ? "is-active" : ""} onClick={() => handleItemClick(7)}>Films jeunesse et famille</li>
            <li  className={selectedItem === 8 ? "is-active" : ""} onClick={() => handleItemClick(8)}>Drames</li>
            <li  className={selectedItem === 9 ? "is-active" : ""} onClick={() => handleItemClick(9)}>Films indépendants</li>
            <li  className={selectedItem === 10 ? "is-active" : ""} onClick={() => handleItemClick(10)}>Films d'horreur</li>
            <li  className={selectedItem === 11 ? "is-active" : ""} onClick={() => handleItemClick(11)}>Musique et comédies musicales</li>
            <li  className={selectedItem === 12 ? "is-active" : ""} onClick={() => handleItemClick(12)}>Films primés</li>
            <li  className={selectedItem === 13 ? "is-active" : ""} onClick={() => handleItemClick(13)}>Documentaires</li>
            <li  className={selectedItem === 14 ? "is-active" : ""} onClick={() => handleItemClick(14)}>Films français</li>
            <li  className={selectedItem === 15 ? "is-active" : ""} onClick={() => handleItemClick(15)}>Films internationaux</li>
            <li  className={selectedItem === 16 ? "is-active" : ""} onClick={() => handleItemClick(16)}>Contenus télechargables</li>
    </ul>
  </div>
  </div>
  </div>)}



  </div>
)
}

export default Nav
