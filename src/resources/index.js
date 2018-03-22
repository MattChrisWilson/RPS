export const generateRandomNumber = (minVal = 0, maxVal = 10) => {
	return new Promise((res, rej) => {
		// Test the values passed are integers
		const valid = [minVal, maxVal].reduce((valid, val) => valid && !Number.isInteger(val*1) ? false : valid, true)
		if(!valid) return rej('Incorrect values passed to function')
		
		// Ensure the maxVal is greater than the minVal
		if(minVal >= maxVal) return rej('The minVal must be less than the maxVal')

		// Multiply the random number by the difference between min and max
		// Increment maxVal before subtracting the minVal in order to include the upperbound number given that we're using floor
		return res(Math.floor(Math.random() * (++maxVal - minVal)) + minVal)			
	})
}