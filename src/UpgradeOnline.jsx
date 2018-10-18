import jsonFormat from 'json-format';
import React, { Component } from 'react';
import { updatePackageJSON } from './utils/api';
import { Container, Editor, RowEditor } from './utils/elements';

const initPkg = { dependencies: { 'babel-eslint': '^1.0.0' } };

class UpgradeOnline extends Component {
  state = {
    currentPkg: initPkg
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

  handleChange = (editor, data, value) => {
    this.setState({ currentPkg: value });
  };

  handleFormat = json => jsonFormat(json, { type: 'space', size: 2 });

  render() {
    const { currentPkg } = this.state;

    return (
      <Container>
        <RowEditor>
          <Editor
            value={this.handleFormat(initPkg)}
            onChange={this.handleChange}
          />
          <Editor
            value={this.handleFormat(this.updatePkg(currentPkg))}
            readOnly
          />
        </RowEditor>
      </Container>
    );
  }
}

export default UpgradeOnline;
