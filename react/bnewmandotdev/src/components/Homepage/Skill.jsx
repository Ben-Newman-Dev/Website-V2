const Skill = (skillData) => {
	// console.log(skillData.skillData);
	return (
		<article>
			<h2>{skillData.skillData.header}</h2>
			<img src={skillData.skillData.imageSrc} alt={skillData.header} />
			<p>{skillData.skillData.body}</p>
		</article>
	);
};

export default Skill;
