
import { useContext, useReducer } from 'react';
import './App.css';
import BodyContainer from './components/BodyContainer/BodyContainer';
import Header from './components/Header/Header';
import { cartReducer, GlobalContext } from './ContextState/GlobalContext';

function App() {

  const {cart,images} = useContext(GlobalContext);
  const [forCart , setForCart] = useReducer(cartReducer , cart )

  const getItemHandler = (pro) => {
    setForCart({...pro,...images[0],})
  }
  const removeHandler = () =>{
    setForCart({type:"Remove"})
  }
  return (
   <div className="container">
     <Header value={forCart} remove={()=>removeHandler()}/>
     <BodyContainer getItem={getItemHandler} />
   </div>
  );
}

export default App;
