/**
 * Created by Denis on 07.05.2018.
 */
const heroNameToPortrait = name =>{
    if(name === undefined)
        return undefined;
    const heroCanonicName = name.toLowerCase().replace(/['.]/g, "").replace(/ /g,"-").replace(/ú/g,'u');
    return `https://psionic-storm.com/wp-content/themes/psionicstorm/img/heroes/thumbnails/${heroCanonicName}.jpg`;
};

export default heroNameToPortrait;