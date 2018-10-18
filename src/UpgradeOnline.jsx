import upgradeConfig from "babel-upgrade/lib/upgradeConfig";
import jsonFormat from "json-format";
import React, { Component } from "react";
import { updatePackageJSON } from "./utils/api";
import {
  Container,
  Editor,
  EditorContent,
  EditorHeader,
  Header,
  RowEditor,
  IconGithub
} from "./utils/elements";

const initPkg = {};
const initBabelrc = {};

class UpgradeOnline extends Component {
  state = {
    currentPkg: initPkg,
    currentBabelrc: initBabelrc
  };

  handleParse = json => {
    try {
      const newJson = JSON.parse(json);

      return newJson;
    } catch (error) {
      return {};
    }
  };

  updatePkg = packageString => {
    const pkg = this.handleParse(packageString);

    return updatePackageJSON(pkg);
  };

  updateBabelrc = babelString => {
    const pkg = this.handleParse(babelString);

    return upgradeConfig(pkg);
  };

  handleChangePkg = (editor, data, value) => {
    this.setState({ currentPkg: value });
  };

  handleChangeBabelrc = (editor, data, value) => {
    this.setState({ currentBabelrc: value });
  };

  handleFormat = json => jsonFormat(json, { type: "space", size: 2 });

  render() {
    const { currentPkg, currentBabelrc } = this.state;

    return (
      <Container>
        <Header>
          <span>Babel Upgrade Online</span>
          <a
            style={{ display: "flex" }}
            target="_blank"
            href="https://github.com/emersonlaurentino/babel-upgrade-online"
            title="Github"
          >
            <IconGithub />
          </a>
        </Header>
        <RowEditor>
          <EditorContent style={{ borderRight: "1px solid #ddd" }}>
            <EditorHeader>Input package.json</EditorHeader>
            <Editor
              value={this.handleFormat(initPkg)}
              onChange={this.handleChangePkg}
            />
          </EditorContent>
          <EditorContent>
            <EditorHeader>Output package.json</EditorHeader>
            <Editor
              value={this.handleFormat(this.updatePkg(currentPkg))}
              readOnly
            />
          </EditorContent>
        </RowEditor>
        <RowEditor style={{ borderTop: "1px solid #ddd" }}>
          <EditorContent style={{ borderRight: "1px solid #ddd" }}>
            <EditorHeader>Input .babelrc</EditorHeader>
            <Editor
              value={this.handleFormat(initBabelrc)}
              onChange={this.handleChangeBabelrc}
            />
          </EditorContent>
          <EditorContent>
            <EditorHeader>Output .babelrc</EditorHeader>
            <Editor
              value={this.handleFormat(this.updateBabelrc(currentBabelrc))}
              readOnly
            />
          </EditorContent>
        </RowEditor>
      </Container>
    );
  }
}

export default UpgradeOnline;
