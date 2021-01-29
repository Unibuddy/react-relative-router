interface ToObj {
  pathname: string;
}

type To = string | ToObj;

export default function getToProp(baseUrl = '', to: To) {
  if (to !== null && typeof to === 'object') {
    return {
      ...to,
      pathname: `${baseUrl}${to.pathname}`,
    };
  }
  return `${baseUrl}${to}`;
}
