import "./style.css"
import { Link } from "react-router-dom";

function Page1(){
    return (
        <div class = "main">
        <h1 class="welcome">Welcome to PopX</h1>
        <p class="Lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <Link to='/create'><button class="create">Create Account</button></Link>
        <br/>
        <Link to='/login'><button class="Already">Already Registered? Login</button></Link>

    </div>
    )
}

export default Page1;