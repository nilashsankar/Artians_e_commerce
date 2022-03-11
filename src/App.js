// import logo from './logo.svg';
import './App.css';

// components
import Chat from './components/Chat';
import Feeds from './components/Feeds';
import Profile from './components/Profile';

function App() {
  return (
    <div className='h-screen w-screen feed__class   flex '>
      <Profile/>
      <Feeds/>
      <Chat/>
    </div>
  );
}

export default App;
