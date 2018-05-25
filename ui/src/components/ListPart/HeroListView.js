/**
 * Created by Denis on 02.05.2018.
 */
import React, {Component} from "react"
import propTypes from "prop-types"
import HeroList from "./HeroList";
import PortraitPreview from "./PortraitPreview";
import heroNameToPortrait from "../../mappers/heroNameToPortrait";
import subtitleToPreviewVideo from "../../mappers/subtitleToPreviewVideo";

export default class HeroListView extends Component {

    state = {
        portrait: '',
    };

    changePortrait = hero => {
        this.setState({...this.state,portrait: hero.portraiturl});
        this.props.onClick(hero);
    };

    render() {
        const {grid, data, onClick, loading, title, subtitle,onSubmitClick,mode,enablePortrait} = this.props;
        let halfWayThough = Math.floor(data.length / 2);
        let arrayFirstHalf = data.slice(0, halfWayThough);
        let arraySecondHalf = data.slice(halfWayThough, data.length);
        let halfStyles = this.state.portrait !== "" && enablePortrait ? {marginTop: "70px"} : null;
        let srcUrl,type;
        switch (mode){
            case 'parsed':
                srcUrl = this.state.portrait;
                type = 'image';
                break;
            case 'fetched':
                srcUrl = heroNameToPortrait(title);
                type = 'image';
                break;
            case 'video':
                srcUrl = subtitleToPreviewVideo(title,subtitle);
                type = 'video';
                break;
        }
        return <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className="leftHalfOfList" style={halfStyles}>
                <HeroList
                    loading={loading}
                    onClick={this.changePortrait}
                    grid={grid}
                    data={arrayFirstHalf}/>
            </div>
            {this.state.portrait !== "" && enablePortrait  ?
                <PortraitPreview
                    onClick={onSubmitClick}
                    title={title}
                    subtitle={subtitle}
                    portrait={srcUrl}
                    mode={type}
                /> : null}
            <div className="rightHalfOfList" style={halfStyles}>
                <HeroList
                    loading={loading}
                    onClick={this.changePortrait}
                    grid={grid}
                    data={arraySecondHalf}/>
            </div>
        </div>
    }
}

HeroListView.propTypes = {
    data: propTypes.array.isRequired,
    grid: propTypes.object.isRequired,
    loading: propTypes.object.isRequired,
    onClick: propTypes.func.isRequired,
    pickedStyle: propTypes.object.isRequired,
    defaultStyle: propTypes.object.isRequired,
    onSubmitClick: propTypes.func.isRequired,
    //parsed,fetched,video
    mode: propTypes.string.isRequired,
};

HeroListView.defaultProps = {
    enablePortrait: true
};
