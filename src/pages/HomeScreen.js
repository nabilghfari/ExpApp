import React, {useEffect, useState} from 'react';
import { ScrollView, FlatList, Alert} from 'react-native';
import { Container } from '../styles/FeedStyles';
import Postcard from '../components/PostCard';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const Posts = [
    {
        id: '1',
        userName: 'John Doe',
        userImg: require('../assets/users/user-1.jpg'),
        postTime: '4 hours ago',
        post: 'Hello, lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et',
        postImg: require('../assets/posts/post-img-1.jpg'),
        liked: true,
        likes: '29',
        comments: '5'
    },
    {
        id: '2',
        userName: 'Doe Foe',
        userImg: require('../assets/users/user-2.jpg'),
        postTime: '8 hours ago',
        post: 'Olleh, lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et',
        postImg: 'none',
        liked: false,
        likes: '9',
        comments: '1'
    },
    {
        id: '3',
        userName: 'Will Doe',
        userImg: require('../assets/users/user-3.jpg'),
        postTime: '1 days ago',
        post: 'こんにちは, lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et',
        postImg: require('../assets/posts/post-img-3.jpg'),
        liked: true,
        likes: '9',
        comments: '11'
    },
]

const Homescreen = () => {

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleted, setDeleted] = useState(false);

    const fetchPost = async () => {
        try{
            const list = [];

            await firestore()
            .collection('posts')
            .orderBy('postTime', 'desc')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach(doc => {
                    const {userId, post, postImg, postTime, likes, comments} = doc.data();
                    list.push({
                        id: doc.id,
                        userId,
                        userName: 'Mr. Placehoder',
                        userImg: 'https://lh3.googleusercontent.com/ogw/ADea4I4ktkw9sxnesXYbuKy158muKnOFvVRt93OZgVogqA=s83-c-mo',
                        postTime,
                        post,
                        postImg,
                        liked: false,
                        likes,
                        comments
                    });
                })
            })
            //console.log('Posts: ', list);
            setPosts(list);
            if (loading == true){
                setLoading(false);
            }
        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPost();
    }, [])

    useEffect(() => {
        fetchPost();
        setDeleted(false);
    }, [deleted])

    const deletePost = (postId) => {
        firestore()
        .collection('posts')
        .doc(postId)
        .get()
        .then(documentSnapshot => {
            if (documentSnapshot.exists){
                const {postImg} = documentSnapshot.data();

                if (postImg != null){
                    const storageRef = storage().refFromURL(postImg);
                    const imageRef = storage().ref(storageRef.fullPath);
                    imageRef.delete()
                    .then(()=>{
                        console.log(`${postImg} has been deleted`);
                        deleteFirestoreData(postId);
                        setDeleted(true);
                    })
                    .catch((e)=>{
                        console.log(e);
                    })
                }
                else{
                    deleteFirestoreData(postId);
                }
            }
        })
    }

    const deleteFirestoreData = (postId) => {
        firestore()
        .collection('posts')
        .doc(postId)
        .delete()
        .then(()=>{
            Alert.alert('Post Deleted','Your Post Deleted!');
        })
        .catch((e)=>{
            console.log(e);
        })
    }

    return(
        <Container>
            <FlatList
                data={posts}
                renderItem={({item}) => <Postcard item={item} onDelete={deletePost} /> }
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}

export default Homescreen;
