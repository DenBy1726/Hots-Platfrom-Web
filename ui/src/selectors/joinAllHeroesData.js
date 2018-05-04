/**
 * Created by Denis on 04.05.2018.
 */
const joinAllHeroesData = (hero) => {
    let result = [];
    Object.entries(hero).map(entry => {
        if(entry[1].length !== undefined) {
            entry[1].forEach(item => {
                result[item.id] = {...result[item.id], ...item};
            });
        }
    });
    return result;
};

export default joinAllHeroesData;