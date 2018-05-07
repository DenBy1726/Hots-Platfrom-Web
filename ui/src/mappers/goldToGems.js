/**
 * Created by Denis on 07.05.2018.
 */
const goldToGems = (gold)=> {
    switch(gold){
        case 2000:
            return 300;
        case 4000:
            return 500;
        case 7000:
            return 625;
        case 10000:
            return 750;
        case 15000:
            return 750;
        default:
            return 0;
    }
};

export default goldToGems;