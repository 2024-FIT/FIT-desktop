import React from 'react';
import styled from 'styled-components';

const DinnerButton = styled.button<{ isActive: boolean }>`
    background-color: ${(props:any) => (props.isActive ? '#A2CC71' : '#787878')};
    width: 52px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 14px;
    color: var(--Sub-White, #FFF);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    border: none;
    cursor: pointer;

    `;

    interface Props {
    isActive: boolean;
    onClick: () => void;
}

const Dinner: React.FC<Props> = ({ isActive, onClick }) => {
    return (
        <DinnerButton isActive={isActive} onClick={onClick}>
        저녁
        </DinnerButton>
    );
};

export default Dinner;
