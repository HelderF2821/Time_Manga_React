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
            <input type="text" placeholder="Cherche un Manga" /></div>
        </section>
      </div>
    </div>
  );
};

export default MainScreen;
