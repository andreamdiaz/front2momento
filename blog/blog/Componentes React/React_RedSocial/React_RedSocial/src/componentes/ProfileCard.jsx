import iconoPerfil from "../assets/iconPerfil.webp";

function ProfileCard() {
  return (
    <>
      <div className="w3-card w3-round w3-white">
        <div className="w3-container">
          <h4 className="w3-center">CyberOtaku</h4>
          <p className="w3-center">
            <img
              src={iconoPerfil}
              className="w3-circle"
              style={{ height: "106px", width: "106px", objectFit: "cover" }}
              alt="Avatar"
            />
          </p>
          <hr />
          <p>
            <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>
            Fan de Kimetsu, programador nocturno
          </p>
          <p>
            <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>
            Tokyo, Japón
          </p>
          <p>
            <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>
            11 de septiembre, 2001
          </p>
        </div>
      </div>
      <br />
    </>
  );
}

export default ProfileCard;
