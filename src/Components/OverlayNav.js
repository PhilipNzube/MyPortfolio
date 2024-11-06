import CloseBut from '../images/CloseBut.png';

export default function OverlayNav() {
    return (
        <>
            <div id="Overlay">
                <img id="Close" src={CloseBut} alt="CLOSE" />
                <div id="AboutOverlay">ABOUT</div>
                <div id="ProjectsOverlay">PROJECTS</div>
                <div id="ContactOverlay">CONTACT</div>
            </div>
        </>
    )
}