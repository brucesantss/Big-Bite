import { Navbar } from "./components/NavBar";
import { PrateleiraDonuts } from "./components/PrateleiraDonuts";
import { ProdutoDestaque } from "./components/ProdutoDestaque";


const App = () => {

  return(
    <main className="min-h-screen w-full overflow-x-hidden">
    <Navbar />
    <ProdutoDestaque/>
    <PrateleiraDonuts/>
  </main>
  )
  
};

export default App;
