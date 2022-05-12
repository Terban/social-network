import React from "react";
import { create } from "react-test-renderer";
import Pagination from "./Pagination";

describe("Pagination component", () => {
    test("6 pages are shown", () => {
        const component = create(<Pagination totalItemsCount={20} pageSize={2} portionSize={5}/>);
        const instance = component.root;
        const div = instance.findAllByType("div");
        expect(div.length).toBe(6);
    });

    test("if pages count is more then 10 button NEXT should be present", () => {
        const component = create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        let button = root.findAllByType("button");
        expect(button.length).toBe(1);
    });
});