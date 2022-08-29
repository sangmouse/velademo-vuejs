<template>
  <div class="Contact">
    <div class="Contact-map">
      <div>
        <iframe
          class="Contact-map-content"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.067992314257!2d105.78381241538528!3d21.029965293111875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4c684b8ceb%3A0xef4622cd15bdb0ce!2zODAgUC4gROG7i2NoIFbhu41uZyBI4bqtdSwgROG7i2NoIFbhu41uZyBI4bqtdSwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1661743985115!5m2!1svi!2s"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div class="Contact-info">
      <div class="container">
        <div class="Contact-info-control d-flex flex-wrap">
          <div class="col-xs-12 col-md-5">
            <div class="Contact-info-control-left">
              <h1 class="Contact-info-control-left__title">Contact Us</h1>
              <div class="d-flex flex-wrap">
                <div class="col-xs-12">
                  <p>
                    Nor again is there anyone who loves or pursues or desires to
                    obtain pain of itself, because it is pain.no annoying
                    consequences.<br /><br />
                  </p>
                  <p>
                    <strong>Add:</strong> No 80 Dich Vong Hau Street, Cau Giay
                    District, Ha Noi
                  </p>
                  <p><strong>Phone:</strong> (399) 573 5586</p>
                  <p><strong>Email:</strong> henry_84@example.com</p>
                  <p><strong>Open:</strong> 8am - 7pm, Mon - Sat</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-7">
            <div class="Contact-info-control-right">
              <form action="">
                <div class="row">
                  <div class="col-xs-12">
                    <div class="mb-4">
                      <input
                        type="text"
                        class="form-control Contact-info-control-right__control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="mb-4">
                      <input
                        type="email"
                        class="form-control Contact-info-control-right__control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="mb-4">
                      <textarea
                        rows="6"
                        class="form-control Contact-info-control-right__control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="Contact-info-control-right-button">
                  <input
                    type="submit"
                    class="btn Contact-info-control-right-button__message"
                    value="Send Message"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Red Hat Display", sans-serif;
  font-size: 16px;
  color: #444444;
  line-height: 24px;
  font-weight: 400;
}

* {
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: inherit;
}

p {
  margin: 0 0 12px;
}

.Contact-info {
  margin-bottom: 100px;
  margin-top: 100px;
}

.Contact-info-control-left {
  padding: 0 20px;
}

.Contact-info-control-right__control {
  height: 48px;
  border-radius: 3px;
  color: #444444;
  border: 1px solid #e1e1e1;
}

.Contact-info-control-right__control:focus {
  border-color: #e1e1e1;
  box-shadow: 0 0 0 0.25rem rgb(255 255 255 / 0%);
}

.Contact-info-control-right textarea {
  height: auto;
}

.Contact-info-control-right-button__message {
  background-color: #fff;
  padding: 13px 30px;
  width: 100%;
  border: 1px solid #e1e1e1;
  color: #666;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  min-width: 270px;
  -webkit-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.Contact-info-control-right-button__message:hover {
  color: #ba933e;
}

.Contact-map {
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.Contact-map-content {
  width: 100vw;
  height: 590px;
}
</style>
