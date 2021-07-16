import "./topbar.scss"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">zkabyken.</a>
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/zhalyn-kabyken-b4b726159/">
                            <LinkedInIcon className="icon"/>
                        </a>
                        <span>Zhalyn Kabyken</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className="icon"/>
                        <span>zhalyn2001@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
