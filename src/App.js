import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Users from "./routes/Users";

const App = () => {
  return (
    <section className="bg-gradient-to-tr from-neutral-900 to-black absolute inset-0  h-full w-full overflow-y-scroll">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </section>
  );
};

export default App;
