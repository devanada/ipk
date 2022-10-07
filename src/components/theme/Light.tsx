import { FC } from "react";
import { createUseDisableImportedStyles } from "./useDisableImportedStyles";
import "github-markdown-css/github-markdown-light.css";

const useDisableImportedStyles = createUseDisableImportedStyles();

const Theme: FC<{}> = () => {
  useDisableImportedStyles();
  return <></>;
};

export default Theme;
