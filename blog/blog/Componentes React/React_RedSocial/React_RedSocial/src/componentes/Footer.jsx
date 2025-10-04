function Footer() {
  return (
    <>
      <footer className="w3-container w3-theme-d3 w3-padding-24 w3-center">
        <h5 className="w3-text-white">Conectando fans del anime y gamers retro 🎮</h5>
        <div className="w3-margin-top">
          <a href="#" className="w3-button w3-theme-l2 w3-margin-right">
            <i className="fa fa-facebook-official"></i> Facebook
          </a>
          <a href="#" className="w3-button w3-theme-l2 w3-margin-right">
            <i className="fa fa-instagram"></i> Instagram
          </a>
          <a href="#" className="w3-button w3-theme-l2">
            <i className="fa fa-twitter"></i> Twitter
          </a>
        </div>
      </footer>

      <footer className="w3-container w3-theme-d5 w3-padding-16 w3-center">
        <p>
          Hecho con ❤️ por <strong>Yeison</strong> | Powered by{" "}
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            w3.css
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
