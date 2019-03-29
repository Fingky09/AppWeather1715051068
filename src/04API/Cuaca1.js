import React from 'react'; 
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableHighlight } from 'react-native'; 
 
export default class Cuaca1 extends React.Component {   
        constructor(props){
        super(props)
        this.state = {city:'', forecast: {main: '',description:'',temp:'',}
        };
    }
    getWeather= () => {
      let url = 'http://api.openweathermap.org/data/2.5/weather?q='
      + this.state.city +'&appid=fb53da86ce47a2abe501035d4cedca3c&units=metric';
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          forecast : {
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temp,
          }
        });
      }
      );
  }
    render() {     
        return (
            <View style={styles.vMain} >
                <View style={styles.vHeader}>
                    <Text style={styles.txtHeader1}>Prakiraan Cuaca</Text>
                </View>
                <View style={styles.box1}>
                    <View style={styles.box2}>
                    <Text style={styles.txtbox2}>Masukan Nama Kota</Text>
                        <TextInput style={styles.txtInput}
                            placeholder="Masukan nama kota"  
                                onChangeText={
                                (city)=>
                                this.setState({city})
                                }
                        />
                    <TouchableHighlight onPress={()=> this.getWeather()}>
                        <Text style={styles.txtbox3}> Lihat</Text>
                    </TouchableHighlight>
                    </View>
                <View style={styles.box3}>
                    <Text style={styles.txtbox4}>Suhu :{this.state.forecast.temp}{"\n"}</Text>
                    <Text style={styles.txtbox4}>Cuaca :{this.state.forecast.main}{"\n"}</Text>
                    <Text style={styles.txtbox4}>Deskripsi :{this.state.forecast.description}{"\n"}</Text>
                </View>
                <View style={styles.box4}>
                    <Text style={styles.txtbox5}>@copyRight Fingky</Text>
                </View>
                </View>

            </View>
        );   
    } 
}   

   const styles = StyleSheet.create({
   vMain: {
        flex: 1,
    },
    vHeader: {
        flex: 0.5,
        backgroundColor: '#2E8B57',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box1: {
        flex: 5,
        backgroundColor: '#98FB98',
    },
    box2: {
        flex: 0.3,
        backgroundColor: '#2E8B57',
        margin: 20,
    },
    box3: {
        flex: 0.6,
        backgroundColor: '#2E8B57',
        margin: 20,
    },
    box4: {
        flex: 0.1,
        backgroundColor: '#2E8B57',
    },
    txtbox2: {
        color: 'white',
        alignItems: 'center',
        fontSize: 18,
        marginLeft:70

    },
    txtbox3: {
        color: 'black',
        alignItems: 'center',
        fontSize: 18,
        marginLeft:130,
        marginTop:10,
        marginRight: 132,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    txtbox4: {
        color: 'white',
        alignItems: 'center',
        fontSize: 18,

    },
    txtbox5: {
        color: 'black',
        alignItems: 'center',
        fontSize: 15,
        marginTop:15,
        marginLeft:100,

    },
    txtInput: {
        flex: 0.7,
        height: 20,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1,
        fontSize:18,
        marginTop:20,
        marginRight:60,
        marginLeft:60,
        borderRadius: 5,
    },
    txtHeader1: {
        color: 'white',
        alignItems: 'center',
        fontSize: 20

    },
    txtHeader2: {
        color: 'white',
        fontSize: 18
    }
});

