import React from 'react';
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

const Postcard = ({item}) => {

    likeIcn = item.liked ? 'heart' : 'heart-outline';
    likeIcnClr = item.liked ? '#2e64e5' : '#333';
    //if (items.liked == 'true'){
        //likeIcn = 'heart'
    //}
    //else if (items.liked == 'false'){
        //likeIcn = 'heart-outline'
    //}

    //if (item.liked == 'true'){
        //likeIcn = '#2e65e5'
    //}
    //else if (item.liked == 'false'){
        //likeIcn = '#333'
    //}
    
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
                    <UserImage source={item.userImg}/>
                    <UserInfoBox>
                        <UserName>{item.userName}</UserName>
                        <PostTime>{item.postTime}</PostTime>
                    </UserInfoBox>
                </UserInfo>
                <PostText>{item.post}</PostText>
                {item.postImg != 'none' ? <PostImage source={item.postImg}/> : null}
                <DividerLine/>
                <ResponseWrap>
                    <ResponseBtn active={item.liked}>
                        <Ionicons name={likeIcn} size={25} color={likeIcnClr}/>
                        <ResponseText active={item.liked}>{likeText}</ResponseText>
                    </ResponseBtn>
                    <ResponseBtn>
                        <Ionicons name="md-chatbubble-outline" size={25}/>
                        <ResponseText>{commentText}</ResponseText>
                    </ResponseBtn>
                </ResponseWrap>
        </Card>
    );
}

export default Postcard;
