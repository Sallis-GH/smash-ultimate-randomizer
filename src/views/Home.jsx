import Button from '../components/Button';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='gap-2 flex flex-col items-center justify-center h-full'>
      <h1 className='text-5xl'>Super Smash Bros. Ultimate</h1>
      <h2 className='text-2xl'>Randomizer</h2>
      <div className='flex gap-4 mt-4'>
        <Link to={"/10v10"}>
        <Button title={'10v10'}/>
        </Link>
        <Link to={"/ironman"}>
        <Button title={'Ironman'}/>
        </Link>
        <Link to={"/5v5"}>
        <Button title={'5v5'}/>
        </Link>
      </div>
    </div>
  );
};

export default Home;
