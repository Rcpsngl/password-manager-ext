import './App.css';
import {Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Pasword from './pages/paswords/Paswords';
import { SimpleGrid } from '@chakra-ui/react'
import Addpassword from './pages/addPassword/Addpassword';
import GeneratePassword from './pages/generatePassword/GeneratePassword';

function App() {
  return (
    <div className='main'>
      <SimpleGrid columns={1} spacing={5}>
        <Navbar />
       
        <Routes>
          <Route path='showpasword' element={<Pasword/>}/>
          <Route path='addpasword' element={<Addpassword/>}/>
          <Route path='generate' element={<GeneratePassword/>}/>
          
        </Routes>
        </SimpleGrid>
      </div>
  );
}

export default App;
