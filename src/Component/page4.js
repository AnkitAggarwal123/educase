import "./style.css"
import logo from "./Ellipse 114.png"


function Page4(){
    return (
        <div class="main">
        <div class = "setting"><p class = "as">Account Settings</p></div>
        <div class="info">
            <div class="photo">
                <img src= {logo} alt="image"/>
            </div>
            <div>
                <h4 class = "marry">Marry Doe</h4>
                <p class = "mail">Marry@Gmail.Com</p>
            </div>
        </div>
        <div class="about">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</div>


    </div>
    )
}

export default Page4;