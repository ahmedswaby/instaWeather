import React from 'react';
import cloudy from '../assets/imgs/cloudy.svg'
import sunny from '../assets/imgs/sunny.svg'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: 'f',
            view: 'h',
            currently: {},
            days: []
        };
    }

    componentDidMount() {
        // if (navigator.geolocation) {
        // document.querySelector(".loader-wrapper").classList.remove('d-none')
        navigator.geolocation.getCurrentPosition(this.showPosition,
            () => {
                alert('location services failed due to unknown error, please try again later')
                document.querySelector(".loader-wrapper").classList.add('d-none')

            }, { timeout: 10000 })
        const longEnUSFormatter = new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        this.setState({
            todayDate: longEnUSFormatter.format(new Date())
        })
    }
    // }
    // run after accepting location 
    showPosition = (position) => {
        console.log(position);
        // this.fetchData(position)
    }
    // fetch data deponds on the long & lat
    async fetchData(position) {
        console.log('here');

        const weatherUrl = `https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/${position.coords.latitude},${position.coords.longitude}/`
        await fetch(weatherUrl, {
            method: 'GET',
        })
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                console.log('here');
                document.querySelector(".loader-wrapper").classList.add('d-none')
                this.setState({
                    timeZone: data.timezone,
                    days: data.daily.data,
                    hours: data.hourly.data
                })
                console.log(this.state.hours);

            }).catch(err => {
                document.querySelector(".loader-wrapper").classList.add('d-none')
                console.log(err);
            })

    }
    // toggle temp between C & F
    toggleTemp = (val) => {
        return Math.floor((val - 32) / 1.8)
    }
    // toggle view depond on temp's C / F
    toggleView = (val) => {
        this.setState({
            temp: val
        })
    }
    // toggle between days & hours tabs
    toggleDaysandHr = (val) => {
        this.setState({
            view: val
        })
    }

    render() {
        return (
            <section>
                <div className="loader-wrapper">
                    <div className="loader"></div>
                </div>
                <div className='container'>
                    <header>
                        <h4 className="text-uppercase">
                            instaweather
                        </h4>
                        {/* toggle temp from C to F & vise verse */}
                        <div className="d-flex ml-auto">
                            <button key='c' className={`btn text-white ${this.state.temp === 'c' ? 'active' : ''}`} onClick={() => this.toggleView('c')}>
                                C
                            </button>
                            <button key='f' className={`btn text-white ${this.state.temp === 'f' ? 'active' : ''}`} onClick={() => this.toggleView('f')}>
                                F
                            </button>
                        </div>
                    </header>
                    <main>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="d-flex flex-column">
                                    <h2>
                                        {this.state.timeZone}
                                    </h2>
                                    <span>{this.state.todayDate}</span>
                                    {this.state.days.length > 0 ?
                                        <img src={this.state.days[0].icon === 'partly-cloudy-day' ? cloudy : sunny} alt="" className="mr-auto" />
                                        :
                                        false
                                    }

                                </div>
                            </div>
                            <div className="col-md-6">
                                {this.state.days.length > 0 ?
                                    <div className="align-content-end d-flex flex-column text-end">
                                        {/* using first day to get min & max temp as it's not in the currently object */}
                                        <h1>{this.state.temp === 'f' ? Math.floor(this.state.days[0].apparentTemperatureHigh)
                                            : this.toggleTemp(this.state.days[0].apparentTemperatureHigh)}<sup>°</sup></h1>

                                        {/* min & max temp */}
                                        <h3>{this.state.temp === 'f' ? Math.floor(this.state.days[0].temperatureMax) : this.toggleTemp(this.state.days[0].temperatureMax)}<sup>°</sup> /

                                        {this.state.temp === 'f' ? Math.floor(this.state.days[0].temperatureLow) : this.toggleTemp(this.state.days[0].temperatureLow)}<sup>°</sup></h3>
                                        <p>{this.state.days[0].summary}</p>
                                    </div>
                                    :
                                    false
                                }
                            </div>
                        </div>
                        <div className="border-bottom mb-4">
                            <button className={`btn pl-0 pr-0 ${this.state.view === 'h' ? 'active' : ''}`}
                                onClick={() => this.toggleDaysandHr('h')}>
                                hourly
                            </button>
                            <button className={`btn ${this.state.view === 'd' ? 'active' : ''}`} onClick={() => this.toggleDaysandHr('d')}>
                                daily
                            </button>
                        </div>
                        {this.state.view === 'h' ?
                            <div className="d-flex overflow-scroll pb-4">
                                {this.state.hours ?
                                    // if condition to avoid getting undifined error
                                    this.state.hours.map((hourData, index) =>
                                        <div className="hourly-section" key={index}>
                                            <p className="text-capitalize">{`${new Date(hourData.time * 1000).getHours().toLocaleString()}:00`}</p>
                                            <img src={hourData.icon === "partly-cloudy-day" ? cloudy : sunny} alt="sunny day" />
                                            <h4>{this.state.temp === 'f' ? Math.floor(hourData.apparentTemperature) : this.toggleTemp(hourData.apparentTemperature)}<sup>°</sup></h4>
                                        </div>)
                                    : false
                                }
                            </div>
                            :
                            this.state.days ?
                                <div className="d-flex overflow-scroll pb-4">
                                    {this.state.days.map((day, index) =>
                                        <div className="hourly-section" key={index}>
                                            <p className="text-capitalize">{new Date(day.time * 1000).getDate().toLocaleString()}</p>
                                            <img src={day.icon === "partly-cloudy-day" ? cloudy : sunny} alt="sunny day" />
                                            <h4>{this.state.temp === 'f' ? Math.floor(day.temperatureHigh) : this.toggleTemp(day.temperatureHigh)}<sup>°</sup></h4>
                                        </div>
                                    )}
                                </div>
                                : false
                        }
                    </main>
                </div>
            </section>
        )
    }
}

export default Main