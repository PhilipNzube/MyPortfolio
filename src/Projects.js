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
export default function Projects() {
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
            // SetTimer = 0;
        });


        document.getElementById("Proj1Overlay").addEventListener('click', (e) => {
            document.getElementById("Proj1Overlay").style.animationDuration = 0.3;
            document.getElementById("Proj1Overlay").style.animationName = "ProjOverlayAnimOut";
            setTimeout(() => {
                document.getElementById("Proj1Overlay").style.animationDuration = 1;
                document.getElementById("Proj1Overlay").style.display = "none";
            }, 300);
            // SetTimer = 1;
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

        // if (SetTimer === 1) {
        //     var TimeOUT = setTimeout(() => {

        //     }, 1000);
        // }
        // else 
        // if (SetTimer === 0) {
        //     clearTimeout(TimeOUT);
        // }


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
                document.getElementById("Profile").style.display = "block";
            }
            else
                if (window.innerWidth > 780) {
                    if (document.getElementById("ProjectsContainer")) {
                        document.getElementById("Profile").style.display = "none";
                    }
                }

            if (window.innerWidth < 780) {
                if (window.innerWidth > 600) {
                    if (document.getElementById("Filter").value === "All") {
                        document.getElementById("Proj1").style.display = "block";
                        document.getElementById("Proj2").style.display = "block";
                        document.getElementById("Proj3").style.display = "block";
                        document.getElementById("Proj3").style.top = "-200px";
                        document.getElementById("Proj3").style.left = "0%";
                        document.getElementById("Proj4").style.display = "block";
                        document.getElementById("Proj4").style.top = "-450px";
                        document.getElementById("Proj4").style.left = "57%";
                        document.getElementById("Proj5").style.display = "block";
                        document.getElementById("Proj5").style.top = "-400px";
                        document.getElementById("Proj5").style.left = "0%";
                        document.getElementById("Proj6").style.display = "block";
                        document.getElementById("Proj6").style.top = "-650px";
                        document.getElementById("Proj6").style.left = "57%";
                        document.getElementById("Proj7").style.display = "block";
                        document.getElementById("Proj7").style.top = "-600px";
                        document.getElementById("Proj7").style.left = "0%";
                    }
                    else
                        if (document.getElementById("Filter").value === "VanillaJS") {
                            document.getElementById("Proj1").style.display = "block";
                            document.getElementById("Proj2").style.display = "block";
                            document.getElementById("Proj3").style.display = "none";
                            document.getElementById("Proj4").style.display = "none";
                            document.getElementById("Proj5").style.display = "none";
                            document.getElementById("Proj6").style.display = "none";
                            document.getElementById("Proj7").style.display = "none";
                        }
                        else
                            if (document.getElementById("Filter").value === "ReactJS") {
                                document.getElementById("Proj1").style.display = "none";
                                document.getElementById("Proj2").style.display = "none";
                                document.getElementById("Proj6").style.display = "none";

                                document.getElementById("Proj3").style.display = "block";
                                document.getElementById("Proj3").style.bottom = "0px";
                                document.getElementById("Proj3").style.left = "0%";
                                document.getElementById("Proj4").style.display = "block";
                                document.getElementById("Proj4").style.top = "-250px";
                                document.getElementById("Proj4").style.left = "57%";
                                document.getElementById("Proj5").style.display = "block";
                                document.getElementById("Proj5").style.top = "-200px";
                                document.getElementById("Proj5").style.left = "0%";
                                document.getElementById("Proj7").style.display = "block";
                                document.getElementById("Proj7").style.top = "-450px";
                                document.getElementById("Proj7").style.left = "57%";

                            }
                            else
                                if (document.getElementById("Filter").value === "Unity C#") {
                                    document.getElementById("Proj1").style.display = "none";
                                    document.getElementById("Proj2").style.display = "none";
                                    document.getElementById("Proj3").style.display = "none";
                                    document.getElementById("Proj4").style.display = "none";
                                    document.getElementById("Proj5").style.display = "none";
                                    document.getElementById("Proj7").style.display = "none";

                                    document.getElementById("Proj6").style.display = "block";
                                    document.getElementById("Proj6").style.top = "0px";
                                    document.getElementById("Proj6").style.left = "0%";
                                }
                }
            }
            else
                if (window.innerWidth > 780) {
                    if (document.getElementById("Filter").value === "All") {
                        document.getElementById("Proj1").style.display = "block";
                        document.getElementById("Proj2").style.display = "block";
                        document.getElementById("Proj3").style.display = "block";
                        document.getElementById("Proj3").style.top = "-500px";
                        document.getElementById("Proj3").style.left = "70%";
                        document.getElementById("Proj4").style.display = "block";
                        document.getElementById("Proj4").style.top = "-450px";
                        document.getElementById("Proj4").style.left = "0%";
                        document.getElementById("Proj5").style.display = "block";
                        document.getElementById("Proj5").style.top = "-700px";
                        document.getElementById("Proj5").style.left = "35%";
                        document.getElementById("Proj6").style.display = "block";
                        document.getElementById("Proj6").style.top = "-950px";
                        document.getElementById("Proj6").style.left = "70%";
                        document.getElementById("Proj7").style.display = "block";
                        document.getElementById("Proj7").style.top = "-900px";
                        document.getElementById("Proj7").style.left = "0%";
                    }
                    else
                        if (document.getElementById("Filter").value === "VanillaJS") {
                            document.getElementById("Proj1").style.display = "block";
                            document.getElementById("Proj2").style.display = "block";
                            document.getElementById("Proj3").style.display = "none";
                            document.getElementById("Proj4").style.display = "none";
                            document.getElementById("Proj5").style.display = "none";
                            document.getElementById("Proj6").style.display = "none";
                            document.getElementById("Proj7").style.display = "none";
                        }
                        else
                            if (document.getElementById("Filter").value === "ReactJS") {
                                document.getElementById("Proj1").style.display = "none";
                                document.getElementById("Proj2").style.display = "none";
                                document.getElementById("Proj6").style.display = "none";

                                document.getElementById("Proj3").style.display = "block";
                                document.getElementById("Proj3").style.bottom = "0px";
                                document.getElementById("Proj3").style.left = "0%";
                                document.getElementById("Proj4").style.display = "block";
                                document.getElementById("Proj4").style.top = "-250px";
                                document.getElementById("Proj4").style.left = "35%";
                                document.getElementById("Proj5").style.display = "block";
                                document.getElementById("Proj5").style.top = "-500px";
                                document.getElementById("Proj5").style.left = "70%";
                                document.getElementById("Proj7").style.display = "block";
                                document.getElementById("Proj7").style.top = "-450px";
                                document.getElementById("Proj7").style.left = "0%";

                            }
                            else
                                if (document.getElementById("Filter").value === "Unity C#") {
                                    document.getElementById("Proj1").style.display = "none";
                                    document.getElementById("Proj2").style.display = "none";
                                    document.getElementById("Proj3").style.display = "none";
                                    document.getElementById("Proj4").style.display = "none";
                                    document.getElementById("Proj5").style.display = "none";
                                    document.getElementById("Proj7").style.display = "none";

                                    document.getElementById("Proj6").style.display = "block";
                                    document.getElementById("Proj6").style.top = "0px";
                                    document.getElementById("Proj6").style.left = "0%";
                                }
                }
            if (window.innerWidth < 600) {
                if (document.getElementById("Filter").value === "All") {
                    document.getElementById("Proj1").style.display = "block";
                    document.getElementById("Proj2").style.display = "block";
                    document.getElementById("Proj3").style.display = "block";
                    document.getElementById("Proj3").style.top = "100px";
                    document.getElementById("Proj3").style.left = "0%";
                    document.getElementById("Proj4").style.display = "block";
                    document.getElementById("Proj4").style.top = "150px";
                    document.getElementById("Proj4").style.left = "0%";
                    document.getElementById("Proj5").style.display = "block";
                    document.getElementById("Proj5").style.top = "200px";
                    document.getElementById("Proj5").style.left = "0%";
                    document.getElementById("Proj6").style.display = "block";
                    document.getElementById("Proj6").style.top = "250px";
                    document.getElementById("Proj6").style.left = "0%";
                    document.getElementById("Proj7").style.display = "block";
                    document.getElementById("Proj7").style.top = "300px";
                    document.getElementById("Proj7").style.left = "0%";
                }
                else
                    if (document.getElementById("Filter").value === "VanillaJS") {
                        document.getElementById("Proj1").style.display = "block";
                        document.getElementById("Proj2").style.display = "block";
                        document.getElementById("Proj3").style.display = "none";
                        document.getElementById("Proj4").style.display = "none";
                        document.getElementById("Proj5").style.display = "none";
                        document.getElementById("Proj6").style.display = "none";
                        document.getElementById("Proj7").style.display = "none";
                    }
                    else
                        if (document.getElementById("Filter").value === "ReactJS") {
                            document.getElementById("Proj1").style.display = "none";
                            document.getElementById("Proj2").style.display = "none";
                            document.getElementById("Proj6").style.display = "none";

                            document.getElementById("Proj3").style.display = "block";
                            document.getElementById("Proj3").style.top = "0px";
                            document.getElementById("Proj3").style.left = "0%";
                            document.getElementById("Proj4").style.display = "block";
                            document.getElementById("Proj4").style.top = "55px";
                            document.getElementById("Proj4").style.left = "0%";
                            document.getElementById("Proj5").style.display = "block";
                            document.getElementById("Proj5").style.top = "110px";
                            document.getElementById("Proj5").style.left = "0%";
                            document.getElementById("Proj7").style.display = "block";
                            document.getElementById("Proj7").style.top = "170px";
                            document.getElementById("Proj7").style.left = "0%";

                        }
                        else
                            if (document.getElementById("Filter").value === "Unity C#") {
                                document.getElementById("Proj1").style.display = "none";
                                document.getElementById("Proj2").style.display = "none";
                                document.getElementById("Proj3").style.display = "none";
                                document.getElementById("Proj4").style.display = "none";
                                document.getElementById("Proj5").style.display = "none";
                                document.getElementById("Proj7").style.display = "none";

                                document.getElementById("Proj6").style.display = "block";
                                document.getElementById("Proj6").style.top = "0px";
                                document.getElementById("Proj6").style.left = "0%";
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
        if (window.innerWidth < 780) {
            if (window.innerWidth > 600) {
                if (event.target.value === "All") {
                    document.getElementById("Proj1").style.display = "block";
                    document.getElementById("Proj2").style.display = "block";
                    document.getElementById("Proj3").style.display = "block";
                    document.getElementById("Proj3").style.top = "-200px";
                    document.getElementById("Proj3").style.left = "0%";
                    document.getElementById("Proj4").style.display = "block";
                    document.getElementById("Proj4").style.top = "-450px";
                    document.getElementById("Proj4").style.left = "57%";
                    document.getElementById("Proj5").style.display = "block";
                    document.getElementById("Proj5").style.top = "-400px";
                    document.getElementById("Proj5").style.left = "0%";
                    document.getElementById("Proj6").style.display = "block";
                    document.getElementById("Proj6").style.top = "-650px";
                    document.getElementById("Proj6").style.left = "57%";
                    document.getElementById("Proj7").style.display = "block";
                    document.getElementById("Proj7").style.top = "-600px";
                    document.getElementById("Proj7").style.left = "0%";
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
                    }
                    else
                        if (event.target.value === "ReactJS") {
                            document.getElementById("Proj1").style.display = "none";
                            document.getElementById("Proj2").style.display = "none";
                            document.getElementById("Proj6").style.display = "none";

                            document.getElementById("Proj3").style.display = "block";
                            document.getElementById("Proj3").style.top = "0px";
                            document.getElementById("Proj3").style.left = "0%";
                            document.getElementById("Proj4").style.display = "block";
                            document.getElementById("Proj4").style.top = "-250px";
                            document.getElementById("Proj4").style.left = "57%";
                            document.getElementById("Proj5").style.display = "block";
                            document.getElementById("Proj5").style.top = "-200px";
                            document.getElementById("Proj5").style.left = "0%";
                            document.getElementById("Proj7").style.display = "block";
                            document.getElementById("Proj7").style.top = "-450px";
                            document.getElementById("Proj7").style.left = "57%";

                        }
                        else
                            if (event.target.value === "Unity C#") {
                                document.getElementById("Proj1").style.display = "none";
                                document.getElementById("Proj2").style.display = "none";
                                document.getElementById("Proj3").style.display = "none";
                                document.getElementById("Proj4").style.display = "none";
                                document.getElementById("Proj5").style.display = "none";
                                document.getElementById("Proj7").style.display = "none";

                                document.getElementById("Proj6").style.display = "block";
                                document.getElementById("Proj6").style.bottom = "0px";
                                document.getElementById("Proj6").style.left = "0%";
                            }
            }
        }
        else
            if (window.innerWidth > 780) {
                if (event.target.value === "All") {
                    document.getElementById("Proj1").style.display = "block";
                    document.getElementById("Proj2").style.display = "block";
                    document.getElementById("Proj3").style.display = "block";
                    document.getElementById("Proj3").style.top = "-500px";
                    document.getElementById("Proj3").style.left = "70%";
                    document.getElementById("Proj4").style.display = "block";
                    document.getElementById("Proj4").style.top = "-450px";
                    document.getElementById("Proj4").style.left = "0%";
                    document.getElementById("Proj5").style.display = "block";
                    document.getElementById("Proj5").style.top = "-700px";
                    document.getElementById("Proj5").style.left = "35%";
                    document.getElementById("Proj6").style.display = "block";
                    document.getElementById("Proj6").style.top = "-950px";
                    document.getElementById("Proj6").style.left = "70%";
                    document.getElementById("Proj7").style.display = "block";
                    document.getElementById("Proj7").style.top = "-900px";
                    document.getElementById("Proj7").style.left = "0%";
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
                    }
                    else
                        if (event.target.value === "ReactJS") {
                            document.getElementById("Proj1").style.display = "none";
                            document.getElementById("Proj2").style.display = "none";
                            document.getElementById("Proj6").style.display = "none";

                            document.getElementById("Proj3").style.display = "block";
                            document.getElementById("Proj3").style.top = "0px";
                            document.getElementById("Proj3").style.left = "0%";
                            document.getElementById("Proj4").style.display = "block";
                            document.getElementById("Proj4").style.top = "-250px";
                            document.getElementById("Proj4").style.left = "35%";
                            document.getElementById("Proj5").style.display = "block";
                            document.getElementById("Proj5").style.top = "-500px";
                            document.getElementById("Proj5").style.left = "70%";
                            document.getElementById("Proj7").style.display = "block";
                            document.getElementById("Proj7").style.top = "-450px";
                            document.getElementById("Proj7").style.left = "0%";

                        }
                        else
                            if (event.target.value === "Unity C#") {
                                document.getElementById("Proj1").style.display = "none";
                                document.getElementById("Proj2").style.display = "none";
                                document.getElementById("Proj3").style.display = "none";
                                document.getElementById("Proj4").style.display = "none";
                                document.getElementById("Proj5").style.display = "none";
                                document.getElementById("Proj7").style.display = "none";

                                document.getElementById("Proj6").style.display = "block";
                                document.getElementById("Proj6").style.top = "0px";
                                document.getElementById("Proj6").style.left = "0%";
                            }
            }
        if (window.innerWidth < 600) {
            if (event.target.value === "All") {
                document.getElementById("Proj1").style.display = "block";
                document.getElementById("Proj2").style.display = "block";
                document.getElementById("Proj3").style.display = "block";
                document.getElementById("Proj3").style.top = "100px";
                document.getElementById("Proj3").style.left = "0%";
                document.getElementById("Proj4").style.display = "block";
                document.getElementById("Proj4").style.top = "150px";
                document.getElementById("Proj4").style.left = "0%";
                document.getElementById("Proj5").style.display = "block";
                document.getElementById("Proj5").style.top = "200px";
                document.getElementById("Proj5").style.left = "0%";
                document.getElementById("Proj6").style.display = "block";
                document.getElementById("Proj6").style.top = "250px";
                document.getElementById("Proj6").style.left = "0%";
                document.getElementById("Proj7").style.display = "block";
                document.getElementById("Proj7").style.top = "300px";
                document.getElementById("Proj7").style.left = "0%";
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
                }
                else
                    if (event.target.value === "ReactJS") {
                        document.getElementById("Proj1").style.display = "none";
                        document.getElementById("Proj2").style.display = "none";
                        document.getElementById("Proj6").style.display = "none";

                        document.getElementById("Proj3").style.display = "block";
                        document.getElementById("Proj3").style.top = "0px";
                        document.getElementById("Proj3").style.left = "0%";
                        document.getElementById("Proj4").style.display = "block";
                        document.getElementById("Proj4").style.top = "55px";
                        document.getElementById("Proj4").style.left = "0%";
                        document.getElementById("Proj5").style.display = "block";
                        document.getElementById("Proj5").style.top = "110px";
                        document.getElementById("Proj5").style.left = "0%";
                        document.getElementById("Proj7").style.display = "block";
                        document.getElementById("Proj7").style.top = "170px";
                        document.getElementById("Proj7").style.left = "0%";

                    }
                    else
                        if (event.target.value === "Unity C#") {
                            document.getElementById("Proj1").style.display = "none";
                            document.getElementById("Proj2").style.display = "none";
                            document.getElementById("Proj3").style.display = "none";
                            document.getElementById("Proj4").style.display = "none";
                            document.getElementById("Proj5").style.display = "none";
                            document.getElementById("Proj7").style.display = "none";

                            document.getElementById("Proj6").style.display = "block";
                            document.getElementById("Proj6").style.top = "0px";
                            document.getElementById("Proj6").style.left = "0%";
                        }
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
                    <option>Unity C#</option>
                </select>
                <div id="ProjCards">
                    <div id="Proj1">
                        <div id="Proj1Overlay">
                            <a id="ProjLink" href="https://philcrypto.netlify.app"><div id="VLS2">View Live Site</div></a><br />
                            <a id="ProjLink" href="https://github.com/PhilipNzube/MyRepo"> <div id="VC2">View Code</div></a>
                        </div>
                        <img id="Proj1Img" src={Proj1Img} alt="" />
                        <div id="Proj1Text">BIT-WEB</div>
                        <div id="Proj1Info">VanillaJS</div>
                    </div>

                    <div id="Proj2">
                        <div id="Proj2Overlay">
                            <a id="ProjLink" href="https://newzurisite.netlify.app"> <div id="VLS">View Live Site</div></a><br />
                            <a id="ProjLink" href="https://github.com/PhilipNzube/NewSite">  <div id="VC">View Code</div></a>
                        </div>
                        <img id="Proj2Img" src={Proj2Img} alt="" />
                        <div id="Proj2Text">GLORY</div>
                        <div id="Proj2Info">VanillaJS</div>
                    </div>



                    <div id="Proj3">
                        <div id="Proj3Overlay">
                            <a id="ProjLink" href="https://immunowrld-web-app.netlify.app"> <div id="VLS">View Live Site</div></a><br />
                            <a id="ProjLink" href="https://github.com/PhilipNzube/IMMUNOWRLD-PWA">  <div id="VC">View Code</div></a>
                        </div>
                        <img id="Proj3Img" src={Proj3Img} alt="" />
                        <div id="Proj3Text">IMMUNOWRLD</div>
                        <div id="Proj3Info">ReactJS</div>
                    </div>


                    <div id="Proj4">
                        <div id="Proj4Overlay">
                            <a id="ProjLink" href="https://phil-music-app.netlify.app"> <div id="VLS">View Live Site</div></a><br />
                            <a id="ProjLink" href="https://github.com/PhilipNzube/Music-App">  <div id="VC">View Code</div></a>
                        </div>
                        <img id="Proj4Img" src={Proj4Img} alt="" />
                        <div id="Proj4Text">MY MUSIC APP</div>
                        <div id="Proj4Info">ReactJS</div>
                    </div>


                    <div id="Proj5">
                        <div id="Proj5Overlay">
                            <a id="ProjLink" href="https://recipe-webapp-pwa.netlify.app"> <div id="VLS">View Live Site</div></a><br />
                            <a id="ProjLink" href="https://github.com/PhilipNzube/Recipie-App-PWA">  <div id="VC">View Code</div></a>
                        </div>
                        <img id="Proj5Img" src={Proj5Img} alt="" />
                        <div id="Proj5Text">FOOD RECIPE APP</div>
                        <div id="Proj5Info">ReactJS</div>
                    </div>

                    <div id="Proj6">
                        <div id="Proj6Overlay">
                            <a id="ProjLink" href="https://play.google.com/store/apps/details?id=com.DefaultCompany.IMMUNOCALYPSETheDeadlyTour"> <div id="VLS">Google Play Store</div></a><br />
                            {/* <a id="ProjLink" href='www.google.com'>  <div id="VC">View Code</div></a> */}
                        </div>
                        <img id="Proj6Img" src={Proj6Img} alt="" />
                        <div id="Proj6Text">IMMUNOCALYPSE</div>
                        <div id="Proj6Info">Unity C#</div>
                    </div>


                    <div id="Proj7">
                        <div id="Proj7Overlay">
                            <a id="ProjLink" href="https://my-calc-web-app.netlify.app"> <div id="VLS">View Live Site</div></a><br />
                            <a id="ProjLink" href="https://github.com/PhilipNzube/Calculator-App">  <div id="VC">View Code</div></a>
                        </div>
                        <img id="Proj7Img" src={Proj7Img} alt="" />
                        <div id="Proj7Text">CALCULATOR APP</div>
                        <div id="Proj7Info">ReactJS</div>
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