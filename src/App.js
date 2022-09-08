//import link to add some global navigaiton to our App.
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Link to="/"> <h1>Bookkeeper!</h1> </Link>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
    
  );
}
