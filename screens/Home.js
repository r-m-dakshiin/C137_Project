import React, { Component } from "react";
import {View, Text, StyleSheet, SafeAreaView, FlatList, Alert} from 'react-native';
import {ListItem} from 'react-native-elements';
import axios from 'axios';

export default class HomeScreen extends Component {
    constructor(){
        super(props);
        this.State = {
            listData : [],
            url : "https://localhost:5000/"
        };
}

componentDidMount(){
    this.getStars();
}


getStars = () => {
    const {url} = this.state;
    axios
    .get(url)
    .then(response=>{
      listData:response.data.data
    });
    .catch(error => {
        Alert.alert(error.message);
        
    });
    
} ;


renderItem = ({ item, index}) =>(
    <ListItem

    key = {index}
    title={`Star : ${item.name}`}
    subtitle = {`Distance from earth : ${item.distance_from_earth}`}
    title_style = {styles.title}
    containerstyle = {styles.listcontainer}
    bottomdivider
    onPress = {() => 
        this.props.navigation.navigate("Details", { star_name : item.name})
    }
    
    />
);

keyExtractor = (item, index) => index.toString();

render(){
    const {listData} = this.state;
    if(listData.length === 0){
        return (
            <View style = {{styles.emptycontainer}}>
                <Text>
                    Loading
                </Text>
            </View>
        )
    }
    
}
   
}
