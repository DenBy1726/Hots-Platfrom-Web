/**
 * Created by Denis on 02.05.2018.
 */
import React, {Component} from "react"
import propTypes from "prop-types"
import HeroList from "./HeroList";
import PortraitPreview from "./PortraitPreview";

export default class HeroListView extends Component {

    state = {
        portrait: ''
    };

    changePortrait = hero => {
        this.setState({portrait: hero.portraiturl});
        this.props.onClick(hero);
    };

    render() {
        const {grid, data, onClick,loading} = this.props;
        let halfWayThough = Math.floor(data.length / 2);
        let arrayFirstHalf = data.slice(0, halfWayThough);
        let arraySecondHalf = data.slice(halfWayThough, data.length);
        return <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className="leftHalfOfList">
                <HeroList loading={loading} onClick={this.changePortrait} grid={grid} data={arrayFirstHalf}/>
            </div>
            <PortraitPreview portrait={this.state.portrait}/>
            <div className="rightHalfOfList">
                <HeroList loading={loading} onClick={this.changePortrait} grid={grid} data={arraySecondHalf}/>
            </div>
        </div>
    }
}

HeroList.propTypes = {
    data: propTypes.array.isRequired,
    grid: propTypes.object.isRequired,
    loading: propTypes.object.isRequired,
    onClick: propTypes.func.isRequired,
    pickedStyle: propTypes.object.isRequired,
    defaultStyle: propTypes.object.isRequired,
};
