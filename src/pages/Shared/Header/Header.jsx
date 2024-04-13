import logo from "../../../assets/logo.png"
import moment from 'moment';


const Header = () => {
    return (
        <div className="text-center mt-12 mb-8 space-y-2">
            <img className="mx-auto" src={logo} alt="Dragon News logo"/>
            <p>Journalism Without Fear or Favour</p>
            <p className="text-xl">{moment().format("dddd, MMMM D , YYYY")}</p>
        </div>
    );
};

export default Header;