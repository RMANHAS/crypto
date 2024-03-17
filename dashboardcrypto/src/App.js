import React, { Component } from 'react'
import CardSection from './components/CardSection';
import Header from './components/Header';


export default class App extends Component {
constructor(){
  super();
  this.state={
    Id:"bitcoin",
    Data:{}
  }
}

fetchData=async ()=>{
  // let data=await fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
   let data=await fetch("https://api.coingecko.com/api/v3/coins/"+this.state.Id)
  let JsonData=await data.json();
  this.setState({Id:this.state,Data:JsonData})
}

handleSubmit= async(event)=>{
  //console.log(event.target.value)
  await this.setState({Id:event.target.value,Data:this.state.Data})
  this.fetchData()
}

// componentDidMount(){ //it is used to call the fetch data.this will run only one time at last
//   this.fetchData()
// }

  componentDidMount() {
  this.fetchData() //it is used to call the fetch data.this will run only one time at last
  // this.interval =  setInterval(() => this.fetchData(), 2000); //setinterval is to refresh the data after 2 sec
  // console.log("this is")
}
//  componentWillUnmount() {
//   clearInterval(this.interval);//clear interval is used to clear the set interval
//   console.log("this is")
// };


  render() {
    return (
      <div>
       
        {/* <h1>{this.state.Data.Id}</h1> */}
        {/* <h2>{this.state.Data.name}</h2>
        <h2>{this.state.Data.categories}</h2>
        <h2>{this.state.Data.hashing_algorithm}</h2> */}
        <Header handle_Submit={this.handleSubmit}/>
        {/* <CardSection coinName={this.state.Data.name} Categories={this.state.Data.categories}/> */}

        <CardSection coinName={this.state.Data.name} currentPrice={this.state.Data.market_data ? this.state.Data.market_data.current_price["usd"] : ""}
          mCap24={this.state.Data.market_data ? this.state.Data.market_data.market_cap_change_percentage_24h : ""}
          ath={this.state.Data.market_data ? this.state.Data.market_data.ath.usd : ""} atl={this.state.Data.market_data ? this.state.Data.market_data.ath.usd : ""}
          sentiment={this.state.Data.sentiment_votes_up_percentage} high24={this.state.Data.market_data ? this.state.Data.market_data.high_24h["usd"] : ""}
          low24={this.state.Data.market_data ? this.state.Data.market_data.low_24h["usd"] : ""} />



      </div>
      
    )
  }
}
