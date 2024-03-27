import { useState } from 'react';
import Button from '../components/Button';
import characters from '../characters';

const Ironman = () => {
  const [characterList, setCharacterList] = useState(characters.sort(() => Math.random() - 0.5));
  const randomNumber = Math.floor(Math.random() * characterList.length);
  const [currentCharacter, setCurrentCharacter] = useState(
    characters[randomNumber]
  );
  const handleNextRoll = () => {
    const newList  = characterList.filter((character) => character.name !== currentCharacter.name)
    setCharacterList(newList);
    setCurrentCharacter(newList[0]);
  };
  const resetRandomizer = () => {
    const newList = characters.sort(() => Math.random() - 0.5)
    setCharacterList(newList);
    setCurrentCharacter(newList[0]);
  };
  return (
    <>
      <div className='gap-2 flex flex-col items-center justify-center h-full'>
        <h1>Ironman Challenge</h1>
        <img src={currentCharacter?.image} alt={currentCharacter?.name} />
        {characterList.length > 0 ? <h2>{currentCharacter?.name}</h2> : <h2>You Win!</h2>}
        <div className='flex gap-2'>
          <Button title={'Win'} onClick={handleNextRoll} />
          <Button title={'Reset'} onClick={resetRandomizer} />
        </div>
        <h2>Characters Left: {characterList.length}/{characters.length}</h2>
      </div>
    </>
  );
};

export default Ironman;
