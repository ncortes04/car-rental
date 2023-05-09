import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
const Checkout = () => {
    const checkout = useSelector(state => state.checkout);
    console.log(checkout)
    const [inputs, setInputs] = useState({
        name: '',
        phoneNumber: '',
        address: '',
        city: '',
        pickupLocation: '',
        pickupTime: '',
        pickupDate: '',
        dropoffLocation: '',
        dropoffTime: '',
        dropoffDate: '',
        cardNumber: '',
        cardHolder: '',
        expirationDate: '',
        promoCode: '',
        cvc: '',
        marketingAgreement: false,
        agreement: false
      });
    
      const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        if(type === 'button'){
            return setInputs(inputs => ({ ...inputs, [name]: !inputs[name] }));
        }
        setInputs(inputs => ({ ...inputs, [name]: value }));
      };
      return (
    <div className='checkout-container'>
        <div className='payment-container'>
            <div className='payment-step-container'>
                <div className='payment-header'>
                    <h3>Billing Information</h3>
                    <div className='payment-header-secondary'>
                        <p className='payment-secondary'>Please enter Your Billing Information</p>
                        <p className='payment-secondary'>Step 1 of 4</p>
                    </div>
                </div>
                <div className='payment-body'>
                    <div className='payment-input-container'>
                        <label>Name</label>
                        <input name='name' placeholder='Your Name' value={inputs.name} onChange={handleInputChange}></input>
                    </div>
                    <div className='payment-input-container'>
                        <label>Phone-Number</label>
                        <input name='phoneNumber' placeholder='Phone Number' value={inputs.phoneNumber} onChange={handleInputChange}></input>
                    </div>
                    <div className='payment-input-container'>
                        <label>Address</label>
                        <input name='address' placeholder='Address' value={inputs.address} onChange={handleInputChange}></input>
                    </div>
                    <div className='payment-input-container'>
                        <label>Town/City</label>
                        <input name='city' placeholder='Town or City' value={inputs.city} onChange={handleInputChange}></input>
                    </div>
                </div>
            </div>
            <div className='payment-step-container'>
                <div className='payment-header'>
                    <h3>Rental Information</h3>
                    <div className='payment-header-secondary'>
                        <p className='payment-secondary'>Please enter Your Billing Information</p>
                        <p className='payment-secondary'>Step 2 of 4</p>
                    </div>
                </div>
                <h3 className='payment-subheader'>Pick-Up</h3>
                <div className='payment-body'>
                    <div className='payment-input-container'>
                        <label>Location</label>
                        <input name='pickupLocation' placeholder='Select Your City' value={inputs.pickupLocation} onChange={handleInputChange}></input>
                    </div>
                    <div className='payment-input-container'>
                        <label>Time</label>
                        <input name='pickupTime' placeholder='Select your time' value={inputs.pickupTime} onChange={handleInputChange}></input>
                    </div>
                    <div className='payment-input-container'>
                        <label>Date</label>
                        <input name='pickupDate' placeholder='Select your date' value={inputs.pickupDate} onChange={handleInputChange}></input>
                    </div>
                </div>
                <h3 className='payment-subheader'>Drop-Off</h3>
                <div className='payment-body'>
                    <div className='payment-input-container'>
                        <label>Location</label>
                        <input name='dropoffLocation' placeholder='Select Your City' value={inputs.dropoffLocation} onChange={handleInputChange}></input>
                   </div>
                   <div className='payment-input-container'>
                        <label>Time</label>
                        <input name='dropoffTime' placeholder='Select your time' value={inputs.dropoffTime} onChange={handleInputChange}></input>
                   </div>
                   <div className='payment-input-container'>
                        <label>Date</label>
                        <input name='dropoffDate' placeholder='Select your date' value={inputs.dropoffDate} onChange={handleInputChange}></input>
                   </div>
                </div>
            </div>
            <div className='payment-step-container'>
                <div className='payment-header'>
                    <h3>Payment Method</h3>
                    <div className='payment-header-secondary'>
                        <p className='payment-secondary'>Please enter Your Payment Method</p>
                        <p className='payment-secondary'>Step 3 of 4</p>
                    </div>
                </div>
                <div className='card-method-container'>
                    <div className='payment-header'>
                        <h3 className='payment-subheader'>Credit Card</h3>
                        <span>card</span>
                    </div>
                    <div className='payment-body'>
                        <div className='payment-input-container'>
                                <label>Card Number</label>
                                <input  name='cardNumber' className='white' placeholder='Card number' value={inputs.cardNumber} onChange={handleInputChange}></input>
                        </div>
                        <div className='payment-input-container'>
                                <label>Card Holder</label>
                                <input  name='cardHolder' className='white' placeholder='Card holder' value={inputs.cardHolder} onChange={handleInputChange}></input>
                        </div>
                        <div className='payment-input-container'>
                                <label>Expiration Date</label>
                                <input  name='expirationDate' className='white' placeholder='DD / MM / YY' value={inputs.expirationDate} onChange={handleInputChange}></input>
                        </div>
                        <div className='payment-input-container'>
                                <label>CVC</label>
                                <input  name='cvc' className='white 'placeholder='CVC' value={inputs.cvc} onChange={handleInputChange}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className='payment-step-container'>
                <div className='payment-header'>
                    <h3>Confirmation</h3>
                    <div className='payment-header-secondary'>
                        <p className='payment-secondary'>We are getting to the end. Just few clicks and your rental is ready!</p>
                        <p className='payment-secondary'>Step 4 of 4</p>
                    </div>
                </div>
                <div className='payment-body-confirmation'>
                   <div className='payment-confirmation'>
                        <button  name='marketingAgreement' type="button" className='confirmation-checkbox' value={inputs.marketingAgreement} onChange={handleInputChange}></button>
                        <p>I agree with sending an Marketing and newsletter emails.</p>
                   </div>
                   <div className='payment-confirmation'>
                        <button  name='agreement' type="button" className='confirmation-checkbox' value={inputs.agreement} onClick={handleInputChange}></button>
                        <p>I agree with our terms and conditions and privacy policy.</p>
                   </div>
                   <button className='car-footer-button'>
                        Rent Now
                    </button>
                    <div className='flex col gap1'>
                        <span>img</span>
                        <div>
                            <p className='payment-subtext'>All your data are safe</p>
                            <div className='payment-secondary'>We are using the advance security to provide you a speedy and safe transaction.</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='checkout-item-container flex col gap2 br1 white pd2'>
            <div className='payment-header'>
                    <h3>Rental Summary</h3>
                    <div className='payment-header-secondary'>
                        <p className='payment-secondary'>Rates may change depending on the dates and price ofd your rental car.</p>
                    </div>
            </div>
            <div className='checkout-selected-car flex gap1'>
                <div className='checkout-selected-car-img'>
                    a
                </div>
                <div className='checkout-selected-car-info'>
                    <h3 className='single-car-name'>car.name</h3>
                    <span>stars</span>
                </div>
            </div>
            <div className='flex spaceb'>
                <p className='payment-secondary'>Subtotal</p>
                <p className='payment-subtext mg0'>$80.00</p>
            </div>
            <div className='flex spaceb'>
                <p className='payment-secondary'>Tax</p>
                <p className='payment-subtext mg0'>$0</p>
            </div>
            <div className='payment-input-container'>
                <input name='promoCode' placeholder='Enter Promo Code' value={inputs.promoCode} onChange={handleInputChange}></input>
            </div>
            <div className='flex spaceb'>
                <div className='flex col gap1'>
                    <p className='payment-subtext mg0'>Total Rental Price</p>
                    <p className='payment-secondary'>Overall Price including Discount</p>
                </div>
                <p className=''>price</p>
            </div>
        </div>
    </div>
  )
}

export default Checkout