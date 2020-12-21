import React,{ Component } from 'react';
import {
 Text,
 View,
 Image,
 Button,
 StyleSheet,
 TouchableOpacity,
 FlatList

} from 'react-native'

import Lista from './src/Lista'

export default class App extends Component{
   constructor(props){
     super(props);
     this.state= {
       Feed: [
        {
          id: '1', 
          nome: 'Lucas Silva', 
          descricao: 'Mais um dia de muitos bugs :)', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: false, 
          likers: 0
         },
        {
          id: '2', 
          nome: 'Matheus', 
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          descricao: 'Bora trabalhar Haha', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 3
        },
        {
          id: '4', 
          nome: 'Gustavo Henrique', 
          descricao: 'Isso sim que é TI!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 1
        },
        {
          id: '5', 
          nome: 'Guilherme', 
          descricao: 'Boa tarde galera do insta...', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 32
        }
       ]

  }
}


  render(){
    return(
    <View style={style.container}>
      <View style={style.area}>

        <TouchableOpacity>
        <Image
        source={require('./src/img/logo.png')}
        style={style.img}
        resizeMode="contain"
        />
        </TouchableOpacity>

        <TouchableOpacity>
         <Image
        source={require('./src/img/send.png')}
        style={style.send}
        />
        </TouchableOpacity>

      </View>

      <FlatList
      showsVerticalScrollIndicator={false}
      data={this.state.Feed}
      renderItem={({item}) => <Lista data={item}/> }
      
      />
    </View>
     
    )
}
}


const style = StyleSheet.create({
    container:{
      flex:1,
    },
    area:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 10,
      marginTop: 0
      
    },
    img:{
      width: 100,
      height:100
    },
    send:{
      width: 20,
      height: 20
    }

    
    
})
