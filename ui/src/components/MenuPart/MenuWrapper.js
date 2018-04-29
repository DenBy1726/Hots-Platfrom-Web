/**
 * Created by Denis on 29.04.2018.
 */
import React, {Component} from "react"
import AppMenu from "./AppMenu";
import * as ROUTES from "../../constants/Routes";
import {withRouter} from "react-router-dom";

class MenuWrapper extends Component {

    state = {
        collapsed: false
    };

    toggleCollapsed = () => {
        this.setState({collapsed: !this.state.collapsed})
    };

    render() {
        const {visible, isAuthenticated} = this.props;
        return visible === true ?
            <AppMenu
                menu={
                    [
                        {
                            label: "Главная страница",
                            icon: "home",
                            id: ROUTES.MAIN,
                        },
                        {
                            label: "Герои",
                            id: ROUTES.HEROES,
                            icon: "contacts",
                        },
                        {
                            label: "Предсказания",
                            icon: "bulb",
                            id: ROUTES.FORECAST,
                        },
                        {
                            label: "Статистика",
                            icon: "area-chart",
                            id: "/Main/Statistic",
                            children: [
                                {
                                    label: "По героям",
                                    id: ROUTES.HEROSTATISTIC,
                                },
                                {
                                    label: "По картам",
                                    id: ROUTES.MAPSTATISTIC,
                                },
                            ],
                        },
                        {
                            label: "Загрузки",
                            icon: "download",
                            id: ROUTES.DOWNLOAD,
                            disabled: {isAuthenticated},
                        },
                        {
                            label: "Для разработчиков",
                            icon: "fork",
                            disabled: {isAuthenticated},
                            children: [
                                {
                                    label: "API",
                                    id: ROUTES.API,
                                },
                                {
                                    label: "Ссылки",
                                    id: ROUTES.REFERENCE,
                                },
                            ],
                        },
                    ]}
                collapsed={this.state.collapsed}
                toggleCollapsed={this.toggleCollapsed}
                menuItemStyle={{background: "rgba(0,0,0,0)"}}
                menuContainerStyle={{width: 0, minHeight: '100vh'}}
                siderClass="appMenu"
                selectedItem={this.props.history.location.pathname.slice(1)}
                onClick={(item) => {
                    this.props.history.push(item.key);
                }}
            />
            : null;
    }
}

export default withRouter(MenuWrapper);