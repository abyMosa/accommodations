export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const isNumberInRange = (x, minMax) => {
    return x >= minMax[0] && x <= minMax[1];
}

export const IsNumberInAnyRanges = (x, rangesAr) => {
    let isInRange = false;
    rangesAr.forEach(range => {
        if(isNumberInRange(x, range))
            isInRange = true;
    });

    return isInRange;
}



// export const getObjMinMax = (arr, property) => {
//     let min = arr.reduce((min, arr) => arr[property] < min ? arr[property] : min, arr[0][property]);
//     let max = arr.reduce((max, arr) => arr[property] > max ? arr[property] : max, arr[0][property]);
//     return [min, max];
// }
// export const setOptions = (arr, minMax, type) => {
//     let options = [];
//     console.log(minMax);
//     let multiplier = (minMax[1] - minMax[0]) / 5;
//     // console.log(Math.ceil(multiplier));

//     for (let i = 0; i < 5; i++) {
//         let x = i === 0? 0 : (i* multiplier) +1;
//         let y = minMax[0] > 0 ? (multiplier*(i+1) ) + minMax[0]: multiplier*(i+1);
//         options.push({ range: [x, y], list: [], label: x + " - "+ y});
//     }

//     console.log(arr.map(d =>d[type]));
//     // let test = arr.map(d => {
//     //     // d[type]

//     // });   

//     return options;
// }