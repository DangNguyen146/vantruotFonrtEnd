import React, { Component } from "react";
import Button from '@material-ui/core/Button';

export default class Footer extends Component {
  render() {
    return (
      <>
      <footer className=" bg-dark text-light wow animate__fadeInDown">
        <div className="container px-3 py-4">
          <div className="row">
            <div className="col-12 mb-3 mb-md-0 col-md-4">
              <div className="row">
                <div className="col-12 col-md-4">
                  <img src="./img/LogoWhite.png" className="w-100" alt="" />
                </div>
                <div className="col-12 col-md-8">
                  <p className="m-0">
                    Nhờ sự ủng hộ mạnh mẽ từ những người có cùng đam mê khắp nơi
                    trên cả nước, chúng tôi tự hào là một trong những skateshop
                    chuyên nghiệp nhất Việt Nam ở thời điểm hiện tại.
                  </p>
                </div>
                <div className="col-12 mt-3">
                  <div className="foter-icon">
                    <i className="fab fa-facebook-f" />
                  </div>
                  <div className="foter-icon">
                    <i className="fab fa-twitter" />
                  </div>
                  <div className="foter-icon">
                    <i className="fab fa-discord" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mb-3 mb-md-0 col-md-4">
              <h4>FANPAGE</h4>
              <div className="row">
                <div className="col-12 w-100 ">
                  <div
                    class="fb-page"
                    data-href="https://www.facebook.com/VNUTour/"
                    data-tabs="timeline"
                    data-width=""
                    data-height="200"
                    data-small-header="true"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                  >
                    <blockquote
                      cite="https://www.facebook.com/VNUTour/"
                      class="fb-xfbml-parse-ignore"
                    >
                      <a href="https://www.facebook.com/VNUTour/">VNU Tour</a>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mb-3 mb-md-0 col-md-4">
              <h4 className="mb-0">ĐỊA CHỈ CỬA HÀNG</h4>
              <p className="mb-0" style={{ fontWeight: 600 }}>
                Địa chỉ
              </p>
              <p className="mb-0">Số 1, Phường 1, Quận 1, TP. HCM</p>
              <p className="mb-0" style={{ fontWeight: 600 }}>
                Hỗ trợ &amp; Tư vấn
              </p>
              <p className="mb-0">0909063600</p>
              <p className="mb-0" style={{ fontWeight: 600 }}>
                Email
              </p>
              <p className="mb-0">abcd@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
      </>
    );
  }
}
