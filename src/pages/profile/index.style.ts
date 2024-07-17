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

export const character = styled.div`
    width: 346px;
    height: 289px;
    flex-shrink: 0;
    background: url("https://velog.velcdn.com/images/jva102/post/236fabe9-5bc7-4790-93c0-3c473c5cd393/image.png")  50% / cover no-repeat;
    position: absolute;
    transform:translate(0,-50%);
    left: 10%;
    top:50%;
`;

export const back = styled.img`
    width: 39px;
    height: 31px;
    flex-shrink: 0;
    fill: #A2CC71;
    position: absolute;
    top: 2%;
    left: 1%;
`;