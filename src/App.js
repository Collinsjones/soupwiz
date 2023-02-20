import Header from './components/Header';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import SoupandSauces from './pages/SoupandSauces';
import Contact from './pages/Contact';
import Swallow from './pages/Swallow';
import PrivateRoutes from './components/PrivateRoutes';
import { DataProvider } from './context/DataContext';


function App() {

  return (
   
      <div className="App">
        <DataProvider>
          <Header/>
          <Routes>
            <Route exact path="/" element={ <Home/>}/>
            <Route path="/signIn" element={ <SignIn/>}/>
            <Route path="/register" element={ <Register/>}/>
            <Route element={ <PrivateRoutes/>}>
              <Route path="/Soup&Sauces" element={<SoupandSauces/>}/>
              <Route path="/Contact" element={<Contact/>} />
              <Route path="/swallow" element={<Swallow/>}/>
            </Route>
          </Routes>
          <Footer/>
        </DataProvider>
      </div>
    
  );
}

export default App;
