import React from 'react';
import { UnControlled } from 'react-codemirror2';
require('codemirror/mode/javascript/javascript');
require('codemirror/lib/codemirror.css');

const CodeMirror = ({
  value,
  onChange,
  className,
  mode = 'javascript',
  readOnly = false
}) => (
  <UnControlled
    className={className}
    readOnly
    value={value}
    options={{ mode, readOnly, lineNumbers: true }}
    onChange={onChange}
  />
);

export default CodeMirror;
