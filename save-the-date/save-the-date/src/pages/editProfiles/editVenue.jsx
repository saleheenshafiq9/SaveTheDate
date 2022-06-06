import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import "./edit.css";
import { MdAddAPhoto, MdOutlineSaveAlt} from "react-icons/md";
import { BiArrowBack} from "react-icons/bi";
import { Link } from "react-router-dom";

import axios from "axios";
import PutReq from "../../helper/PutReq";
import { UserContext } from "../../contexts/user-context";
import { tokenUrl } from "../../constants/constants";
import GetReq from "../../helper/getReq";
import ReqWithHead from "../../helper/ReqWithHead";


class EditVenue extends Component {
    static contextType=UserContext;
    constructor(props) {
        super(props);
        this.state = {
          success:false,
          location: "",
          capacity: "",
          title: "",
          description: "",
          image: "",
          id:null
        };


        this.handlefileChange=this.handlefileChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      componentDidMount(){
        const {token}=this.context;
        const header=`JWT ${token.access}`
        ReqWithHead(tokenUrl,"/api/venues/me",header).then((res)=>this.setState({id:res.id}))

      }
    
      handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value,
        });
        
      };

      handlefileChange(e){
        const files=e.target.files;        
        this.setState({image:files[0]}) 
        }

        fileUpload(){
            const formData=new FormData();
            formData.append("image",this.state.image);
            const data=axios.post(tokenUrl+`/api/venues/${this.state.id&&this.state.id}/images/`,formData).catch(e=>console.log(e))
            return data
        }
        changeProfile(){
            const {token}=this.context;
            const header=`JWT ${token.access}`
            const {image,id,success,...reqData}=this.state;
            const data_key=`api/venues/me/`;
            return PutReq(data_key,reqData,header);
           
        }
    handleSubmit(event) {
        event.preventDefault();
        Promise.all([this.changeProfile(),this.fileUpload()]).then(res=>res&& this.setState({success:true}));
      };

    render() {
        return(
            <div className="row">
                <h4 className="mt-4">
                    Edit Venue Information
                </h4>
                <div className="col-8 col-md-6 mt-5">
                <form onSubmit={this.handleSubmit}>
                
                <FormGroup row>
                    <Label htmlFor="location" md={2}>
                        Location
                    </Label>
                    <Col md={10}>
                    <Input
                        type="text"
                        name="location"
                        placeholder="Where's the venue situated?"
                        value={this.state.location}
                        onChange={this.handleInputChange}
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="capacity" md={2}>
                    Capacity
                    </Label>
                    <Col md={10}>
                    <Input
                        type="number"
                        name="capacity"
                        value={this.state.capacity}
                        placeholder="Approx. number of guests?"
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
                        placeholder="Venue name?"
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
                        placeholder="Details of the venue?"
                        onChange={this.handleInputChange}
                    />
                    </Col>
                </FormGroup>
               
                 <Button className="btn btn-success" type="submit" id="saveprof">
                     Save <MdOutlineSaveAlt style={{
                    marginLeft: "7px"
                }}/></Button>
<<<<<<< HEAD
            
            </form>
=======
                <Button className="btn btn-dark"><BiArrowBack style={{
                    marginRight: "7px"
                }}/><Link to="/venueProfile" id="plantext">Go Back</Link></Button>
            </Form>
>>>>>>> d531cdc46992862268294ea6d305835b90595bfd
            </div>
            <div className="col-4 text-center m-5">
                <MdAddAPhoto style={{
                    width: "200px",
                    height: "80px"
                }}/><br/><br/>
                <input type="file" id="myfile"
                onChange={this.handlefileChange}
                 style={{
                    paddingLeft: "100px"
                }} />
            </div>
            <div className="text-success">
            {this.state.success&& "Successful"}
            </div>
        </div>
        
    )
    }
}

export default EditVenue;