import React, { FC, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { RelativeRouterContext } from '../RelativeRouter/RelativeRouter';
import getToProp, { To } from '../getToProp';

/**
 * RelativeRedirect appends the `to` prop to the pah from the RelativeRouterContext.
 * It can be used outside of the RelativeRouter, in that case it will behave like the
 * normal Link component.
 *
 * @export
 * @param {*} {to, children, ...props}
 * @returns
 */
const RelativeRedirect: FC<{ to: To }> = ({ to, children, ...props }) => {
  const { url } = useContext(RelativeRouterContext);
  return <Redirect to={getToProp(url, to)} {...props} from={url} />;
};

export default RelativeRedirect;
