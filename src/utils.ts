export const SECRET: string = '123134';

export const getPass = (name: string, age?: number | string): string => `${name}${age}`;