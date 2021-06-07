import React,{Component} from "react";

export default class Welcome extends React.Component{
    render(){
        return(
            <div>
                <p>Welcome admin</p>
                <Logout/>
            </div>
        )
    }
}
class Logout extends Component{
    render(){
        return(
            <a href="#Logout">Logout</a>
        )
    }
}