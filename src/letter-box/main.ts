const map = new Map<string, number>();

const splitNumber = (num: number) => {
    if (!num) return;
    const key = `${num % 10}`;
    const value = map.has(key) ? (map.get(key) || 0) + 1 : 1;
    map.set(key, value);
    num = Math.trunc(num / 10);
    splitNumber(num);
};

export const letterBox = (start = 0, end = 0) => {
    for (let i = start; i <= end; i++) splitNumber(i);
    const result = new Array<number>(map.size);
    for (let i = 0; i <= map.size; i++) result[i] = map.get(`${i}`) || 0;
    return result;
};
