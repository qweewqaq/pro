import React from "react"
import PropTypes from "prop-types"
import {Card,WingBlank,WhiteSpace} from "antd-mobile"
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
                        <Card key={v._id}>
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
}
export default UserCard