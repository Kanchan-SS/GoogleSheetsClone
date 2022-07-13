import { Link } from "react-router-dom";
const Landing = () => {
    return (
        
            <div className="landing">
                <Link to="/login"><button>Login</button></Link>
                <h1>don't have an account?</h1>
                <Link to="/home"><button >Create New Account</button></Link>
            </div>
        
    );
}

export default Landing;