import { romanNumerals } from "./romanNumerals";

describe('romanNumerals', () => {

    test("it throws an error if no number is passed", () => {
        expect(() => {
            romanNumerals();
        }).toThrow("number is required")
    });

    test('return any given input of number to roman numerals', () => {
        // Arrange
        const expected = 'II';

        // Act
        const result = romanNumerals(2);

        // Assert
        expect(result).toBe(expected);
    });

    test('return roman numerals for the number 8', () => {
        // Arrange
        const expected = 'VIII';

        // Act
        const result = romanNumerals(8);

        // Assert
        expect(result).toBe(expected);
    });

    test('return roman numerals for the number 10', () => {
        // Arrange
        const expected = 'X';

        // Act
        const result = romanNumerals(10);

        // Assert
        expect(result).toBe(expected);
    });

    test('return roman numerals for the number 18', () => {
        // Arrange
        const expected = 'XVIII';

        // Act
        const result = romanNumerals(18);

        // Assert
        expect(result).toBe(expected);
    });

    test('return roman numerals for the number 29', () => {
        // Arrange
        const expected = 'XXIX';

        // Act
        const result = romanNumerals(29);

        // Assert
        expect(result).toBe(expected);
    });

    test('return roman numerals for the number 50', () => {
        // Arrange
        const expected = 'L';

        // Act
        const result = romanNumerals(50);

        // Assert
        expect(result).toBe(expected);
    });

    test('return roman numerals for the number 67', () => {
        // Arrange
        const expected = 'LXVII';

        // Act
        const result = romanNumerals(67);

        // Assert
        expect(result).toBe(expected);
    });

    test('return roman numerals for the number 100', () => {
        // Arrange
        const expected = 'C';

        // Act
        const result = romanNumerals(100);

        // Assert
        expect(result).toBe(expected);
    });

    test('return roman numerals for the number 1987', () => {
        // Arrange
        const expected = 'MCMLXXXVII';

        // Act
        const result = romanNumerals(1987);

        // Assert
        expect(result).toBe(expected);
    });

    test('return roman numerals for the number 2023', () => {
        // Arrange
        const expected = 'MMXXIII';

        // Act
        const result = romanNumerals(2023);

        // Assert
        expect(result).toBe(expected);
    });


});






