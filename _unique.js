const unique = (array) => {
    // Only return unique values/remove duplicates
    let newArr = [];
    array.forEach(element => {
        if(!newArr.includes(element)) {
            newArr.push(element);
        }
    });
    console.log(newArr);
    return array.filter(item => item);
}

unique([5, 5, 3, 4, 2, 1, 5, 4, 3, 4]);