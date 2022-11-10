import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Hola Tienda, este es mi ItemListContainer..."}/>
    </>
  );
}

export default App;
