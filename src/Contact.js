import React from 'react';
import './style.css';

function Contact() {
    return (
        <div className='contact' id='contact'>
            <div className="form">
                <h1>Contact us now!</h1>
                <form action="https://formsubmit.co/ehsanqasimi57@gmail.com" method="POST">
                    
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="New Quote" />
                    <input type="text" name="_honey" style={{ display: 'none' }} /> {/*for avoiding spam*/}
                    <input type="hidden" name="_next" value="C:\Users\Ehsan Qasimi\Desktop\Web\monetized-channel\public\thanks.html" />

                    <input type="text" id="fullName" name="Full Name" placeholder="Full Name" />
                    <input type="email" id="email" name="E-mail" placeholder="Email" required />
                    <input type="text" id="phone" name="Phone" placeholder="Phone Number" />
                    <textarea placeholder="Any question?" name="They wanted to say" id="question" cols="30" rows="10"></textarea>
                    <button type="submit" className="form-btn">Submit</button>
                </form>
            </div>

            
        </div>
        
    )
}

export default Contact