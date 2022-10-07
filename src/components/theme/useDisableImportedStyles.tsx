import { useEffect } from "react";

const switchableGlobalStyleSheets: StyleSheet[] = [];

type useDisableImportedStyles = () => void;

export const createUseDisableImportedStyles = (
  immediatelyUnloadStyle: boolean = true
): useDisableImportedStyles => {
  let localStyleSheet: StyleSheet;
  return () => {
    useEffect(() => {
      if (document.styleSheets.length < 1) return;

      if (localStyleSheet == null) {
        localStyleSheet = document.styleSheets[document.styleSheets.length - 1];
        switchableGlobalStyleSheets.push(localStyleSheet);
      }

      if (!immediatelyUnloadStyle) {
        switchableGlobalStyleSheets.forEach(
          (styleSheet) => (styleSheet.disabled = true)
        );
      }

      localStyleSheet.disabled = false;

      if (immediatelyUnloadStyle)
        return () => {
          if (localStyleSheet != null) localStyleSheet.disabled = true;
        };
    });
  };
};
