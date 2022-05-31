import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import "./edit.css";
import { MdAddAPhoto, MdOutlineSaveAlt} from "react-icons/md";
import { BiArrowBack} from "react-icons/bi";
import { UserContext } from "../../contexts/user-context";
import { Link } from "react-router-dom";

class EditPhotography extends Component {
    static contextType=UserContext;
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          description: "",
          image: ""
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
        event.preventDefault();
        const {token}=this.context;
        const header=`JWT ${token.access}`
        console.log(header);

        const {image,...reqData}=this.state
        console.log(reqData);
        const data_key=`api/contenmaker/me/`;
        PutReq(data_key,reqData,header)
      };

    render() {
        return(
            <div className="row">
                <h4 className="mt-4">
                    Edit Photography Information
                </h4>
                <div className="col-8 col-md-6 mt-5">
                <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label htmlFor="title" md={2}>
                        Title
                    </Label>
                    <Col md={10}>
                    <Input
                        type="text"
                        name="title"
                        value={this.state.title}
                        placeholder="Company name?"
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
                        placeholder="Details of the services?"
                        onChange={this.handleInputChange}
                    />
                    </Col>
                </FormGroup>
                <Button className="btn btn-success"  id="saveprof">Save<MdOutlineSaveAlt style={{
                    marginLeft: "7px"
                }}/></Button>
                <Button className="btn btn-dark"><BiArrowBack style={{
                    marginRight: "7px"
                }}/><Link to="/photographyProfile" id="plantext">Go Back</Link></Button>
            </Form>
            </div>
            <div className="col-4 text-center m-5">
                <MdAddAPhoto style={{
                    width: "200px",
                    height: "80px"
                }}/><br/><br/>
                <input type="file" id="myfile" style={{
                    paddingLeft: "100px"
                }} value={this.state.image}/>
            </div>
        </div>
    )
    }
}

export default EditPhotography;