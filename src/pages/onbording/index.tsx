import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/pages/onbording/index.style';

import Star1 from "@/assets/onbording/star1.svg";
import Star2 from "@/assets/onbording/star2.svg";
import FitWhiteLogo from "@/assets/fitwhite.svg";

const Index = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/login');
  };

  return (
    <S.AllBack>
      <S.Display>
        <S.FistSentWrap>
          <span>
            <S.Starts src={Star1}/>
            <img src={Star2}/>
          </span>
          <S.FistGreeting>만나서 반가워요</S.FistGreeting>
        </S.FistSentWrap>
        <S.Your>당신의</S.Your>
        <S.BestHealth>(</S.BestHealth>
        <S.BestHealth>가장 건강한 미래</S.BestHealth>
        <S.BestHealth>)</S.BestHealth>
        <S.Your>를 위해</S.Your>
        <br/>
        <S.Your>당신에게 가장</S.Your>
        <S.BestHealth>(</S.BestHealth>
        <S.BestHealth>FIT</S.BestHealth>
        <S.BestHealth>)</S.BestHealth>
        <S.Your>한 서비스</S.Your>
        <br/>
        <S.StartWrap>
          <span>
            <img src={FitWhiteLogo}/>
          </span>
          <S.StartButtonWrap>
            <S.StartButton onClick={handleStartClick}>시작하기</S.StartButton>
          </S.StartButtonWrap>
        </S.StartWrap>
        <br/>
        <S.lastTitle>
          <S.FromTxt>from</S.FromTxt>
          <S.TeamName>구겨진루피</S.TeamName>
        </S.lastTitle>
      </S.Display>
    </S.AllBack>
  );
}

export default Index;