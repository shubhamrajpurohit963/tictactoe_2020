import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Snackbar from 'react-native-snackbar'

const itemArray = new Array(9).fill('empty')


const Icons = ({name}) => {
    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={35} color="#F4c824" />            
            
        case 'cross':
            return <Icon name="times" size={35} color="#10a881" />
            
        default:
            return <Icon name="pencil" size={35} color="#303030" />
        
    }
}


export default Icons