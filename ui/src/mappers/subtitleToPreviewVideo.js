/**
 * Created by Denis on 07.05.2018.
 */
const subtitleToPreviewVideo = (name,title) =>{
    if(title === undefined || name === undefined)
        return undefined;
    let heroCanonicName = title.toLowerCase().replace(/['.]/g, "").replace(/ /g,"-").replace(/ú/g,'u');
    if(name === 'Cho')
        heroCanonicName = 'cho_' + heroCanonicName;
    if(name === 'Gall')
        heroCanonicName = 'gall_' + heroCanonicName;
    if(name === 'Varian')
        heroCanonicName = 'warrior_' + heroCanonicName;
    if(name === 'Greymane')
        heroCanonicName = 'greymane_' + heroCanonicName;
    if(name === 'Valeera')
        heroCanonicName = 'standard_' + heroCanonicName;
    return `https://psionic-storm.com/wp-content/themes/psionicstorm/videos/skins/${heroCanonicName}.webm`;
};

export default subtitleToPreviewVideo;