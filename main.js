import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ActivityIndicator, 
  Text,
  View,
  ListView, Image
} from 'react-native';
import moment from 'moment';

//API: 
export default class Lab1Flick extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1!==r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
        };
        this._getMoviesFromApiAsync();
    }
    
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                enableEmptySections={true}
                renderRow={(rowData)=>this._renderRow(rowData)}
            />
        );
    }

    _getMoviesFromApiAsync(){
        return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed')
            .then((response)=>response.json())
            .then((responseJson)=>{
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson.results),
                });
            }).catch((error)=>{
                console.error(error);
            });
    }
    _renderRow(rowData){
        var url = "http://image.tmdb.org/t/p/w185"+rowData.poster_path;
        return(
            <View style={{flexDirection: 'row', marginBottom:5, backgroundColor:'yellow'}}>
                <Image style={{width:185,height:278}}
                    source={{uri: url}}/>
                <View >
                    <Text style={{fontWeight:'bold'}}>{rowData.title}</Text>
                    <Text>{rowData.overview}</Text>
                </View>
            </View>
        )
    }
}
  
  const styles = StyleSheet.create({
  });

