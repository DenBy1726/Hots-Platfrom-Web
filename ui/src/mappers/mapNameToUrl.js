/**
 * Created by Denis on 08.05.2018.
 */
const mapNameToUrl = name =>{
    if(name === undefined)
        return undefined;
    let mapCanonicName;
    switch(name){
        case "Lost Cavern":
            return "https://www.heroescounters.com/images/maps/400/11.jpg";
        default:
           const mapCanonicName = name.toLowerCase().replace(/['.]/g, "").replace(/ /g,"-");
           return `https://psionic-storm.com/wp-content/themes/psionicstorm/img/battlegrounds/${mapCanonicName}.jpg`;
    }
};

export default mapNameToUrl;