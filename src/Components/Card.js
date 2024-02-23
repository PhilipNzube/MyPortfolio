import { useEffect } from "react";

export default function Card(props) {
    var PlayVar = "True";

    // useEffect(() => {

    // }, []);


    const ActivateProjOverlay = (e) => {
        let parentElement = document.querySelector('.Proj');

        let childElement = e.target.parentElement.querySelector('.ProjOverlay');

        childElement.style.display = "block";
    }


    const DeactivateProjOverlay = (e) => {
        e.target.style.animationName = "ProjOverlayAnimOut";
        e.target.style.animationDuration = 0.3;
        setTimeout(() => {
            e.target.style.animationDuration = 1;
            e.target.style.display = "none";
            e.target.style.animationName = "ProjOverlayAnim";
        }, 300);
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

    return (
        <>
                <div className="Proj" onClick={ActivateProjOverlay}>
                    <div className="ProjOverlay" onClick={DeactivateProjOverlay}>
                        {props.hasVLS == "True" && <><a className="ProjLink" href={props.VLS}> <div className="VLS">{props.VLSText}</div></a><br /></>}
                        {props.hasPlayBut == "True" ? <div id="PlayDiv" className="PlayAndPause" onClick={Play}><img className="PlayButtonClass" id="PlayButton" src={props.PlayButSrc} alt="Play" /><p id="PlayText">{props.PlayButText}</p></div> : props.hasVC == "True" && <a className="ProjLink" href={props.VC}>  <div className="VC">{props.VCText}</div></a>}
                    </div>
                    {props.hasImage == "True" ? <img className="ProjImg" id="ProjImg" src={props.image} alt="ProjImg" /> : <video className="ProjVid" id="ProjVid" src={props.vid}> loop</video>}
                    <div className="ProjText">{props.ProjText}</div>
                    <div className="ProjInfo">{props.ProjInfo}</div>
                </div>
        </>
    )
}