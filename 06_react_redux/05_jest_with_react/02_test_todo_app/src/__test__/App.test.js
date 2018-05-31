import React from 'react';
import renderer from 'react-test-renderer';
import App from "../App";
import {shallow, configure} from "enzyme";


import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe("TodoList test ", () => {
	it("todo snapshots test root node ", () => {
		const component = renderer.create(<App />);
		let snapshot = component.toJSON();
		expect(snapshot).toMatchSnapshot();
	});

	it("snapshots: test first node of function addtask", () => {
		const component = renderer.create(<App />);
		let snapshot = component.toJSON();
		snapshot = snapshot.children[0].children[0].props.onSubmit;

		expect(snapshot).toMatchSnapshot();
	});

	it("Enzyme: add one task", () => {
		const component = shallow(<App />);
		// console.log("form: ", components.find("form").first().props());
		component.setState({newTask: "test New Task"});
		component.find("form").first().simulate("submit", { preventDefault() {} });

		expect(component.find("span").text()).toEqual("test New Task");
	});

	it("Enzyme: add more task when click button add", () => {
		const component = shallow(<App />);
		component.setState({newTask: "1 task"});
		component.find("form").first().simulate("submit", { preventDefault() {} });
		expect(component.find("li").length).toBe(1);
		component.setState({newTask: "2 task"});
		component.find("form").first().simulate("submit", { preventDefault() {} });
		expect(component.find("li").length).toBe(2);
		component.setState({newTask: "3 task"});
		component.find("form").first().simulate("submit", { preventDefault() {} });
		expect(component.find("li").length).toBe(3);
	});

	it("Enzyme: test checkbox when button delete appear", () => {
		const component = shallow(<App />);
		component.setState({newTask: "1 task"});
		component.find("form").first().simulate("submit", { preventDefault() {} });
		// console.log("checkobx: ", components.find("input").at(1).props());

		component.find("input").at(1).simulate("change");
		// console.log("checkobx: ", components.find("input").at(1).props());
		// console.log("button: ", components.find("button").props());
		// console.log(components.find("li").at(0).props());
		expect(component.find("input").length).toBe(3);
	});
})