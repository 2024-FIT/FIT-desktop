import React, { useEffect, useState } from 'react';
import { BarContainer, Arrow } from '@/components/bmibar/index.style';
import arrowImage from '@/assets/profile/underarrow.svg'; // Make sure this path is correct

interface BMIComponentProps {
bmi: number;
}
const BMIComponent: React.FC<BMIComponentProps> = ({ bmi }) => {
const [left, setLeft] = useState('5%');
useEffect(() => {
    const updateBmi = () => {
    let leftPosition: string;
    if (bmi < 18.5) {
        leftPosition = '5%'; // 18.5 이하
    } else if (bmi >= 40) {
        leftPosition = '95%'; // 40 이상
    } else {
        const range = bmi - 18.5;
        if (bmi < 25) {
        const proportion = (range / 6.4) * 30; // 18.5 ~ 24.9 범위
        leftPosition = `calc(5% + ${proportion}%)`;
        } else if (bmi < 30) {
        const proportion = ((range - 6.5) / 5) * 20 + 35; // 25 ~ 29.9 범위
        leftPosition = `${proportion}%`;
        } else {
        const proportion = ((range - 11.5) / 9.9) * 40 + 55; // 30 ~ 39.9 범위
        leftPosition = `${proportion}%`;
        }
    }
    setLeft(leftPosition);
    };
    updateBmi();
}, [bmi]);
return (
    <BarContainer>
    <Arrow src={arrowImage} style={{ left }} />
    </BarContainer>
);
};

export default BMIComponent;