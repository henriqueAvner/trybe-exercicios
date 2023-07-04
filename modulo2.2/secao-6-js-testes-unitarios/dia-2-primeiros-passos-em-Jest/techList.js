const techList = (arrayTecnologies, name) => {
    if (arrayTecnologies.length === 0) return 'Vazio!';
    const sortedArray = arrayTecnologies.sort();
    const technologyList = [];
    for (let index = 0; index < sortedArray.length; index += 1) {
        technologyList.push({
            tech: sortedArray[index],
            name,
        });
    }
    return technologyList;
}














module.exports = techList;