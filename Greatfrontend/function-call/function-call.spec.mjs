import './function-call.js';

describe('Function.prototype.myCall', () => {
  const person = {
    name: 'John',
  };

  function getName() {
    return this.name;
  }

  function sum(...args) {
    return args.reduce((acc, num) => acc + num, 0);
  }

  function greeting(prefix, message) {
    return `${prefix} ${this.name}, ${message}`;
  }

  it('Function.prototype.myCall is a function', () => {
    expect(typeof Function.prototype.myCall).toBe('function');
  });

  it('`this` is bound', () => {
    expect(getName.myCall(person)).toEqual('John');
  });

  describe('without `this`', () => {
    it('single parameter', () => {
      expect(sum.myCall(null, 1)).toBe(1);
    });

    it('two parameters', () => {
      expect(sum.myCall(null, 1, 2)).toBe(3);
    });

    it('three parameters', () => {
      expect(sum.myCall(null, 1, 2, 3)).toBe(6);
    });
  });

  it('`this` and parameters', () => {
    expect(greeting.myCall(person, 'Hello', 'how are you?')).toEqual(
      'Hello John, how are you?',
    );
  });
});