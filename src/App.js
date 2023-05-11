import {Route,Routes} from 'react-router-dom';
import Game from './pages/Game';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Game/>} ></Route>
    </Routes>
  );
}

export default App;
