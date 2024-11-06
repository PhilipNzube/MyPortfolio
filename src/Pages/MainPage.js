import ProfilePic from '../images/ProfilePic.jpg';
import Twitter from '../images/Twitter.png';
import GitHub from '../images/GitHub.png';
import LinkedIn from '../images/LinkedIn.png';
import { useNavigate } from 'react-router-dom';
import OverlayNav from '../Components/OverlayNav';
import PicOverlay from '../Components/PicOverlay';
import { useEffect } from 'react';

export default function MainPage() {
    // var AboutActive = 0;
    const navigate = useNavigate();
    const Unmount = () => {
        // unmountComponentAtNode(<MainPage />);
        console.log("MainPage");
    }
    window.addEventListener('resize', (e) => {
        if (window.innerWidth > 780) {
            // const Container = document.getElementById("SocialIcons");
            // const Child = document.getElementById("Download");
            // const Centralizer = document.getElementById("Centralizer");
            // Container.appendChild(Child);
            // Container.removeChild(Centralizer);
            document.getElementById("HamBurger").style.display = "none";
            document.getElementById("Overlay").style.display = "none";
            document.getElementById("PicOverlay").style.display = "none";
        }
        else
            if (window.innerWidth < 780) {
                // const Container = document.getElementById("SocialIcons");
                // const Child = document.getElementById("Download");
                // const Centralizer = document.createElement('center');
                // Container.appendChild(Centralizer);
                // Centralizer.id = "Centralizer";
                // Centralizer.appendChild(Child);
                document.getElementById("HamBurger").style.display = "block";
            }
    });

    useEffect(() => {
        setTimeout(() => {

            // if (window.innerWidth < 780) {
            //     const Container = document.getElementById("SocialIcons");
            //     const Child = document.getElementById("Download");
            //     const Centralizer = document.createElement('center');
            //     Container.appendChild(Centralizer);
            //     Centralizer.id = "Centralizer";
            //     Centralizer.appendChild(Child);
            // }


            document.getElementById("About").addEventListener('click', (e) => {
                Unmount();
                if (document.getElementById("Prof").innerHTML !== "") {
                    navigate("/About");
                }
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


            document.getElementById("ClosePicOverlay").addEventListener('click', (e) => {
                document.getElementById("MainNavBar").style.display = "flex";
                if (window.innerWidth < 780) {
                    document.getElementById("PicOverlay").style.animationName = "PicOverlaySlideOut";
                    setTimeout(() => {
                        document.body.style.overflowY = "auto";
                        document.getElementById("PicOverlay").style.display = "none";
                        if (document.getElementById("Overlay").style.display !== "block") {
                            if (window.innerWidth < 780) {
                                document.getElementById("HamBurger").style.display = "block";
                            }
                        }
                    }, 790);
                }
            });

            document.getElementById("LOADINGTOP").style.display = "none";
            setTimeout(() => {
                var h1 = document.getElementById("Prof");
                var text = h1.innerHTML;
                h1.innerHTML = "-";
                const TypingEffect = (element, speed) => {
                    var i = 0;
                    var timer = setInterval(() => {
                        if (i < text.length) {
                            element.append(text.charAt(i));
                            i++;
                        }
                        else {
                            clearInterval(timer);
                            text = "FRONTEND WEB DEVELOPER";
                            setTimeout(() => {
                                h1.innerHTML = "-";
                                TypingEffect2(h1, 150);
                            }, 1000);
                        }
                    }, speed);
                }

                const TypingEffect2 = (element, speed) => {
                    var i = 0;
                    var timer = setInterval(() => {
                        if (i < text.length) {
                            element.append(text.charAt(i));
                            i++;
                        }
                        else {
                            clearInterval(timer);
                            text = "INDIE GAME DEVELOPER";
                            setTimeout(() => {
                                h1.innerHTML = "-";
                                TypingEffect3(h1, 150);
                            }, 1000);
                        }
                    }, speed);
                }

                const TypingEffect3 = (element, speed) => {
                    var i = 0;
                    var timer = setInterval(() => {
                        if (i < text.length) {
                            element.append(text.charAt(i));
                            i++;
                        }
                        else {
                            clearInterval(timer);
                            text = "TECH ENTHUSIAST";
                            setTimeout(() => {
                                h1.innerHTML = "-";
                                TypingEffect4(h1, 150);
                            }, 1000);
                        }
                    }, speed);
                }

                const TypingEffect4 = (element, speed) => {
                    var i = 0;
                    var timer = setInterval(() => {
                        if (i < text.length) {
                            element.append(text.charAt(i));
                            i++;
                        }
                        else {
                            clearInterval(timer);
                            text = "STUDENT";
                            setTimeout(() => {
                                h1.innerHTML = "-";
                                TypingEffect(h1, 150);
                            }, 1000);
                        }
                    }, speed);
                }

                setTimeout(() => {
                    // AboutActive = 1;
                    var LoadLimiter = 0;
                    LoadLimiter++;
                    document.getElementById("LOADING").style.display = "none";
                    document.getElementById("Container").style.opacity = 1;
                    document.getElementById("MainNavBar").style.display = "flex";
                    if (LoadLimiter === 1) {
                        TypingEffect(h1, 150);
                    }
                }, 4500);
            }, 1000);
        }, 5000);
    }, []);

    return (
        <>
            <div id="LOADINGTOP"></div>
            <div id="LOADINGBG">
                <div id="LOADING">LOADING<span id="Elipses">.</span><span id="Elipses2">.</span><span id="Elipses3">.</span></div>
            </div>
            <div id="Container">
                <div id="ContainerCont">
                    <h1 id="Hi">Hi I'm</h1>
                    <h1 id="Name2">Philip Nzube</h1>
                    <h1 id="Prof">INDIE GAME DEVELOPER</h1>
                    <div id="SocialIcons">
                        <a href="https://twitter.com/Philip_nzube"><img id="Twitter" src={Twitter} alt="TWITTER" /></a>
                        <a href="https://github.com/PhilipNzube"><img id="GitHub" src={GitHub} alt="GITHUB" /></a>
                        <a href="https://www.linkedin.com/in/philip-onwubalili-54049823a"><img id="LinkedIn" src={LinkedIn} alt="LINKEDIN" /></a>
                    </div>
                    <a id="Download" href="https://drive.google.com/file/d/1Xh5HzHFd9m9CttI2hBbm8ACVuqfvyj2w/view?usp=sharing
">View CV</a>
                </div>
                <img id="Profile" src={ProfilePic} alt="PROFILE PIC" />
            </div>

            <OverlayNav />

            <PicOverlay />
        </>
    )
}