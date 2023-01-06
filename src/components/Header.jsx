import logo from "../assets/logo.gif";
import "./Header.css";

const Header = () => {

    return (
        <>        
            <header className="App-header" id="home">        
                <img src={logo} className="App-logo" alt="Samantha Dorrell logo" />        
            </header>
        </>
    )
}

export default Header;
