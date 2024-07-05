import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CommercePage from "./Pages/CommercePage/CommercePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="landing-page">
      <div className="app-header">
        <div>Commerce Application</div>
        <div>Logout</div>
      </div>
      <div className="app-body">
        <BrowserRouter basename="commerce">
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/cart" element={<CommercePage />}></Route>
            </Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <div className="app-footer">This is a Test Application</div>
    </div>
  );
}

export default App;
