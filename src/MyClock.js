import React from "react";
import "./MyClock.css";
import moment from 'moment';

class MyClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            stopList: []
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                time: new Date()
            });
        }, 50);
    }

    formatSet(data) {
        return data < 10 ? "0" + data : data;
    }

    formatMsSet(data) {
        return data < 100 ? (data < 10 ? "00" + data : "0" + data) : data;
    }

    stopEventListner(){
        this.setState({
            stopList: this.state.stopList.concat(this.state.time)
        })
    }

    render() {
        const { time } = this.state;
        const h = this.formatSet(time.getHours());
        const m = this.formatSet(time.getMinutes());
        const s = this.formatSet(time.getSeconds());
        const ms = this.formatMsSet(time.getMilliseconds());
        const yyyy = time.getFullYear().toString();
        const mm = this.formatSet(time.getMonth() + 1).toString();
        const dd = this.formatSet(time.getDate().toString());

        function getday() {
            const week = [
                "일요일",
                "월요일",
                "화요일",
                "수요일",
                "목요일",
                "금요일",
                "토요일"
            ];

            const today = time.getDay();
            return week[today];
        }

        return (
            <div className="clockBox">
                <div>
                    <h1>{this.props.text}</h1>
                    <div className="date_y">{yyyy}</div>
                    <div className="date_md">
                        {mm}-{dd}
                        <span className="dow">{getday()}</span>
                    </div>
                    <span className="time" style={{color:this.props.color}}>
                        {h}:{m}:{s}
                    </span>
                    <span className="ms">{ms}</span>
                    <ul>
                        {this.state.stopList.map((entry, idx)=>{
                        return <li key={idx}>{moment(entry).format("YYYY-MM-DD hh:mm:ss")}</li>
                        })}
                    </ul>
                    <div className="button" onClick={this.stopEventListner.bind(this)}>Stop!</div>
                </div>
            </div>
        );
    }
}

export default MyClock;