import FilterBar from "./components/BarraFiltro/FilterBar";
import ListPaper from "./components/ListaPaper/ListPaper";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <FilterBar/>
      <ListPaper/>
    </div>
  );
}

export default App;
