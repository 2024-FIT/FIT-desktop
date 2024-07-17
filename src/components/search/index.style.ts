import styled from "styled-components";

export const searchbox = styled.input`
    display: flex;
    width: 441px;
    padding: 12px;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    background: var(--Sub-White, #FFF); 
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
    margin-bottom:8px;
    border:none;
    font-family:pertendard;

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    &:focus{
        outline:none
    }
    &::placeholder{
        color: var(--Gray-Gray500, #AAA);
    }
`;

export const mainbox = styled.div`
    width: 439px;
    height: 330px;
    flex-shrink: 0;
    border-radius: 8px;
    background: var(--Sub-White, #FFF);
    position: relative;
`;

export const testtitle = styled.p`
    color: #000;
    font-family: pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;   
    line-height: normal;
    margin: 8px 0 0 16px;
`;

export const foodul = styled.ul`
    margin-top: 10px;
    width: 439px;
    height: 141px;
    overflow-y: auto;
    overflow-x: none;
`;

export const foodli = styled.li`
    width: 100%;
    height: 47px;
    flex-shrink: 0;
    line-height: 47px;
    padding-left: 16px;

    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    cursor: pointer;

    &:hover{
        background-color: rgba(162,204,113,0.3);
    }
`;

export const morningbutton = styled.div`
    position: absolute;
    left: 17px;
    top: 194px;
`;

export const lunchbutton = styled.div`
    position: absolute;
    left: 99px;
    top: 194px;
`;

export const dinnerbutton = styled.div`
    position: absolute;
    left: 181px;
    top: 194px;
`;


export const addbutton = styled.div`
    width: 401px;
    height: 54px;
    border-radius: var(--Large, 12px);
    background: #A2CC71;
    border: none;
    position: absolute;
    transform:translate(-50%);
    bottom:32px;
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