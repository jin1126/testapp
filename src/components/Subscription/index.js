import React, { Component } from 'react';
import {Platform, FlatList, StyleSheet, Text, View, ListView, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';
import {Card, SearchBar} from 'react-native-elements';
import {Searchbar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import SwiperFlatList from 'react-native-swiper-flatlist';

const searchImage = require('../../images/search.png');
const callImage = require('../../images/call.png');
const rightImage = require('../../images/right_white.png');
const restoreImage = require('../../images/restore.png');
const {height, width} = Dimensions.get('window');
class Subscription extends Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
          <View style={{ flex: 1 }}>
            
            <LinearGradient colors={['#0d429e', '#576cec']} style={{flex:0.55}}>
                <TouchableOpacity onPress={this.props.onBack}>
                    <View style={styles.search}>
                        <Image style={{width: 10, height: 10, marginLeft: 10, marginRight:5}} source={searchImage}></Image>
                        <Text>Search</Text>
                    </View>
                </TouchableOpacity>
                
                <View style={{flexDirection: 'row', justifyContent:'center', height: 40}}>
                    <Text style={styles.phone}>+1 858-264-0510</Text>
                    <TouchableOpacity style={{position:'absolute', top:3, right: 10}}>
                        <Text style={{fontSize: 16, color:'#fff'}}>Close</Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems:'center', justifyContent:'center', height: 50}}>
                    <Text style={{flex: 1, fontWeight:'bold', fontSize:22, color:'#fff', height: 40, textAlign: 'center'}}>Real Number</Text>
                    <Text style={{flex: 1, fontSize:14, color:'#fff', height: 30, textAlign: 'center'}}>Contact anyone with your real number</Text>
                </View>
                
                <SwiperFlatList style={{flex: 1}} index={0} showPagination>
                    

                    <View style={{ justifyContent: 'center', width: width}}>
                        <View style={{flex: 0.6, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{width: 80, height:80}} source={callImage}></Image>
                        </View>
                        <View style={{flex: 0.4}}>
                            <Text style={{fontSize:12, color:'#fff', height: 15, textAlign: 'center'}}>3 days free, then $7.99/wk,</Text>
                            <Text style={{fontSize:12, color:'#fff', height: 15, textAlign: 'center'}}>if not cancelled</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', width: width}}>
                        <View style={{flex: 0.6, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{width: 80, height:80}} source={callImage}></Image>
                        </View>
                        <View style={{flex: 0.4}}>
                            <Text style={{fontSize:12, color:'#fff', height: 15, textAlign: 'center'}}>3 days free, then $7.99/wk,</Text>
                            <Text style={{fontSize:12, color:'#fff', height: 15, textAlign: 'center'}}>if not cancelled</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', width: width}}>
                        <View style={{flex: 0.6, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{width: 80, height:80}} source={callImage}></Image>
                        </View>
                        <View style={{flex: 0.4}}>
                            <Text style={{fontSize:12, color:'#fff', height: 15, textAlign: 'center'}}>3 days free, then $7.99/wk,</Text>
                            <Text style={{fontSize:12, color:'#fff', height: 15, textAlign: 'center'}}>if not cancelled</Text>
                        </View>
                    </View>
                </SwiperFlatList>
            </LinearGradient>
            <View style = {{flex:0.45, backgroundColor:'#fff'}}>
                <View style = {{flex:0.4, flexDirection:'row'}}>
                    <TouchableOpacity style = {{flex:0.3333, backgroundColor:'#fff',borderWidth: 0.5,borderColor: '#888'}}>
                        <View style = {{flex:0.4, justifyContent: 'flex-end'}}>
                            <Text style = {{textAlign: 'center',fontWeight:'bold', fontSize: 20}}>3</Text>
                        </View>
                        <Text style = {{flex:0.2, textAlign: 'center',fontSize: 18}}>trial</Text>
                        <Text style = {{flex:0.2, textAlign: 'center',fontSize: 18}}>$7.99/wk</Text>
                    </TouchableOpacity>
                    <LinearGradient style = {{flex:0.3333, alignItems:'center', justifyContent:'center', shadowColor: '#0079e0', shadowOffset:{width:0, height:2}, shadowOpacity: 0.8, shadowRadius:2}} colors={['#39b7ff', '#0079e0']}>
                        <TouchableOpacity style={{backgroundColor: '#fff',position:'absolute', right:6, left:6, bottom:6, top:6}}>
                            <View style = {{flex:0.4, justifyContent: 'flex-end'}}>
                                <Text style = {{textAlign: 'center',fontWeight:'bold', fontSize: 20}}>3-Day</Text>
                            </View>
                            <Text style = {{flex:0.2, textAlign: 'center',fontSize: 18}}>months</Text>
                            <Text style = {{flex:0.2, textAlign: 'center',fontSize: 18}}>$29.99</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <TouchableOpacity style = {{flex:0.3333, backgroundColor:'#fff',borderWidth: 0.5,borderColor: '#888'}}>
                        <View style = {{flex:0.4, justifyContent: 'flex-end'}}>
                            <Text style = {{textAlign: 'center',fontWeight:'bold', fontSize: 20}}>12</Text>
                        </View>
                        <Text style = {{flex:0.2, textAlign: 'center',fontSize: 18}}>months</Text>
                        <Text style = {{flex:0.2, textAlign: 'center',fontSize: 18}}>$59.99</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', flex:0.25}}>
                    <View style = {{width: 70}}></View>
                    
                    <LinearGradient start={{x:0, y:0}} end = {{x:1, y:0}} colors={['#0478db', '#34bbfd']} style={{marginTop:10, marginBottom:10, borderRadius: 35, flex:1}}>
                        <TouchableOpacity style = {{flex: 1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:20, color:'#fff'}}>ACTIVATE</Text>
                            <Image style={{resizeMode:'contain', position:'absolute', width:20, right:10, bottom:0, top:0}} source={rightImage}></Image>
                        </TouchableOpacity>
                    </LinearGradient>
                    <View style = {{width: 70}}></View>
                </View>
                <View style={{flex:0.35}}>
                    <Text style={{ textAlign:'center', fontSize: 10}}>Terms of Use | Privacy Policy</Text>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <Image style={{ width: 12, resizeMode:'contain', marginRight:5}} source={restoreImage}></Image>
                        <Text style={{textAlign:'center', fontSize: 12}}>Restore</Text>
                    </View>
                    <Text style={{marginLeft: 20, fontSize:12}}>Information about the subscription:</Text>
                    <Text style={{marginLeft: 20, fontSize:12}}>Payment will be changed to iTunes Account at</Text>
                </View>
                <View style={{position: 'absolute', backgroundColor:'#35bcfc', borderRadius: 20,width:100, height:25, alignItems:'center', justifyContent: 'center', left:(width-100)/2, top:-5}}>
                    <Text style={{color:'#fff', fontSize: 15}}>Most Popular</Text>
                </View>
            </View>
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
    phone: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff', 
        height: 40,
        textAlign: 'center',
    },
});

export default Subscription;
