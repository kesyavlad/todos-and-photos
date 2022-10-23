import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Images from "./pages/Images";
import Error from "./pages/Error";
import TaskPage from "./pages/TaskPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />}>
          <Route path="todos" element={<Todos />} />
          <Route path="todos/:id" element={<TaskPage />} />
          <Route path="images" element={<Images />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
