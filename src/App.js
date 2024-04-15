import Page1 from "./Component/page1";
import Page2 from "./Component/page2";
import Page4 from "./Component/page4";
import Page3 from "./Component/page3";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element ={<Page1/> }/>
        <Route path='/login' element={<Page2/>}/>
        <Route path='/create' element={<Page3/>}/>
        <Route path='/profile' element={<Page4/>}/> 

      </Routes>
        </div>
  );
}

export default App;
