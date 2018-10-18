import styled from "styled-components";
import CodeMirror from "../CodeMirror";
import SvgGithub from "../SvgGithub";

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

export const EditorContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Editor = styled(CodeMirror)`
  flex: 1;
  overflow: auto;
`;

const HeaderBase = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
  align-items: center;
  font-weight: bold;
  padding: 0 15px;
  display: flex;
  flex: 1;
`;

export const EditorHeader = styled(HeaderBase)`
  background-color: #f7f7f7;
  border-bottom: 1px solid #dddddd;
  color: #666;
  font-size: 14px;
  min-height: 40px;
  max-height: 40px;
`;

export const Header = styled(HeaderBase)`
  background-color: #323330;
  color: #ffffff;
  font-size: 18px;
  justify-content: space-between;
  min-height: 50px;
  max-height: 50px;
`;

export const IconGithub = styled(SvgGithub)`
  color: #ffffff;

  &:hover {
    color: #dddddd;
  }
`;
