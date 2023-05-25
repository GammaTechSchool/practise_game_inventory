export const fill = (array) => {
    let result = [...array]
    for (let i = 0; i < 16; i++) {
        if (!array[i]) result.push(null)
    }
    return result
}