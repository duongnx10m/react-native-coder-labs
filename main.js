import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

export default class Lab1Tumblr extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=> r1!==r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1','row 2'])
        };
    }
    render() {
      return (
        <ListView 
            dataSource={this.state.dataSource}
            renderRow={(rowData)=> <Text>{rowData}</Text>}
        />
      );
    }
  }
  
  const styles = StyleSheet.create({
  });