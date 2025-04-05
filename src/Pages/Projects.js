import { useNavigate } from 'react-router-dom';
import ProjImg from '../images/ProjImg.png';
import Proj2Img from '../images/Proj2Img.png';
import Proj3Img from '../images/Proj3Img.png';
import Proj4Vid from '../videos/Time Switch Ability Video.mp4';
import Proj5Vid from '../videos/UIManagement System Video.mp4';
import Proj6Vid from '../videos/Fight System Video.mp4';
import Proj7Vid from '../videos/Dialogue System Video.mp4';
import Proj8Vid from '../videos/InteractionSystem Video.mp4';
import Proj9Img from '../images/Proj9Img.png';
import Proj10Img from '../images/Proj10Img.png';
import Proj11Img from '../images/Proj11Img.png';
import Proj12Img from '../images/Proj12Img.png';
import FlutterImg from '../images/FlutterImg.png';
// //import Proj17Vid from '../videos/
import PlayButton from '../images/Play Button.png';
import PauseButton from '../images/PauseButton.png';
import OverlayNav from '../Components/OverlayNav';
import Card from '../Components/Card';
import { useEffect, useState } from 'react';

export default function Projects() {
    const [CSharpActive, setCSActive] = useState(true);
    const [ReactJSActive, setReactActive] = useState(true);
    const [FlutterActive, setFlutterActive] = useState(true);
    const navigate = useNavigate();
    // var SetTimer;
    useEffect(() => {
        window.addEventListener("popstate", e => {
            document.getElementById("Projects").style.textDecoration = "none";
            document.getElementById("Projects").style.bottom = "-1px";
            document.getElementById("Projects").style.animationName = "none";
            document.getElementById("Projects").style.cursor = "pointer";
            document.getElementById("MainNavBar").style.display = "none";
        });
        document.getElementById("MainNavBar").style.display = "flex";
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

                document.getElementById("Contact").style.textDecoration = "none";
                document.getElementById("Contact").style.bottom = "-1px";
                document.getElementById("Contact").style.animationName = "none";
                document.getElementById("Contact").style.cursor = "pointer";
            }

        window.addEventListener('resize', (e) => {
            if (window.innerWidth < 780) {
                document.getElementById("HamBurger").style.display = "block";
            }
            else
                if (window.innerWidth > 780) {
                    if (document.getElementById("ProjectsContainer")) {
                        document.getElementById("HamBurger").style.display = "none";
                    }
                }
        });

        document.getElementById("About").addEventListener('click', (e) => {
            navigate("/About");
        });

        document.getElementById("AboutOverlay").addEventListener('click', (e) => {
            navigate("/About");
        });

        document.getElementById("Contact").addEventListener('click', (e) => {
            navigate("/Contact");
        });

        document.getElementById("ContactOverlay").addEventListener('click', (e) => {
            navigate("/Contact");
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
            document.getElementById("Projects").style.textDecoration = "none";
            document.getElementById("Projects").style.bottom = "-1px";
            document.getElementById("Projects").style.animationName = "none";
            document.getElementById("Projects").style.cursor = "pointer";
            if (window.innerWidth < 780) {
                document.getElementById("HamBurger").style.display = "block";
            }
            if (document.getElementById("ProjectsContainer")) {
                document.getElementById("MainNavBar").style.display = "none";
                navigate("/");
            }
        });
    }, []);


    const FilterWords = (event) => {
        if (event.target.value === "All") {
            setReactActive(true);
            setCSActive(true);
            setFlutterActive(true);
        }
        else
            if (event.target.value === "ReactJS") {
                setReactActive(true);
                setCSActive(false);
                setFlutterActive(false);

            }
            else
                if (event.target.value === "C#") {
                    setFlutterActive(false);
                    setReactActive(false);
                    setCSActive(true);
                }
                else
                    if (event.target.value === "Flutter") {
                        setReactActive(false);
                        setCSActive(false);
                        setFlutterActive(true);
                    }
    }
    return (
        <>
            <div id="ProjectsContainer">
                <h1 id="MyProjects">Projects</h1>
                <select id="Filter" onChange={FilterWords}>
                    <option>All</option>
                    <option>ReactJS</option>
                    <option>C#</option>
                    <option>Flutter</option>
                </select>
                <div id="ProjCards">
                    {/* {CSharpActive && <Card
                        vid={""}
                        image={ProjImg}
                        hasVLS="True"
                        hasVC="False"
                        hasPlayBut="False"
                        PlayButSrc={"PlayButton"}
                        PlayButText=""
                        VLS="https://play.google.com/store/apps/details?id=com.DefaultCompany.IMMUNOCALYPSETheDeadlyTour"
                        VLSText="Google Play Store"
                        VC=""
                        VCText=""
                        ProjText="IMMUNOCALYPSE"
                        ProjInfo="C#"
                        hasImage="True"
                    />} */}


                    {CSharpActive && <Card
                        vid={""}
                        image={Proj2Img}
                        hasVLS="False"
                        hasVC="True"
                        hasPlayBut="False"
                        PlayButSrc={"PlayButton"}
                        PlayButText=""
                        VLS=""
                        VLSText=""
                        VC="https://github.com/PhilipNzube/Robot-Dodge"
                        VCText="View Code"
                        ProjText="ROBOT DODGE"
                        ProjInfo="C#"
                        hasImage="True"
                    />}


                    {CSharpActive && <Card
                        vid={""}
                        image={Proj3Img}
                        hasVLS="False"
                        hasVC="True"
                        hasPlayBut="False"
                        PlayButSrc={"PlayButton"}
                        PlayButText=""
                        VLS=""
                        VLSText=""
                        VC="https://github.com/PhilipNzube/Anim-Scene"
                        VCText="View Code"
                        ProjText="ANIM SCENE"
                        ProjInfo="C#"
                        hasImage="True"
                    />}




                    {CSharpActive && <Card
                        vid={Proj4Vid}
                        image={""}
                        hasVLS="False"
                        hasVC="False"
                        hasPlayBut="True"
                        PlayButSrc={PlayButton}
                        PlayButText="PLAY VIDEO"
                        VLS=""
                        VLSText=""
                        VC="https://github.com/PhilipNzube/TimeSwitchAbility"
                        VCText="View Code"
                        ProjText="TIME SWITCH SYSTEM"
                        ProjInfo="C#"
                        hasImage="False"
                    />}





                    {CSharpActive && <Card
                        vid={Proj5Vid}
                        image={""}
                        hasVLS="False"
                        hasVC="False"
                        hasPlayBut="True"
                        PlayButSrc={PlayButton}
                        PlayButText="PLAY VIDEO"
                        VLS=""
                        VLSText=""
                        VC="https://github.com/PhilipNzube/UIManagementSystem"
                        VCText="View Code"
                        ProjText="UI MANAGEMENT SYSTEM"
                        ProjInfo="C#"
                        hasImage="False"
                    />}




                    {CSharpActive && <Card
                        vid={Proj6Vid}
                        image={""}
                        hasVLS="False"
                        hasVC="False"
                        hasPlayBut="True"
                        PlayButSrc={PlayButton}
                        PlayButText="PLAY VIDEO"
                        VLS=""
                        VLSText=""
                        VC="https://github.com/PhilipNzube/FightingSystem"
                        VCText="View Code"
                        ProjText="FIGHT SYSTEM"
                        ProjInfo="C#"
                        hasImage="False"
                    />}




                    {CSharpActive && <Card
                        vid={Proj7Vid}
                        image={""}
                        hasVLS="False"
                        hasVC="False"
                        hasPlayBut="True"
                        PlayButSrc={PlayButton}
                        PlayButText="PLAY VIDEO"
                        VLS=""
                        VLSText=""
                        VC="https://github.com/PhilipNzube/DialogueSystem"
                        VCText="View Code"
                        ProjText="DIALOGUE SYSTEM"
                        ProjInfo="C#"
                        hasImage="False"
                    />}




                    {CSharpActive && <Card
                        vid={Proj8Vid}
                        image={""}
                        hasVLS="False"
                        hasVC="False"
                        hasPlayBut="True"
                        PlayButSrc={PlayButton}
                        PlayButText="PLAY VIDEO"
                        VLS=""
                        VLSText=""
                        VC="https://github.com/PhilipNzube/InteractionSystem"
                        VCText="View Code"
                        ProjText="INTERACTION SYSTEM"
                        ProjInfo="C#"
                        hasImage="False"
                    />}




                    {ReactJSActive && <Card
                        vid={""}
                        image={Proj9Img}
                        hasVLS="True"
                        hasVC="True"
                        hasPlayBut="False"
                        PlayButSrc={""}
                        PlayButText=""
                        VLS="https://gofer-web-app.netlify.app"
                        VLSText="View Live Site"
                        VC="https://github.com/PhilipNzube/Gofer-App"
                        VCText="View Code"
                        ProjText="GOFER"
                        ProjInfo="ReactJS"
                        hasImage="True"
                    />}



                    {ReactJSActive && <Card
                        vid={""}
                        image={Proj10Img}
                        hasVLS="True"
                        hasVC="True"
                        hasPlayBut="False"
                        PlayButSrc={""}
                        PlayButText=""
                        VLS="https://paylect-web-app.netlify.app"
                        VLSText="View Live Site"
                        VC="https://github.com/PhilipNzube/PayLect-App"
                        VCText="View Code"
                        ProjText="PAYLECT"
                        ProjInfo="ReactJS"
                        hasImage="True"
                    />}



                    {FlutterActive && <Card
                        vid={""}
                        image={Proj12Img}
                        hasVLS="True"
                        hasVC="False"
                        hasPlayBut="False"
                        PlayButSrc={""}
                        PlayButText=""
                        VLS="https://signal-web-app.netlify.app"
                        VLSText="View Live Site"
                        VC=""
                        VCText=""
                        ProjText="SIGNAL LAB"
                        ProjInfo="Flutter"
                        hasImage="True"
                    />}


                    {FlutterActive && <Card
                        vid={""}
                        image={FlutterImg}
                        hasVLS="False"
                        hasVC="True"
                        hasPlayBut="False"
                        PlayButSrc={""}
                        PlayButText=""
                        VLS=""
                        VLSText=""
                        VC="https://github.com/PhilipNzube/facial_attendance"
                        VCText="View Code"
                        ProjText="FACIAL ATTENDANCE"
                        ProjInfo="Flutter"
                        hasImage="True"
                    />}


                    {/* {ReactJSActive && <Card
                        vid={""}
                        image={Proj11Img}
                        hasVLS="True"
                        hasVC="True"
                        hasPlayBut="False"
                        PlayButSrc={""}
                        PlayButText=""
                        VLS="https://soccerkingdom-web-app.netlify.app"
                        VLSText="View Live Site"
                        VC="https://github.com/PhilipNzube/SoccerKingdom-App"
                        VCText="View Code"
                        ProjText="SOCCER KINGDOM"
                        ProjInfo="ReactJS"
                        hasImage="True"
                    />} */}

                </div>

            </div>
            <OverlayNav />
        </>
    )
}