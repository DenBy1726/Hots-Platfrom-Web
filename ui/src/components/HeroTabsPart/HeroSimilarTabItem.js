/**
 * Created by Denis on 07.05.2018.
 */
import React, {Component} from "react"
import HeroList from "../ListPart/HeroList";
import objectPath from "object-path"

export default class HeroSimilarTabItem extends Component {
    render() {
        const {meta, heroes, picked,onOverlayClick} = this.props;
        return <HeroList
            style={{
                display: "flex",
                flexWrap: "wrap"
            }}
            grid={{xxl:1,column:4}}
            data={heroes.filter(x => objectPath.get(x, meta.path) === objectPath.get(picked, meta.path) && x.id !== picked.id)}
            defaultStyle={{
                cursor: "pointer",
                borderRadius: "100px",
                border: "2px solid rgb(124, 127, 245)",
                boxShadow: "rgb(69, 56, 255) 0px 0px 5px",
                width: "150px",
                height: "150px",
                margin: "30px"
            }}
            useOverlay={true}
            onOverlayClick={onOverlayClick}
            overlayStyleName="overlay"
            containerStyleName="similarImage"
        />
    }
}