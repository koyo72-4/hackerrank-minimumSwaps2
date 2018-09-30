function minimumSwaps(arr) {
    let array = arr.slice(0);
    let sortedArray = arr.sort((a, b) => a - b);
    let swaps = 0;

    let sortedArrayIndices = sortedArray.reduce((objectOfIndices, number, index) => {
        objectOfIndices[number] = index;
        return objectOfIndices;
    }, {});

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] !== array[i]) {
            let swapOut = sortedArray[i];
            let swapIn = array[i];
            sortedArray[i] = swapIn;
            sortedArray[sortedArrayIndices[swapIn]] = swapOut;
            sortedArrayIndices[swapOut] = sortedArrayIndices[swapIn];
            sortedArrayIndices[swapIn] = i;
            swaps++;
        }
    }
    return swaps;
}