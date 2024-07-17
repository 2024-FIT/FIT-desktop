import React, { useState } from 'react';
import * as S from '@/components/search/index.style';
import Morning from "@/components/button/meal/morning";
import Lunch from "@/components/button/meal/lunch";
import Dinner from "@/components/button/meal/dinner";

const Index = () => {
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleItemClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection :'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
            background: 'rgba(0,0,0,0.5)',
        }}>
            <S.searchbox placeholder="음식 검색" />
            <S.mainbox>
                <S.testtitle>result</S.testtitle>
                <S.foodul type="none">
                    <S.foodli style={{ background: activeIndex === 0 ? 'rgba(162,204,113,0.3)' : 'none' }} onClick={() => handleItemClick(0)}>감자</S.foodli>
                    <S.foodli style={{ background: activeIndex === 1 ? 'rgba(162,204,113,0.3)' : 'none' }} onClick={() => handleItemClick(1)}>감자탕</S.foodli>
                    <S.foodli style={{ background: activeIndex === 2 ? 'rgba(162,204,113,0.3)' : 'none' }} onClick={() => handleItemClick(2)}>감자튀김</S.foodli>
                    <S.foodli style={{ background: activeIndex === 3 ? 'rgba(162,204,113,0.3)' : 'none' }} onClick={() => handleItemClick(3)}>스마일 감자</S.foodli>
                    <S.foodli style={{ background: activeIndex === 4 ? 'rgba(162,204,113,0.3)' : 'none' }} onClick={() => handleItemClick(4)}>감자탕후루</S.foodli>
                    <S.foodli style={{ background: activeIndex === 5 ? 'rgba(162,204,113,0.3)' : 'none' }} onClick={() => handleItemClick(5)}>감자칩</S.foodli>
                    <S.foodli style={{ background: activeIndex === 6 ? 'rgba(162,204,113,0.3)' : 'none' }} onClick={() => handleItemClick(6)}>웨지감자</S.foodli>
                    <S.foodli style={{ background: activeIndex === 7 ? 'rgba(162,204,113,0.3)' : 'none' }} onClick={() => handleItemClick(7)}>눈을감자</S.foodli>
                </S.foodul>
                <S.morningbutton>
                    <Morning isActive={activeButton === 'morning'} onClick={() => setActiveButton('morning')} />
                </S.morningbutton>
                <S.lunchbutton>
                    <Lunch isActive={activeButton === 'lunch'} onClick={() => setActiveButton('lunch')} />
                </S.lunchbutton>
                <S.dinnerbutton>
                    <Dinner isActive={activeButton === 'dinner'} onClick={() => setActiveButton('dinner')} />
                </S.dinnerbutton>
                <S.addbutton>추가하기</S.addbutton>
            </S.mainbox>
        </div>
    );
};

export default Index;
