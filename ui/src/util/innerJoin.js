/**
 * Created by Denis on 02.05.2018.
 */

const innerJoin = (a,b)=>{
    const r = a.filter(({ id: idv }) => b.every(({ id: idc }) => idv !== idc));
    return b.concat(r).map((v) => v.position ? v : { ...v, position: null });
};

export default innerJoin;