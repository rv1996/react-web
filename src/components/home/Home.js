import React from 'react';
import yellow_box from '../../assets/image/yellow_box.svg';
import illustration from '../../assets/image/illustration.svg';

class Home extends React.Component {

    render() {
        return (

            <section className="main" id='home'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mx-auto text-center">
                            <img src={illustration} className="illustration" alt="needle" />
                        </div>
                    </div>
                </div>

                <div className="name">
                    <svg height="100" stroke="#fbe551" strokeWidth="2" className="text-line" width="100%">
                        <text x="50%" className="main_text" dominantBaseline="middle" textAnchor="middle" y="50%">Darjiwala</text>
                    </svg>
                </div>

                <p className="text-center legacy_text">Legacy of 65 years</p>
                <p className="text-center shop_text">One stop shop for Men's ethnic wear</p>

                <img className="anime_box" src={yellow_box} alt="box" />
            </section>


        )
    }
}

export default Home;
