import "../PagesStyle/sign_in-out.css"

export function SignOut() {
    return (
        <div className="container">
            <form>
                <h1>Hello</h1>
                <div className="form_content">

                    <h4>Create Account</h4>

                    <label htmlFor="name">Name
                        <input placeholder="Enter your name" type="text" name="name" id="name" required /></label>

                    <label htmlFor="surname">Surname
                        <input placeholder="Enter your surname" type="text" name="surname" id="surname" required /></label>

                    <label htmlFor="email">Email
                        <input placeholder="Enter your email" type="email" name="email" id="email" required /></label>

                    <label htmlFor="password">Password
                        <input placeholder="Enter your passwaord" type="password" name="password" id="password" required /></label>

                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}