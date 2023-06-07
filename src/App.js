import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layouts/layout";

function App() {
  return (
    
    <BrowserRouter>
    
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index path="/" element={<Home />}></Route>

        </Route>

      </Routes>
    
    </BrowserRouter>

  );
}

export default App;
