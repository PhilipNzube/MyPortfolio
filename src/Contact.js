import { useNavigate } from 'react-router-dom';
import CloseBut from './images/CloseBut.png';
import ProfilePic from './images/ProfilePic.jpg';
export default function Contact() {
    const navigate = useNavigate();
    setTimeout(() => {
        window.addEventListener("popstate", e => {
            document.getElementById("Contact").style.textDecoration = "none";
            document.getElementById("Contact").style.bottom = "-1px";
            document.getElementById("Contact").style.animationName = "none";
            document.getElementById("Contact").style.cursor = "pointer";
            document.getElementById("NavBar").style.display = "none";
        });
        document.getElementById("NavBar").style.display = "block";
        if (window.innerWidth > 780) {
            document.getElementById("HamBurger").style.display = "none";
        }
        if (window.innerWidth < 780) {
            document.body.style.overflowY = "auto";
            document.getElementById("HamBurger").style.display = "block";
        }
        else
            if (window.innerWidth > 780) {
                document.getElementById("About").style.textDecoration = "none";
                document.getElementById("About").style.bottom = "-1px";
                document.getElementById("About").style.animationName = "none";
                document.getElementById("About").style.cursor = "pointer";

                document.getElementById("Projects").style.textDecoration = "none";
                document.getElementById("Projects").style.bottom = "-1px";
                document.getElementById("Projects").style.animationName = "none";
                document.getElementById("Projects").style.cursor = "pointer";
                document.getElementById("Profile").style.display = "none";
            }
    }, 100);
    setTimeout(() => {
        window.addEventListener('resize', (e) => {
            if (window.innerWidth < 780) {
                document.getElementById("HamBurger").style.display = "block";
                document.getElementById("Profile").style.display = "block";
            }
            else
                if (window.innerWidth > 780) {
                    if (document.getElementById("ContactContainer")) {
                        document.getElementById("HamBurger").style.display = "none";
                        document.getElementById("Profile").style.display = "none";
                    }
                }
        });

        document.getElementById("About").addEventListener('click', (e) => {
            navigate("/About");
        });

        document.getElementById("AboutOverlay").addEventListener('click', (e) => {
            navigate("/About");
        });

        document.getElementById("Projects").addEventListener('click', (e) => {
            navigate("/Projects");
        });

        document.getElementById("ProjectsOverlay").addEventListener('click', (e) => {
            navigate("/Projects");
        });

        document.getElementById("HamBurger").addEventListener('click', (e) => {
            document.body.style.overflowY = "hidden";
            document.getElementById("Overlay").style.animationName = "OverlaySlideIn";
            document.getElementById("Overlay").style.display = "block";
            document.getElementById("HamBurger").style.display = "none";
        });


        document.getElementById("Close").addEventListener('click', (e) => {
            document.getElementById("Overlay").style.animationDuration = 0.3;
            document.getElementById("Overlay").style.animationName = "OverlaySlideOut";
            setTimeout(() => {
                document.getElementById("Overlay").style.animationDuration = 0.8;
                document.body.style.overflowY = "auto";
                if (window.innerWidth < 780) {
                    document.getElementById("HamBurger").style.display = "block";
                }
                document.getElementById("Overlay").style.display = "none";
            }, 300);
        });


        document.getElementById("Name").addEventListener('click', (e) => {
            document.getElementById("Contact").style.textDecoration = "none";
            document.getElementById("Contact").style.bottom = "-1px";
            document.getElementById("Contact").style.animationName = "none";
            document.getElementById("Contact").style.cursor = "pointer";
            if (window.innerWidth < 780) {
                document.getElementById("HamBurger").style.display = "block";
            }
            if (document.getElementById("ContactContainer")) {
                document.getElementById("NavBar").style.display = "none";
                navigate("/");
            }
        });
    }, 1000);

    return (
        <>
            <div id="ContactContainer">
                <h1 id="Contactme">Contact Me</h1>
                <form action="mailto:Onwubaliliphilip@gmail.com" method="post" enctype="text/plain">
                    <div id="ContactNameParent">
                        <p id="ContactNameText">Name</p>
                        <input name="Name" id="ContactName" type="text" required />
                    </div>
                    <div id="EmailNameParent">
                        <p id="EmailNameText">Email</p>
                        <input name="Email" id="EmailName" type="email" required />
                    </div>

                    <div id="SubjectNameParent">
                        <p id="SubjectNameText">Subject</p>
                        <input name="Subject" id="SubjectName" type="text" required />
                    </div>

                    <div id="MessageNameParent">
                        <p id="MessageNameText">Message</p>
                        <textarea name="Message" id="MessageName" required></textarea>
                    </div>
                    <input id="Submit" type="submit" value="Send" />
                </form>
                <img id="Profile" src={ProfilePic} alt="PROFILE PIC" />
            </div>
            <div id="Overlay">
                <img id="Close" src={CloseBut} alt="CLOSE" />
                <p id="OverlayNavBarCont">
                    <span id="AboutOverlay">ABOUT</span><br />
                    <span id="ProjectsOverlay">PROJECTS</span><br />
                    <span id="ContactOverlay">CONTACT</span>
                </p>
            </div>
        </>
    )
}