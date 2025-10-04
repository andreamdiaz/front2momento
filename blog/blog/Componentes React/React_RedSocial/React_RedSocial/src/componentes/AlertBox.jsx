import { useState } from 'react';
import img6 from "../assets/img6.webp";

function AlertBox() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <>
      <div className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
        <span
          onClick={() => setVisible(false)}
          className="w3-button w3-theme-l3 w3-display-topright"
          title="Close"
          style={{ cursor: 'pointer' }}
        >
          <i className="fa fa-remove"></i>
        </span>
        <p><strong>Hey!</strong></p>
        <p>Hay gente mirando tu perfil. Descubre quiénes son.</p>
        <img
          src={img6}
          style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }}
          alt="Perfil observado"
        />
      </div>
      <br />
    </>
  );
}

export default AlertBox;
