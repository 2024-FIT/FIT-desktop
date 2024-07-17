import React from 'react';


import * as S from '@/pages/profile/index.style';

import Side from "@/components/navbar/index"
import arrow from "@/assets/arrow.svg"


const Index = () => {
    return(
        <div style={{
            width: '100vw',
            height: '100vh',
            position: 'relative', 
            background: "#F6FFF7",
        }}>
            <Side></Side>
            <S.mainbox>
                <S.back src = {arrow}></S.back>
                <S.name></S.name>
                <S.character></S.character>
            </S.mainbox>
        </div>
        

    )
}

export default Index