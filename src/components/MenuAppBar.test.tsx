import * as React from "react";

import * as TestUtils from "react-dom/test-utils";
import * as TestRenderer from "react-test-renderer";

import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import MenuAppBar from "./MenuAppBar";

type ReactTestInstance = TestRenderer.ReactTestInstance;

describe("<MenuAppBar />", () => {
  it("should render correctly when auth is false", () => {
    const instance = TestRenderer.create(<MenuAppBar auth={false} />);
    const component = instance.root;

    expect(component.type).toBe(MenuAppBar);

    const toolbar = component.findByType(Toolbar);
    expect(toolbar).toBeTruthy();
    expect(toolbar.children).toHaveLength(1);

    const childOfToolbar = toolbar.children[0] as ReactTestInstance;
    const div = childOfToolbar.children[0] as ReactTestInstance;

    expect(childOfToolbar.children).toHaveLength(1);
    expect(div.type).toBe("div");

    expect(div.children).toHaveLength(1);
    expect((div.children[0] as ReactTestInstance).type).toBe(Typography);
  });

  it("should render correctly when auth is true", () => {
    const instance = TestRenderer.create(<MenuAppBar auth={true} />);
    const component = instance.root;

    expect(component.type).toBe(MenuAppBar);

    const toolbar = component.findByType(Toolbar);
    expect(toolbar).toBeTruthy();
    expect(toolbar.children).toHaveLength(1);

    const childOfToolbar = toolbar.children[0] as ReactTestInstance;
    const div = childOfToolbar.children[0] as ReactTestInstance;

    expect(childOfToolbar.children).toHaveLength(1);
    expect(div.type).toBe("div");

    expect(div.children).toHaveLength(2);
    expect((div.children[0] as ReactTestInstance).type).toBe(Typography);
    expect((div.children[1] as ReactTestInstance).type).toBe("div");
  });

  it("check HandleLogout", () => {
    const mockHandleLogout = jest.fn();
    const instance = TestUtils.renderIntoDocument(
      <MenuAppBar auth={true} handleLogout={mockHandleLogout} />
    ) as React.Component;

    const menuItem = TestUtils.scryRenderedDOMComponentsWithClass(
      instance,
      "MenuItem"
    );
  });
});
