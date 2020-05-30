import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import db from './config'

export default class App extends Component {

constructor(){
  super();
  this.state={teamsRank:[]};
}

showTeamRank=()=>{
  var team=db.ref('Teams/');
  var teams=[]
  team.on("value",(data)=>{
  var teamList=data.val();
  for(var team in teamList){
    if(teamList[team]['isButtonPressed']==='true'){
      teams.push(teamList[team]);
      }
    }
  teams.sort(function(team1,team2){
    team1.timeStamp-team2.timeStamp
    });
  this.setState({teamRank:teams})
  console.log(teams)
  });
}

componentDidMount(){
  this.showTeamRank()
}

  render() {
    return (
      <View style={{flex:1}}>
      </View>
    );
  }
}
