import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import "./edit.css";

class EditCaterer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          capacity: "",
          title: "",
          description: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value,
        });
      };
      
    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
      };

    render() {
        return(
            <div className="col-12 col-md-7 mt-5">
                <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label htmlFor="capacity" md={2}>
                    Capacity
                    </Label>
                    <Col md={10}>
                    <Input
                        type="number"
                        name="capacity"
                        value={this.state.capacity}
                        placeholder="Highest capacity for providing foods?"
                        onChange={this.handleInputChange}
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="title" md={2}>
                        Title
                    </Label>
                    <Col md={10}>
                    <Input
                        type="text"
                        name="title"
                        value={this.state.title}
                        placeholder="Caterer name?"
                        onChange={this.handleInputChange}
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="description" md={2}>
                    Description
                    </Label>
                    <Col md={10}>
                    <Input
                        type="textarea"
                        name="description"
                        value={this.state.description}
                        placeholder="Details of the catering service?"
                        onChange={this.handleInputChange}
                    />
                    </Col>
                </FormGroup>
                <Button className="btn btn-dark" id="saveprof">Save</Button>
            </Form>
        </div>
    )
    }
}

export default EditCaterer;