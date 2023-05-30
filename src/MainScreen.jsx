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
            <img src={require('./settings.png')} alt="Settings" className="settings" />
            </div>
        </section>
        {/* Reste du contenu */}
        <footer> 
            {/* Navigation inférieure */}
        </footer>
      </div>
    </div>
  );
};

export default MainScreen;
