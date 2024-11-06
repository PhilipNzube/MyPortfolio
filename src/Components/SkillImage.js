export default function SkillImage(props) {
    return (
        <>
            <div id="SkillParent">
                <img id="SkillImage" src={props.Image} alt="Skill Image" />
                <p id="SkillText">{props.SkillText}</p>
            </div>
        </>
    )
}