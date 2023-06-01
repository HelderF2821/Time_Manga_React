import React from 'react';
import './MainScreen.css';

const MainScreen = () => {
  return (
    <div className="container">
      <div className="slidemenu">
        <header>
            <img src={require('./logo.png')} alt="Logo" className="logo" />
        </header>
        <section className="search-section">
          <h1>Recherchez un Manga</h1>
          <div className="search-bar">
            <input type="text" placeholder="Cherche un Manga" />
          </div>
          <section id="menu">
            <ul class="menu list-unstyled">
              <li class="calendar ">
                <a href="/fr/user/12082839/calendar" title="Agenda TV">
                  <span>• Accueil</span>
                </a>
              </li>
              <li class="upcoming ">
              <a href="/fr/upcoming" title="A venir">
                <span>• Découvrir</span>
              </a>
              </li>
              <li class="home ">
                <a href="/fr" title="A voir">
                  <span>• Profil</span>
                </a>
              </li>
              <li class="profile ">
                <a href="/fr/user/12082839/profile" title="Profil">
                  <span>• Parametres</span>
                </a>
              </li>
            </ul>
          </section>
        </section>
        </div>
      </div>
  );
};

export default MainScreen;
