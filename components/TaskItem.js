import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const  TaskItem = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <View style={styles.itemText}><Text>{props.text}</Text></View>
            </View>
            <View style={styles.delete}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#FFF",
        padding:15,
        borderRadius: 10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    square:{
        width: 24 ,
        height: 24,
        backgroundColor:'#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight:15,
    },
    itemText:{
        maxWidth: '80%',

    },
    delete:{
        width:12,
        height:12,
        borderColor: '#55bcf6',
        borderWidth: 2,
        borderRadius: 5,
    }

});

export default TaskItem
