import React, { Component } from 'react';
import { View,StyleSheet,Text,Button,TextInput } from 'react-native';



class App extends Component{
  constructor(){
    super();
    this.state={ms:0,hg:0,imt:0,diag:'',stat:false}
  }

  klik=()=>{
    var mass = parseInt(this.state.ms);
    var hgt = parseInt(this.state.hg)/100;
    var imtv = mass/Math.pow(hgt,2);
    var diagv ='';
    if(imtv<18.5){
      diagv='Berat badan anda kurang';
    }else if(imtv>=18.5 && imtv<=24.9){
      diagv='Berat badan ideal';
    }else if(imtv>=25.0 && imtv<=29.9){
      diagv ='Berat badan berlebih';
    }else if(imtv>=30.0 && imtv<=39.9){
      diagv='Berat badan sangat berlebih'
    }else{
      diagv='Berat badan obesitas';
    }
    this.setState({
      ms:mass,
      hg:hgt,
      imt:imtv,
      diag:diagv,
      stat:true
    })
  }
  render() {
    console.disableYellowBox=true;
    return (
      <View style={styles.container}>
        <TextInput onFocus={()=>{
          var st = this.state.stat
          if(st){
            this.setState({stat:!this.state.stat})
          }
        }} onChangeText={(angka1)=>this.setState({ms:angka1})} style={{height:40,width:250,backgroundColor:'lightblue'}} placeholder='Massa(kg)' value={this.state.ms}  />
        <Text>{'\n'}</Text>
        <TextInput onFocus={()=>{
          var st = this.state.stat
          if(st){
            this.setState({stat:!this.state.stat})
          }
        }} onChangeText={(angka2)=>this.setState({hg:angka2})} style={{height:40,width:250,backgroundColor:'lightblue'}} placeholder='tinggi(cm)' value={this.state.hg}  />
        <Text>{'\n'}</Text>
        <Button onPress={()=>{this.klik();}} title="Hitung IMT" color="blue" style={{width:250,height:100}}/>
        {this.state.stat &&
        <View style={styles.welcome} hidden="true">
          <Text style={styles.text}>Berat Badan:</Text>
          <Text style={styles.text2}>{this.state.ms} kg</Text>
          <Text style={styles.text}>Tinggi Badan:</Text>
          <Text style={styles.text2}>{this.state.hg} m</Text>
          <Text style={styles.text}>Index massa tubuh:</Text>
          <Text style={styles.text2}>{this.state.imt}</Text>
          <Text style={styles.text}>Diagnosa:</Text>
          <Text style={styles.text2}>{this.state.diag}</Text>
        </View>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'#00AAFF'
  },
  welcome: {
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: 'green',
  },
  image:{
    width:290,
    height:350
  },
  text:{
    fontSize: 18,
    textAlign:'center'
  },
  text2:{
    fontSize: 35,
    fontWeight: 'bold',
    textAlign:'center'
  }
});

export default App;