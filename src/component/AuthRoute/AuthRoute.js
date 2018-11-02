import React from "react"
import axios from "axios"
import {withRouter} from "react-router-dom"
class AuthRoute extends React.Component{
    componentDidMount(){
        const publicList = ["/login","register"]
        const pathname = this.props.location.pathname
        if(publicList.indexOf(pathname)>-1){
            return null
        }
        axios.get("/user/info").then(res=>{
            if(res.data.code==0){

            }else{
                console.log(this.props.history)
                this.props.history.push("/login")
            }
            console.log(res.data)
        })
    }
    render(){
        return (<p></p>)
    }
}
export default  withRouter(AuthRoute)