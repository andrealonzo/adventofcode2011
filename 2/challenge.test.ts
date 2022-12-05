import {createCalculator} from './challenge'

test('sample input 1', () => {
    const expected = 150
    const input = "forward 5\n" +
        "down 5\n" +
        "forward 8\n" +
        "up 3\n" +
        "down 8\n" +
        "forward 2"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})
test('sample input 2', () => {
    const expected = 900
    const input = "forward 5\n" +
        "down 5\n" +
        "forward 8\n" +
        "up 3\n" +
        "down 8\n" +
        "forward 2"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})
test('just forward 2', () => {
    const expected = 0
    const input = "forward 5"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})

test('just forward  and down 2', () => {
    const expected = 0
    const input = "forward 5\n" +
        "down 5\n"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})

test('forward, down, then forward 2', () => {
    const expected = 520
    const input = "forward 5\n" +
        "down 5\n" +
        "forward 8"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})