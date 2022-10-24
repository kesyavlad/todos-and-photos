import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Images from "./pages/Images";
import Error from "./pages/Error";
import TaskPage from "./pages/TaskPage";
import { SCREENS } from "./components/Route/RoutePath";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />}>
          <Route path={SCREENS.PAGES.TODOS} element={<Todos />} />
          <Route path={SCREENS.PAGES.TASK_PAGE} element={<TaskPage />} />
          <Route path={SCREENS.PAGES.IMAGES} element={<Images />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
