import styled from "styled-components";

export const InputWrap = styled.View`
    background-color: #2e64e515;
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const InputField = styled.TextInput`
    justify-content: center;
    align-items: center;
    font-size: 24px;
    text-align: center;
    width: 90%;
`;

export const AddImage = styled.Image`
    width: 100%;
    height: 250px;
    margin-bottom: 15px;
`;

export const StatusWrap = styled.View`
    justify-content: center;
    align-items: center;
`;

export const SubmitBtn = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    background-color: #2e64e515;
    border-radius: 5px;
    padding: 10px 25px;
`;

export const SubmitBtnText = styled.Text`
    font-size: 18px;
    font-family: 'Helvetica';
    font-weight: bold;
    color: #2e64e5;
`;