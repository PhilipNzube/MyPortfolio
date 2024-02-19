import { useNavigate } from 'react-router-dom';
import CloseBut from './images/CloseBut.png';
import ProfilePic from './images/ProfilePic.jpg';
import ProjImg from './images/ProjImg.png';
import Proj2Img from './images/Proj2Img.png';
import Proj3Img from './images/Proj3Img.png';
import Proj4Vid from './videos/Time Switch Ability Video.mp4';
import Proj5Vid from './videos/UIManagement System Video.mp4';
import Proj6Vid from './videos/Fight System Video.mp4';
import Proj7Vid from './videos/Dialogue System Video.mp4';
import Proj8Vid from './videos/InteractionSystem Video.mp4';
import Proj9Img from './images/Proj9Img.png';
import Proj10Img from './images/Proj10Img.png';
import Proj11Img from './images/Proj11Img.png';
//import Proj17Vid from './videos/
import PlayButton from './images/Play Button.png';
import PauseButton from './images/PauseButton.png';
export default function Projects() {
    var PlayVar = "True";
    var PlayVar2 = "True";
    var PlayVar3 = "True";
    var PlayVar4 = "True";
    var PlayVar5 = "True";
    const navigate = useNavigate();
    // var SetTimer;
    setTimeout(() => {
        window.addEventListener("popstate", e => {
            document.getElementById("Projects").style.textDecoration = "none";
            document.getElementById("Projects").style.bottom = "-1px";
            document.getElementById("Projects").style.animationName = "none";
            document.getElementById("Projects").style.cursor = "pointer";
            document.getElementById("NavBar").style.display = "none";
        });
        document.getElementById("NavBar").style.display = "block";
        if (window.innerWidth > 780) {
            document.getElementById("HamBurger").style.display = "none";
        }
        

        document.getElementById("ProjImg").addEventListener('click', (e) => {
            document.getElementById("ProjOverlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("ProjOverlay").style.display = "block";
        });


        document.getElementById("ProjOverlay").addEventListener('click', (e) => {
            document.getElementById("ProjOverlay").style.animationDuration = 0.3;
            document.getElementById("ProjOverlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("ProjOverlay").style.animationDuration = 1;
                document.getElementById("ProjOverlay").style.display = "none";
            }, 300);
        });




        document.getElementById("Proj2Img").addEventListener('click', (e) => {
            document.getElementById("Proj2Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj2Overlay").style.display = "block";
        });


        document.getElementById("Proj2Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj2Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj2Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj2Overlay").style.animationDuration = 1;
                document.getElementById("Proj2Overlay").style.display = "none";
            }, 300);
        });







        document.getElementById("Proj3Img").addEventListener('click', (e) => {
            document.getElementById("Proj3Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj3Overlay").style.display = "block";
        });


        document.getElementById("Proj3Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj3Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj3Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj3Overlay").style.animationDuration = 1;
                document.getElementById("Proj3Overlay").style.display = "none";
            }, 300);
        });




        document.getElementById("ProjVid").addEventListener('click', (e) => {
            document.getElementById("Proj4Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj4Overlay").style.display = "block";
        });


        document.getElementById("Proj4Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj4Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj4Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj4Overlay").style.animationDuration = 1;
                document.getElementById("Proj4Overlay").style.display = "none";
            }, 300);
        });


        document.getElementById("ProjVid2").addEventListener('click', (e) => {
            document.getElementById("Proj5Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj5Overlay").style.display = "block";
        });


        document.getElementById("Proj5Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj5Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj5Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj5Overlay").style.animationDuration = 1;
                document.getElementById("Proj5Overlay").style.display = "none";
            }, 300);
        });


        document.getElementById("ProjVid3").addEventListener('click', (e) => {
            document.getElementById("Proj6Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj6Overlay").style.display = "block";
        });


        document.getElementById("Proj6Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj6Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj6Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj6Overlay").style.animationDuration = 1;
                document.getElementById("Proj6Overlay").style.display = "none";
            }, 300);
        });


        document.getElementById("ProjVid4").addEventListener('click', (e) => {
            document.getElementById("Proj7Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj7Overlay").style.display = "block";
        });


        document.getElementById("Proj7Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj7Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj7Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj7Overlay").style.animationDuration = 1;
                document.getElementById("Proj7Overlay").style.display = "none";
            }, 300);
        });


        document.getElementById("ProjVid5").addEventListener('click', (e) => {
            document.getElementById("Proj8Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj8Overlay").style.display = "block";
        });


        document.getElementById("Proj8Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj8Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj8Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj8Overlay").style.animationDuration = 1;
                document.getElementById("Proj8Overlay").style.display = "none";
            }, 300);
        });




        document.getElementById("Proj9Img").addEventListener('click', (e) => {
            document.getElementById("Proj9Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj9Overlay").style.display = "block";
        });


        document.getElementById("Proj9Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj9Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj9Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj9Overlay").style.animationDuration = 1;
                document.getElementById("Proj9Overlay").style.display = "none";
            }, 300);
        });






        document.getElementById("Proj10Img").addEventListener('click', (e) => {
            document.getElementById("Proj10Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj10Overlay").style.display = "block";
        });


        document.getElementById("Proj10Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj10Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj10Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj10Overlay").style.animationDuration = 1;
                document.getElementById("Proj10Overlay").style.display = "none";
            }, 300);
        });



        document.getElementById("Proj11Img").addEventListener('click', (e) => {
            document.getElementById("Proj11Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj11Overlay").style.display = "block";
        });


        document.getElementById("Proj11Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj11Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj11Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj11Overlay").style.animationDuration = 1;
                document.getElementById("Proj11Overlay").style.display = "none";
            }, 300);
        });

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
                    if (document.getElementById("ProjectsContainer")) {
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

        document.getElementById("Contact").addEventListener('click', (e) => {
            navigate("/Contact");
        });

        document.getElementById("ContactOverlay").addEventListener('click', (e) => {
            navigate("/Contact");
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
            document.getElementById("Projects").style.textDecoration = "none";
            document.getElementById("Projects").style.bottom = "-1px";
            document.getElementById("Projects").style.animationName = "none";
            document.getElementById("Projects").style.cursor = "pointer";
            if (window.innerWidth < 780) {
                document.getElementById("HamBurger").style.display = "block";
            }
            if (document.getElementById("ProjectsContainer")) {
                document.getElementById("NavBar").style.display = "none";
                navigate("/");
            }
        });
    }, 1000);


    const FilterWords = (event) => {
        if (event.target.value === "All") {
            document.getElementById("Proj").style.display = "block";
            document.getElementById("Proj2").style.display = "block";
            document.getElementById("Proj3").style.display = "block";
            document.getElementById("Proj4").style.display = "block";
            document.getElementById("Proj5").style.display = "block";
            document.getElementById("Proj6").style.display = "block";
            document.getElementById("Proj7").style.display = "block";
            document.getElementById("Proj8").style.display = "block";
            document.getElementById("Proj9").style.display = "block";
            document.getElementById("Proj10").style.display = "block";
            document.getElementById("Proj11").style.display = "block";
        }
        else
            if (event.target.value === "ReactJS") {
                document.getElementById("Proj").style.display = "none";
                document.getElementById("Proj2").style.display = "none";
                document.getElementById("Proj3").style.display = "none";
                document.getElementById("Proj4").style.display = "none";
                document.getElementById("Proj5").style.display = "none";
                document.getElementById("Proj6").style.display = "none";
                document.getElementById("Proj7").style.display = "none";
                document.getElementById("Proj8").style.display = "none";

                document.getElementById("Proj9").style.display = "block";
                document.getElementById("Proj10").style.display = "block";
                document.getElementById("Proj11").style.display = "block";

            }
            else
                if (event.target.value === "C#") {
                    document.getElementById("Proj9").style.display = "none";
                    document.getElementById("Proj10").style.display = "none";
                    document.getElementById("Proj11").style.display = "none";

                    document.getElementById("Proj").style.display = "block";
                    document.getElementById("Proj2").style.display = "block";
                    document.getElementById("Proj3").style.display = "block";
                    document.getElementById("Proj4").style.display = "block";
                    document.getElementById("Proj5").style.display = "block";
                    document.getElementById("Proj6").style.display = "block";
                    document.getElementById("Proj7").style.display = "block";
                    document.getElementById("Proj8").style.display = "block";
                }
    }

    const Play = () => {
        if (PlayVar == "True") {
            document.getElementById("ProjVid").play();
            document.getElementById("PlayText").innerHTML = "PAUSE VIDEO";
            document.getElementById("PlayButton").src = "/static/media/PauseButton.42129923311106b8d457.png";
            PlayVar = "False";
        }
        else
            if (PlayVar == "False") {
                document.getElementById("ProjVid").pause();
                document.getElementById("PlayText").innerHTML = "PLAY VIDEO";
                document.getElementById("PlayButton").src = "/static/media/Play%20Button.e1520f1658df7ec681df.png";
                PlayVar = "True";
            }
    }




    const Play2 = () => {
        if (PlayVar2 == "True") {
            document.getElementById("ProjVid2").play();
            document.getElementById("PlayText2").innerHTML = "PAUSE VIDEO";
            document.getElementById("PlayButton2").src = "/static/media/PauseButton.42129923311106b8d457.png";
            PlayVar2 = "False";
        }
        else
            if (PlayVar2 == "False") {
                document.getElementById("ProjVid2").pause();
                document.getElementById("PlayText2").innerHTML = "PLAY VIDEO";
                document.getElementById("PlayButton2").src = "/static/media/Play%20Button.e1520f1658df7ec681df.png";
                PlayVar2 = "True";
            }
    }




    const Play3 = () => {
        if (PlayVar3 == "True") {
            document.getElementById("ProjVid3").play();
            document.getElementById("PlayText3").innerHTML = "PAUSE VIDEO";
            document.getElementById("PlayButton3").src = "/static/media/PauseButton.42129923311106b8d457.png";
            PlayVar3 = "False";
        }
        else
            if (PlayVar3 == "False") {
                document.getElementById("ProjVid3").pause();
                document.getElementById("PlayText3").innerHTML = "PLAY VIDEO";
                document.getElementById("PlayButton3").src = "/static/media/Play%20Button.e1520f1658df7ec681df.png";
                PlayVar3 = "True";
            }
    }



    const Play4 = () => {
        if (PlayVar4 == "True") {
            document.getElementById("ProjVid4").play();
            document.getElementById("PlayText4").innerHTML = "PAUSE VIDEO";
            document.getElementById("PlayButton4").src = "/static/media/PauseButton.42129923311106b8d457.png";
            PlayVar4 = "False";
        }
        else
            if (PlayVar4 == "False") {
                document.getElementById("ProjVid4").pause();
                document.getElementById("PlayText4").innerHTML = "PLAY VIDEO";
                document.getElementById("PlayButton4").src = "/static/media/Play%20Button.e1520f1658df7ec681df.png";
                PlayVar4 = "True";
            }
    }




    const Play5 = () => {
        if (PlayVar5 == "True") {
            document.getElementById("ProjVid5").play();
            document.getElementById("PlayText5").innerHTML = "PAUSE VIDEO";
            document.getElementById("PlayButton5").src = "/static/media/PauseButton.42129923311106b8d457.png";
            PlayVar5 = "False";
        }
        else
            if (PlayVar5 == "False") {
                document.getElementById("ProjVid5").pause();
                document.getElementById("PlayText5").innerHTML = "PLAY VIDEO";
                document.getElementById("PlayButton5").src = "/static/media/Play%20Button.e1520f1658df7ec681df.png";
                PlayVar5 = "True";
            }

        setInterval(() => {
            if (!document.getElementById("ProjVid").play()) {
                document.getElementById("ProjVid").play();
                document.getElementById("PlayText").innerHTML = "PAUSE VIDEO";
                document.getElementById("PlayButton").src = "/static/media/PauseButton.42129923311106b8d457.png";
                PlayVar5 = "False";
            }
            else
                if (!document.getElementById("ProjVid").pause()) {
                    document.getElementById("ProjVid").pause();
                    document.getElementById("PlayText").innerHTML = "PLAY VIDEO";
                    document.getElementById("PlayButton").src = "/static/media/Play%20Button.e1520f1658df7ec681df.png";
                    PlayVar5 = "True";
                }


            if (!document.getElementById("ProjVid2").play()) {
                document.getElementById("ProjVid2").play();
                document.getElementById("PlayText2").innerHTML = "PAUSE VIDEO";
                document.getElementById("PlayButton2").src = "/static/media/PauseButton.42129923311106b8d457.png";
                PlayVar5 = "False";
            }
            else
                if (!document.getElementById("ProjVid2").pause()) {
                    document.getElementById("ProjVid2").pause();
                    document.getElementById("PlayText2").innerHTML = "PLAY VIDEO";
                    document.getElementById("PlayButton2").src = "/static/media/Play%20Button.e1520f1658df7ec681df.png";
                    PlayVar5 = "True";
                }



            if (!document.getElementById("ProjVid3").play()) {
                document.getElementById("ProjVid3").play();
                document.getElementById("PlayText3").innerHTML = "PAUSE VIDEO";
                document.getElementById("PlayButton3").src = "/static/media/PauseButton.42129923311106b8d457.png";
                PlayVar5 = "False";
            }
            else
                if (!document.getElementById("ProjVid3").pause()) {
                    document.getElementById("ProjVid3").pause();
                    document.getElementById("PlayText3").innerHTML = "PLAY VIDEO";
                    document.getElementById("PlayButton3").src = "/static/media/Play%20Button.e1520f1658df7ec681df.png";
                    PlayVar5 = "True";
                }


            if (!document.getElementById("ProjVid4").play()) {
                document.getElementById("ProjVid4").play();
                document.getElementById("PlayText4").innerHTML = "PAUSE VIDEO";
                document.getElementById("PlayButton4").src = "/static/media/PauseButton.42129923311106b8d457.png";
                PlayVar5 = "False";
            }
            else
                if (!document.getElementById("ProjVid4").pause()) {
                    document.getElementById("ProjVid4").pause();
                    document.getElementById("PlayText4").innerHTML = "PLAY VIDEO";
                    document.getElementById("PlayButton4").src = "/static/media/Play%20Button.e1520f1658df7ec681df.png";
                    PlayVar5 = "True";
                }



            if (!document.getElementById("ProjVid5").play()) {
                document.getElementById("ProjVid5").play();
                document.getElementById("PlayText5").innerHTML = "PAUSE VIDEO";
                document.getElementById("PlayButton5").src = "/static/media/PauseButton.42129923311106b8d457.png";
                PlayVar5 = "False";
            }
            else
                if (!document.getElementById("ProjVid5").pause()) {
                    document.getElementById("ProjVid5").pause();
                    document.getElementById("PlayText5").innerHTML = "PLAY VIDEO";
                    document.getElementById("PlayButton5").src = "/static/media/Play%20Button.e1520f1658df7ec681df.png";
                    PlayVar5 = "True";
                }
        }, 100)
    }
    return (
        <>
            <div id="ProjectsContainer">
                <h1 id="MyProjects">Projects</h1>
                <select id="Filter" onChange={FilterWords}>
                    <option>All</option>
                    <option>ReactJS</option>
                    <option>C#</option>
                </select>
                <div id="ProjCards">
                    <div className="Proj" id="Proj">
                        <div className="ProjOverlay" id="ProjOverlay">
                            <a className="ProjLink" href="https://play.google.com/store/apps/details?id=com.DefaultCompany.IMMUNOCALYPSETheDeadlyTour"> <div className="VLS">Google Play Store</div></a><br />
                            {/* <a className="ProjLink" href='www.google.com'>  <div className="VC">View Code</div></a> */}
                        </div>
                        <img className="ProjImg" id="ProjImg" src={ProjImg} alt="ProjImg" />
                        <div className="ProjText">IMMUNOCALYPSE</div>
                        <div className="ProjInfo">C#</div>
                    </div>



                    <div className="Proj" id="Proj2">
                        <div className="ProjOverlay" id="Proj2Overlay">
                            <a className="ProjLink" href="https://github.com/PhilipNzube/Robot-Dodge">  <div className="VC">View Code</div></a>
                        </div>
                        <img className="ProjImg" id="Proj2Img" src={Proj2Img} alt="ProjImg" />
                        <div className="ProjText">ROBOT DODGE</div>
                        <div className="ProjInfo">C#</div>
                    </div>






                    <div className="Proj" id="Proj3">
                        <div className="ProjOverlay" id="Proj3Overlay">
                            <a className="ProjLink" href="https://github.com/PhilipNzube/Anim-Scene">  <div className="VC">View Code</div></a>
                        </div>
                        <img className="ProjImg" id="Proj3Img" src={Proj3Img} alt="ProjImg" />
                        <div className="ProjText">ANIM SCENE</div>
                        <div className="ProjInfo">C#</div>
                    </div>




                    <div className="Proj" id="Proj4">
                        <div className="ProjOverlay" id="Proj4Overlay">
                            <a className="ProjLink" href="https://github.com/PhilipNzube/TimeSwitchAbility">  <div className="VC">View Code</div></a><br />
                            <div id="PlayDiv" className="PlayAndPause" onClick={Play}><img className="PlayButtonClass" id="PlayButton" src={PlayButton} alt="Play" /><p id="PlayText">PLAY VIDEO</p></div>
                        </div>
                        <video className="ProjVid" id="ProjVid" src={Proj4Vid}> loop</video>
                        <div className="ProjText">TIME SWITCH SYSTEM</div>
                        <div className="ProjInfo">C#</div>
                    </div>


                    <div className="Proj" id="Proj5">
                        <div className="ProjOverlay" id="Proj5Overlay">
                            <a className="ProjLink" href="https://github.com/PhilipNzube/UIManagementSystem">  <div className="VC">View Code</div></a><br />
                            <div id="PlayDiv" className="PlayAndPause" onClick={Play2}><img className="PlayButtonClass" id="PlayButton2" src={PlayButton} alt="Play" /><p id="PlayText2">PLAY VIDEO</p></div>
                        </div>
                        <video className="ProjVid" id="ProjVid2" src={Proj5Vid} loop></video>
                        <div className="ProjText">UI MANAGEMENT SYSTEM</div>
                        <div className="ProjInfo">C#</div>
                    </div>




                    <div className="Proj" id="Proj6">
                        <div className="ProjOverlay" id="Proj6Overlay">
                            <a className="ProjLink" href="https://github.com/PhilipNzube/FightingSystem">  <div className="VC">View Code</div></a><br />
                            <div id="PlayDiv" className="PlayAndPause" onClick={Play3}><img className="PlayButtonClass" id="PlayButton3" src={PlayButton} alt="Play" /><p id="PlayText3">PLAY VIDEO</p></div>
                        </div>
                        <video className="ProjVid" id="ProjVid3" src={Proj6Vid} loop></video>
                        <div className="ProjText">FIGHT SYSTEM</div>
                        <div className="ProjInfo">C#</div>
                    </div>





                    <div className="Proj" id="Proj7">
                        <div className="ProjOverlay" id="Proj7Overlay">
                            <a className="ProjLink" href="https://github.com/PhilipNzube/DialogueSystem">  <div className="VC">View Code</div></a><br />
                            <div id="PlayDiv" className="PlayAndPause" onClick={Play4}><img className="PlayButtonClass" id="PlayButton4" src={PlayButton} alt="Play" /><p id="PlayText4">PLAY VIDEO</p></div>
                        </div>
                        <video className="ProjVid" id="ProjVid4" src={Proj7Vid} loop></video>
                        <div className="ProjText">DIALOGUE SYSTEM</div>
                        <div className="ProjInfo">C#</div>
                    </div>





                    <div className="Proj" id="Proj8">
                        <div className="ProjOverlay" id="Proj8Overlay">
                            <a className="ProjLink" href="https://github.com/PhilipNzube/InteractionSystem">  <div className="VC">View Code</div></a><br />
                            <div id="PlayDiv" className="PlayAndPause" onClick={Play5}><img className="PlayButtonClass" id="PlayButton5" src={PlayButton} alt="Play" /><p id="PlayText5">PLAY VIDEO</p></div>
                        </div>
                        <video className="ProjVid" id="ProjVid5" src={Proj8Vid} loop></video>
                        <div className="ProjText">INTERACTION SYSTEM</div>
                        <div className="ProjInfo">C#</div>
                    </div>


                    <div className="Proj" id="Proj9">
                        <div className="ProjOverlay" id="Proj9Overlay">
                            <a className="ProjLink" href="https://gofer-web-app.netlify.app"> <div className="VLS">View Live Site</div></a><br />
                            <a className="ProjLink" href="https://github.com/PhilipNzube/Gofer-App">  <div className="VC">View Code</div></a>
                        </div>
                        <img className="ProjImg" id="Proj9Img" src={Proj9Img} alt="ProjImg" />
                        <div className="ProjText">GOFER</div>
                        <div className="ProjInfo">ReactJS</div>
                    </div>




                    <div className="Proj" id="Proj10">
                        <div className="ProjOverlay" id="Proj10Overlay">
                            <a className="ProjLink" href="https://paylect-web-app.netlify.app"> <div className="VLS">View Live Site</div></a><br />
                            <a className="ProjLink" href="https://github.com/PhilipNzube/PayLect-App">  <div className="VC">View Code</div></a>
                        </div>
                        <img className="ProjImg" id="Proj10Img" src={Proj10Img} alt="ProjImg" />
                        <div className="ProjText">PAYLECT</div>
                        <div className="ProjInfo">ReactJS</div>
                    </div>




                    <div className="Proj" id="Proj11">
                        <div className="ProjOverlay" id="Proj11Overlay">
                            <a className="ProjLink" href="https://soccerkingdom-web-app.netlify.app"> <div className="VLS">View Live Site</div></a><br />
                            <a className="ProjLink" href="https://github.com/PhilipNzube/SoccerKingdom-App">  <div className="VC">View Code</div></a>
                        </div>
                        <img className="ProjImg" id="Proj11Img" src={Proj11Img} alt="ProjImg" />
                        <div className="ProjText">SOCCER KINGDOM</div>
                        <div className="ProjInfo">ReactJS</div>
                    </div>
                    
                </div>
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