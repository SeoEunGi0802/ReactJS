import React from "react";
import "./MyClock.css";
import moment, { now } from 'moment';
import moment_timezome from 'moment-timezone';

class MyClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment().tz(this.props.zone),
            stopList: []
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                time: moment().tz(this.props.zone)
            });
        }, 50);
    }

    formatSet(data) {
        return data < 10 ? "0" + data : data;
    }

    formatMsSet(data) {
        return data < 100 ? (data < 10 ? "00" + data : "0" + data) : data;
    }

    stopEventListner() {
        this.setState({
            stopList: this.state.stopList.concat(this.state.time)
        })
    }

    deleteEventListner(idx) {
        alert(idx);
        console.log(idx)
    }

    render() {
        const { time } = this.state;
        // const h = this.formatSet(time.getHours());
        // const m = this.formatSet(time.getMinutes());
        // const s = this.formatSet(time.getSeconds());
        // const ms = this.formatMsSet(time.getMilliseconds());
        // const yyyy = time.getFullYear().toString();
        // const mm = this.formatSet(time.getMonth() + 1).toString();
        // const dd = this.formatSet(time.getDate().toString());

        // function getday() {
        //     const week = [
        //         "일요일",
        //         "월요일",
        //         "화요일",
        //         "수요일",
        //         "목요일",
        //         "금요일",
        //         "토요일"
        //     ];

        //     const today = time.getDay();
        //     return week[today];
        // }

        return (
            <div className="clockBox" style={{color:this.props.color}}>
                <div>
                    <h1>{this.props.text}</h1>
                    <h2>{this.props.zone}</h2>
                    <div className="date_y">{time.format('YYYY')}</div>
                    <div className="date_md">
                        {time.format('MM')}-{time.format('DD')}
                        {/* <span className="dow">{getday()}</span> */}
                    </div>
                    <span className="time" style={{ color: this.props.color }}>
                        {time.format('hh')}:{time.format('mm')}:{time.format('ss')}
                    </span>
                    <span className="ms">{time.format('SSS')}</span>
                    <ul>
                        {this.state.stopList.map((entry, idx) => {
                            return <li key={idx}
                                onMouseEnter={() => this.setState({ overIdx: idx })}
                                onMouseLeave={() => this.setState({ overIdx: null })}
                            >

                                {time.format("YYYY-MM-DD hh:mm:ss")}
                                {this.state.overIdx === idx ?
                                    <span className="delet-btn" onClick={this.deleteEventListner.bind(this, idx)}>X</span>
                                    :
                                    null
                                }
                            </li>
                        })}
                    </ul>
                    <div className="button" onClick={this.stopEventListner.bind(this)}>Stop!</div>
                </div>
            </div>
        );
    }
}

export default MyClock;