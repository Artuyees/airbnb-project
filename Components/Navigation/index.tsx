import React, { Fragment } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import MobileBottomNav from "./MobileBottomNav";

type Props = {
  isSmallScreen: boolean;
};

const Navigation = (props: Props) => {
  const { isSmallScreen } = props;
  return (
    <Fragment>
      {isSmallScreen ? (
        <DesktopNav />
      ) : (
        <Fragment>
          <MobileNav />
          <MobileBottomNav />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Navigation;
