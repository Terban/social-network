import React from "react";
import { create } from "react-test-renderer";
import Status from "./Status";

describe("Status component", () => {

    test("The label is displayed", () => {
        const component = create(<Status status="New status for test" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("New status for test");
    });

    test("<label> is displayed", () => {
        const component = create(<Status status="New status for test" />);
        const instance = component.root;
        const label = instance.findByType("label");
        expect(label).not.toBeNull();
    });

    test("the status is correct", () => {
        const component = create(<Status status="New status for test" />);
        const instance = component.root;
        const label = instance.findByType("label");
        expect(label.props.children).toBe("New status for test");
    });

    test("input is not displayed", () => {
        const component = create(<Status status="New status for test" />);
        const instance = component.root;
        expect(() => {const input = instance.findByType("input")})
            .toThrow();
    });

    test("switch to editMode", () => {
        const component = create(<Status status="New status for test" />);
        const instance = component.root;
        const label = instance.findByType("label");
        label.props.onDoubleClick()
        const input = instance.findByType("input")
        expect(input).not.toBeNull();
    });

    test("callback called", () => {
        const mockCallback = jest.fn()
        const component = create(<Status status="New status for test" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});