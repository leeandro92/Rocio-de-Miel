import './App.css';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Header from './Header/Header';
import { BrowserRouter } from 'react-router-dom';
const App =()=>{
  return (
   <>
   <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/> 
   </BrowserRouter>
      
   </>
    
 
  )
}
export default App;
