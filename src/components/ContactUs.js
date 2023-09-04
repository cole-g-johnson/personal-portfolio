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
                <p>
                  Portfolio Template Created By Rahul Bhatia: {resumeData.linkedinId} <br></br>
                  Code Assistance From Andrew Bautista: https://github.com/WarriorofZarona/React-Portfolio-1
                </p>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}