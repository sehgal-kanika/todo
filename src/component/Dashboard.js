import { Component } from "react";

class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            itemValue : "",
            list : []
        }
    }

    addNew = () => {
        if(this.state.itemValue.trim()=="") return
        const item = {
            id :  Math.ceil(Math.random()*1000000000),
            value : this.state.itemValue.trim()
        };
        this.setState({
            list : [...this.state.list,item],
            itemValue :""
        })
    }

    onInputChange = (event) => {
        this.setState({
            itemValue :event.target.value.trim()
        })
    }

    remove = (id) =>{
       const lst =  this.state.list.filter(l => { return l.id!=id })
        this.setState({
            list: lst
        })
    }
    render(){
        return (
            <div>
                <div>
                <input
                    type="text"
                    value={this.state.itemValue}
                    placeholder="add a item.."
                    onChange={(e)=>this.onInputChange(e)}/> 
                <button 
                    onClick={() => this.addNew()}
                >Add Item</button>
            </div>
            <div>
                {this.state.list.map((item,i) => {
                    return(
                        <div key={i}>
                            {item.value}
                            <button
                            onClick={()=>this.remove(item.id)}>-</button>
                        </div>
                    )
                })}
            </div>
            </div>
            
        )
    }
}

export default Dashboard;
