import styled from 'styled-components';

export const mainbox = styled.div`
    width: 80vw;
    height: 85vh;
    flex-shrink: 0;

    border-radius: 10px;
    background: var(--Sub-White, #FFF);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

    position: absolute;
    transform:translate(0,-50%);
    top:50%;
    right:7%;
`;

export const leftbox = styled.div`
    height:100%;
    width:40%;
    position:relative;
    float: left;
`;

export const character = styled.div`
    height: 40%;
    width: 100%;
    flex-shrink: 0;
    background: url("https://velog.velcdn.com/images/jva102/post/236fabe9-5bc7-4790-93c0-3c473c5cd393/image.png")  50% / contain no-repeat;
    position: absolute;
    transform:translate(-50%,-50%);
    left: 50%;
    top:50%;
`;

export const back = styled.img`
    width: 39px;
    height: 31px;
    flex-shrink: 0;
    fill: #A2CC71;
    position: absolute;
    top: 2%;
    left: 2%;
`;

export const title = styled.div`
    width:190px;
    position:absolute;
    transform:translate(-50%);
    top:15%;
    left:50%;
`;

export const name = styled.div`
    width: 72px;
    height: 33px;
    flex-shrink: 0;
    border-radius: 50px;
    background: #A2CC71;

    position:absolute;
    left:0;
    top:15%;

    text-align:center;
    line-height: 33px;
    color:white;
    color: var(--Sub-White, #FFF);
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
`;

export const nameText = styled.span`
    color: #5B5B5B;
    text-align: center;
    font-family: Pretendard;
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    position: absolute;
    line-height:33px;
    right: 0;
`;

export const BMIbar = styled.div`
    width:70%;
    height:35px;
    background: linear-gradient(90deg,#A8DAFF 20%,#AAF27E 20%,#AAF27E 40%,#EBFF6F 40%,#EBFF6F 60%,#FFDF6F 60%,#FFDF6F 80%,#FF6F6F 80%);
    position: absolute;
    transform:translate(-50%);
    left: 50%;
    top:80%;
    border-radius:10px;
`;

export const underarrow = styled.img`
    position:absolute;
    top:78%;
    left:82%;
`;

export const rightbox = styled.div`
    float:right;
    height:100%;
    width:60%;
    background-color:red;
    position:relative;
`;

export const editbutton = styled.div`
        width: 401px;
    height: 54px;
    border-radius: var(--Large, 12px);
    background: #A2CC71;
    border: none;
    position: absolute;
    transform:translate(-50%);
    top:80%;
    left:50%;

    color: var(--Sub-White, #FFF);

    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 54px;
    cursor:pointer;


    &:hover{
        color:lightgray;
        background-color: #8AAE60;
    }
`;