/**
 * Created by Denis on 02.05.2018.
 */

const innerJoin = (first,second, by, select, omit) => {
    let together = [], length = 0;
    if (select) select.map(function(x){select[x] = 1;});
    function fields(it) {
        let f = {}, k;
        for (k in it) {
            if (!select) { f[k] = 1; continue; }
            if (omit ? !select[k] : select[k]) f[k] = 1;
        }
        return f;
    }
    function add(it) {
        let pkey = '.'+it[by], pobj = {};
        if (!together[pkey]) together[pkey] = pobj,
            together[length++] = pobj;
        pobj = together[pkey];
        for (let k in fields(it))
            pobj[k] = it[k];
    }
    first.map(add);
    second.map(add);
    return together;
};

export default innerJoin;