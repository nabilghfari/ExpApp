import styled from "styled-components";

export const Container = styled.View`
    background-color: #fff;
    flex: 1;
    align-items: center;
    padding: 20px;
`;

export const Card = styled.View`
    background-color: #f8f8f8;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px;
`;

export const UserInfoBox = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`;

export const UserImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const UserName = styled.Text`
    font-size: 14px;
    font-weight: bold;
    font-family: Helvetica;
`;

export const PostTime = styled.Text`
    font-size: 12px;
    font-family: Helvetica;
    color: #666;
`;

export const PostText = styled.Text`
    font-size: 14px;
    font-family: Helvetica;
    padding-horizontal: 15px;
`;

export const PostImage = styled.Image`
    width: 100%;
    height: 250px;
    margin-top: 15px;
`;

export const ResponseWrap = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding: 15px;
`;

export const ResponseBtn = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    padding: 2px 5px;
    background-color: ${props => props.active ? '#2e64e515' : 'transparent'}
`;

export const ResponseText = styled.Text`
    font-size: 12px;
    font-family: Helvetica;
    font-weight: bold;
    color: ${props => props.active ? '#2e64e5' : '#333'}
    margin-top: 5px;
    margin-left: 5px;
`;

export const DividerLine = styled.View`
    border-bottom-color: #dddddd;
    border-bottom-width: 1px;
    width: 95%;
    align-self: center;
    margin-top: 15px;
`;