import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import { 
  Text,
  Container,
  Content,
  Header,
  Body,
  Card,
  H1,H3,
  Button, 
  Title
} from 'native-base'

import Icons from './components/Icons';
import Snackbar from 'react-native-snackbar'

const itemArray = new Array(9).fill('empty')


 
const App = () => {

  const [isCrossed,setIsCrossed] = useState(false)
  const [winMessage,setWinMessage] = useState("")

  const changeItem = (itemNumber) => {
    if(winMessage) {
      return Snackbar.show({
        text: winMessage,
        backgroundColor: '#000000',
        textColor: '#FFFFFF'
      })
    }

    if(itemArray[itemNumber] === 'empty'){
      itemArray[itemNumber] = isCrossed ? 'cross' : 'circle'
        setIsCrossed(!isCrossed);
    }else{
      return Snackbar.show({
        text: "Already Filled",
        backgroundColor: 'red',
        textColor: '#FFFFFF'
      })
    }  
    
    checkIsWinner()  

  }

  const reloadGame = () => {
      setIsCrossed(false)
      setWinMessage('')
      itemArray.fill('empty',0,9)
  }

  const checkIsWinner = () => {

      if(itemArray[0]==itemArray[1] && itemArray[1]==itemArray[2] && itemArray[0]!='empty'){
          setWinMessage(`${itemArray[0]} won`)
      }

      if(itemArray[3]==itemArray[4] && itemArray[4]==itemArray[5] && itemArray[4]!='empty'){
        setWinMessage(`${itemArray[3]} won`)
      }

    if(itemArray[6]==itemArray[7] && itemArray[7]==itemArray[8] && itemArray[7]!='empty'){
      setWinMessage(`${itemArray[6]} won`)
    }


    if(itemArray[0]==itemArray[3] && itemArray[3]==itemArray[6] && itemArray[6]!='empty'){
      setWinMessage(`${itemArray[0]} won`)
    }
    if(itemArray[1]==itemArray[4] && itemArray[4]==itemArray[7] && itemArray[7]!='empty'){
      setWinMessage(`${itemArray[1]} won`)
    }
    if(itemArray[2]==itemArray[5] && itemArray[5]==itemArray[8] && itemArray[8]!='empty'){
      setWinMessage(`${itemArray[2]} won`)
    }
    if(itemArray[0]==itemArray[4] && itemArray[4]==itemArray[8] && itemArray[0]!='empty'){
      setWinMessage(`${itemArray[0]} won`)
    }
    if(itemArray[2]==itemArray[4] && itemArray[4]==itemArray[6] && itemArray[2]!='empty'){
      setWinMessage(`${itemArray[2]} won`)
    }

  }

  return (
    <Container style={{backgroundColor: "#333945", padding: 5}}>
      <Header>
        <Body>
          <Title>Tic Tac Toe</Title>
        </Body>
      </Header>

      <Content>
        <View style={styles.grid}>
          {itemArray.map((item,index)=>(
            <TouchableOpacity key={index} style={styles.box} onPress={()=>changeItem(index)}>
              <Card style={styles.card}>
                <Icons name={item}></Icons>
              </Card>
            </TouchableOpacity>
          ))}
        </View>        

          
        {winMessage ? (
          <View>
            <H1 style={styles.message}>{winMessage}</H1>
            <Button onPress={reloadGame} primary block rounded>
              <Text>Reload Game</Text>
            </Button>
          </View>
        ) : (
          <H3 style={styles.message}>
            {isCrossed ? 'Cross' : 'Circle'} turns
          </H3>
        )}


      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({

  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  box: {
    width: "33%",
    marginBottom: 7
  },
  card: {
    height: 120,
    justifyContent: 'center',
    alignItems : 'center'
  },
  message: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    marginTop: 20,
    backgroundColor: '#4652b3',
    paddingVertical: 10,
    marginVertical: 10
  }
  

});

export default App;



