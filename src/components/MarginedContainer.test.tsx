import * as React from "react";

import { createRenderer, ShallowRenderer } from "react-test-renderer/shallow";

import StyledMarginedContainer, {
  MarginedContainer
} from "./MarginedContainer";

describe("<MarginedContainer />", () => {
  let renderer: ShallowRenderer;

  beforeEach(() => {
    renderer = createRenderer();
  });

  it("should render correctly", () => {
    renderer.render(
      <StyledMarginedContainer>
        <div>Hello, World!</div>
      </StyledMarginedContainer>
    );
    const component = renderer.getRenderOutput();

    expect(component.type).toBe(MarginedContainer);

    // check children
    expect(component.props.children.type).toBe("div");
    expect(component.props.children.props.children).toBe("Hello, World!");
  });
});
