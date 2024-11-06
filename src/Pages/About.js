import { useNavigate } from 'react-router-dom';
import ReactJS from '../images/reactJs.png';
import Javascript from '../images/javascript.png';
import CSharp from '../images/csharp.png';
import OverlayNav from '../Components/OverlayNav';
import { useEffect } from 'react';
import SkillImage from '../Components/SkillImage';

export default function About() {
    const navigate = useNavigate();
    useEffect(() => {
        window.addEventListener("popstate", e => {
            document.getElementById("About").style.textDecoration = "none";
            document.getElementById("About").style.bottom = "-1px";
            document.getElementById("About").style.animationName = "none";
            document.getElementById("About").style.cursor = "pointer";
            document.getElementById("MainNavBar").style.display = "none";
        });
        document.getElementById("MainNavBar").style.display = "flex";
        if (window.innerWidth > 780) {
            document.getElementById("HamBurger").style.display = "none";
        }
        if (window.innerWidth < 780) {
            document.body.style.overflowY = "auto";
            if (window.innerWidth < 780) {
                document.getElementById("HamBurger").style.display = "block";
            }
        }
        else
            if (window.innerWidth > 780) {
                document.getElementById("Contact").style.textDecoration = "none";
                document.getElementById("Contact").style.bottom = "-1px";
                document.getElementById("Contact").style.animationName = "none";
                document.getElementById("Contact").style.cursor = "pointer";

                document.getElementById("Projects").style.textDecoration = "none";
                document.getElementById("Projects").style.bottom = "-1px";
                document.getElementById("Projects").style.animationName = "none";
                document.getElementById("Projects").style.cursor = "pointer";
            }

        document.getElementById("Contact").addEventListener('click', (e) => {
            navigate("/Contact");
        });

        document.getElementById("ContactOverlay").addEventListener('click', (e) => {
            navigate("/Contact");
        });

        document.getElementById("ContactMeLink").addEventListener('click', (e) => {
            navigate("/Contact");
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
            document.getElementById("Overlay").style.display = "flex";
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
            document.getElementById("About").style.textDecoration = "none";
            document.getElementById("About").style.bottom = "-1px";
            document.getElementById("About").style.animationName = "none";
            document.getElementById("About").style.cursor = "pointer";
            if (window.innerWidth < 780) {
                document.getElementById("HamBurger").style.display = "block";
            }
            if (document.getElementById("AboutContainer")) {
                document.getElementById("MainNavBar").style.display = "none";
                navigate("/");
            }
        });
    }, []);

    return (
        <>
            <div id="AboutContainer">
                <h1 id="Aboutme">About Me</h1>
                <p id="Aboutbody">Hello, my name is Philip Nzube, and I am currently pursuing my undergraduate degree in Computer Science from Fedral University Lokoja in Nigeria. As a frontend web developer and an independent game developer, I specialize in creating Web Apps using ReactJS. And I create Android Games using C#.<br /><br />
                    My passion lies in the fields of Web Development and Game Development, and I am constantly seeking new opportunities to explore and deepen my understanding of these areas.<br />
                    I am currently available for collaboration regarding projects related to Web Development or Game Development. Feel free to <span id="ContactMeLink">contact me</span>.<br /><br />
                    Apart from my academic pursuits, I am an avid learner and spend my free time learning more about tech.<br /><br />
                    <span id="Skills">Skills</span>
                </p>
                <div id="SkillIcons">
                    <SkillImage
                        Image={ReactJS}
                        SkillText="ReactJS"
                    />

                    <SkillImage
                        Image={Javascript}
                        SkillText="JavaScript"
                    />


                    <SkillImage
                        Image={CSharp}
                        SkillText="C#"
                    />
                </div>
            </div>

            <OverlayNav />
        </>
    )
}