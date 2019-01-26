import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Container, Form, FormGroup, Col, Button, Input } from "reactstrap";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Navbar from "./MyNavbar";
import Footer from "./Footer";

class EditPage extends Component {
  constructor() {
    super();
    this.handleShowCreate = this.handleShowCreate.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleCloseCreate = this.handleCloseCreate.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.state = {
      exitingModules: [],
      show: false,
      showCreate: false,
      newModuleCode: "",
      redirect: false,
      newModuleId: "",
      disBtn: true
    };
  }

  //   Get all existing modules and display inside the modal
  componentDidMount() {
    fetch("/admin/edit")
      .then(res => res.json())
      .then(exitingModules =>
        this.setState({ exitingModules }, () => {
          console.log(exitingModules);
        })
      );
  }

  // handle close and open for btn 'edit exiting module'
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  // handle close and open for btn 'Create new moudle'
  handleCloseCreate() {
    this.setState({ showCreate: false });
  }

  handleShowCreate() {
    this.setState({ showCreate: true });
  }

  // Create Brand New Module
  clickCreate = () => {
    const newModule = {
      moduleCode: this.state.newModuleCode,
      title: "",
      body: "",
      public: false
    };
    axios.post("/admin/edit", newModule).then(res => {
      this.setState({ newModuleId: res.data._id, disBtn: false });
      console.log(this.state);
    });
  };

  setRedirect() {
    this.setState({
      redirect: true
    });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect to={`/admin/edit/editmodule/${this.state.newModuleId}`} />
      );
    }
  };

  getExistingModules() {
    return this.state.exitingModules.map(module => (
      <React.Fragment key={module._id}>
        <div className="text-white m-5 bg-dark" style={{ height: "100px" }}>
          <Link
            style={{
              color: "inherit",
              textDecoration: "none",
              opacity: 1,
              display: "block",
              width: "100%",
              height: "50px",
              transition: "0.5s ease",
              backfaceVisibility: "hidden"
            }}
            to={`/admin/edit/editmodule/${module._id}`}
          >
            {module.title}
          </Link>
        </div>
        <hr className="d-block" style={{ width: "80%" }} />
      </React.Fragment>
    ));
  }

  render() {
    return (
      <React.Fragment>
        {this.renderRedirect()}
        <Navbar role={this.props.role} page="quiz" />
        <Container>
          <h2 className="text-center mt-5 pt-5">What you can do</h2>
          <div className="row">
            <div className="col" />
            <p className="pb-5 m-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae nulla nisi illo facere corrupti perferendis
              consectetur voluptatem harum. Harum at velit illum laboriosam
              debitis. Alias, quis tempore in aliquam ipsum rem fuga modi
              sapiente quidem distinctio, sequi, unde repudiandae veritatis
              ducimus error excepturi voluptatibus nam ad qui itaque. Temporibus
              similique provident eveniet corporis excepturi at aut nihil ex
              quidem. Itaque facilis voluptate tempore vitae libero illum
              quaerat, distinctio at officiis, perferendis quidem repellat
              doloribus obcaecati fugiat voluptatibus iusto optio. Debitis modi,
              possimus placeat exercitationem quae assumenda delectus
              consequatur illum alias iste eos pariatur ut corrupti aut tempore
              voluptatem reiciendis tempora quibusdam eaque error veniam
              corporis, velit adipisci a? Expedita est perspiciatis tempore
              tempora. Exercitationem dolorem architecto animi sit consequuntur
              quia dignissimos ad consectetur modi. Ratione eveniet sunt
              molestias cum debitis vitae id nihil dicta atque dolor ipsam
              commodi rerum exercitationem facilis neque natus doloribus eos
              totam asperiores sed, laudantium tempora. Sint impedit, aspernatur
              perspiciatis iure mollitia libero doloremque nisi delectus?
              Incidunt voluptatem earum nulla distinctio placeat beatae atque
              veritatis cum similique! Obcaecati delectus, temporibus quos, illo
              commodi provident ducimus dolorum ipsa quia totam velit tempora id
              officia repudiandae quam eligendi odit minus, recusandae cumque
              aliquam doloribus beatae. Iste, nemo cumque! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Repudiandae nulla nisi illo
              facere corrupti perferendis consectetur voluptatem harum. Harum at
              velit illum laboriosam debitis. Alias, quis tempore in aliquam
              ipsum rem fuga modi sapiente quidem distinctio, sequi, unde
              repudiandae veritatis ducimus error excepturi voluptatibus nam ad
              qui itaque. Temporibus similique provident eveniet corporis
              excepturi at aut nihil ex quidem. Itaque facilis voluptate tempore
              vitae libero illum quaerat, distinctio at officiis, perferendis
              quidem repellat doloribus obcaecati fugiat voluptatibus iusto
              optio. Debitis modi, possimus placeat exercitationem quae
              assumenda delectus consequatur illum alias iste eos pariatur ut
              corrupti aut tempore voluptatem reiciendis tempora quibusdam eaque
              error veniam corporis, velit adipisci a? Expedita est perspiciatis
              tempore tempora. Exercitationem dolorem architecto animi sit
              consequuntur quia dignissimos ad consectetur modi. Ratione eveniet
              sunt molestias cum debitis vitae id nihil dicta atque dolor ipsam
              commodi rerum exercitationem facilis neque natus doloribus eos
              totam asperiores sed, laudantium tempora. Sint impedit, aspernatur
              perspiciatis iure mollitia libero doloremque nisi delectus?
              Incidunt voluptatem earum nulla distinctio placeat beatae atque
              veritatis cum similique! Obcaecati delectus, temporibus quos, illo
              commodi provident ducimus dolorum ipsa quia totam velit tempora id
              officia repudiandae quam eligendi odit minus, recusandae cumque
              aliquam doloribus beatae. Iste, nemo cumque!
            </p>
            <div className="col" />
          </div>
          <div className="row pb-5">
            <div className="col-md" />
            <div className="btn-group" role="group" aria-label="...">
              <div
                onClick={this.handleShowCreate}
                // to="/admin/edit/createmodule"
                className="text-white btn btn-lg btn-dark"
              >
                Create New Module
              </div>
              <div
                onClick={this.handleShow}
                className="text-white btn btn-lg btn-secondary"
              >
                Edit Exiting Module
              </div>

              {/* make new module */}
              <Modal
                show={this.state.showCreate}
                onHide={this.handleCloseCreate}
              >
                <Modal.Header>
                  <Modal.Title style={{ margin: "0 auto" }} className="row">
                    Create New Module
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                  <Form>
                    <FormGroup row>
                      <Col sm={7}>
                        <Input
                          onChange={e => {
                            this.setState({ newModuleCode: e.target.value });
                          }}
                          placeholder="Enter Unique Module Code"
                        />
                      </Col>
                      <Col sm={{ size: 5 }}>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="..."
                        >
                          <Button
                            color={this.state.disBtn ? "danger" : "secondary"}
                            disabled={!this.state.disBtn}
                            onClick={this.clickCreate}
                          >
                            Create
                          </Button>
                          <Button
                            color={!this.state.disBtn ? "danger" : "secondary"}
                            disabled={this.state.disBtn}
                            onClick={this.setRedirect}
                          >
                            Go Edit
                          </Button>
                        </div>
                      </Col>
                    </FormGroup>
                  </Form>
                </Modal.Body>
              </Modal>

              {/* Edit Existing Module */}
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                  <Modal.Title style={{ margin: "0 auto" }} className="row">
                    Exiting Module
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                  {this.getExistingModules()}
                </Modal.Body>
                <Modal.Footer className="mx-auto" />
              </Modal>
            </div>
            <div className="col-md" />
          </div>
          <hr id="editingcanvas" className="my-5" style={{ width: "80%" }} />
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}
export default EditPage;
