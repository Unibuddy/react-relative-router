import getToProp from './getToProp';

test('when to is an object it clones the object and prepends the path to the pathname', () => {
  const result = getToProp('/test', {
    randomProp: 'hello',
    pathname: '/hello',
  });

  expect(result).toEqual({
    randomProp: 'hello',
    pathname: '/test/hello',
  });
});

test('when to is a string it clones the object and prepends the path to the string', () => {
  const result = getToProp('/test', '/hello');

  expect(result).toEqual('/test/hello');
});
