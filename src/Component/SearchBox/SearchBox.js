import React from 'react';
import './SearchBox.css';
import sampleData from '../../sample.json';
import searchLogo from '../../img/search.png'

class SearchBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
            search: '',
			apiData: []
		}
    }
    searchData = (event) => {
        var self = this;
        console.log(event.target.value);
        self.setState({
            search: event.target.value
        });
        if(event.target.value.length < 3){
            self.setState({
                apiData: []
            });
        }else{
            let data = sampleData;
            let dataValue = data.filter( 
                e => (e.fundname.toLowerCase()).includes(event.target.value.toLowerCase())
            );
            self.setState({
                apiData: dataValue
            })
        }
    }
    getItem = (e) => {
        this.props.getSelectedItem(e);
    }
    render(){
        return (
            <div className="">
                <div className="searchBox">
                    <img className="searchImg" src={searchLogo} />
                    <input type="text" placeholder="Search" onChange={this.searchData} name="searchBox" value={this.state.search}/>
                </div>
                
                {
                    this.state.apiData.length > 0 && 
                    <div className="searchResult">
                        {
                            this.state.apiData.map((e,i)=>{
                                return(
                                    <div className="list" key={i} onClick={() => this.getItem(e)}>
                                        <div className="details">                                            
                                            <div className="heading">{e.fundname}</div>
                                            <div className="equity">EQUITY</div>
                                            <div className="amount">
                                                Min. SIP Amount: <span className="bold">&#8377; {e.minsipamount}</span>  SIP Multiple: <span className="bold">&#8377; {e.minsipmultiple}</span>
                                            </div>
                                        </div>
                                        <div className="addBtn">
                                            <div className="btn">Add</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}

export default SearchBox;