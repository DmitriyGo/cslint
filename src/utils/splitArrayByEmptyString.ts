const splitArrayByEmptyString = (arr: string[]) => {
    const result = [];
    let tempArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '') {
            result.push(tempArr);
            tempArr = [];
        } else {
            tempArr.push(arr[i]);
        }
    }

    if (tempArr.length > 0) {
        result.push(tempArr);
    }

    return result;
}

export default splitArrayByEmptyString