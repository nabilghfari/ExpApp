import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { InputField, InputWrap } from '../styles/AddPostStyles';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons'

const Addpostscreen = () => {
    return (
        <View style={styles.container}>
            <InputWrap>
                <InputField
                    placeholder="Tell Something"
                    multiline
                    numberOfLines={4}
                />
            </InputWrap>
            <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item buttonColor='#9b59b6' title="Post Image" onPress={() => alert("Picture Picked!")}>
                    <Icon name="images-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Post Video" onPress={() => alert("Video Picked!")}>
                    <Icon name="videocam-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1abc9c' title="Post Document" onPress={() => alert("Document Picked!")}>
                    <Icon name="document-text-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
})

export default Addpostscreen;
