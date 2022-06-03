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
            id:null,
            success:false,
            image: "",
            location: "",
            capacity: "",
            title: "",
            description: ""
            
        };
        this.fileChange=this.fileChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      componentDidMount(){
        const {token}=this.context;
        const header=`JWT ${token.access}`
        ReqWithHead(tokenUrl,"/api/contentmakers/me",header).then((res)=>this.setState({id:res.id}))
      }
    
      handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value,
        });
      };
      fileChange(e){
        const files=e.target.files;        
        this.setState({image:files[0]}) 
        }   
        
        fileUpload(e){
            const formData=new FormData();
            formData.append("image",this.state.image);
            
            const data=axios.post(tokenUrl+`/api/contentmakers/${this.state.id&&this.state.id}/images/`,formData).catch(e=>console.log(e))
            return data
        }

      profileChange(){
        const {token}=this.context;
        const header=`JWT ${token.access}`
        const {image,id,success,...reqData}=this.state
        const data_key=`api/contenmakers/me/`;
        return PutReq(data_key,reqData,header)
      }
      
    handleSubmit = (event) => {
        event.preventDefault();
        Promise.all([this.changeProfile(),this.fileUpload()]).then(res=>res&& this.setState({success:true}));
      };

    render() {
        return(
            <div className="row">
                <h4 className="mt-4">
                    Edit Photography Information
                </h4>
                <div className="col-8 col-md-6 mt-5">
                <form onSubmit={this.handleSubmit}>
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
                <button className="btn btn-success"  type= "submit" id="saveprof">Save<MdOutlineSaveAlt style={{
                    marginLeft: "7px"
                }}/></button>
                {/* <Button className="btn btn-dark"><BiArrowBack style={{
                    marginRight: "7px"
                }}/><Link to="/photographyProfile" id="plantext">Go Back</Link></Button> */}
            </form>
            </div>
            <div className="col-4 text-center m-5">
                <MdAddAPhoto style={{
                    width: "200px",
                    height: "80px"
                }}/><br/><br/>
                <input type="file" id="myfile" onChange={this.fileChange} style={{
                    paddingLeft: "100px"
                }} />
            </div>
        </div>
    )
    }
}

export default EditPhotography;