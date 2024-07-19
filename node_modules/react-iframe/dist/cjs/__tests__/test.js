"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const iframe_1 = __importDefault(require("../iframe"));
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
test("Render default iframe", () => {
    const component = react_test_renderer_1.default.create(react_1.default.createElement(iframe_1.default, { position: "relative", url: "http://www.foo.com", src: "http://www.foobar.com" }));
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
test("Render iframe with title", () => {
    const component = react_test_renderer_1.default.create(react_1.default.createElement(iframe_1.default, { position: "relative", title: "A foobared iframe", url: "http://www.foobar.com", src: "http://www.foo.com", ariaHidden: true, ariaLabel: "someLabel", ariaLabelledby: "someId", allow: "encrypted-media", sandbox: "allow-scripts", allowFullScreen: false, className: "myIframeClass", frameBorder: 0, overflow: "auto", loading: "eager", onLoad: () => { console.log("hello"); }, onMouseOut: () => { console.log("goodbye"); }, onMouseOver: () => { console.log("hi"); }, display: "block", id: "myIframeId", name: "My Iframe name", scrolling: "yes", styles: { background: "red" }, target: "_self" }));
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
test("Render with allowFullScreen bool", () => {
    const component = react_test_renderer_1.default.create(react_1.default.createElement(iframe_1.default, { allowFullScreen: false, allow: "fullscreen", frameBorder: 1, url: "http://www.foobar.com" }));
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
test("Render with allow attribute", () => {
    const component = react_test_renderer_1.default.create(react_1.default.createElement(iframe_1.default, { allowFullScreen: true, allow: "fullscreen autoplay", frameBorder: 1, url: "http://www.foobar.com" }));
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
