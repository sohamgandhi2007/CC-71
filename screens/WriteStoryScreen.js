import React from 'react';
import { TouchableOpacity,Text, View ,TextInput,StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import db from '../config';
import firebase from 'firebase'

export default class WriteScreen extends React.Component {
  sumbitStory(Title,Author,Story){
}

handleWritting= async()=>{
  var writingMessage = null;
  db.collection("writing").add
  db.collection("submit").add
  db.collection("writing").doc(this.state.sumbitButton).get()
  .then((doc)=>{
    var writing=doc.data()
   
  })
}

  render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Search</Text>
          <TextInput style={styles.inputBox}
      onChangeText={(text)=>{
        this.setState({text:text})
      }}
value={this.state.text}
>
<Text style={styles.buttonText}>Title</Text>
</TextInput>
       <TextInput style={styles.inputBox2}
      onChangeText={(text)=>{
        this.setState({text:text})
      }}
value={this.state.text}
>
<Text style={styles.buttonText}>Author</Text>
</TextInput>

<TextInput style={styles.inputBox3}
      onChangeText={(text)=>{
        this.setState({text:text})
      }}
value={this.state.text}
>
<Text style={styles.buttonText}>Story</Text>
</TextInput>
      <TouchableOpacity 
      style={styles.sumbitButton}
      onPress={this.state.sumbitStory}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.submitButton}
          onPress={async()=>{
            var WritingMessage = await this.handleWritting();
          }}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
         </View>
      );
    }
  }

  const styles = StyleSheet.create({
   
    inputBox:{
      marginTop:200,
      width:"80%",
      alignSelf:"center",
      height:40,
      textAlign:"center",
      boderWidth:4,
      outline:"none",
      backgroundColor:"yellow"
   },
     
   inputBox2:{
     marginTop:200,
     width:"80%",
     alignSelf:"center",
     height:40,
     boderWidth:4,
     outline:"none",
     backgroundColor:"yellow"
   },

   inputBox3:{
    marginTop:200,
    width:"80%",
    alignSelf:"center",
    height:90,
    boderWidth:4,
    outline:"none",
    backgroundColor:"yellow"
  },
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:50
  },
  submitButtonText:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    color: 'white'
  }
  });