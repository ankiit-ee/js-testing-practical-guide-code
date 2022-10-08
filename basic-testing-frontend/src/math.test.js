import {expect, it} from 'vitest';
import {add} from './math'

it('should summarize all number values in an array', () => {
    // Arrange
    const args = [1,3,5]

    // Act
    const result = add(args);

    // Assert
    expect(result).toBe(9);
});

it('should yield NaN if atleast one invalid number is provided', () => {
    const args = ['invalid', 1];
    const response = add(args);
    expect(response).toBeNaN();
});

it('should yeild a correct sum if an array of numeric string values is provided', () => {
    const args = ['1', '2']

    const response = add(args);

    const expectedResult = args.reduce((prev, cur) => +prev + +cur, 0);

    expect(response).toBe(expectedResult);
});

it('should throw an error if no value is passed into the function', () => {
    const response = () => {
        add();
    };
    expect(response).toThrow();
})