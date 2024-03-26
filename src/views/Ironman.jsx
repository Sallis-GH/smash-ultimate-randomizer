import { useEffect, useState } from 'react';
import Button from '../components/Button';

const tempCharacters = [
  {
    name: 'Mario',
    image:
      'https://pm1.aminoapps.com/6915/cbe3f944fca315ae7da44af16d787c601d16f67ar1-660-660v2_uhq.jpg',
  },
  {
    name: 'Link',
    image:
      'https://static.wikia.nocookie.net/cpucs-tournament/images/7/75/LinkIcon.png/revision/latest?cb=20190209011432',
  },
  {
    name: 'Samus',
    image:
      'https://ih1.redbubble.net/image.4091914591.1297/st,small,845x845-pad,1000x1000,f8f8f8.jpg',
  },
];

const Ironman = () => {
  const [characters, setCharacters] = useState(tempCharacters);
  const [characterList, setCharacterList] = useState(tempCharacters);
  const randomNumber = Math.floor(Math.random() * characterList.length);
  const [currentCharacter, setCurrentCharacter] = useState(
    characters[randomNumber]
  );

  useEffect(() => {
    setCharacters(tempCharacters);
    setCharacterList(characters.sort(() => Math.random() - 0.5));
  }, [characters]);

  const handleNextRoll = () => {
    const newList  = characterList.filter((character) => character.name !== currentCharacter.name)
    setCharacterList(newList);
    setCurrentCharacter(newList[0]);
  };
  const resetRandomizer = () => {
    const newList = characters.sort(() => Math.random() - 0.5)
    console.table(newList)
    setCharacterList(newList);
    setCurrentCharacter(newList[0]);
  };

  return (
    <>
      <div className='gap-2 flex flex-col items-center justify-center h-full'>
        <h1>Ironman Challenge</h1>
        {characterList.length > 0 ? <h2>{currentCharacter?.name}</h2> : <h2>You Win!</h2>}
        <div className='flex gap-2'>
          <Button title={'Win'} onClick={handleNextRoll} />
          <Button title={'Reset'} onClick={resetRandomizer} />
        </div>
      </div>
    </>
  );
};

export default Ironman;
