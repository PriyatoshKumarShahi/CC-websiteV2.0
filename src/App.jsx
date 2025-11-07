import Offering from './components/Offering'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
   <>
   <Routes>
     <Route path="/" element={<HomePage />} />
     <Offering/>
   </Routes>
   </>
  )
}

export default App;
