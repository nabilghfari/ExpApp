import React from 'react';
import { ScrollView, FlatList} from 'react-native';
import { Container } from '../styles/FeedStyles';
import Postcard from '../components/PostCard';

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
    return(
        <Container>
            <FlatList
                data={Posts}
                renderItem={({item}) => <Postcard item={item}/> }
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}

export default Homescreen;
