// App.jsx
import React from 'react';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';
import './App.css';

// Importar imágenes
import labrador from "./img/labrador.jpg";
import aleman from "./img/pastor aleman.jpg";
import samo from "./img/samolledo.jpg";

function App() {
  return (
    <div className="App">
      <Header title="Adopta un perrito" />
      <MyCard
        imageUrl={labrador}
        name="Labrador"
        description="Adopta a Mike, el labrador más cariñoso del pueblo"
        tags={{ text: 'inquieto', backgroundColor: 'blue' }}
      />
      <MyCard
        imageUrl={aleman}
        name="Pastor Alemán"
        description="Adopta a Kaiser, el mejor protector para tu hogar"
        tags={{ text: 'guardian', backgroundColor: 'green' }}
      />
      <MyCard
        imageUrl={samo}
        name="Samolledo"
        description="Adopta a Cahito, el samolledo que podrás usar como almohada"
        tags={{ text: 'peludo', backgroundColor: 'red' }}
      />
      <Footer />
    </div>
  );
}

export default App;

