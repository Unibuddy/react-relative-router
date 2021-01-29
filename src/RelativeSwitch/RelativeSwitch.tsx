import React, {FC} from "react";
import {matchPath, useLocation, useRouteMatch} from "react-router";
import useRelativeRouter from "../useRelativeRouter/useRelativeRouter";

const RelativeSwitch: FC = ({children}) => {
    const location = useLocation();
    const contextMatch = useRouteMatch();
    const {path: basePath} = useRelativeRouter();
    let element, match;

    React.Children.forEach(children, (child) => {
        if (match == null && React.isValidElement(child)) {
            element = child;

            const path = basePath + (child.props.path || child.props.from);

            match = path ? matchPath(location.pathname, {...child.props, path}) : contextMatch;
        }
    });

    return match ? React.cloneElement(element, {location, computedMatch: match}) : null;
};

export default RelativeSwitch;
