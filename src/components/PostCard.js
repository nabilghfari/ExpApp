import React, {useContext} from 'react';
import {View} from 'react-native';
import { 
    Container, 
    Card, 
    UserInfo, 
    UserImage, 
    UserName, 
    UserInfoBox, 
    PostTime, 
    PostText, 
    PostImage, 
    ResponseWrap, 
    ResponseBtn, 
    ResponseText, 
    DividerLine 
} from '../styles/FeedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../navigation/AuthProvider';

const Postcard = ({item, onDelete}) => {
    const {user} = useContext(AuthContext);

    likeIcn = item.liked ? 'heart' : 'heart-outline';
    likeIcnClr = item.liked ? '#2e64e5' : '#333';
    
    if (item.likes == 0){
        likeText = 'Like';
    }
    else if (item.likes > 0){
        likeText = item.likes + ' Likes';
    }

    if (item.comments == 0){
        commentText = 'Comment';
    }
    else if (item.comments > 0){
        commentText = item.comments + ' Comments';
    }

    return (
        <Card>
                <UserInfo>
                    <UserImage source={{uri: item.userImg}}/>
                    <UserInfoBox>
                        <UserName>{item.userName}</UserName>
                        <PostTime>{item.postTime.toString()}</PostTime>
                    </UserInfoBox>
                </UserInfo>
                <PostText>{item.post}</PostText>
                {item.postImg != null ? <PostImage source={{uri: item.postImg}}/> : null}
                <DividerLine/>
                <ResponseWrap>
                    <ResponseBtn active={item.liked}>
                        <Ionicons name={likeIcn} size={25} color={likeIcnClr}/>
                        <ResponseText active={item.liked}>Like</ResponseText>
                    </ResponseBtn>
                    <ResponseBtn>
                        <Ionicons name="md-chatbubble-outline" size={25}/>
                        <ResponseText>Comment</ResponseText>
                    </ResponseBtn>
                    {user.uid == item.userId ?
                    <ResponseBtn onPress={() => onDelete(item.id)}>
                        <Ionicons name="trash-outline" size={25}/>
                    </ResponseBtn>
                    : null}
                </ResponseWrap>
        </Card>
    );
}

export default Postcard;
