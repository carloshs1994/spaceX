import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import RocketsContainer from './components/RocketsContainer';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import './App.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<RocketsContainer />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
