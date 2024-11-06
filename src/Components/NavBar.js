import { useEffect } from 'react';
import HamBurger from '../images/HamBurger.png';
import Logo from "../images/Logo.png";
export default function NavBar() {
    useEffect(() => {
        var AboutActive;
        var ContactActive;
        var ProjectsActive;
        setInterval(() => {
            if (document.getElementById("Container")) {
                AboutActive = 1;
                ProjectsActive = 1;
                ContactActive = 1;
            }

            if (document.getElementById("AboutContainer")) {
                AboutActive = 0;
                ContactActive = 1;
                ProjectsActive = 1;
            }

            if (document.getElementById("ProjectsContainer")) {
                ProjectsActive = 0;
                ContactActive = 1;
                AboutActive = 1;
            }

            if (document.getElementById("ContactContainer")) {
                ContactActive = 0;
                AboutActive = 1;
                ProjectsActive = 1;
            }
        }, 1000);


        document.getElementById("Name").addEventListener('click', (e) => {
            if (window.innerWidth < 780) {
                if (document.getElementById("LOADING").style.display == "none") {
                    if (document.getElementById("PicOverlay").style.display = "none") {
                        document.body.style.overflowY = "hidden";
                        document.getElementById("PicOverlay").style.animationName = "PicOverlaySlideIn";
                        document.getElementById("PicOverlay").style.display = "block";
                        setTimeout(() => {
                            document.getElementById("HamBurger").style.display = "none";
                        }, 100);
                    }
                }
            }
        });


        window.addEventListener('mouseover', () => {
            if (document.getElementById("AboutContainer")) {
                AboutActive = 0;
                if (window.innerWidth > 780) {
                    document.getElementById("About").style.textDecoration = "underline";
                    document.getElementById("About").style.textUnderlineOffset = "10px";
                    document.getElementById("About").style.textDecorationThickness = "2px";
                }
                else
                    if (window.innerWidth < 780) {
                        document.getElementById("AboutOverlay").style.textDecoration = "underline";
                        document.getElementById("AboutOverlay").style.textUnderlineOffset = "10px";
                        document.getElementById("AboutOverlay").style.textDecorationThickness = "2px";
                    }
            }


            if (document.getElementById("ProjectsContainer")) {
                ProjectsActive = 0;
                if (window.innerWidth > 780) {
                    document.getElementById("Projects").style.textDecoration = "underline";
                    document.getElementById("Projects").style.textUnderlineOffset = "10px";
                    document.getElementById("Projects").style.textDecorationThickness = "2px";
                }
                else
                    if (window.innerWidth < 780) {
                        document.getElementById("ProjectsOverlay").style.textDecoration = "underline";
                        document.getElementById("ProjectsOverlay").style.textUnderlineOffset = "10px";
                        document.getElementById("ProjectsOverlay").style.textDecorationThickness = "2px";
                    }
            }


            if (document.getElementById("ContactContainer")) {
                ContactActive = 0;
            }
        });


        window.addEventListener('mouseover', (e) => {
            if (window.innerWidth > 780) {
                document.getElementById("About").addEventListener('mouseover', (e) => {
                    if (AboutActive !== 0) {
                        document.getElementById("About").style.textDecoration = "underline";
                        document.getElementById("About").style.textUnderlineOffset = "10px";
                        document.getElementById("About").style.textDecorationThickness = "2px";
                    }
                });
                document.getElementById("About").addEventListener('mouseleave', (e) => {
                    if (AboutActive !== 0) {
                        document.getElementById("About").style.textDecoration = "none";
                    }
                });


                document.getElementById("Projects").addEventListener('mouseover', (e) => {
                    if (ProjectsActive !== 0) {
                        document.getElementById("Projects").style.textDecoration = "underline";
                        document.getElementById("Projects").style.textUnderlineOffset = "10px";
                        document.getElementById("Projects").style.textDecorationThickness = "2px";
                    }
                });
                document.getElementById("Projects").addEventListener('mouseleave', (e) => {
                    if (ProjectsActive !== 0) {
                        document.getElementById("Projects").style.textDecoration = "none";
                    }
                });
            }
            else
                if (window.innerWidth < 780) {
                    document.getElementById("AboutOverlay").addEventListener('mouseover', (e) => {
                        if (AboutActive !== 0) {
                            document.getElementById("AboutOverlay").style.textDecoration = "underline";
                            document.getElementById("AboutOverlay").style.textUnderlineOffset = "10px";
                            document.getElementById("AboutOverlay").style.textDecorationThickness = "2px";
                        }
                    });
                    document.getElementById("AboutOverlay").addEventListener('mouseleave', (e) => {
                        if (AboutActive !== 0) {
                            document.getElementById("AboutOverlay").style.textDecoration = "none";
                        }
                    });


                    document.getElementById("ProjectsOverlay").addEventListener('mouseover', (e) => {
                        if (ProjectsActive !== 0) {
                            document.getElementById("ProjectsOverlay").style.textDecoration = "underline";
                            document.getElementById("ProjectsOverlay").style.textUnderlineOffset = "10px";
                            document.getElementById("ProjectsOverlay").style.textDecorationThickness = "2px";
                        }
                    });
                    document.getElementById("ProjectsOverlay").addEventListener('mouseleave', (e) => {
                        if (ProjectsActive !== 0) {
                            document.getElementById("ProjectsOverlay").style.textDecoration = "none";
                        }
                    });
                }
        });

    }, []);

    return (
        <>
            <div id="MainNavBar">
            <img id="Name" src={Logo} alt="Logo" />
                <div id="NavBar">
                    <div id="About">ABOUT</div>
                    <div id="Projects">PROJECTS</div>
                    <div id="Contact">CONTACT</div>
                </div>
                <img id="HamBurger" src={HamBurger} alt="HamBurger" />
            </div>
        </>
    )
}