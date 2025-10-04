
import { useState } from "react";
function Accordion (){
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionId) => {
        setOpenSection(prev => (prev === sectionId ? null : sectionId));
  };
  return (
    <>
    <div className="w3-card w3-round w3-white">
      <div className="w3-white">
        {/* My Groups */}
        <button
          onClick={() => toggleSection('groups')}
          className="w3-button w3-block w3-theme-l1 w3-left-align"
        >
          <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups
        </button>
        {openSection === 'groups' && (
          <div className="w3-container">
            <p>Ninguno de momento.</p>
          </div>
        )}

        {/* My Events */}
        <button
          onClick={() => toggleSection('events')}
          className="w3-button w3-block w3-theme-l1 w3-left-align"
        >
          <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events
        </button>
        {openSection === 'events' && (
          <div className="w3-container">
            <p>   ⠁⠀⠀⠀⠀⢤⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀
⠀⠀⠀⠀⠀⠘⣇⠀⠀⠀⠀⠀⠀⠀⡿⠀⠀
⠀⠀⠀⠀⠀⣰⠏⠀⠀⠀⠀⠀⠀⠀⣇⠀⠀
⠀⠀⠀⢀⣾⠁⠀⠀⠀⠀⠀⠀⢀⣀⣹⡄⠀
⠀⠀⣠⠟⠀⠉⢿⣿⡟⠋⠉⠉⠀⠀⠀⣷⠀
⠀⢰⠏⠀⠀⠀⢸⠏⠀⠀⠀⠀⠀⠀⠀⢸⡄
⠀⣾⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇
⠀⢿⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇
⠀⠸⡆⠑⠲⠤⠾⢧⡀⠀⠀⠀⠀⠀⠀⠀⣿
⠀⠀⢹⡆⠀⠀⠀⠀⢻⡙⠁⠁⠀⠀⠀⠀⣿
⠀⠀⠈⢳⡄⠀⠀⠀⠘⣇⠀⠀⠀⠀⠀⠀⣏
⠀⠀⠀⠀⢻⠤⠀⠀⠀⢻⠄⠀⠀⠀⠀⠀⡇ </p>
          </div>
        )}

        {/* My Photos */}
        <button
          onClick={() => toggleSection('photos')}
          className="w3-button w3-block w3-theme-l1 w3-left-align"
        >
          <i className="fa fa-users fa-fw w3-margin-right"></i> My Photos
        </button>
        {openSection === 'photos' && (
          <div className="w3-container">
            <div className="w3-row-padding"><br />
              {[
                'lights.jpg', 'nature.jpg', 'mountains.jpg',
                'forest.jpg', 'nature.jpg', 'snow.jpg'
              ].map((img, index) => (
                <div key={index} className="w3-half">
                  <img
                    src={`https://www.w3schools.com/w3images/${img}`}
                    style={{ width: '100%' }}
                    className="w3-margin-bottom"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    <br />
    </>
  );
}
export default Accordion;