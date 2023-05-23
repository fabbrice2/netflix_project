import React from 'react'
import './LandingPage.css'
import {Link} from "react-router-dom"

function landing() {
  return (
    <div className='landing__page'>
      <div className='landing__page__content' >
      <header>
            <img src='https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png' alt='logo'/>
            <Link to="/Connexion" className="no-underline"><span>S'identifier</span></Link>
        </header>
        <div>
            <h1>Films et séries en illimité, et bien plus</h1>
            <h2>Où que vous soyez. Annulez à tout moment.</h2>
            <p>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</p>
            <div className='connexion'>          
            <input placeholder='Adresse e-mail' />
            <Link to="/home"><button>Commencez<span class="material-symbols-outlined">arrow_forward_ios</span></button></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default landing