import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <div id="header">
      <h1>React Investment Calculator</h1>
      <img src={logo} alt="Image of a bag with money around" />
    </div>
  );
}
