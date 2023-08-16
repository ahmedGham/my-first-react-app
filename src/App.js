import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Favorites from "./pages/Favorites";
import Questions from "./pages/Questions";
import HireMe from "./pages/HireMe";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/books" element={<Books></Books>}></Route>
        <Route path="/favorites" element={<Favorites></Favorites>}></Route>
        <Route path="/questions" element={<Questions></Questions>}></Route>
        <Route path="/hire-me" element={<HireMe></HireMe>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
