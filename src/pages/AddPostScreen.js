import React, {useState, useContext} from 'react';
import {View, StyleSheet, Text, Button, Alert, ActivityIndicator} from 'react-native';
import { AddImage, InputField, InputWrap, SubmitBtn, SubmitBtnText, StatusWrap } from '../styles/AddPostStyles';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../navigation/AuthProvider';

const Addpostscreen = () => {
    const {user} = useContext(AuthContext);
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [post, setPost] = useState(null);

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 1200,
            height: 780,
            cropping: true,
          }).then(image => {
            console.log(image);
            const imageUri = Platform.OS == 'ios' ? image.sourceURL : image.path;
            setImage(imageUri);
          });
    };

    const takePhotoFromGalery = () => {
        ImagePicker.openPicker({
            width: 1200,
            height: 780,
            cropping: true
          }).then(image => {
            console.log(image);
            const imageUri = Platform.OS == 'ios' ? image.sourceURL : image.path;
            setImage(imageUri);
          });
    };

    const submitPost = async() => {
        const imageUrl = await uploadImage();

        firestore()
        .collection('posts')
        .add({
            userId: user.uid,
            post: post,
            postImg: imageUrl,
            postTime: firestore.Timestamp.fromDate(new Date()),
            likes: null,
            comments: null,
        })
        .then(() => {
            Alert.alert('Post Uploaded','Your Post Uploaded Successfully!');
            setPost(null);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const uploadImage = async() => {
        if (image == null) {
            return null;
        }
        const uploadUri = image;
        let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

        //input timestamp
        const exten = filename.split('.').pop();
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + exten;

        setUploading(true);
        setTransferred(0);

        const storageRef = storage().ref(`photos/${filename}`);
        const task = storageRef.putFile(uploadUri);

        task.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
            setTransferred(
                Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100
            );
          });
          

        try {
            await task;

            const url = await storageRef.getDownloadURL();

            setUploading(false);
            return url;
        }
        catch(e){
            console.log(e);
            return null;
        }
        setImage(null);
    };

    return (
        <View style={styles.container}>
            <InputWrap>
                {image != null ? <AddImage source={{uri: image}}/> : null}
                <InputField
                    placeholder="Tell Something"
                    multiline
                    numberOfLines={4}
                    value={post}
                    onChangeText={(content) => setPost(content)}
                />
                {uploading ? (
                    <StatusWrap>
                        <Text>{transferred} % Complete!</Text>
                        <ActivityIndicator size="large" color="#0000ff"/>
                    </StatusWrap>
                ) : (
                    <SubmitBtn onPress = {submitPost}>
                        <SubmitBtnText>Post</SubmitBtnText>
                    </SubmitBtn>
                )}
            </InputWrap>
            <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item buttonColor='#9b59b6' title="Post Image" onPress={takePhotoFromGalery}>
                    <Icon name="images-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Post Video" onPress={takePhotoFromCamera}>
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
