function RightColumn() {
  return (
    <div className="w3-col m2">
      {/* Upcoming Events */}
      <div className="w3-card w3-round w3-white w3-center">
        <div className="w3-container">
          <p>Upcoming Events:</p>
          <img
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2947440/fff09a07dbcb20b4fbfcc1105dcef9fe9d06e1b3/capsule_616x353.jpg?t=1758558348"
            alt="Evento"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <p><strong>Estreno en Steam</strong></p>
          <p>Disponible este fin de semana</p>
          <p>
            <button className="w3-button w3-block w3-theme-l4">Ver más</button>
          </p>
        </div>
      </div>
      <br />

      {/* Friend Request */}
      <div className="w3-card w3-round w3-white w3-center">
        <div className="w3-container">
          <p>Friend Request</p>
          <img
            src="https://www.jammable.com/cdn-cgi/image/width=640,quality=75,format=webp/https://images.jammable.com/voices/ebdf3f4a-5f44-4e7b-a5eb-191d929a1ddc.png"
            alt="Avatar"
            style={{ width: "50%", borderRadius: "50%" }}
          />
          <br />
          <span>Henry from Skalitz</span>
          <div className="w3-row w3-opacity">
            <div className="w3-half">
              <button
                className="w3-button w3-block w3-green w3-section"
                title="Accept"
              >
                <i className="fa fa-check"></i>
              </button>
            </div>
            <div className="w3-half">
              <button
                className="w3-button w3-block w3-red w3-section"
                title="Decline"
              >
                <i className="fa fa-remove"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* ADS */}
      <div className="w3-card w3-round w3-white w3-padding-16 w3-center">
        <p><strong></strong></p>
        <img
          src="https://victoriacontreras.my.canva.site/guepardex/images/0574e2610b91cbfc1e1ad323085685f6.png"
          alt="Energizante"
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <p>¡Activa tu día con <strong>GuepardeX</strong>! 💥</p>
        <p></p>
      </div>
      <br />

      {/* Bug Icon */}
      <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
        <p><i className="fa fa-bug w3-xxlarge"></i></p>
      </div>
    </div>
  );
}

export default RightColumn;
