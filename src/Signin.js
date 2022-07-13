import { useState } from "react"
import { useHistory } from "react-router-dom"

const Signin = () => {
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [userid, setuserid] = useState("")
    const [gender, setgender] = useState("")

    let history = useHistory();


    const handleSubmit = (e) => {
        
        e.preventDefault();

        let newUser = { name, password, userid, gender }

        fetch("http://localhost:4001/user",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            })
            .then(() => {
                alert("User added")
                history.push("/")
            })
    }



    return (
        <div className="login-content">

            <section>
                <h1>Sign Up</h1>
                <form action="" onSubmit={handleSubmit}>

                    <label htmlFor="Name">Name </label><input type="text" placeholder="Email or phone"
                        value={name} onChange={(e) => { setname(e.target.value); }} />
                    <label htmlFor="Password">Password</label> <input type="password" placeholder="password"
                        value={password} onChange={(e) => { setpassword(e.target.value); }} />
                    <label htmlFor="user">UserID </label> <input type="text" placeholder="user ID"
                        value={userid} onChange={(e) => { setuserid(e.target.value); }} />
                    <label htmlFor="">Gender</label><input type="text" placeholder="enter your gender"
                        value={gender} onChange={(e) => { setgender(e.target.value); }} />

                    <button type="submit">Create New Account</button>


                </form>

            </section>

        </div>
    );
}

export default Signin;