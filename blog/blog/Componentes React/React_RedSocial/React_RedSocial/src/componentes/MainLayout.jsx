import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';

function MainLayout(){
    return(
        <div className="w3-container w3-content" style={{maxWidth:'1400px',marginTop:'80px'}}>    
            <div className="w3-row">
                <LeftColumn/>
                <MiddleColumn/>
                <RightColumn/>   
            </div>
            <br/>
        </div>
    );
}

export default MainLayout;

