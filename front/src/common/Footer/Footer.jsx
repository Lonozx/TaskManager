import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="foot-tex">Всі права збережені за власником.</p>
      <p>1999-2023</p>
      <form action="" netlify className="footer__form">
        <input
          className="ticket footer__form--white"
          type="text"
          placeholder="Введіть електрону пошту"
        />
        <input
          className="ticket footer__form--white"
          type="text"
          placeholder="Введіть запит до розробника"
        />
        <button type="submit" className="footer__form-button">
          Відправити
        </button>
      </form>
    </footer>
  );
}
