import skillsData from "../../skillsData";
import learningData from "../../learningData";
import Skill from "./Skill";

const MySkills = () => {
	const dataSkills = skillsData();
	const dataLearning = learningData();
	return (
		<div className="my-skills-wrapper">
			<h1>My Skills</h1>
			<div className="skill-components">
				{dataSkills.map((skillData) => (
					<Skill skillData={skillData} key={skillData.id} />
				))}
			</div>

			<h1>What I Plan to Learn</h1>
			<div className="skill-components">
				{dataLearning.map((skillData) => (
					<Skill skillData={skillData} key={skillData.id} />
				))}
			</div>
		</div>
	);
};

export default MySkills;
