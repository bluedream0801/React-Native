import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity,TextInput } from 'react-native'
import { Actions } from 'react-native-router-flux'
import SelectDropdown from 'react-native-select-dropdown'
const typeFoods = ["Dessert", "Food", "Soup"]
class Home extends React.Component {
  render() {
  const goToOrderDetail = () => {
      alert('dfdf');
   }
    return (
      <View>
          <Image source={require('../assets/top.png')}  style={styles.image}>
          </Image>
          <View style={styles.search}>
            <Image  source={require('../assets/search-icon.png')} style={styles.input}></Image>
            <TextInput 
                 underlineColorAndroid = "transparent"
                 placeholder = "Search your restuarant"
                 autoCapitalize = "none"/>
          </View>
          <View style={styles.popularstate}>
            <Text style={styles.popular}>Popular Restaurants</Text>
            <Text style={styles.see}>See All</Text>
          </View>
          <View style={styles.foodcategory}>
            <View style={styles.pizza}>
              <Image source={require('../assets/pizza.png')} ></Image>
            </View>
            <View style={styles.person}>
              <Text style={styles.anna}>Anna's Cafe</Text>
              <Text style={styles.category}>Bakery</Text>
            </View>
            <View style={styles.star}>
              <Image source={require('../assets/star.png')}></Image>
              <Text>45</Text>
            </View>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image:{
    width:'100%'
  },
  search:{
    marginTop:30,
    marginLeft:'10%',
    width:'80%',
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    borderRadius:8,
    height:50
  },
  input:{
    marginTop:18,
    marginLeft:10
  },
  popularstate:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop:30,
    marginLeft:'10%',
    marginRight:'10%'
  },
  popular:{
    fontSize:20,
    fontWeight: 'bold',
     color: 'black'
  },
  see:{
    fontSize:14,
    fontWeight: 'bold',
    color: 'blue',
    marginTop:15
  },
  foodcategory:{
    marginLeft:'10%',
    marginRight:'10%',
    marginTop:30,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  pizza:{
    width:'30%',
    borderRadius:8
  },
  
  anna:{
    fontSize:16,
    fontWeight: 'bold',
     color: 'black'
  },

  star:{
    flexDirection:'row'
  }
  
});
export default Home