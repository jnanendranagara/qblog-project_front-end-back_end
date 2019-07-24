import React,{Component} from 'react';
import {connect} from 'react-redux';
import zz from '../images/zz.png';
import net from '../images/net.jpg';
import cbook from '../images/cbook.jpg';
import javabook from '../images/javabook.jpg';
import rajaraman from '../images/rajaraman.jpg';
import sql from '../images/sql.jpg';
// import {LOGIN} from '../Actions/Action';
// import '../CSS/LogIn.css';
import '../CSS/Dash.css';
// import tra from'../images/tra.jpg';
// import { SocialIcon } from 'react-social-icons';
import browserHistory from "../Utils/browserHistory"

class Dash extends Component{
    state = {
        count:0
    }
    // incrementMe = () =>{
    //     console.log("Give")
    // }
    incrementMe = () => {
        let newCount = this.state.count + 1
        this.setState({
          count: newCount
        })
      }
      decrementMe = () => {
        let newCount = this.state.count --- 1
        this.setState({
          count: newCount
        })
      }
   
   
    handleSubmit4=(event)=> {
        browserHistory.push("/first");
    }
   
    
    
    render(){
        return(
            <div >
                <div className="Header">
                <div className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img className="logo" src={zz} alt={"zz"} height="50" width="50" onClick={this.handleSubmit4}></img><h4 id="h4"><i>TECHNOLOGIES</i></h4> </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-"></div>
               <div id="a" className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button><select><option value="platform">Languages</option>
                <option >.NET</option><option >C++</option><option >JAVA</option><option >SQL</option></select></button></div>
                <div id="b" className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button><select><option value="platform">AUTHORS</option>
                <option >Rajaraman</option><option >BAlagurusamy</option><option >PadmyaReddy</option><option >Andrew</option></select></button></div>
                <div id="c" className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button>Marketing</button></div>
                <div id="d" className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button>SOLUTIONS</button></div>
                </div>
            </div>

            <div className="body">

                <div id="net" className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="netbook" src={net} alt={"net"} height="100" width="100" ></img></div>                              
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img className="raman" src={rajaraman} alt={"rajaraman"} height="100" width="100" ></img></div>                            
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  < div className="dashbordcontent"> <h6 > <b> .NET PROGRAMING </b></h6> 
                  <p>A .NET Programmer is responsible for designing and developing software and web pages based on given performance requirements and design.</p>
                  {/* <img alt="adele-pic" src="//www.gstatic.com/tv/thumb/persons/521029/521029_v9_ba.jpg"/> */}
                  <button onClick={this.incrementMe}> Likes:{this.state.count} </button>
                   </ div>
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                    
                    
                    </div>                                                      
                </div> 

                <div id="c " className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="sqlbook" src={cbook} alt={"cbook"} height="100" width="100" ></img></div>                              
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"></div>                                                      
                </div>     
                

                <div id="java" className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="java" src={javabook} alt={"javabook"} height="100" width="100" ></img></div>                              
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"></div>                                                      
                </div>  

                <div id="sql " className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="sqlbook" src={sql} alt={"sql"} height="100" width="100" ></img></div>                              
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"></div>                                                      
                </div>              
            </div>

            <div className="footer">
                <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>                              
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div className="address">
                    <div className="row">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div> 
                    <div id="name" className="col-xs-8 col-sm-8 col-md-8 col-lg-48"><h6><b>JK TECHNOLOGIES</b></h6>
                    <p>Horizon, HIEMA Convention Center Road,Hebbal Industrial Estate 5,Mysuru-570001, Karnataka -INDIA.</p></div>                              
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div> 
                    </div> </div> </div>
                    {/* <div className="icon">
                    <SocialIcon id="twitter" url="https://twitter.com/" />
                    <SocialIcon id="facebook" url="https://www.facebook.com/" />
                    <SocialIcon id="whatsapp" url="https://www.whatsapp.com/" />
                    <SocialIcon id="skype" url="https://www.skype.com/" />
                    <SocialIcon id="email" url="https://www.email.com/" />
                    <SocialIcon id="linkedein" url="http://linkedin.com/" /><br/><p>Copyright @ All rights reserved</p>
                        </div>   */}
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>                              
                    
                </div>
            </div>
            </div>
        )
    }
}
// const mapStateToprops=(state)=>{
//     const {loginmsg}=state.Register_reducer;
//     const {regmsg}=state.Register_reducer;
//     return {loginmsg,regmsg};
// };
export default Dash;