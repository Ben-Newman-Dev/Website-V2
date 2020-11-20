import Main from "../components/DevDiary/Main";
import SubMenu from "../components/DevDiary/SubMenu";
import Footer from "../components/Global/Footer";
import Navigation from "../components/Global/Navigation";
import "../Styles/devdiary/styles.scss";

const DevDiary = () => {
	return (
		<>
			<Navigation />
			<SubMenu />
			<Main />
			<Footer />
		</>
	);
};

export default DevDiary;
