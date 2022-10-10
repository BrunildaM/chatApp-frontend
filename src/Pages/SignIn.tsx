import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../State/store";
import "../PagesStyle/sign_in-out.css"

export function SignIn() {
    const signInUser = useStore(state => state.signInUser)
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.token) {
          fetch('http://localhost:4444/validate', {
            headers: {
              Authorization: localStorage.token
            }
          })
            .then(resp => resp.json())
            .then(data => {
              if (data.error) {
                alert(data.error)
              } else {
                signInUser(data,navigate)
              }
            })
        }
      }, [])
    return (
        <div className="container">
            <form onSubmit={(e) => {
                e.preventDefault()
                const formData = {
                    //@ts-ignore
                    email: e.target.email.value,
                    //@ts-ignore
                    password: e.target.password.value
                }
                signInUser(formData,navigate)
            }}
            >
                <h1>Hello</h1>
                <div className="form_content">
                    <input placeholder="Enter your email" type="email" name="email" required />
                    <input placeholder="Enter your passwaord" type="password" name="password"required />
                    <p> No account? <Link to="/sign_out"> Create one!</Link></p>
                    <button >Sign In</button>
                </div>
            </form>
        </div>
    )
}