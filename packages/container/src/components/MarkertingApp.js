import React, { useEffect, useRef } from "react";
import { mount as marketingMount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = marketingMount(ref.current, {
      // This function is called when the user navigates from one page to another
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname: currentPathname } = history.location;
        if (currentPathname !== nextPathname) {
          // nextPathname is the path that the user is trying to navigate to
          history.push(nextPathname);
        }
      },
      initialPath: history.location.pathname,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
