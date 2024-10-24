function findLargestElement(numbers) {
    let biggestElement = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > biggestElement) {
            biggestElement = numbers[i];
        }
        
    }
    return biggestElement;
}
module.exports = findLargestElement;