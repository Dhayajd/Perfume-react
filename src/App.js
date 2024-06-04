import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";

function App(){
    return(
        <div>
              <Navbar></Navbar>
  <Searchbar></Searchbar>
  <Products></Products>
  <About></About>
  <Contact></Contact>
        </div>
    )

}
export default App