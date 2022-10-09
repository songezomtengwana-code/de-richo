import React, { Component } from "react";
import { dericho } from "../api/dericho";

export class Landing extends Component {
  state = {
    data: [dericho],
  };
  render() {
    return (
      <div className="home-land-content">
        <div>
          {this.state.data.map((richo) => (
            <section className="card" key={richo.tag}>
              <div className="card-body">
                <div className="card-body-top">
                  <span
                    className="card-body-top-art"
                    style={{
                      backgroundImage: "url(" + richo.topimage + ")",
                    }}
                  ></span>
                </div>
                <div className="card-body-low">
                  <div className="watermark">dericho</div>
                  <div className="signiture sail">014 media space</div>
                  <div className="content">
                    <div className="content-quote sail-200ms">
                      "size ngendlondlo (ngendlodlo'licious)"
                    </div>
                    <div className="content-referal sail-300ms">
                      ~ fifty shades owkesthathu
                    </div>
                    <div className="available sail-400ms">
                      <i className="bi bi-instagram"></i>
                      <i className="bi bi-music-note"></i>
                    </div>
                  </div>
                  <div className="content-options sail-500ms">
                    <a href="#disco" className="btn content-options-main">
                      Discography
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    );
  }
}

