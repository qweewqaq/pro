import React from "react"
import {connect} from "react-redux"
import {Result,List,WhiteSpace} from "antd-mobile"
@connect(
    state=>state.user
)
class User extends React.Component{
    render(){
        const props =this.props
        return ( 
            props.user? (
                <div>
                  <Result img={<img src={require(`../img/${props.avatar}.png`)} style={{width:50,height:50}}/>}
                          title={props.user}
                          message={props.type=="boss"?props.company:""}/>

                    <List renderHeader={()=>"简介"}>
                        <List.Item
                            multipleLine
                        >
                            {props.title}
                            {props.desc.split("\n").map(v=><List.Item.Brief key={v}>{v}</List.Item.Brief>)}
                            {props.money?<List.Item.Brief>{props.money}</List.Item.Brief>:""}
                        </List.Item>
                        <WhiteSpace></WhiteSpace>
                        <List>
                        <List.Item>退出登录</List.Item>
                        </List>
                    </List>
                </div>
                ) :""
        )
    }
}
export {User}