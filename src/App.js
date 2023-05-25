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
    <div class="wrapper grid grid-cols-12 shadow-md">
    <div class="close-btn">
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close</title><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"/></svg>
    </div>
    <div class="col-span-12 md:col-span-8">
        <div class="form">
            <header class="form-header flex flex-col md:flex-row justify-between">
                <div class="logo mr-auto">
                    <span class="logo-circle"></span>
                    <h1>AceCoin<span class="lean">Pay</span></h1>
                </div>
                <div class="timer my-2">

                  <CountDown/>
            
                </div>
            </header>
            <section class="form-body">
                <form action="">
                    <div class="input-group ">
                        <div class="header">
                            <div class="description">
                                <h2 class="title">card number</h2>
                                <p class="desc">Enter the 15-digit card number on the card</p>
                            </div>
                            <button class="edit">
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
                                <span class="btn-desc">Edit</span>
                            </button>
                        </div>
                        <div class="main">
                            <img src="assets/mc_symbol.svg" alt="" class="leading-icon"/>
                            <input type="text" placeholder="2412   -   7512   -   3412   -   3456"/>
                            <img src={img6} alt="" class="trailing-icon"/>
                        </div>
                    </div>
                    <div class="input-group __col  flex flex-col">
                        <div class="header">
                            <div class="description">
                                <h2 class="title">CVV number</h2>
                                <p class="desc">Enter the 3 or 4 digit number on the card</p>
                            </div>
                        </div>
                        <div class="main">
                            <input type="text" placeholder="327"/>
                            <img src={img9} alt="" class="trailing-icon"/>
                        </div>
                    </div>
                    <div class="input-group __col">
                        <div class="header">
                            <div class="description">
                                <h2 class="title">expiry date</h2>
                                <p class="desc">Enter the expiration date of the card</p>
                            </div>
                        </div>
                        <div class="grp">
                            <div class="main __date">
                                <input type="text" placeholder="09"/>
                            </div>
                            <span class="divider">/</span>
                            <div class="main __date">
                                <input type="text" placeholder="22"/>
                            </div>
                        </div>
                    </div>
                    <div class="input-group __col">
                        <div class="header">
                            <div class="description">
                                <h2 class="title">password</h2>
                                <p class="desc">Enter your Dynamic password</p>
                            </div>
                        </div>
                        <div class="main">
                            <input type="password" placeholder="******"/>
                            <img src={img9} alt="" class="trailing-icon"/>
                        </div>
                    </div>
                    <button type="submit" class="btn-submit">pay now</button>
                </form>
            </section>
        </div>
    </div>
    <div class="col-span-12 md:col-span-4">
        <div class="checkout mt-9 md:mt-0">
            <span class="blu"></span>
            <div class="credit-card mb-[17rem] md:mb-0">
                <div class="credit-card__head">
                    <img src={img2} alt="" class="chip"/>
                    <img src={img4} alt="" class="wifi"/>
                </div>
                <div class="credit-card__body">
                    <span class="holder">jonathan micheal</span>
                    <div class="card-digits">
                        <div class="hidden-digits">
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                        </div>
                        <span class="visible-digits">3456</span>
                    </div>
                </div>
                <div class="credit-card__footer">
                    <span class="expiry">09/22</span>
                    <img src={img5} alt="" class="logo"/>
                </div>
                <div class="card__design">
                    <span class="inner"></span>
                </div>
            </div>
            <div class="checkout-details">
                <div class="purchase-data">
                    <div class="data">
                        <span class="title">company</span>
                        <span class="value">
                            <img src={img1} alt=""/>
                            <span class="inner-text">apple</span>
                        </span>
                    </div>
                    <div class="data">
                        <span class="title">order number</span>
                        <span class="value">
                            <span class="inner-text">1266201</span>
                        </span>
                    </div>
                    <div class="data">
                        <span class="title">product</span>
                        <span class="value">
                            <span class="inner-text">macbook air</span>
                        </span>
                    </div>
                    <div class="data">
                        <span class="title">VAT (20%)</span>
                        <span class="value">
                            <span class="inner-text">$100.00</span>
                        </span>
                    </div>
                </div>
                <div class="divider">
                    <div class="left"></div>
                    <div class="right"></div>
                </div>
                <div class="purchase-total">
                    <div class="total">
                        <span class="desc">You have to Pay</span>
                        <div class="t-amount">
                            <h1 class="amount">549<sub>.99</sub></h1>
                            <span class="symbol">USD</span>
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