const SubMenu = () => {
	const getData = () => {
		return [
			{
				title: "Test",
				key: 1,
			},
			{
				title: "adsasd",
				key: 2,
			},
			{
				title: "adsasd",
				key: 3,
			},
			{
				title: "adsasd",
				key: 4,
			},

			{
				title: "adsasd",
				key: 5,
			},
			{
				title: "adsasd",
				key: 6,
			},
		];
	};

	const data = getData();

	return (
		<div className="devdiary-submenu">
			<a href="/devdiary">Recent</a>
			<div className="submenu">
				{data.map((x) => {
					return <a href="/devdiary">{x.title}</a>;
				})}
			</div>
		</div>
	);
};

export default SubMenu;
