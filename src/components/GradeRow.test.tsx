import * as React from "react";

import { createRenderer, ShallowRenderer } from "react-test-renderer/shallow";

import TableRow from "@material-ui/core/TableRow";

import { GradeRow } from "./GradeRow";

describe("<GradeRow />", () => {
  let renderer: ShallowRenderer;

  beforeEach(() => {
    renderer = createRenderer();
  });

  it("should render correctly", () => {
    const content = ["제목", "2", "A+", "교수1", "교양필수"];
    renderer.render(
      <GradeRow
        subject={content[0]}
        grade={content[1]}
        mark={content[2]}
        professor={content[3]}
        div={content[4]}
      />
    );
    const component = renderer.getRenderOutput();

    expect(component.type).toBe(TableRow);
    expect(component.props.children).toHaveLength(5);

    const tds = component.props.children;

    tds.forEach((v: React.ReactElement<any>, i: number) =>
      expect(v.props.children).toBe(content[i])
    );
  });
});
