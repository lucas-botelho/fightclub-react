// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";

export default function App() {
  return (
    <>
      <Header />
      <main >
        <Outlet />
      </main >
    </>
  );
}
