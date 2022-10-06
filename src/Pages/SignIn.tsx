import { Link, useNavigate } from "react-router-dom";
import "../PagesStyle/sign_in-out.css"

export function SignIn() {
    const navigate=useNavigate()
    return (
        <div className="container">
            <form>
                <h1>Hello</h1>
                <div className="form_content">
                    <input placeholder="Enter your email" type="email" required />
                    <input placeholder="Enter your passwaord" type="password" required />
                    <p> No account? <Link to="/sign_out"> Create one!</Link></p>
                    <button onClick={()=>{
                           navigate("/chat")
                    }}>Sign In</button>
                </div>
            </form>
        </div>
    )
}