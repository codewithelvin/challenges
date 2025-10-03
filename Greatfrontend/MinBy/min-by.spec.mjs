import minBy from './min-by.js';

describe('minBy', () => {
  it('empty input array', () => {
    expect(minBy([], () => {})).toEqual(undefined);
  });

  it('one element', () => {
    expect(minBy([{ n: 1 }], (o) => o.n)).toEqual({ n: 1 });
  });

  it('two elements', () => {
    expect(minBy([{ n: 1 }, { n: 2 }], (o) => o.n)).toEqual({ n: 1 });
    expect(
      minBy(
        [{ data: { score: 20 } }, { data: { score: 10 } }],
        (o) => o.data.score,
      ),
    ).toEqual({ data: { score: 10 } });
  });

  it('multiple elements', () => {
    expect(minBy([2, 3, 1, 4], (num) => num)).toEqual(1);
    expect(minBy([{ n: 1 }, { n: 2 }, { n: 3 }], (o) => o.n)).toEqual({
      n: 1,
    });
  });

  it('strings comparison', () => {
    expect(
      minBy(['apricot', 'pear', 'apple', 'banana'], (fruit) => fruit),
    ).toEqual('apple');
    expect(minBy(['apple', 'pear', 'banana'], (fruit) => fruit.length)).toEqual(
      'pear',
    );
  });

  describe('non-existent property', () => {
    it('no match', () => {
      expect(minBy([{ n: 1 }, { n: 2 }], (o) => o.m)).toEqual(undefined);
    });

    it('partial match', () => {
      expect(minBy([{ n: 1 }, { n: 2, m: 3 }, { m: 4 }], (o) => o.m)).toEqual({
        n: 2,
        m: 3,
      });
    });
  });

  it('first minimum occurrence', () => {
    expect(
      minBy(
        [{ n: 1, m: 3 }, { n: 0, m: 2 }, { n: 2 }, { n: 0 }],
        (o) => o.m,
      ),
    ).toEqual({ n: 0, m: 2 });
  });

  it('mixed data types', () => {
    expect(minBy([1, '2', 3], (item) => Number(item))).toEqual(1);
    expect(minBy([4, '2', 3, 2], (item) => Number(item))).toEqual('2');
    expect(minBy(['1', 2, 3, '-1'], (item) => Number(item))).toEqual('-1');
  });
});