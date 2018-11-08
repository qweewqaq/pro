import React from "react"
import PropTypes from "prop-types"
import {Card,WingBlank,WhiteSpace} from "antd-mobile"

import {withRouter} from "react-router-dom"
@withRouter
class UserCard extends React.Component{
    static propTypes={
        userList:PropTypes.array.isRequired
    }
    render(){
        const Body = Card.Body
        return(
            <WingBlank>
                <WhiteSpace/>
                {this.props.userList.map(v=>{
                    return v.avatar?
                        <Card key={v._id} onClick={()=>{this.handleClick(v)}}>
                            <Card.Header
                                title={v.user}
                                thumb={require(`../img/${v.avatar}.png`)}
                                extra={<span>{v.title}</span>}
                            ></Card.Header>
                            <Body>
                            {v.type=="boss"?<div>公司:{v.company}</div>:""}
                            {v.desc.split("\n").map(d=>{
                                return  <div key={d}>{d}</div>
                            })}
                            {v.type=="boss"?<div>薪资:{v.money}</div>:""}
                            </Body>
                        </Card>:""
                })}
            </WingBlank>
        )
    }
    handleClick(v){
        console.log(v._id)
        this.props.history.push(`/chat/${v._id}`)
    }
}
export default UserCard