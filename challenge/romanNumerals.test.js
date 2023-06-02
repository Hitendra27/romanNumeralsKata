import { romanNumerals } from "./romanNumerals";

describe('romanNumerals', () => {

    test("it throws an error if no number is passed", () => {
        expect(() => {
            romanNumerals();
        }).toThrow("number is required")
    });
    
    test('return any given input of number to roman numbers', () => {
        // Arrange
        const expected = 'II';

        // Act
        const result = romanNumerals(2)

        // Assert
        expect(result).toBe(expected)
    });
})








// import { sumMultiples, isValidDNA, getComplementaryDNA, isItPrime, createMatrix, areWeCovered } from '../challenges/exercise006';

// describe('sumMultiples', () => {
// 	test('returns the sum of any numbers which are a multiple of 3 or 5', () => {
// 		// Arrange
// 		const expected = 8;

// 		// Act
// 		const result = sumMultiples([1, 3, 5]);

// 		// Assert
// 		expect(result).toBe(expected);
// 	});