import React from 'react'
import Product from '../Product/Product'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' />
                <div className='home__row'>
                    <Product
                        title='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ' 
                        price='999.99' rating={5}
                        image='https://images-na.ssl-images-amazon.com/images/I/71xrgPIhjzL._AC_SX679_.jpg'
                    />
                    <Product
                        title='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
                        price='999.99' rating={3}
                        image='https://images-na.ssl-images-amazon.com/images/I/71xrgPIhjzL._AC_SX679_.jpg'
                    />
                </div>
                <div className='home__row'>
                    <Product
                        title='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ' 
                        price='999.99' rating={3}
                        image='https://images-na.ssl-images-amazon.com/images/I/71xrgPIhjzL._AC_SX679_.jpg'
                    />
                    <Product
                        title='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ' 
                        price='999.99' rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/71xrgPIhjzL._AC_SX679_.jpg'
                    />
                    <Product
                        title='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.' 
                        price='999.99' rating={2}
                        image='https://images-na.ssl-images-amazon.com/images/I/71xrgPIhjzL._AC_SX679_.jpg'
                    />

                </div>
                <div className='home__row'>
                    <Product 
                        title='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ' 
                        price='999.99' rating={1} 
                        image='https://images-na.ssl-images-amazon.com/images/I/71xrgPIhjzL._AC_SX679_.jpg'
                    />
                </div>
            </div>

        </div>
    )
}

export default Home
