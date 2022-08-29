import { useMediaQuery } from "@react-hook/media-query";
import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mediaquery = useMediaQuery(`only screen and (max-width: 1000px)`);

  useEffect(() => {
    setIsMobile(mediaquery);
  }, [mediaquery]);
  return isMobile;
};

export default useIsMobile;
