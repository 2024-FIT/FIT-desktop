import React from 'react'
import * as S from '@/pages/main/index.style';

import Navbar from '@/components/navbar';
import PersonalProfile from '@/components/personal/index'

const index = () => {
  return (
    <S.Background>
      <Navbar/>
      <PersonalProfile/>
    </S.Background>
  )
}

export default index