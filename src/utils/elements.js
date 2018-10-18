import styled from 'styled-components';
import CodeMirror from '../CodeMirror';

export const Container = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const RowEditor = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

export const Editor = styled(CodeMirror)`
  flex: 1;
`;