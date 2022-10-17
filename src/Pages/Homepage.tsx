import { Link } from "react-router-dom";
import "../PagesStyle/homepage.css"

export function Homepage () {
    return (
        <div className="home">
           <Link to="/sign_in">
            <img className="logo" src="https://shonenstudio.com/design/wp-content/uploads/1999/05/smiley-tealbg.jpg" alt="logo" width={100} />
            </Link>
            <h3>App name</h3>
            <h4>Sharing more then text...</h4>
        </div>
    )
}