import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ActivityIndicator, 
  Text,
  View,
  ListView, Image
} from 'react-native';
//API: 
export default class Lab1Tumblr extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=> r1!==r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
        };
    }

    componentDidMount(){
        return fetch('https://api.tumblr.com/v2/blog/xkcn.tumblr.com/posts/photo?api_key=Q6vHoaVm5L1u2ZAW1fqv3Jw48gFzYVg9P0vH0VHl3GVy6quoGV')
            .then((response)=> response.json())
            .then((responseJson)=>{
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson.response.posts),
                });
            }).catch((error)=> {
                console.error(error);
            });
    }

    _renderRow(rowData){
        var url = ""
        if(rowData.photos == undefined){
            console.log('data','empty')
        } else {
            console.log('data', rowData.photos[0].alt_sizes[0].url)  
            url = rowData.photos[0].alt_sizes[0].url
        }
        
        return (
            <View >
                { url !== "" && <Image style={{flex:1,height:300}}
                    source={{uri: url}} /> }
                <Text >{rowData.slug}</Text>
                <View style={{backgroundColor:'red',height:1,marginTop:5}}></View>
            </View>
        )
    }

    render() {
      return (
        <ListView
            testID='1'
            enableEmptySections= {true}
            dataSource={this.state.dataSource}
            renderRow={
                (rowData)=> this._renderRow(rowData)
            }
        />
      );
    }

    
  }
  
  const styles = StyleSheet.create({
  });

