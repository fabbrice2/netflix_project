import React from 'react'
import './Connexion.css';
import {Link} from "react-router-dom"

function Connexion() {
  return (
    <div className='connexion__Page'>
        <div className='page'>
        <header>
            <img src='https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png' alt='logo'/>
        </header>
        <div className='connexion__page__content'>
        <div className='top__level'>
            <h1>S'identifier</h1>
            <input placeholder='E-mail ou numéro de téléphone' />
            <input placeholder='Mot de passe' />
            <Link to="/home"><button>S'identifier</button></Link>
        </div>
        <div className='sub__level'>
            <ul>
                <li><span class="material-symbols-outlined">done</span></li>
                <li>Se souvenir de moi</li>
            </ul>
            <ul>Besoin d'aide?</ul>
        </div>
        <ul>
            <li>Première visite sur Netflix?</li>
            <Link to="/" className="no-underline"><li>Inscrivez-vous.</li></Link>
        </ul>
        <p>Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot. </p>
        <p>Les informations collectées par Google reCAPTCHA sont soumises aux <span>Règles de confidentialité</span> et <span>Conditions d'utilisation</span> de Google, et sont utilisées pour fournir, maintenir et améliorer le service reCAPTCHA, ainsi qu'à des fins de sécurité générale (elles ne sont pas utilisées pour les publicités personnalisées par Google).</p>
        </div>
        </div>
    </div>
  )
}

export default Connexion