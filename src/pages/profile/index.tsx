import React from 'react';


import * as S from '@/pages/profile/index.style';

import Side from "@/components/navbar/index"
import arrow from "@/assets/arrow.svg"
import underarrow from "@/assets/profile/underarrow.svg"

const Index = () => {
    let bmi = 30;
    const loadbmi = () =>{
        
    }
    return(
        <div style={{
            width: '100vw',
            height: '100vh',
            position: 'relative', 
            background: "#F6FFF7",
        }}>
            <Side></Side>
            <S.mainbox>
                <S.leftbox>
                        <S.back src = {arrow}></S.back>
                    <S.title>
                        <S.name>김민규</S.name><S.nameText>님의 건강상태</S.nameText>
                    </S.title>
                    <S.character></S.character>
                    <S.BMIbar></S.BMIbar>
                    <S.underarrow src={underarrow}></S.underarrow>
                </S.leftbox>
                <S.rightbox>
                    
                    <S.editbutton>정보 수정 하기</S.editbutton>
                </S.rightbox>
            </S.mainbox>
        </div>
        

    )
}

export default Index