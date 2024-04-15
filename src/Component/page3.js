import "./style.css"
import { Link } from "react-router-dom";

function Page3(){
    return (
        <div class="main">
        <h2 class = "ha">Create your PopX account</h2>
        <div class="all">
            <label for="name">Full Name</label>
            <input type="text" id = "name" placeholder="Marry Doe"/>
            <label for="phone">Phone Number</label>
            <input type="text" id = "phone" placeholder="Marry Doe"/>
            <label for="email">Email address</label>
            <input type="text" id = "eamil" placeholder="Marry Doe"/>
            <label for="password">Password</label>
            <input type="text" id = "password" placeholder="Marry Doe"/>
            <label for="company">Company name</label>
            <input type="text" id = "comapny" placeholder="Marry Doe"/>
        </div>
        <p class="asking">Are you an Agency?*</p>
        <div class = "radio">
            <input type= "radio"  id="yes" checked/>
            <label for="yes">Yes</label>
            <input type= "radio"  id="yes" />
            <label for="no">No</label>
        </div>
        <Link to='/profile'><button class="create">Create Account</button></Link>


    </div>
    )
}

export default Page3;