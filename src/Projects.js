import { useNavigate } from 'react-router-dom';
import CloseBut from './images/CloseBut.png';
import ProfilePic from './images/ProfilePic.jpg';
import Proj1Img from './images/Proj1Img.png';
import Proj2Img from './images/Proj2Img.png';
import Proj3Img from './images/Proj3Img.png';
import Proj4Img from './images/Proj4Img.png';
import Proj5Img from './images/Proj5Img.png';
import Proj6Img from './images/Proj6Img.png';
import Proj7Img from './images/Proj7Img.png';
import Proj8Img from './images/Proj8Img.png';
import Proj9Img from './images/Proj9Img.png';
import Proj10Img from './images/Proj10Img.png';
import Proj11Img from './images/Proj11Img.png';
import Proj12Vid from './videos/Time Switch Ability Video.mp4';
import Proj13Vid from './videos/UIManagement System Video.mp4';
import Proj14Vid from './videos/Fight System Video.mp4';
import Proj15Vid from './videos/Dialogue System Video.mp4';
import Proj16Vid from './videos/InteractionSystem Video.mp4';
import Proj17Img from './images/Proj17Img.png';
import Proj18Img from './images/Proj18Img.png';
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
        document.getElementById("Proj1Img").addEventListener('click', (e) => {
            document.getElementById("Proj1Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj1Overlay").style.display = "block";
        });


        document.getElementById("Proj1Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj1Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj1Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj1Overlay").style.animationDuration = 1;
                document.getElementById("Proj1Overlay").style.display = "none";
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


        document.getElementById("Proj4Img").addEventListener('click', (e) => {
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


        document.getElementById("Proj5Img").addEventListener('click', (e) => {
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


        document.getElementById("Proj6Img").addEventListener('click', (e) => {
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


        document.getElementById("Proj7Img").addEventListener('click', (e) => {
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




        document.getElementById("Proj8Img").addEventListener('click', (e) => {
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




        document.getElementById("ProjVid").addEventListener('click', (e) => {
            document.getElementById("Proj12Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj12Overlay").style.display = "block";
        });


        document.getElementById("Proj12Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj12Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj12Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj12Overlay").style.animationDuration = 1;
                document.getElementById("Proj12Overlay").style.display = "none";
            }, 300);
        });


        document.getElementById("ProjVid2").addEventListener('click', (e) => {
            document.getElementById("Proj13Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj13Overlay").style.display = "block";
        });


        document.getElementById("Proj13Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj13Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj13Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj13Overlay").style.animationDuration = 1;
                document.getElementById("Proj13Overlay").style.display = "none";
            }, 300);
        });


        document.getElementById("ProjVid3").addEventListener('click', (e) => {
            document.getElementById("Proj14Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj14Overlay").style.display = "block";
        });


        document.getElementById("Proj14Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj14Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj14Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj14Overlay").style.animationDuration = 1;
                document.getElementById("Proj14Overlay").style.display = "none";
            }, 300);
        });


        document.getElementById("ProjVid4").addEventListener('click', (e) => {
            document.getElementById("Proj15Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj15Overlay").style.display = "block";
        });


        document.getElementById("Proj15Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj15Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj15Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj15Overlay").style.animationDuration = 1;
                document.getElementById("Proj15Overlay").style.display = "none";
            }, 300);
        });


        document.getElementById("ProjVid5").addEventListener('click', (e) => {
            document.getElementById("Proj16Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj16Overlay").style.display = "block";
        });


        document.getElementById("Proj16Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj16Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj16Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj16Overlay").style.animationDuration = 1;
                document.getElementById("Proj16Overlay").style.display = "none";
            }, 300);
        });




        document.getElementById("Proj17Img").addEventListener('click', (e) => {
            document.getElementById("Proj17Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj17Overlay").style.display = "block";
        });


        document.getElementById("Proj17Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj17Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj17Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj17Overlay").style.animationDuration = 1;
                document.getElementById("Proj17Overlay").style.display = "none";
            }, 300);
        });






        document.getElementById("Proj18Img").addEventListener('click', (e) => {
            document.getElementById("Proj18Overlay").style.animationName = "ProjOverlayAnim";
            document.getElementById("Proj18Overlay").style.display = "block";
        });


        document.getElementById("Proj18Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj18Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj18Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj18Overlay").style.animationDuration = 1;
                document.getElementById("Proj18Overlay").style.display = "none";
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
            document.getElementById("Proj1").style.display = "block";
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
            document.getElementById("Proj12").style.display = "block";
            document.getElementById("Proj13").style.display = "block";
            document.getElementById("Proj14").style.display = "block";
            document.getElementById("Proj15").style.display = "block";
            document.getElementById("Proj16").style.display = "block";
            document.getElementById("Proj17").style.display = "block";
            document.getElementById("Proj18").style.display = "block";
        }
        else
            if (event.target.value === "VanillaJS") {
                document.getElementById("Proj1").style.display = "block";
                document.getElementById("Proj2").style.display = "block";
                document.getElementById("Proj3").style.display = "none";
                document.getElementById("Proj4").style.display = "none";
                document.getElementById("Proj5").style.display = "none";
                document.getElementById("Proj6").style.display = "none";
                document.getElementById("Proj7").style.display = "none";
                document.getElementById("Proj8").style.display = "none";
                document.getElementById("Proj9").style.display = "none";
                document.getElementById("Proj10").style.display = "none";
                document.getElementById("Proj11").style.display = "none";
                document.getElementById("Proj12").style.display = "none";
                document.getElementById("Proj13").style.display = "none";
                document.getElementById("Proj14").style.display = "none";
                document.getElementById("Proj15").style.display = "none";
                document.getElementById("Proj16").style.display = "none";
                document.getElementById("Proj17").style.display = "none";
                document.getElementById("Proj18").style.display = "none";
            }
            else
                if (event.target.value === "ReactJS") {
                    document.getElementById("Proj1").style.display = "none";
                    document.getElementById("Proj2").style.display = "none";
                    document.getElementById("Proj6").style.display = "none";
                    document.getElementById("Proj10").style.display = "none";
                    document.getElementById("Proj11").style.display = "none";
                    document.getElementById("Proj12").style.display = "none";
                    document.getElementById("Proj13").style.display = "none";
                    document.getElementById("Proj14").style.display = "none";
                    document.getElementById("Proj15").style.display = "none";
                    document.getElementById("Proj16").style.display = "none";

                    document.getElementById("Proj3").style.display = "block";
                    document.getElementById("Proj4").style.display = "block";
                    document.getElementById("Proj5").style.display = "block";
                    document.getElementById("Proj7").style.display = "block";
                    document.getElementById("Proj8").style.display = "block";
                    document.getElementById("Proj9").style.display = "block";
                    document.getElementById("Proj17").style.display = "block";
                    document.getElementById("Proj18").style.display = "block";

                }
                else
                    if (event.target.value === "C#") {
                        document.getElementById("Proj1").style.display = "none";
                        document.getElementById("Proj2").style.display = "none";
                        document.getElementById("Proj3").style.display = "none";
                        document.getElementById("Proj4").style.display = "none";
                        document.getElementById("Proj5").style.display = "none";
                        document.getElementById("Proj7").style.display = "none";
                        document.getElementById("Proj8").style.display = "none";
                        document.getElementById("Proj9").style.display = "none";
                        document.getElementById("Proj17").style.display = "none";
                        document.getElementById("Proj18").style.display = "none";

                        document.getElementById("Proj6").style.display = "block";
                        document.getElementById("Proj10").style.display = "block";
                        document.getElementById("Proj11").style.display = "block";
                        document.getElementById("Proj12").style.display = "block";
                        document.getElementById("Proj13").style.display = "block";
                        document.getElementById("Proj14").style.display = "block";
                        document.getElementById("Proj15").style.display = "block";
                        document.getElementById("Proj16").style.display = "block";
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
    }
    return (
        <>
            <div id="ProjectsContainer">
                <h1 id="MyProjects">Projects</h1>
                <select id="Filter" onChange={FilterWords}>
                    <option>All</option>
                    <option>VanillaJS</option>
                    <option>ReactJS</option>
                    <option>C#</option>
                </select>
                <div id="ProjCards">
                    <div className="Proj" id="Proj1">
                        <div id="Proj1Overlay">
                            <a id="ProjLink" href="https://philcrypto.netlify.app"><div id="VLS2">View Live Site</div></a><br />
                            <a id="ProjLink" href="https://github.com/PhilipNzube/MyRepo"> <div id="VC">View Code</div></a>
                        </div>
                        <img id="Proj1Img" src={Proj1Img} alt="" />
                        <div id="ProjText">BIT-WEB</div>
                        <div id="ProjInfo">VanillaJS</div>
                    </div>

                    <div className="Proj" id="Proj2">
                        <div id="Proj2Overlay">
                            <a id="ProjLink" href="https://newzurisite.netlify.app"> <div id="VLS">View Live Site</div></a><br />
                            <a id="ProjLink" href="https://github.com/PhilipNzube/NewSite">  <div id="VC">View Code</div></a>
                        </div>
                        <img id="Proj2Img" src={Proj2Img} alt="" />
                        <div id="ProjText">GLORY</div>
                        <div id="ProjInfo">VanillaJS</div>
                    </div>



                    <div className="Proj" id="Proj3">
                        <div id="Proj3Overlay">
                            <a id="ProjLink" href="https://immunowrld-web-app.netlify.app"> <div id="VLS">View Live Site</div></a><br />
                            <a id="ProjLink" href="https://github.com/PhilipNzube/IMMUNOWRLD-PWA">  <div id="VC">View Code</div></a>
                        </div>
                        <img id="Proj3Img" src={Proj3Img} alt="" />
                        <div id="ProjText">IMMUNOWRLD</div>
                        <div id="ProjInfo">ReactJS</div>
                    </div>


                    <div className="Proj" id="Proj4">
                        <div id="Proj4Overlay">
                            <a id="ProjLink" href="https://phil-music-app.netlify.app"> <div id="VLS">View Live Site</div></a><br />
                            <a id="ProjLink" href="https://github.com/PhilipNzube/Music-App">  <div id="VC">View Code</div></a>
                        </div>
                        <img id="Proj4Img" src={Proj4Img} alt="" />
                        <div id="ProjText">MY MUSIC APP</div>
                        <div id="ProjInfo">ReactJS</div>
                    </div>


                    <div className="Proj" id="Proj5">
                        <div id="Proj5Overlay">
                            <a id="ProjLink" href="https://recipe-webapp-pwa.netlify.app"> <div id="VLS">View Live Site</div></a><br />
                            <a id="ProjLink" href="https://github.com/PhilipNzube/Recipie-App-PWA">  <div id="VC">View Code</div></a>
                        </div>
                        <img id="Proj5Img" src={Proj5Img} alt="" />
                        <div id="ProjText">FOOD RECIPE APP</div>
                        <div id="ProjInfo">ReactJS</div>
                    </div>

                    <div className="Proj" id="Proj6">
                        <div id="Proj6Overlay">
                            <a id="ProjLink" href="https://play.google.com/store/apps/details?id=com.DefaultCompany.IMMUNOCALYPSETheDeadlyTour"> <div id="VLS">Google Play Store</div></a><br />
                            {/* <a id="ProjLink" href='www.google.com'>  <div id="VC">View Code</div></a> */}
                        </div>
                        <img id="Proj6Img" src={Proj6Img} alt="" />
                        <div id="ProjText">IMMUNOCALYPSE</div>
                        <div id="ProjInfo">C#</div>
                    </div>


                    <div className="Proj" id="Proj7">
                        <div id="Proj7Overlay">
                            <a id="ProjLink" href="https://my-calc-web-app.netlify.app"> <div id="VLS">View Live Site</div></a><br />
                            <a id="ProjLink" href="https://github.com/PhilipNzube/Calculator-App">  <div id="VC">View Code</div></a>
                        </div>
                        <img id="Proj7Img" src={Proj7Img} alt="" />
                        <div id="ProjText">CALCULATOR APP</div>
                        <div id="ProjInfo">ReactJS</div>
                    </div>





                    <div className="Proj" id="Proj8">
                        <div id="Proj8Overlay">
                            <a id="ProjLink" href="https://my-quiz-web-app.netlify.app"> <div id="VLS">View Live Site</div></a><br />
                            <a id="ProjLink" href="https://github.com/PhilipNzube/Quiz-App">  <div id="VC">View Code</div></a>
                        </div>
                        <img id="Proj8Img" src={Proj8Img} alt="" />
                        <div id="ProjText">QUIZ APP</div>
                        <div id="ProjInfo">ReactJS</div>
                    </div>



                    <div className="Proj" id="Proj9">
                        <div id="Proj9Overlay">
                            <a id="ProjLink" href="https://my-tictactoe-web-app.netlify.app"> <div id="VLS">View Live Site</div></a><br />
                            <a id="ProjLink" href="https://github.com/PhilipNzube/TicTacToe-App">  <div id="VC">View Code</div></a>
                        </div>
                        <img id="Proj9Img" src={Proj9Img} alt="" />
                        <div id="ProjText">TICTACTOE APP</div>
                        <div id="ProjInfo">ReactJS</div>
                    </div>



                    <div className="Proj" id="Proj10">
                        <div id="Proj10Overlay">
                            <a id="ProjLink" href="https://github.com/PhilipNzube/Robot-Dodge">  <div id="VC">View Code</div></a>
                        </div>
                        <img id="Proj10Img" src={Proj10Img} alt="" />
                        <div id="ProjText">ROBOT DODGE</div>
                        <div id="ProjInfo">C#</div>
                    </div>






                    <div className="Proj" id="Proj11">
                        <div id="Proj11Overlay">
                            <a id="ProjLink" href="https://github.com/PhilipNzube/Anim-Scene">  <div id="VC">View Code</div></a>
                        </div>
                        <img id="Proj11Img" src={Proj11Img} alt="" />
                        <div id="ProjText">ANIM SCENE</div>
                        <div id="ProjInfo">C#</div>
                    </div>




                    <div className="Proj" id="Proj12">
                        <div id="Proj12Overlay">
                            <a id="ProjLink" href="https://github.com/PhilipNzube/TimeSwitchAbility">  <div id="VC">View Code</div></a><br />
                            <div id="PlayDiv" className="PlayAndPause" onClick={Play}><img className="PlayButtonClass" id="PlayButton" src={PlayButton} alt="Play" /><p id="PlayText">PLAY VIDEO</p></div>
                        </div>
                        <video id="ProjVid" src={Proj12Vid}> loop</video>
                        <div id="ProjText">TIME SWITCH SYSTEM</div>
                        <div id="ProjInfo">C#</div>
                    </div>


                    <div className="Proj" id="Proj13">
                        <div id="Proj13Overlay">
                            <a id="ProjLink" href="https://github.com/PhilipNzube/UIManagementSystem">  <div id="VC">View Code</div></a><br />
                            <div id="PlayDiv" className="PlayAndPause" onClick={Play2}><img className="PlayButtonClass" id="PlayButton2" src={PlayButton} alt="Play" /><p id="PlayText2">PLAY VIDEO</p></div>
                        </div>
                        <video id="ProjVid2" src={Proj13Vid} loop></video>
                        <div id="ProjText">UI MANAGEMENT SYSTEM</div>
                        <div id="ProjInfo">C#</div>
                    </div>




                    <div className="Proj" id="Proj14">
                        <div id="Proj14Overlay">
                            <a id="ProjLink" href="https://github.com/PhilipNzube/FightingSystem">  <div id="VC">View Code</div></a><br />
                            <div id="PlayDiv" className="PlayAndPause" onClick={Play3}><img className="PlayButtonClass" id="PlayButton3" src={PlayButton} alt="Play" /><p id="PlayText3">PLAY VIDEO</p></div>
                        </div>
                        <video id="ProjVid3" src={Proj14Vid} loop></video>
                        <div id="ProjText">FIGHT SYSTEM</div>
                        <div id="ProjInfo">C#</div>
                    </div>





                    <div className="Proj" id="Proj15">
                        <div id="Proj15Overlay">
                            <a id="ProjLink" href="https://github.com/PhilipNzube/DialogueSystem">  <div id="VC">View Code</div></a><br />
                            <div id="PlayDiv" className="PlayAndPause" onClick={Play4}><img className="PlayButtonClass" id="PlayButton4" src={PlayButton} alt="Play" /><p id="PlayText4">PLAY VIDEO</p></div>
                        </div>
                        <video id="ProjVid4" src={Proj15Vid} loop></video>
                        <div id="ProjText">DIALOGUE SYSTEM</div>
                        <div id="ProjInfo">C#</div>
                    </div>





                    <div className="Proj" id="Proj16">
                        <div id="Proj16Overlay">
                            <a id="ProjLink" href="https://github.com/PhilipNzube/InteractionSystem">  <div id="VC">View Code</div></a><br />
                            <div id="PlayDiv" className="PlayAndPause" onClick={Play5}><img className="PlayButtonClass" id="PlayButton5" src={PlayButton} alt="Play" /><p id="PlayText5">PLAY VIDEO</p></div>
                        </div>
                        <video id="ProjVid5" src={Proj16Vid} loop></video>
                        <div id="ProjText">INTERACTION SYSTEM</div>
                        <div id="ProjInfo">C#</div>
                    </div>


                    <div className="Proj" id="Proj17">
                        <div id="Proj17Overlay">
                            <a id="ProjLink" href="https://gofer-web-app.netlify.app"> <div id="VLS">View Live Site</div></a><br />
                            <a id="ProjLink" href="https://github.com/PhilipNzube/Gofer-App">  <div id="VC">View Code</div></a>
                        </div>
                        <img id="Proj17Img" src={Proj17Img} alt="" />
                        <div id="ProjText">GOFER</div>
                        <div id="ProjInfo">ReactJS</div>
                    </div>




                    <div className="Proj" id="Proj18">
                        <div id="Proj18Overlay">
                            <a id="ProjLink" href="https://paylect-web-app.netlify.app"> <div id="VLS">View Live Site</div></a><br />
                            <a id="ProjLink" href="https://github.com/PhilipNzube/PayLect-App">  <div id="VC">View Code</div></a>
                        </div>
                        <img id="Proj18Img" src={Proj18Img} alt="" />
                        <div id="ProjText">PAYLECT</div>
                        <div id="ProjInfo">ReactJS</div>
                    </div>


                    {/* <div id="Proj">
                        <div id="ProjOverlay">
                            <a id="ProjLink" href="https://github.com/PhilipNzube/InventorySystem">  <div id="VC">View Code</div></a><br />
                            <div id="PlayDiv" className="PlayAndPause" onClick={Play}><img id="PlayButton" src={PlayButton} alt="Play" /><p id="PlayText">PLAY VIDEO</p></div>
                        </div>
                        <video id="ProjVid" src={Proj17Vid}> loop</video>
                        <div id="ProjText">Time Switch Ability</div>
                        <div id="ProjInfo">C#</div>
                    </div> */}
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