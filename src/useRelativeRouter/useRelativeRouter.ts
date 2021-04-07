import { useContext, useMemo } from 'react';
import { useHistory } from 'react-router';
import { RelativeRouterContext } from '../RelativeRouter/RelativeRouter';
import getToProp from '../getToProp';
import getPathProp from '../getPathProp';

/**
 * This hook allows the use of programmatic functions from react-router
 * but within the RelativeRouter scope. Meaning if you set `<RelativeRouter match={{path: "/test"}}>`
 * somewhere up the tree, calling push function with `push("/hello")` from this hook will
 * append hello to test and call the react-router push with "/test/hello" url.
 *
 * @export
 * @returns
 */
export default function useRelativeRouter() {
  const { path, url: baseUrl } = useContext(RelativeRouterContext);
  const history = useHistory();
  const value = useMemo(
    () => ({
      push: (url: string, state?: unknown) => {
        return history.push(`${baseUrl}${url}`, state);
      },
      path,
      url: baseUrl,
      getTo: (url: string) => getToProp(baseUrl, url),
      getPath: (url: string) => getPathProp(path, url),
    }),
    [history, path, baseUrl]
  );

  return value;
}
