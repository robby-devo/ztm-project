// import "./categories.styles.scss";
// import CategoryItem from "./components/category-item";
// import Directory from "./components/directory/directory";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import SignInForm from "./routes/sign-in/sign-in";
import SignIn from "./routes/sign-in/sign-in";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignInForm />} />

      </Route>
    </Routes>
  );
};

export default App;
