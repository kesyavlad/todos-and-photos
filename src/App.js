import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Todos from "./pages/Todos/Todos";
import Images from "./pages/Images/Images";
import Error from "./pages/Error/Error";
import TaskPage from "./pages/Task/taskPage";

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
