import "./style.css"
import { Link } from "react-router-dom";

function Page2(){
    return (
        <div class="main">
        <h2 class="Signin">Signin to your PopX account</h2>
        <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="Enter email address"/>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter password"/>
        <Link to='/profile'><button className="btn">Login</button></Link>
        </div>

    </div>
    )
}

export default Page2;