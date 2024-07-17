import styled from 'styled-components';

export const MainBox = styled.div`
    width: 80vw;
    height: 85vh;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--Sub-White, #FFF);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    transform: translate(0, -50%);
    top: 50%;
    right: 7%;
`;

export const LeftBox = styled.div`
    height: 100%;
    width: 40%;
    position: relative;
    float: left;
`;

export const Character = styled.div`
    height: 40%;
    width: 100%;
    flex-shrink: 0;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
`;

export const Back = styled.img`
    width: 39px;
    height: 31px;
    flex-shrink: 0;
    fill: #A2CC71;
    position: absolute;
    top: 2%;
    left: 2%;
    cursor: pointer;
`;

export const Title = styled.div`
    width: 190px;
    position: absolute;
    transform: translate(-50%);
    top: 15%;
    left: 50%;
`;

export const Name = styled.div`
    width: 72px;
    height: 33px;
    flex-shrink: 0;
    border-radius: 50px;
    background: #A2CC71;
    position: absolute;
    left: 0;
    top: 15%;
    text-align: center;
    line-height: 33px;
    color: white;
    color: var(--Sub-White, #FFF);
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
`;

export const NameText = styled.span`
    color: #5B5B5B;
    text-align: center;
    font-family: Pretendard;
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    position: absolute;
    line-height: 33px;
    right: 0;
`;

export const RightBox = styled.div`
    float: right;
    height: 100%;
    width: 60%;
    position: relative;
`;

export const ValueBox = styled.div`
    width: 45%;
    height: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
`;

export const ValueName = styled.p`
    width: 50%;
    color: #000;
    text-align: left;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 4%;
    float: left;
`;

export const Value = styled.p`
    width: 50%;
    color: var(--Gray-Gray600, #787878);
    text-align: right;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: 4%;
    float: right;
`;

export const Input = styled.input`
    width: calc(50% - 10px); /* Adjust width to account for border and margin */
    color: var(--Gray-Gray600, #787878);
    text-align: right;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: 4.1%;
    float: right;
    border: none;
    border-bottom: 1px solid #787878;
    &:focus {
        outline: none;
    }
`;

export const Select = styled.select`
    width: calc(50% - 10px); /* Adjust width to account for border and margin */
    color: var(--Gray-Gray600, #787878);
    text-align: right;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: 4.1%;
    float: right;
    border: none;
    border-bottom: 1px solid #787878;
    &:focus {
        outline: none;
    }
`;

export const EditButton = styled.button`
    width: 200px;
    height: 50px;
    background-color: #A2CC71;
    color: white;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 700;
    border: none;
    border-radius: 25px;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    &:hover {
        background-color: #8FB362;
    }
`;
