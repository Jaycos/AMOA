/* jshint ignore: start */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {
    links: [
      {
        href: "https://www.uwinnipeg.ca/emergency-guidelines/",
        name: "Emergency Guidelines"
      },
      { href: "mailto:websuggest@uwinnipeg.ca", name: "Contact Webmaster" },
      {
        href: "https://www.uwinnipeg.ca/copyright",
        name: "Copyright"
      },
      { href: "https://www.uwinnipeg.ca/privacy/", name: "Privacy Policy" },
      { href: "index.html", name: "Brand Guidelines" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div className="card text-secondary bg-dark text-center">
          <div className="card-header" />
          <div className="card-body container">
            <div className="row text-center">
              <p className="col-12 col-md-3">
                515 Portage Avenue <br />
                Winnipeg, MB Canada
                <br />
                R3B 2E9 <br />
                P: 204.786.7811
              </p>
              {this.hr()}
              <p className="col-12 col-md-3">Connect with Uwinnipeg: <br/>
				<a href="https://www.uwinnipeg.ca/" className="text-secondary"> UWinnipeg Home </a>
			  </p>
              {this.hr()}
              <p className="col-12 col-md-3">
				<a href="../home" className="text-secondary"> AMOA Home </a>
			  </p>
              {this.hr()}
              <p className="col-12 col-md-3" id="footerInfoLinks">
                {this.state.links.map(link => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-secondary"
                  >
                    {link.name}
                    <br />
                  </Link>
                ))}
              </p>
            </div>
          </div>
          <div className="card-footer text-muted" />
        </div>
      </React.Fragment>
    );
  }

  hr() {
    return (
      <hr className="bg-secondary d-block d-sm-none" style={{ width: "80%" }} />
    );
  }
}

export default Footer;
