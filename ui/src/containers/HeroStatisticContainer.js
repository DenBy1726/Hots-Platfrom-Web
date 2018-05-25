/**
 * Created by Denis on 29.04.2018.
 */
/**
 * Created by Denis on 26.04.2018.
 */
import React, {Component} from "react"
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import joinAllHeroesData from "../selectors/joinAllHeroesData"
import SimpleSelect from "../components/Common/SimpleSelect";
import mapNameToUrl from "../mappers/mapNameToUrl";
import {SimpleBarChart} from "../components/Graphics/SimpleBarChart";
import HeroFilteredList from "../components/ListPart/HeroFilteredList";
import FetchingWrapper from "../hoc/FetchingWrapper";
import SimpleLineChart from "../components/Graphics/SimpleLineChart";

class HeroStatisticContainer extends Component {

    state = {
        picked: []
    };

    onPick = (data) => {
        this.state.picked[data.id] = !this.state.picked[data.id];
        this.setState({picked: [...this.state.picked]})
    };

    render() {
        const {heroes, dictionary, loading} = this.props;
        const statTypes = [
            "Вероятности победы",
            "Рейтинг убийцы",
        ].map((x, id) => {
            return {id, name: x}
        });

        const sideStyle = {
            display: "flex", flexDirection: "column", justifyContent: "space-between", maxWidth: "600px"
        };

        return <div style={{width: "100%", height: "90vh", overflow: "auto", display: "flex",
            flexDirection: "column", justifyContent: "center", margin: "0 5%"}}>
            <div style={{alignSelf: "center", fontSize: "2em"}}>
                Выберите тип статистики и героев из списка
            </div>
            <div style={{
                display: "flex", justifyContent: "space-between"
            }}>
                <div style={sideStyle}>
                    <HeroFilteredList data={heroes.map(x => {
                        return {...x, picked: this.state.picked[x.id]};
                    })} dictionary={dictionary} onClick={this.onPick}/>
                </div>
                <div style={sideStyle}>
                    <SimpleSelect onPick={() => this.setState({stage: 2})} data={statTypes}
                                  style={{width: screen.width / 3, maxWidth: "600px", marginTop: "2%", alignSelf: "center"}}
                                  placeholder="Тип статистики"/>
                    <SimpleLineChart/>
                </div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    const heroes = joinAllHeroesData(state.heroes).sort((x, y) => x.name > y.name);
    return {
        heroes,
        dictionary: {
            franchise: state.dictionary.franchise,
            group: state.dictionary.heroGroup
        },
        loading: state.heroes.loading || state.dictionary.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(HeroStatisticContainer);
