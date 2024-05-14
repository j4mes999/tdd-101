import { sum, subtract, multiply, divide } from './calculator';

test('Sum two numbers', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Substarct two numbers', () => {
    expect(subtract(40, 20)).toBe(20);
});

test('Multiply two numbers', () => {
    expect(multiply(10, 12)).toBe(120);
});

test('Divide two numbers', () => {
    expect(divide(10, 2)).toBe(5);
});