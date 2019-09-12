import React from 'react';
import '../SearchBox/SearchBox.css';
import './ItemShow.css';
import deleteLogo from '../../img/delete.png'

class ItemShow extends React.Component{
	constructor(props){
        super(props);
        this.state = {
            enteredValue:''
		}
    }
    deleteItem = (e,i) => {
        this.props.getDeletedItem(e,i);
    }
    setValue = (e) =>{
        this.setState({
            enteredValue: e.target.value
        })
    }
    validationCheck = (e,i) =>{
        if(this.state.enteredValue > e.minsipamount){
            document.getElementById('error-'+i).style.display = 'none';
        }else{
            document.getElementById('error-'+i).style.display = 'block';
        }
    }
    render(){
        // console.log(this.state.apiData);
        return (
            <div className="ItemShow">
                <div className="searchResult">
                    <div className="head">
                        Select Funds
                    </div>
                    <div className="allList">
                    {
                        this.props.items.map((e,i)=>{
                            return(
                                <div className="list" key={i} >
                                    <div className="details">                                            
                                        <div className="heading">{e.fundname}</div>
                                        <div className="equity">Equity</div>
                                    </div>
                                    <div className="delBtn">
                                        <div className="fund">
                                            &#8377; <input type="number" onBlur={()=>this.validationCheck(e,i)} onChange={this.setValue}/>
                                            <div className="error" id={"error-"+i}>Not Valid</div>
                                        </div>
                                        <div className="btn" onClick={() => this.deleteItem(e,i)}><img src={deleteLogo} /></div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemShow;