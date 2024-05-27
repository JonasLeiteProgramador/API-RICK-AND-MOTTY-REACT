import { useState } from 'react';
import './App.css';
import './components/Button/button.css';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  const [personagens, setPersonagens] = useState([]);
  const [personagens2, setPersonagens2] = useState([]);
  async function handleCharacter() {
    try {
      const randomCharacter1 = Math.floor(Math.random() * 826) + 1;
      const randomCharacter2 = Math.floor(Math.random() * 826) + 1;
      const randomCharacter3 = Math.floor(Math.random() * 826) + 1;

      const randomCharacter4 = Math.floor(Math.random() * 826) + 1;
      const randomCharacter5 = Math.floor(Math.random() * 826) + 1;
      const randomCharacter6 = Math.floor(Math.random() * 826) + 1;

      const dados1 = await fetch(`https://rickandmortyapi.com/api/character/${randomCharacter1}`);
      const dados2 = await fetch(`https://rickandmortyapi.com/api/character/${randomCharacter2}`);
      const dados3 = await fetch(`https://rickandmortyapi.com/api/character/${randomCharacter3}`);
      const dados4 = await fetch(`https://rickandmortyapi.com/api/character/${randomCharacter4}`);
      const dados5 = await fetch(`https://rickandmortyapi.com/api/character/${randomCharacter5}`);
      const dados6 = await fetch(`https://rickandmortyapi.com/api/character/${randomCharacter6}`);


      const personagem1 = await dados1.json();
      const personagem2 = await dados2.json();
      const personagem3 = await dados3.json();
      const personagem4 = await dados4.json();
      const personagem5 = await dados5.json();
      const personagem6 = await dados6.json();

      setPersonagens([personagem1, personagem2, personagem3]);
      setPersonagens2([personagem4,personagem5,personagem6])
    } catch (error) {
      console.log('Ocorreu algo ao efetuar a requisição', error);
    }
  }
  function deleted() {
    setPersonagens([]);
    setPersonagens2([])
  }

  return (
    <>
      <div className='container'>
        <h1>Testando API DO RICK AND MORTY</h1>
        <Button 
        handleFunction={handleCharacter} 
        title="Clique aqui para efetuar a requisição para a API do Rick and Morty" 
        color="blue" />
        <Button handleFunction={deleted} title="Apagar Personagens" color="red"
         />

        <div className="cards-container">
          {personagens.map(personagem => (
            <Card
              key={personagem.id}
              id={personagem.id}
              name={personagem.name}
              status={personagem.status}
              species={personagem.species}
              gender={personagem.gender}
              image={personagem.image}
            />
          ))}
        </div>


        <div className="cards-container">
          {personagens2.map(personagem => (
            <Card
              key={personagem.id}
              id={personagem.id}
              name={personagem.name}
              status={personagem.status}
              species={personagem.species}
              gender={personagem.gender}
              image={personagem.image}
            />
          ))}
        </div>


      </div>

      
    </>
  );
}

export default App;
