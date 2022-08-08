import { Component } from "react";

class Gender extends Component{
    constructor(){
        super();
        this.state={
            gender:"",
            isMarried:"",

        }
    }
    _renderGender=(e)=>{
        // console.log("inside");
        console.log(e.target.value)
        if(e.target.value==='male'){
            this.setState({
                gender:"Male"
            })
        }else{
           
                this.setState({
                    gender:"female"
                })
        
        }
        
    }
    _renderMaritalStatus=(e)=>{
        // console.log("Married")
        // console.log(e.target.checked);
        if(e.target.checked){
            this.setState({
                isMarried:"Married"
            })
        }else{
            this.setState({
                isMarried:""
            })
        }
        
    }
    render(){
        return(
            <>
            <input type="radio" name="gender" value='male' onClick={this._renderGender} /><span>Male</span>
            <input type="radio" name="gender" value='female' onClick={this._renderGender} /><span>FeMale</span>
            <p></p>
            <input type="checkbox" name="" onChange={this._renderMaritalStatus} /><span>tick if married</span>
            
            <p>
            {this.state.gender}

            </p>
            <p>
                {this.state.isMarried}
            </p>
            </>
        )
    }
}

export default Gender