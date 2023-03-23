import "./header.scss";
import logo from "../imgs/Logo.png";

export default function Header(props) {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="" /> <a href="#"></a>
        <p className="container__desc">Обери адмінчика</p>
      </div>
      <nav className="navigation">
        <a href="/">Домашня сторінка</a>
        <a href="/createTickets">Створити білет</a>
        <a href="/tickets">Білетики</a>
        <a href="/employees">Співробітники</a>
      </nav>
      {/* <h2 className="container__title">Header</h2> */}
      <img className="container__avatar" src={props.url} alt="avatar" />
    </header>
  );
}
