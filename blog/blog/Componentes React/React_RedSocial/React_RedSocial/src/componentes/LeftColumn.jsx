import Accordion from "./Accordion";
import AlertBox from "./AlertBox";
import InterestsCard from "./Interests";
import ProfileCard from "./ProfileCard";
function LeftColumn(){
    return(
        <div className="w3-col m3">
            <ProfileCard/>
            <Accordion/>
            <InterestsCard/>
            <AlertBox/>
        </div>
    );
}

export default LeftColumn