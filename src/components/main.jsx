import React from 'react';
import cloudy from '../assets/imgs/cloudy.svg'
import sunny from '../assets/imgs/sunny.svg'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: 'f',
            view: 'h'
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.showPosition)
    }
    //     function getWeatherAPI(apiLinkDS) {
    //     fetch(apiLinkDS, {
    //         method: 'GET',
    //     }).then(function (response) {
    //         return response.json()
    //     }).then(function (data) {
    //         temp.innerHTML = Math.round(data.currently.temperature);
    //         cond.innerHTML = data.currently.summary;
    //         weatherIcon(data.currently.icon);
    //     });
    // }

    showPosition = (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.fetchData(position)
    }
    async fetchData(position) {
        const weatherUrl = `https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/${position.coords.latitude},${position.coords.longitude}/`
        await fetch(weatherUrl, {
            'Access-Control-Allow-Origin': '*',
            method: 'GET',
            credentials: 'include',
            headers: new Headers()
        })
            .then((resp) => {
                return resp
            })
            .then((data) => {
                console.log(data);
                const result = data.json()
                console.log(result);
            }).catch(err => {
                console.log(err);
            })

    }
    toggleTemp = (val) => {
        if (val) {

            this.setState({
                temp: val
            })
        }
    }
    toggleView = (val) => {

        this.setState({
            view: val
        })

        // if (val === "F") {
        //     return Math.round(val * (9 / 5) + 32);
        // }
        // return Math.round((val - 32) * (5 / 9));
    }
    render() {
        return (
            <section>
                <div className='container'>
                    <header>
                        <h4 className="text-uppercase">
                            instaweather
                        </h4>
                        <div className="d-flex ml-auto">
                            <button className={`btn text-white ${this.state.temp === 'c' ? 'active' : ''}`} onClick={() => this.toggleTemp('c')}>
                                C
                            </button>
                            <button className={`btn text-white ${this.state.temp === 'f' ? 'active' : ''}`} onClick={(e) => this.toggleTemp('f')}>
                                F
                            </button>
                        </div>
                    </header>
                    <main>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="d-flex flex-column">
                                    <h2>
                                        New Cairo
                                    </h2>
                                    <span>Friday 20, 2020</span>
                                    <img src={cloudy} alt="" className="mr-auto" />

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="align-content-end d-flex flex-column text-end">
                                    <h1>72<sup>°</sup></h1>
                                    <h3>81<sup>°</sup> / 63<sup>°</sup></h3>
                                    <p>Cloudy throughout the day</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom mb-4">
                            <button className={`btn pl-0 pr-0 ${this.state.view === 'h' ? 'active' : ''}`}
                                onClick={() => this.toggleView('h')}>
                                hourly
                            </button>
                            <button className={`btn ${this.state.view === 'd' ? 'active' : ''}`} onClick={() => this.toggleView('d')}>
                                daily
                            </button>
                        </div>
                        {this.state.view === 'h' ?
                            <div className="d-flex overflow-scroll pb-4">
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p>now</p>
                                    <img src={cloudy} alt="cloudy day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                            </div>
                            :
                            <div className="d-flex overflow-scroll pb-4">
                                <div className="hourly-section">
                                    <p className="text-capitalize">Today</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                                <div className="hourly-section">
                                    <p className="text-capitalize">now</p>
                                    <img src={sunny} alt="sunny day" />
                                    <h4>81<sup>°</sup></h4>
                                </div>
                            </div>
                        }
                    </main>
                </div>
            </section >
        )
    }
}

export default Main