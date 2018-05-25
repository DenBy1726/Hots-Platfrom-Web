/**
 * Created by Denis on 29.04.2018.
 */
import React, {Component} from "react"
import {withRouter} from "react-router-dom";
import {Avatar, Carousel} from "antd";
import * as ROUTES from "../constants/Routes";

class WelcomeContainer extends Component {
    render() {
        return <div style={{display: "flex", height: "100vh", overflow: "auto"}}>
            <div style={{
                margin: "0 20px 20px 20px", width: "54%",
                maxWidth: "560px", minWidth: "420px", minHeight: "336px"
            }}>
                <h1
                    style={{margin: "0 0 28px", color: "rgba(255, 247, 247, 0.88)", fontSize: "38px"}}
                >Heroes of the Storm Forecaster</h1>
                <span style={{fontSize: "20px", lineHeight: "40px"}}>
               Система с открытым исходным кодом и API для сбора информации,
                прогнозирования, рассчета и визуализации статистики</span>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h1
                        style={{margin: "8px 0 28px", color: "rgba(255, 247, 247, 0.88)", fontSize: "38px"}}
                    >Возможности:</h1>
                </div>
                <Carousel autoplay>

                    <div style={{display: "flex", flexDirection: "column"}}
                         onClick={() => this.props.history.push(ROUTES.HEROES)}>
                        <Avatar style={{width: "320px", height: "220px"}} className="hotsAvatar" src="/Heroes.png"/>
                        <h3 style={{color: "rgba(255, 247, 247, 0.88)"}}>
                            Детальная информация по героям
                        </h3>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}
                         onClick={() => this.props.history.push(ROUTES.FORECAST)}>
                        <Avatar style={{width: "320px", height: "220px"}} className="hotsAvatar" src="/Forecast.png"/>
                        <h3 style={{color: "rgba(255, 247, 247, 0.88)"}}>
                            Предсказания результатов матчей
                        </h3>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}
                         onClick={() => this.props.history.push(ROUTES.HEROSTATISTIC)}>
                        <Avatar style={{width: "320px", height: "220px"}} className="hotsAvatar" src="/Statistics.png"/>
                        <h3 style={{color: "rgba(255, 247, 247, 0.88)"}}>
                            Статистика по героям и картам
                        </h3>
                    </div>
                </Carousel>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <button className="hotsButton" style={{margin: "10px", width: "156px"}}
                            onClick={() => this.props.history.push(ROUTES.MAIN)}>
                        Начать работу
                    </button>
                    <button className="hotsButton" style={{margin: "10px"}}
                            onClick={()=>window.location=`${ROUTES.API}`}>
                        Для разработчиков
                    </button>
                </div>
            </div>
            <div style={{overflow: "hidden"}}>
                <img src="/Ilustration.png"/>
            </div>
        </div>
    }
}

export default withRouter(WelcomeContainer);