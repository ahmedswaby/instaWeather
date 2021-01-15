import React from 'react';
import cloudy from '../assets/imgs/cloudy.svg'
import sunny from '../assets/imgs/sunny.svg'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }
    render() {
        return (
            <section>
                <div className='container'>
                    <header>
                        <h4 className="text-uppercase">
                            instaweather
                        </h4>
                        <div className="d-flex">
                            <button className="btn text-white">
                                C
                            </button>
                            <button className="btn active text-white">
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
                            <button className="btn active pl-0 pr-0">
                                hourly
                            </button>
                            <button className="btn">
                                daily
                            </button>
                        </div>
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
                    </main>
                </div>
            </section>
        )
    }
}

export default Main