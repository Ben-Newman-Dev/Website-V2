import { v4 as uuidv4 } from "uuid";

const getData = () => {
	return [
		{
			header: "Test",
			imageSrc: "https://via.placeholder.com/135x135.png",
			body: "lorem ipsum",
			id: uuidv4(),
		},
		{
			header: "Test",
			imageSrc: "https://via.placeholder.com/135x135.png",
			body: "lorem ipsum",
			id: uuidv4(),
		},
		{
			header: "Test",
			imageSrc: "https://via.placeholder.com/135x135.png",
			body: "lorem ipsum",
			id: uuidv4(),
		},
		{
			header: "Test",
			imageSrc: "https://via.placeholder.com/135x135.png",
			body: "lorem ipsum",
			id: uuidv4(),
		},
	];
};

export default getData;
