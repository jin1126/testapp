import React, { Component } from 'react';
import {Platform, FlatList, StyleSheet, Text, View, ListView, ScrollView, TouchableOpacity, Image} from 'react-native';
import {Card, SearchBar} from 'react-native-elements';
import {Searchbar} from 'react-native-paper';

const data = [
    {
      imageUrl: require('../../images/us.png'),
      title: "United States",
      options: ['CALLS','SMS']
    },
    {
      imageUrl: require('../../images/canada.png'),
      title:"Canada",
      options: ['CALLS','SMS']
    },
    {
      imageUrl: require('../../images/australia.png'),
      title:"Australia",
      options: ['CALLS']
    },
    {
      imageUrl: require('../../images/belgium.png'),
      title:"Belgium",
      options: ['CALLS']
    },
    {
      imageUrl: require('../../images/cyprus.png'),
      title:"Cyprus",
      options: ['CALLS']
    },
    {
      imageUrl: require('../../images/czech.png'),
      title:"Czech Republic",
      options: ['CALLS']
    },
    {
      imageUrl: require('../../images/denmark.png'),
      title:"Denmark",
      options: ['CALLS']
    },
    {
      imageUrl: require('../../images/estonia.png'),
      title:"Estonia",
      options: ['CALLS']
    },
    {
      imageUrl: require('../../images/finland.png'),
      title:"Finland",
      options: ['CALLS']
    },
    {
      imageUrl: require('../../images/france.png'),
      title:"France",
      options: ['CALLS']
    },
    {
      imageUrl: require('../../images/greece.png'),
      title:"Greece",
      options: ['CALLS']
    },
  ]
const searchImage = require('../../images/search.png');
const rightImage = require('../../images/right.png');
class CountryChoose extends Component {
    constructor(props){
      super(props);
      this.state = {
        data: data,
        search: ''
      };
    }

    updateSearch = (search) => {
      this.setState({search});
      const filters = data.filter((item) => (item.title.indexOf(search) !== -1));
      this.setState({data: filters});
    }

    render() {
      return (
          <View style={{ flex: 1 }}>
            <View style={styles.search}>
              <Image style={{width: 10, height: 10, marginLeft: 10, marginRight:5}} source={searchImage}></Image>
              <Text>Search</Text>
            </View>
            <Text style={styles.country}>Select a Country</Text>
            <View style={styles.searchbar}>
              <View style={{width:15}}></View>
              <Searchbar style={{flex:1, borderRadius:25, height:45}} onChangeText={this.updateSearch} placeholder="Search countries..."></Searchbar>
              <View style={{width:15}}></View>
            </View> 
            
            <ScrollView style={{ paddingLeft: 20, flex:1 }}>
              {this.state.data.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{
                      height: 60,
                      flexDirection: 'row',
                      borderBottomWidth: index !== (this.state.data.length - 1) ? 1 : 0,
                      borderBottomColor: '#888'}}
                      key = {item}
                      onPress={this.props.onCountryClick}
                  >
                      <Image style={{ width: 40, height: 40 }} source={item.imageUrl}></Image>
                      <View style={{ flex: 1 ,marginTop:3, flexDirection: 'row'}}>
                        <View style={{flex: 0.9, marginLeft: 20}}>
                          <Text style={{fontSize: 22}}>{item.title}</Text>
                          <View style={{height:20, flexDirection:'row'}}>
                            {item.options.map((item, index) => {
                                
                                  if(item == 'CALLS') {
                                    return (
                                      <Text key={index} style={{fontSize: 12, marginLeft: 5, width:50, textAlign:'center', borderRadius:5, backgroundColor:'#7de0bb'}}>{item}</Text>
                                    );
                                  }
                                  else {
                                    return (
                                      <Text key={index} style={{fontSize: 12, marginLeft: 5, width:30, textAlign:'center', borderRadius:5, backgroundColor:'#8acce2'}}>{item}</Text>
                                    );
                                  }
                            })}
                          </View>
                        </View>
                        <View style={{flex: 0.1, marginRight: 10, justifyContent:'center', alignItems: 'center'}}>
                          <Image style={{width:25, height:25}} source={rightImage}></Image>
                        </View>
                      </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
      );
    }
  }

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  country: {
    fontWeight: 'bold',
    fontSize: 20,
    height: 40,
    textAlign: 'center',
  },
  searchbar: {
    height : 40,
    flexDirection : 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default CountryChoose;
