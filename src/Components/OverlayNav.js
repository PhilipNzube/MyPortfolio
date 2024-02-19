import CloseBut from '../images/CloseBut.png';

export default function OverlayNav() {
    return (
        <>
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