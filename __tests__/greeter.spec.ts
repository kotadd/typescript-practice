import { greeter } from '../src/greeter';

it('should do greeting to Kent Beck', () => {
  const person = {
    firstName: 'Kent',
    lastName: 'Beck'
  };

  const result = greeter(person);

  expect(result).toEqual('Hello, Kent Beck');
});
