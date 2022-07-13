import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Login = () => {
    let history=useHistory
    let [name, setName] = useState("")
    let [password, setpassword] = useState("")

    const [user, setUsers] = useState(null);

    const handlelogin = (e) => {
        e.preventDefault();
        fetch("http://localhost:4001/user")
            .then((res) => { return res.json })
            .then((data) => { setUsers(data) })
            let [user] = user.filter ((user)=>(user.userName===name || user.userId===name ));
            
            if (user != undefined && user.password===password)
            {
                alert("login successful...!");
                history.push( "/addtask");
                
            }
            else if (user != undefined && password!=password)
            {
                alert("wrong password...!! enter valid password")
            }
    }

    return (
        <div className="create-content">
            <h1>Login</h1>
            <form onSubmit={handlelogin}>
                <label htmlFor="">Name </label><input type="text" placeholder="enter the name"
                    value={name} onChange={(e) => { setName(e.target.value) }} />

                <label>Password </label><input type="password" placeholder="enter password"
                    value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    {/* <input type="submit" value="Login"/> */}
               <Link to="/tasklist"> <button type="submit">Login</button></Link>
                <Link to="/signin" type="submit" id="new">
                    Create A New Account?
                </Link>
            </form>

        </div>

    );
}

export default Login;