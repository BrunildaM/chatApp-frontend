import { useNavigate } from "react-router-dom"
import { useStore } from "../State/store";
import "../PagesStyle/sign_in-out.css"

export function SignOut() {
    const navigate = useNavigate()
    const signUpUser = useStore(state => state.signUpUser)
    const signUpErrors = useStore(state => state.signUpErrors)
    return (
        <div className="container">
            <form onSubmit={(e) => {
                e.preventDefault()
                const formData = {
                    //@ts-ignore
                    fullname: e.target.name.value,
                    //@ts-ignore
                    avatar: e.target.avatar.value,
                    //@ts-ignore
                    email: e.target.email.value,
                    //@ts-ignore
                    password: e.target.password.value,
                    //@ts-ignore
                    publicAccount: e.target.publicAccount.checked

                }
                signUpUser(formData, navigate)
                //@ts-ignore
                console.log(e.target.publicAccount.checked)

            }}>
                <h1>Hello</h1>
                <div className="form_content">

                    <h4>Create Account</h4>

                    <label htmlFor="name"> Full name
                        <input placeholder="Enter your full name" type="text" name="name" id="name" required /></label>

                    <label htmlFor="avatar">Avatar
                        <input placeholder="Enter your image" type="text" name="avatar" id="surname" /></label>

                    <label htmlFor="email">Email
                        <input placeholder="Enter your email" type="email" name="email" id="email" required /></label>

                    <label htmlFor="password">Password
                        <input placeholder="Enter your passwaord" type="password" name="password" id="password" required /></label>
                    <label className="checkbox">Do you wannt to have a public account?<input type="checkbox" name="publicAccount" /></label>
                    {signUpErrors ? signUpErrors.map(message => <p className="error">*{message}*</p>) : null}
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}