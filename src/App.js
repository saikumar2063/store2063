import { Route, Routes } from "react-router-dom";

import CourseItem from "./components/CourseItem";

import CourseItemDetails from "./components/CourseItemDetails";

import NotFound from "./components/NotFound";

// Replace your code here
const App = () => (
  <div>
    <Routes>
      <Route exact path="/" element={<CourseItem />} />
      <Route exact path=":id" element={<CourseItemDetails />} />
      <Route element={<NotFound />} />
    </Routes>
  </div>
);
export default App;
