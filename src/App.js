import AddOn from "./components/AddOn";
import Finish from "./components/Finish";
import Layout from "./components/layout";
import Personal from "./components/Personal";
import Select from "./components/Select";
import Thank from "./components/Thank";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
    <div className=" flex flex-col md:flex-row">
      <Layout />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Personal />}>
            <Route path="select" element={<Select />} />
            <Route path="addon" element={<AddOn />} />
            <Route path="finish" element={<Finish />} />
            <Route path="thank" element={<Thank />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    // <div className=" flex flex-col md:flex-row">
    //     <Layout />
    //     {/* <Personal /> */}
    //     {/* <Select /> */}
    //     <AddOn />
    //     {/* <Finish /> */}
    //     {/* <Thank /> */}
    // </div>
  );
}

export default App;

