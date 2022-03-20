import "./styles.css";
import Logo from "/headercomponents/Logo.js";
import NavBar from "/headercomponents/NavBar.js";

export default function App() {
  return (
    <div className="Header">
      <div className="image">
        <Logo />
      </div>
      <NavBar />
    </div>
  );
}
