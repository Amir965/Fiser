import React from 'react';

export const Form = () => {
    return (
      <div className="heading">
        <h5>Book Your Free Expert session</h5>
        <h6>Please Fill Your Details</h6>
        <div class="attribute">
          <div class="input-field">
            <label>
              <input
                mbsc-input
                data-label="Name"
                data-input-style="box"
                data-label-style="floating"
                placeholder="Name*"
              />
            </label>
          </div>
          <div class="input-field">
            <label>
              <input
                mbsc-input
                data-label="Phone-number"
                data-input-style="box"
                data-label-style="floating"
                type="phone"
                placeholder="Number*"
                // data-password-toggle="true"
              />
            </label>
          </div>
          <div class="input-field">
            <label>
              <input
                mbsc-input
                data-label="Shop-name"
                data-input-style="box"
                data-label-style="floating"
                placeholder="shop Name*"
              />
            </label>
          </div>
          <div class="input-field">
            <label>
              <input
                mbsc-input
                data-label="City"
                data-input-style="box"
                data-label-style="floating"
                placeholder="City*"
              />
            </label>
          </div>
          <div class="input-field">
            <label>
              <input
                mbsc-input
                data-label="State"
                data-input-style="box"
                data-label-style="floating"
                placeholder="State "
              />
            </label>
          </div>
        </div>
        <div class="footer-btn">
          <button>BOOK NOW</button>
        </div>
      </div>
    );
};
export default Form;