import React, { forwardRef, ForwardRefRenderFunction, useContext } from 'react';
import { Link } from 'react-router-dom';
import { RelativeRouterContext } from '../RelativeRouter/RelativeRouter';
import getToProp, { To } from '../getToProp';

/**
 * RelativeLink appends the `to` prop to the pah from the RelativeRouterContext.
 * It can be used outside of the RelativeRouter, in that case it will behave like the
 * normal Link component.
 *
 * @export
 * @param {*} {to, children, ...props}
 * @returns
 */
const RelativeLink: ForwardRefRenderFunction<any, { to: To }> = (
  { to, children, ...props },
  ref
) => {
  const { url } = useContext(RelativeRouterContext);
  return (
    <Link ref={ref} to={getToProp(url, to)} {...props}>
      {children}
    </Link>
  );
};

export default forwardRef(RelativeLink);
