import { generateRandomNumber } from './'

describe('generateRandomNumber()', () => {
	it('Generates number given no input', () => {
		expect.assertions(1)
		return expect(generateRandomNumber()).resolves.toBeGreaterThanOrEqual(1)
	})

	it('Generates number given numeric minVal input', () => {
		expect.assertions(1)
		return expect(generateRandomNumber(4)).resolves.toBeGreaterThanOrEqual(4)
	})

	it('Generates number given numeric minVal input', () => {
		expect.assertions(1)
		return expect(generateRandomNumber(-4)).resolves.toBeGreaterThanOrEqual(-4)
	})

	it('Generates number given numeric minVal and maxVal input', () => {
		expect.assertions(2)
		return generateRandomNumber(4, 6).then(resp => {
			expect(resp).toBeGreaterThanOrEqual(4)
			expect(resp).toBeLessThanOrEqual(6)
		})
	})

	it('Fails gracefully if non-numeric passed', () => {
		expect.assertions(1)
		return expect(generateRandomNumber('a')).rejects.toMatch('Incorrect values passed to function')
	})

	it('Fails gracefully if minVal is greater than maxVal', () => {
		expect.assertions(1)
		return expect(generateRandomNumber(6, 2)).rejects.toMatch('The minVal must be less than the maxVal')
	})

	it('Fails gracefully if minVal is greater than default maxVal', () => {
		expect.assertions(1)
		return expect(generateRandomNumber(10)).rejects.toMatch('The minVal must be less than the maxVal')
	})
})