import React from "react";
class ChangeV extends React.Component{
    constructor(props){
        super(props);
        this.state={
            a:0,
            b:0,
            c:0,
            d:0
        };
    }
    ChangeOne=()=>{
        this.setState({
            a:1,
            b:1,
            c:1,
            d:1
        });
    }
    ChangeTwo=()=>{
        this.setState({
            a:2,
            b:2,
            c:2,
            d:2
        });
    }
    ChangeThree=()=>{
        this.setState({
            a:3,
            b:3,
            c:3,
            d:3
        });
    }
    ChangeFour=()=>{
        this.setState({
            a:4,
            b:4,
            c:4,
            d:4
        });
    }
    ChangeAll=()=>{
        this.setState({
            a:1,
            b:2,
            c:3,
            d:4
        });
    }
    render(){
        return(
            <>
            <h1>Click the following buttons to add all variables</h1>
            <button onClick={this.ChangeOne}>One</button>
            <button onClick={this.ChangeTwo}>Two</button>
            <button onClick={this.ChangeThree}>Three</button>
            <button onClick={this.ChangeFour}>Four</button>
            <button onClick={this.ChangeAll}>All</button>
            <h1>{(this.state.a*1)*(this.state.b*2)*(this.state.c*3)*(this.state.d*4)}</h1>
            </>
        );
    }
}
export default ChangeV;