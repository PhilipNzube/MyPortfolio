import HamBurger from '../images/HamBurger.png';
export default function NavBar() {
    setTimeout(() => {
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
                    document.getElementById("About").style.bottom = "1px";
                    document.getElementById("About").style.textDecorationLine = "underline";
                    document.getElementById("About").style.textDecorationSkipInk = "none";
                    document.getElementById("About").style.textDecorationThickness = "4px";
                    document.getElementById("About").style.textUnderlineOffset = "1px";
                    document.getElementById("About").style.cursor = "default";
                }
                else
                    if (window.innerWidth < 780) {
                        document.getElementById("AboutOverlay").style.bottom = "1px";
                        document.getElementById("AboutOverlay").style.textDecorationLine = "underline";
                        document.getElementById("AboutOverlay").style.textDecorationSkipInk = "none";
                        document.getElementById("AboutOverlay").style.textDecorationThickness = "4px";
                        document.getElementById("AboutOverlay").style.textUnderlineOffset = "1px";
                        document.getElementById("AboutOverlay").style.cursor = "default";
                    }
            }


            if (document.getElementById("ProjectsContainer")) {
                ProjectsActive = 0;
                if (window.innerWidth > 780) {
                    document.getElementById("Projects").style.bottom = "1px";
                    document.getElementById("Projects").style.textDecorationLine = "underline";
                    document.getElementById("Projects").style.textDecorationSkipInk = "none";
                    document.getElementById("Projects").style.textDecorationThickness = "4px";
                    document.getElementById("Projects").style.textUnderlineOffset = "1px";
                    document.getElementById("Projects").style.cursor = "default";
                }
                else
                    if (window.innerWidth < 780) {
                        document.getElementById("ProjectsOverlay").style.bottom = "1px";
                        document.getElementById("ProjectsOverlay").style.textDecorationLine = "underline";
                        document.getElementById("ProjectsOverlay").style.textDecorationThickness = "4px";
                        document.getElementById("ProjectsOverlay").style.textDecorationSkipInk = "none";
                        document.getElementById("ProjectsOverlay").style.textUnderlineOffset = "1px";
                        document.getElementById("ProjectsOverlay").style.cursor = "default";
                    }
            }


            if (document.getElementById("ContactContainer")) {
                ContactActive = 0;
                if (window.innerWidth > 780) {
                    document.getElementById("Contact").style.bottom = "1px";
                    document.getElementById("Contact").style.textDecorationLine = "underline";
                    document.getElementById("Contact").style.textDecorationThickness = "4px";
                    document.getElementById("Contact").style.textDecorationSkipInk = "none";
                    document.getElementById("Contact").style.textUnderlineOffset = "1px";
                    document.getElementById("Contact").style.cursor = "default";
                }
                else
                    if (window.innerWidth < 780) {
                        document.getElementById("ContactOverlay").style.bottom = "1px";
                        document.getElementById("ContactOverlay").style.textDecorationLine = "underline";
                        document.getElementById("ContactOverlay").style.textDecorationThickness = "4px";
                        document.getElementById("ContactOverlay").style.textDecorationSkipInk = "none";
                        document.getElementById("ContactOverlay").style.textUnderlineOffset = "1px";
                        document.getElementById("ContactOverlay").style.cursor = "default";
                    }
            }
        });


        window.addEventListener('mouseover', (e) => {
            if (window.innerWidth > 780) {
                document.getElementById("About").addEventListener('mouseover', (e) => {
                    if (AboutActive !== 0) {
                        document.getElementById("About").style.bottom = "1px";
                        document.getElementById("About").style.textDecorationLine = "underline";
                        document.getElementById("About").style.textDecorationThickness = "4px";
                        document.getElementById("About").style.textDecorationSkipInk = "none";
                        document.getElementById("About").style.textUnderlineOffset = "1px";
                        document.getElementById("About").style.animationPlayState = "play";
                        document.getElementById("About").style.animationName = "Underline";
                        document.getElementById("About").style.animationDuration = "0.5s";
                        document.getElementById("About").style.animationIterationCount = "1";
                    }
                });
                document.getElementById("About").addEventListener('mouseleave', (e) => {
                    if (AboutActive !== 0) {
                        document.getElementById("About").style.textDecoration = "none";
                        document.getElementById("About").style.bottom = "-1px";
                        document.getElementById("About").style.animationName = "none";
                    }
                });


                document.getElementById("Projects").addEventListener('mouseover', (e) => {
                    if (ProjectsActive !== 0) {
                        document.getElementById("Projects").style.bottom = "1px";
                        document.getElementById("Projects").style.textDecorationLine = "underline";
                        document.getElementById("Projects").style.textDecorationThickness = "4px";
                        document.getElementById("Projects").style.textDecorationSkipInk = "none";
                        document.getElementById("Projects").style.textUnderlineOffset = "1px";
                        document.getElementById("Projects").style.animationPlayState = "play";
                        document.getElementById("Projects").style.animationName = "Underline";
                        document.getElementById("Projects").style.animationDuration = "0.5s";
                        document.getElementById("Projects").style.animationIterationCount = "1";
                    }
                });
                document.getElementById("Projects").addEventListener('mouseleave', (e) => {
                    if (ProjectsActive !== 0) {
                        document.getElementById("Projects").style.textDecoration = "none";
                        document.getElementById("Projects").style.bottom = "-1px";
                        document.getElementById("Projects").style.animationName = "none";
                    }
                });


                document.getElementById("Contact").addEventListener('mouseover', (e) => {
                    if (ContactActive !== 0) {
                        document.getElementById("Contact").style.bottom = "1px";
                        document.getElementById("Contact").style.textDecorationLine = "underline";
                        document.getElementById("Contact").style.textDecorationThickness = "4px";
                        document.getElementById("Contact").style.textDecorationSkipInk = "none";
                        document.getElementById("Contact").style.textUnderlineOffset = "1px";
                        document.getElementById("Contact").style.animationPlayState = "play";
                        document.getElementById("Contact").style.animationName = "Underline";
                        document.getElementById("Contact").style.animationDuration = "0.5s";
                        document.getElementById("Contact").style.animationIterationCount = "1";
                    }
                });
                document.getElementById("Contact").addEventListener('mouseleave', (e) => {
                    if (ContactActive !== 0) {
                        document.getElementById("Contact").style.textDecoration = "none";
                        document.getElementById("Contact").style.bottom = "-1px";
                        document.getElementById("Contact").style.animationName = "none";
                    }
                });
            }
            else
                if (window.innerWidth < 780) {
                    document.getElementById("AboutOverlay").addEventListener('mouseover', (e) => {
                        if (AboutActive !== 0) {
                            document.getElementById("AboutOverlay").style.bottom = "1px";
                            document.getElementById("AboutOverlay").style.textDecorationLine = "underline";
                            document.getElementById("AboutOverlay").style.textDecorationThickness = "4px";
                            document.getElementById("AboutOverlay").style.textDecorationSkipInk = "none";
                            document.getElementById("AboutOverlay").style.textUnderlineOffset = "1px";
                            document.getElementById("AboutOverlay").style.animationPlayState = "play";
                            document.getElementById("AboutOverlay").style.animationName = "Underline";
                            document.getElementById("AboutOverlay").style.animationDuration = "0.5s";
                            document.getElementById("AboutOverlay").style.animationIterationCount = "1";
                        }
                    });
                    document.getElementById("AboutOverlay").addEventListener('mouseleave', (e) => {
                        if (AboutActive !== 0) {
                            document.getElementById("AboutOverlay").style.textDecoration = "none";
                            document.getElementById("AboutOverlay").style.bottom = "-1px";
                            document.getElementById("AboutOverlay").style.animationName = "none";
                        }
                    });


                    document.getElementById("ProjectsOverlay").addEventListener('mouseover', (e) => {
                        if (ProjectsActive !== 0) {
                            document.getElementById("ProjectsOverlay").style.bottom = "1px";
                            document.getElementById("ProjectsOverlay").style.textDecorationLine = "underline";
                            document.getElementById("ProjectsOverlay").style.textDecorationThickness = "4px";
                            document.getElementById("ProjectsOverlay").style.textDecorationSkipInk = "none";
                            document.getElementById("ProjectsOverlay").style.textUnderlineOffset = "1px";
                            document.getElementById("ProjectsOverlay").style.animationPlayState = "play";
                            document.getElementById("ProjectsOverlay").style.animationName = "Underline";
                            document.getElementById("ProjectsOverlay").style.animationDuration = "0.5s";
                            document.getElementById("ProjectsOverlay").style.animationIterationCount = "1";
                        }
                    });
                    document.getElementById("ProjectsOverlay").addEventListener('mouseleave', (e) => {
                        if (ProjectsActive !== 0) {
                            document.getElementById("ProjectsOverlay").style.textDecoration = "none";
                            document.getElementById("ProjectsOverlay").style.bottom = "-1px";
                            document.getElementById("ProjectsOverlay").style.animationName = "none";
                        }
                    });


                    document.getElementById("ContactOverlay").addEventListener('mouseover', (e) => {
                        if (ContactActive !== 0) {
                            document.getElementById("ContactOverlay").style.bottom = "1px";
                            document.getElementById("ContactOverlay").style.textDecorationLine = "underline";
                            document.getElementById("ContactOverlay").style.textDecorationThickness = "4px";
                            document.getElementById("ContactOverlay").style.textDecorationSkipInk = "none";
                            document.getElementById("ContactOverlay").style.textUnderlineOffset = "1px";
                            document.getElementById("ContactOverlay").style.animationPlayState = "play";
                            document.getElementById("ContactOverlay").style.animationName = "Underline";
                            document.getElementById("ContactOverlay").style.animationDuration = "0.5s";
                            document.getElementById("ContactOverlay").style.animationIterationCount = "1";
                        }
                    });
                    document.getElementById("ContactOverlay").addEventListener('mouseleave', (e) => {
                        if (ContactActive !== 0) {
                            document.getElementById("ContactOverlay").style.textDecoration = "none";
                            document.getElementById("ContactOverlay").style.bottom = "-1px";
                            document.getElementById("ContactOverlay").style.animationName = "none";
                        }
                    });
                }
        });

    }, 1000);
    return (
        <>
            <div id="NavBar">
                <span id="About">ABOUT</span>
                <span id="Projects">PROJECTS</span>
                <span id="Contact">CONTACT</span>
                <img id="HamBurger" src={HamBurger} alt="HamBurger" />
                <h1 id="Name">PN</h1>
            </div>
        </>
    )
}