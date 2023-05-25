import React from 'react'
import img1 from './assets/apple-13.svg'
import img2 from './assets/chip.png'
import img3 from './assets/close.svg'
import img4 from './assets/wifi.png'
import img5 from './assets/mastercard-2.svg'
import img6 from './assets/verified-badge.svg'
import img7 from './assets/docket.png'
import img8 from './assets/mc_symbol.svg'
import img9 from './assets/dots.svg'
import CountDown from './components/CountDown'




const App = () => {
  return (
    <div className="wrapper grid grid-cols-12 shadow-md">
    <div className="close-btn">
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Close</title><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"/></svg>
    </div>
    <div className="col-span-12 md:col-span-8">
        <div className="form">
            <header className="form-header flex flex-col md:flex-row justify-between">
                <div className="logo mr-auto">
                    <span className="logo-circle"></span>
                    <h1>AceCoin<span className="lean">Pay</span></h1>
                </div>
                <div className="timer my-2">

                  <CountDown/>
            
                </div>
            </header>
            <section className="form-body">
                <form action="">
                    <div className="input-group ">
                        <div className="header">
                            <div className="description">
                                <h2 className="title">card number</h2>
                                <p className="desc">Enter the 15-digit card number on the card</p>
                            </div>
                            <button className="edit">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
                                viewBox="0 0 512 512" space="preserve">
                                    <g>
                                        <g>
                                            <path d="M311.18,78.008L32.23,356.958L0.613,485.716c-1.771,7.209,0.355,14.818,5.604,20.067
                                            c5.266,5.266,12.88,7.368,20.067,5.604l128.759-31.617l278.95-278.95L311.18,78.008z M40.877,471.123l10.871-44.271l33.4,33.4
                                            L40.877,471.123z" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M502.598,86.818L425.182,9.402c-12.536-12.536-32.86-12.536-45.396,0l-30.825,30.825l122.812,122.812l30.825-30.825
                                            C515.134,119.679,515.134,99.354,502.598,86.818z" />
                                        </g>
                                    </g>
                                </svg>
                                <span className="btn-desc">Edit</span>
                            </button>
                        </div>
                        <div className="main">
                            <img src="assets/mc_symbol.svg" alt="" className="leading-icon"/>
                            <input type="text" placeholder="2412   -   7512   -   3412   -   3456"/>
                            <img src={img6} alt="" className="trailing-icon"/>
                        </div>
                    </div>
                    <div className="input-group __col  flex flex-col">
                        <div className="header">
                            <div className="description">
                                <h2 className="title">CVV number</h2>
                                <p className="desc">Enter the 3 or 4 digit number on the card</p>
                            </div>
                        </div>
                        <div className="main">
                            <input type="text" placeholder="327"/>
                            <img src={img9} alt="" className="trailing-icon"/>
                        </div>
                    </div>
                    <div className="input-group __col">
                        <div className="header">
                            <div className="description">
                                <h2 className="title">expiry date</h2>
                                <p className="desc">Enter the expiration date of the card</p>
                            </div>
                        </div>
                        <div className="grp">
                            <div className="main __date">
                                <input type="text" placeholder="09"/>
                            </div>
                            <span className="divider">/</span>
                            <div className="main __date">
                                <input type="text" placeholder="22"/>
                            </div>
                        </div>
                    </div>
                    <div className="input-group __col">
                        <div className="header">
                            <div className="description">
                                <h2 className="title">password</h2>
                                <p className="desc">Enter your Dynamic password</p>
                            </div>
                        </div>
                        <div className="main">
                            <input type="password" placeholder="******"/>
                            <img src={img9} alt="" className="trailing-icon"/>
                        </div>
                    </div>
                    <button type="submit" className="btn-submit">pay now</button>
                </form>
            </section>
        </div>
    </div>
    <div className="col-span-12 md:col-span-4">
        <div className="checkout mt-9 md:mt-0">
            <span className="blu"></span>
            <div className="credit-card mb-[17rem] md:mb-0">
                <div className="credit-card__head">
                    <img src={img2} alt="" className="chip"/>
                    <img src={img4} alt="" className="wifi"/>
                </div>
                <div className="credit-card__body">
                    <span className="holder">jonathan micheal</span>
                    <div className="card-digits">
                        <div className="hidden-digits">
                            <span className="circle"></span>
                            <span className="circle"></span>
                            <span className="circle"></span>
                            <span className="circle"></span>
                        </div>
                        <span className="visible-digits">3456</span>
                    </div>
                </div>
                <div className="credit-card__footer">
                    <span className="expiry">09/22</span>
                    <img src={img5} alt="" className="logo"/>
                </div>
                <div className="card__design">
                    <span className="inner"></span>
                </div>
            </div>
            <div className="checkout-details">
                <div className="purchase-data">
                    <div className="data">
                        <span className="title">company</span>
                        <span className="value">
                            <img src={img1} alt=""/>
                            <span className="inner-text">apple</span>
                        </span>
                    </div>
                    <div className="data">
                        <span className="title">order number</span>
                        <span className="value">
                            <span className="inner-text">1266201</span>
                        </span>
                    </div>
                    <div className="data">
                        <span className="title">product</span>
                        <span className="value">
                            <span className="inner-text">macbook air</span>
                        </span>
                    </div>
                    <div className="data">
                        <span className="title">VAT (20%)</span>
                        <span className="value">
                            <span className="inner-text">$100.00</span>
                        </span>
                    </div>
                </div>
                <div className="divider">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
                <div className="purchase-total">
                    <div className="total">
                        <span className="desc">You have to Pay</span>
                        <div className="t-amount">
                            <h1 className="amount">549<sub>.99</sub></h1>
                            <span className="symbol">USD</span>
                        </div>
                    </div>
                    <img src={img7} alt=""/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default App