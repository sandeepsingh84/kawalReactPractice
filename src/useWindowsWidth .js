import { useEffect, useState } from "react";
// console.log("window.removeEventListener", window.removeEventListener);
const useWindowsWidth = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  let checkWindowScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 880);
  };
  useEffect(() => {
    checkWindowScreenSize();
    window.addEventListener("resize", checkWindowScreenSize);
    return () => window.removeEventListener("resize", checkWindowScreenSize);
  }, []);

  return isSmallScreen;
};

export default useWindowsWidth;
