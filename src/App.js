import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage } from "./containers/LoginPage";
import { SignUpPage } from "./containers/SignUpPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
