import React from 'react';
import renderer from 'react-test-renderer';
import App from "../App";
// import {products} from "../index";
import {shallow, configure} from "enzyme";


import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


const products =
	[
		{ "decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99 },
		{ "decathlon_id": 8354464, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
		{ "decathlon_id": 8380024, "title": "RUN ELIOPRIME", "price": 54.99 },
		{ "decathlon_id": 8379970, "title": "Pantalon Gym", "price": 12.99 },
		{ "decathlon_id": 8247793, "title": "PALMES WADERS", "price": 24.99 },
		{ "decathlon_id": 8357549, "title": "MINIMIZER EDEN UNI  NOIR", "price": 19.99 },
		{ "decathlon_id": 8326155, "title": "Pantalon Training mesh marine", "price": 44.99 },
		{ "decathlon_id": 8329121, "title": "COUTEAU A PALOURDES", "price": 4.99 },
		{ "decathlon_id": 8370749, "title": "Doudoune Hike 100 garçon bleu", "price": 9.99 },
		{ "decathlon_id": 8298354, "title": "OREILLER CONFORT", "price": 6.99 },
		{ "decathlon_id": 8044622, "title": "2 guêtres RIDING noir", "price": 14.99 },
		{ "decathlon_id": 8249674, "title": "BOBINE FUN 2 3 4mm X 40 20 12m", "price": 6.99 },
		{ "decathlon_id": 8353265, "title": "Justaucorps manche longue Gym.", "price": 34.99 }
	]



test('Snapshot test: onClick()', () => {
	const component = renderer.create(<App lines={products}/>);

	let snapshot = component.toJSON();
	expect(snapshot).toMatchSnapshot();

	snapshot.children[0].children[0].children[0].props.onClick();
	snapshot = component.toJSON();
	expect(snapshot).toMatchSnapshot();

	snapshot.children[0].children[0].children[1].props.onClick();
	snapshot = component.toJSON();
	expect(snapshot).toMatchSnapshot();

	snapshot.children[0].children[0].children[2].props.onClick();
	snapshot = component.toJSON();
	expect(snapshot).toMatchSnapshot()
});

describe("Enzyme shallow", () => {
	it("Shallow test: onClick()", () => {
		const component = shallow(<App lines={products}/>);
		console.log("component: ", component.find("td").first().props());
		console.log("state: ", component.state().reverseSort);

		component.find("th").first().simulate("click");
		component.setState({reverseSort: false });
		console.log("state after: ", component.state().reverseSort);
		expect(component.find("td").first().props().children.toString()).toEqual("8044622");
	});
});

