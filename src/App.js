import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Nav from './Components/Nav';
import ShoppingPopup from "./Components/ShoppingPopup";
import { useSelector } from "react-redux";
import { selectShoppingPopup } from "./store/MenuSlicer";

function App() {
    const shoppingPopup = useSelector(selectShoppingPopup);

  return (
    <div className={'App'}>
        <Header />
        {shoppingPopup
            ?
            <ShoppingPopup />
            :
            <>
                <Nav />
                <Main />
            </>
        }
    </div>
  );
}

export default App;
