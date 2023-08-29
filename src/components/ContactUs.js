import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <h4 className="lead">
              Feel free to contact me for any work or suggestions
              </h4>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <p>Portfolio Template Credit Rahul Bhatia:
                  {resumeData.linkedinId}
                </p>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}