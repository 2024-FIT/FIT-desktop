import React from 'react'
import * as S from '@/pages/main/index.style';

import Navbar from '@/components/navbar';
import Calendar from '@/components/calendar/index';

const index = () => {
  return (
    <S.Background>
      <Navbar/>
      <Calendar/>
    </S.Background>
  )
}

export default index