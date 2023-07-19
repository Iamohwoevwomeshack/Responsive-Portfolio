import './styles.css';

import {Routes, Route} from "react-router-dom";

//PATH
import Homepage from './Homepage';
import AboutMe from './AboutMe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
}

export default App;
