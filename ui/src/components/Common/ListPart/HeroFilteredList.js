/**
 * Created by Denis on 02.05.2018.
 */
import React, {Component} from "react"
import HeroListView from "./HeroListView";
import Filter from "../Filter";

export default class HeroFilteredList extends Component {


    render() {
        const {loading, data, onClick, dictionary, picked} = this.props;
        return <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex", flexDirection: "row",justifyContent: "center"}}>
                {/*<div style={{flexGrow: 2}}>*/}
                    {/*<Filter*/}
                        {/*filter={*/}
                            {/*[*/}
                                {/*{*/}
                                    {/*title: 'Роль',*/}
                                    {/*category: dictionary.group.filter(x => x.id !== 0).map(cat => {*/}
                                        {/*return {id: cat, image: `/Role/${cat.name}.png`}*/}
                                    {/*})*/}
                                {/*},*/}
                                {/*{*/}
                                    {/*title: 'Вселенная',*/}
                                    {/*category: dictionary.franchise.filter(x => x.id !== 0).map(cat => {*/}
                                        {/*return {id: cat, image: `/Universe/${cat.name}.png`}*/}
                                    {/*})*/}
                                {/*}*/}
                            {/*]*/}
                        {/*}*/}
                    {/*/>*/}
                {/*</div>*/}
            </div>
            <HeroListView loading={loading}
                          data={data} onClick={onClick}/>
        </div>
    }
}