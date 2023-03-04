import ErrorRepository from '../js/error-repository';

const errors = new ErrorRepository();

test('translate error code', () => {
  const errorMessage = errors.translate(2);
  expect(errorMessage).toBe('Error 2');
});

test('translate unknown error code', () => {
  const errorMessage = errors.translate(3);
  expect(errorMessage).toBe('Unknown error');
});
