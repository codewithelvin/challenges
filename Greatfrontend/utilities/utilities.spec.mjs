import {
  isBoolean,
  isNumber,
  isNull,
  isString,
  isSymbol,
  isUndefined,
} from './utilities.js';

describe('type-utilities', () => {
  describe('isBoolean', () => {
    it('true', () => {
      expect(isBoolean(true)).toBe(true);
    });

    it('false', () => {
      expect(isBoolean(false)).toBe(true);
    });

    it('non-boolean', () => {
      expect(isBoolean('true')).toBe(false);
      expect(isBoolean([1, 2, 3])).toBe(false);
      expect(isBoolean(new Date())).toBe(false);
      expect(isBoolean(new Error())).toBe(false);
      expect(isBoolean({ a: 1 })).toBe(false);
      expect(isBoolean(/x/)).toBe(false);
      expect(isBoolean('a')).toBe(false);
      expect(isBoolean(null)).toBe(false);
      expect(isBoolean(undefined)).toBe(false);
      expect(isBoolean(1)).toBe(false);
      expect(isBoolean(NaN)).toBe(false);
      expect(isBoolean(Symbol('symbol'))).toBe(false);
    });
  });

  describe('isNumber', () => {
    it('numbers', () => {
      expect(isNumber(1)).toBe(true);
      expect(isNumber(0)).toBe(true);
      expect(isNumber(-2)).toBe(true);
      expect(isNumber(5)).toBe(true);
    });

    it('NaN', () => {
      expect(isNumber(NaN)).toBe(true);
    });

    it('non-numbers', () => {
      expect(isNumber('true')).toBe(false);
      expect(isNumber([1, 2, 3])).toBe(false);
      expect(isNumber(true)).toBe(false);
      expect(isNumber(false)).toBe(false);
      expect(isNumber(new Date())).toBe(false);
      expect(isNumber(new Error())).toBe(false);
      expect(isNumber({ a: 1 })).toBe(false);
      expect(isNumber(/x/)).toBe(false);
      expect(isNumber('a')).toBe(false);
      expect(isNumber(null)).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber(Symbol('symbol'))).toBe(false);
    });
  });

  describe('isNull', () => {
    it('null', () => {
      expect(isNull(null)).toBe(true);
    });

    it('undefined', () => {
      expect(isNull(undefined)).toBe(false);
    });

    it('non-null', () => {
      expect(isNull('true')).toBe(false);
      expect(isNull([1, 2, 3])).toBe(false);
      expect(isNull(true)).toBe(false);
      expect(isNull(false)).toBe(false);
      expect(isNull(new Date())).toBe(false);
      expect(isNull(new Error())).toBe(false);
      expect(isNull({ a: 1 })).toBe(false);
      expect(isNull(/x/)).toBe(false);
      expect(isNull('a')).toBe(false);
      expect(isNull(undefined)).toBe(false);
      expect(isNull(1)).toBe(false);
      expect(isNull(NaN)).toBe(false);
      expect(isNull(Symbol('symbol'))).toBe(false);
    });
  });

  describe('isString', () => {
    it('strings', () => {
      expect(isString('hello')).toBe(true);
      expect(isString('')).toBe(true);
      expect(isString('1234')).toBe(true);
    });

    it('non-string', () => {
      expect(isString([1, 2, 3])).toBe(false);
      expect(isString(true)).toBe(false);
      expect(isString(false)).toBe(false);
      expect(isString(new Date())).toBe(false);
      expect(isString(new Error())).toBe(false);
      expect(isString({ a: 1 })).toBe(false);
      expect(isString(/x/)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
      expect(isString(1)).toBe(false);
      expect(isString(NaN)).toBe(false);
      expect(isString(Symbol('symbol'))).toBe(false);
    });
  });

  describe('isSymbol', () => {
    it('symbols', () => {
      expect(isSymbol(Symbol('hello'))).toBe(true);
      expect(isSymbol(Symbol(2))).toBe(true);
    });

    it('non-symbols', () => {
      expect(isSymbol('true')).toBe(false);
      expect(isSymbol([1, 2, 3])).toBe(false);
      expect(isSymbol(true)).toBe(false);
      expect(isSymbol(false)).toBe(false);
      expect(isSymbol(new Date())).toBe(false);
      expect(isSymbol(new Error())).toBe(false);
      expect(isSymbol({ a: 1 })).toBe(false);
      expect(isSymbol(/x/)).toBe(false);
      expect(isSymbol('a')).toBe(false);
      expect(isSymbol(null)).toBe(false);
      expect(isSymbol(undefined)).toBe(false);
      expect(isSymbol(1)).toBe(false);
      expect(isSymbol(NaN)).toBe(false);
    });
  });

  describe('isUndefined', () => {
    it('undefined', () => {
      expect(isUndefined(undefined)).toBe(true);
    });

    it('null', () => {
      expect(isUndefined(null)).toBe(false);
    });

    it('non-undefined', () => {
      expect(isUndefined('true')).toBe(false);
      expect(isUndefined([1, 2, 3])).toBe(false);
      expect(isUndefined(true)).toBe(false);
      expect(isUndefined(false)).toBe(false);
      expect(isUndefined(new Date())).toBe(false);
      expect(isUndefined(new Error())).toBe(false);
      expect(isUndefined({ a: 1 })).toBe(false);
      expect(isUndefined(/x/)).toBe(false);
      expect(isUndefined('a')).toBe(false);
      expect(isUndefined(null)).toBe(false);
      expect(isUndefined(1)).toBe(false);
      expect(isUndefined(NaN)).toBe(false);
      expect(isUndefined(Symbol('symbol'))).toBe(false);
    });
  });
});