import React from "react"
import axios from "axios"
import {withRouter} from "react-router-dom"
import {loadData} from "../../redux/action/user"
import {connect} from "react-redux"
@connect(
    null,
    {loadData}
)
class AuthRoute extends React.Component{
    componentDidMount(){
        const publicList = ["/login","register"]
        const pathname = this.props.location.pathname
        if(publicList.indexOf(pathname)>-1){
            return null
        }
        axios.get("/user/info").then(res=>{
            if(res.data.code==0){
                this.props.loadData(res.data.data)
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