function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input is not an array");
        }

        const filteredArray = mixedArray.filter(item => typeof item === 'string');
        const lowerCasedArray = filteredArray.map(item => item.toLowerCase());

        resolve(lowerCasedArray);
    });
}

const mixedArray = ['PIZZA', 10, true, 25, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));
