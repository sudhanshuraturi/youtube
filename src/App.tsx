import { Outlet, useLocation } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="flex h-screen w-screen flex-col overflow-hidden">
        <Navbar />
        <div className="flex flex-1">
          {location.pathname === "/" && (
            <aside className="shrink-0">
              <Sidebar />
            </aside>
          )}
          <main className="flex-1 overflow-auto">
            <div className="h-full p-5">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
