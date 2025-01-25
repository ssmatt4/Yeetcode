// interface NavbarProps {
//     account: string
// }
import classes from "./Navbar.module.css";

export default function Navbar(){
    return (
        <nav className="navbar">
            <div className="container">
                <a href="/frontend/public" className="logo">
                    Hello
                    {/*add image later!*/}
                </a>
                <a href="/about" className="about">
                    About
                </a>
            </div>
        </nav>
    );
}
