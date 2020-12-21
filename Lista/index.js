import React, { Component } from 'react';
import { View ,Text, Image, TouchableOpacity, StyleSheet} from 'react-native';


class Lista extends Component{
    constructor(props){
        super(props);
        this.state={
            Feed: this.props.data
        };

        this.mostraLike = this.mostraLike.bind(this);
        this.like = this.like.bind(this);
        this.carregaicone = this.carregaicone.bind(this);
    }

    carregaicone(likeada){
            return likeada ? require('../img/likeada.png') : 
                            require('../img/like.png')
    }

    like(){
        let Feed = this.state.Feed;

        if(Feed.likeada === true){
            this.setState({
                Feed:{
                    ...Feed,
                    likeada: false,
                    likers: Feed.likers- 1

                }
            });
        }else{
            this.setState({
                Feed:{
                    ...Feed,
                    likeada: true,
                    likers: Feed.likers + 1
                }      
           });
        }
    }


    mostraLike(likers){
        let Feed = this.state.Feed

        if(Feed.likers <= 0){
            return;
        }
        return(

            <Text style={styles.likers}>
                {Feed.likers} {Feed.likers > 1 ? 'curtidas' : 'curtida'}
            </Text>
        )

    }

    render(){
        return(
            <View style={styles.AreaFeed}>
                <View style={styles.ViewPerfil}>
                    <Image
                    source={{uri: this.state.Feed.imgperfil}}
                    style={styles.FotoPerfil} 
                    />
                    <Text 
                    style={styles.TextNome}>
                    {this.state.Feed.nome}
                    </Text>
                </View>

                <Image
                resizeMode= "cover"
                style={styles.FotoPublicacao}
                source={{uri: this.state.Feed.imgPublicacao}}
                />
                <View style={styles.areaIcons}>
                    <TouchableOpacity onPress={this.like}>
                        <Image
                        source={this.carregaicone(this.state.Feed.likeada)}
                        style={styles.IconeLike}
                        resizeMode="contain"
                        />
                          
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnsend}>
                        <Image
                        source={require('../img/send.png')}
                        style={styles.IconeSend}
                        resizeMode="contain"
                        />

                        </TouchableOpacity>
                </View>

                    {this.mostraLike(this.state.Feed.likers)}

                <View style={styles.viewRodaep}>
                    <Text style={styles.nomeRodaep}>
                        {this.state.Feed.nome}</Text>

                    <Text style={styles.rodape}>
                        {this.state.Feed.descricao}</Text>
                </View>
            </View>
 



        )

    }
       
}

const styles = StyleSheet.create({
    AreaFeed:{

    },
    TextNome:{
        fontSize:22,
        textAlign:'left',
        color: '#000000'
    },
    FotoPerfil:{
        width:50,
        height:50,
        borderRadius:25,
    },
    FotoPublicacao:{
        flex: 1,
        height: 400,
    },
    ViewPerfil:{
        flexDirection: 'row',
        flex:1,
        alignItems: 'center',
        padding: 8,

    },
    IconeLike:{
       width:20,
       height:20

    },
    IconeSend:{
        width:20,
        height:20
    },
    areaIcons:{
        flexDirection: 'row',
        padding:5
    },
    btnsend:{
        paddingLeft: 13
    },
    viewRodaep:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    rodape:{
        paddingLeft: 5,
        fontSize:15,
        color: '#000000'
    },
   nomeRodaep:{
        fontSize:15,
        fontWeight: 'bold',
        color: '#000000',
        paddingLeft: 5
    },
    likers:{
        fontWeight: 'bold',
        marginLeft: 5,

    }

});

export default Lista;