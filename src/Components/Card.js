import { useEffect } from "react";

export default function Card(props) {
    var PlayVar = "True";
    var vid;
    var childElement;


    const ActivateProjOverlay = (e) => {
        let parentElement = document.querySelector('.Proj');
        if (e.target.parentElement.className == "Proj") {
            childElement = e.target.parentElement.querySelector('.ProjOverlay');
            vid = e.target.parentElement.querySelector('.ProjVid');
            childElement.style.display = "block";
        }

    }


    const DeactivateProjOverlay = () => {
        childElement.style.animationName = "ProjOverlayAnimOut";
        childElement.style.animationDuration = 0.3;
        setTimeout(() => {
            childElement.style.animationDuration = 1;
            childElement.style.display = "none";
            childElement.style.animationName = "ProjOverlayAnim";
        }, 300);
    }





    const Play = (e) => {
        let vidparentElement = document.querySelector('.PlayAndPause');

        let vidchildElement = e.target.parentElement.querySelector('.PlayButtonClass');
        let vidchildElement2 = e.target.parentElement.querySelector('.PlayTextClass');

        if (PlayVar == "True") {
            vid.play();
            vidchildElement2.innerHTML = "PAUSE VIDEO";
            vidchildElement.src = "/static/media/PauseButton.42129923311106b8d457.png";
            PlayVar = "False";
        }
        else
            if (PlayVar == "False") {
                vid.pause();
                vidchildElement2.innerHTML = "PLAY VIDEO";
                vidchildElement.src = "/static/media/Play%20Button.e1520f1658df7ec681df.png";
                PlayVar = "True";
            }
    }

    return (
        <>
            <div className="Proj" onClick={ActivateProjOverlay}>
                <div className="ProjOverlay" onClick={DeactivateProjOverlay}>
                    {props.hasVLS == "True" && <><a className="ProjLink" href={props.VLS}> <div className="VLS">{props.VLSText}</div></a><br /></>}
                    {props.hasPlayBut == "True" ? <div id="PlayDiv" className="PlayAndPause" onClick={Play}><img className="PlayButtonClass" id="PlayButton" src={props.PlayButSrc} alt="Play" /><p className="PlayTextClass" id="PlayText">{props.PlayButText}</p></div> : props.hasVC == "True" && <a className="ProjLink" href={props.VC}>  <div className="VC">{props.VCText}</div></a>}
                </div>
                {props.hasImage == "True" ? <img className="ProjImg" id="ProjImg" src={props.image} alt="ProjImg" /> : <video className="ProjVid" id="ProjVid" src={props.vid} loop></video>}
                <div className="ProjText">{props.ProjText}</div>
                <div className="ProjInfo">{props.ProjInfo}</div>
            </div>
        </>
    )
}