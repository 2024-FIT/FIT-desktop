import React, { useState } from 'react';
import * as S from '@/components/personal/index.style';
import CharacterImg from '@/assets/fit.svg';
import InfoIcon from '@/assets/info_icon.svg';
import InfoImg from "@/assets/main/info.svg";
import MealDiary from "@/assets/main/mealdiary.svg";
import Recommend from '@/assets/main/recommendrice.svg';
import FatMyImg from "@/assets/main/fatmyimg.svg";
import BMIbar from "@/assets/main/BMIbar.svg";
import { useNavigate } from "react-router-dom";
import CalorieChart from '@/components/chart/CalorieChart'; 

const foodOptions = [
  { name: '돈가스_고구마', calories: 300, weight: '315g' },
  { name: '피자_리코타 페퍼로니 킹덤 피자 나폴리 (L)', calories: 257, weight: '896g' },
  { name: '피자_대만 콘 치즈 감자 피자 오리지널 (L)', calories: 257, weight: '542g' },
  { name: '버거_빅맥 버거', calories: 268, weight: '877g' },
  { name: '피자_리코타 페퍼로니 킹덤 피자 더블치즈 엣지 (M)', calories: 267, weight: '1085g' },
  { name: '피자_리코타 페퍼로니 킹덤 피자 나폴리 (L)', calories: 262, weight: '1083g' },
  { name: '버거_맥치킨모짜렐라 버거', calories: 262, weight: '1046g' },
  { name: '기타차_레몬페퍼민트티 아이스(ICED)', calories: 25, weight: '650g' },
  { name: '귤차_제주청귤티 핫(HOT)', calories: 44, weight: '500g' },
  { name: '기타차_레몬페퍼민트티 핫(HOT)', calories: 34, weight: '650g' },
  { name: '된장국_시금치', calories: 15, weight: '190ml' },
  { name: '미역국_바지락', calories: 8, weight: '190ml' },
  { name: '허브차_캐모마일 아이스(ICED)', calories: 0, weight: '500g' },
  { name: '허브차_캐모마일 아이스(ICED)', calories: 0, weight: '650g' },
  { name: '커피_디카페인 아메리카노 핫(HOT)', calories: 1, weight: '100g' },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [recommendedMeals, setRecommendedMeals] = useState([]);

  const profile = () => {
    navigate("/profile");
  }

  const getRandomMeal = () => {
    const randomIndex = Math.floor(Math.random() * foodOptions.length);
    const selectedMeal = foodOptions[randomIndex];
    setRecommendedMeals(prevMeals => [
      ...prevMeals,
      selectedMeal
    ]);
  }

  return (
    <S.Container>
      <S.HealthStatus onClick={profile}>
        <S.HealtTitle>
          <S.HealthTitleNameWrap>
            <S.HealthTitleName>김민규</S.HealthTitleName>
          </S.HealthTitleNameWrap>
          <S.HealthNow>님의 건강상태</S.HealthNow>
        </S.HealtTitle>
        <S.CharacterImg>우리 아이의 건강상태는?</S.CharacterImg>
        <S.HeightWeight>
          <S.Height>키: ?</S.Height>
          <S.Weight>몸무게: ?</S.Weight>
        </S.HeightWeight>
        <S.BMIStatus>
          <S.BMIBar>
            <S.BMIPointer src={BMIbar} />
          </S.BMIBar>
        </S.BMIStatus>
        <S.bminum>BMI : ?</S.bminum>
      </S.HealthStatus>

      <S.DietDiary>
        <S.InfoIcon src={MealDiary} alt="Info" />
        <S.Title>식단 다이어리</S.Title>
        <S.Meal>
          <S.MealTime>아침</S.MealTime>
          <S.MealDetails>현미밥, 쇠고기조랭떡국,<br />오이부추무침, 미니토마토, 배추김치</S.MealDetails>
          <S.Calories>501kcal</S.Calories>
        </S.Meal>
        <S.Meal>
          <S.MealTime>점심</S.MealTime>
          <S.MealDetails>후리가케멸치밥, 맑은쇠고기무국,<br />멸치볶음, 잡채, 양배추무침</S.MealDetails>
          <S.Calories>1030kcal</S.Calories>
        </S.Meal>
        <S.Meal>
          <S.MealTime>저녁</S.MealTime>
          <S.MealDetails>아직 추가하지 않았어요</S.MealDetails>
          <S.Calories>0kcal</S.Calories>
        </S.Meal>
      </S.DietDiary>

      <S.RecommendedDiet>
        <S.InfoIcon src={Recommend} alt="Info" />
        <S.Title>추천 식단</S.Title>
        <S.RecreateButton onClick={getRandomMeal}>다시 생성하기</S.RecreateButton>
        {recommendedMeals.length > 0 ? (
          recommendedMeals.map((meal, index) => (
            <S.Meal key={index}>
              <S.MealDetails>음식명: {meal.name}, 칼로리: {meal.calories} kcal, 중량: {meal.weight}</S.MealDetails>
            </S.Meal>
          ))
        ) : (
          <S.Meal>
            <S.MealDetails>추천 식단이 없습니다. "다시 생성하기"를 클릭해 주세요.</S.MealDetails>
          </S.Meal>
        )}
      </S.RecommendedDiet>

      <S.CalorieInfo>
        <S.InfoIcon src={InfoImg} alt="Info" />
        <S.Title>열량 정보</S.Title>
        <S.CalorieDetails>
          <S.CalorieItem>
            <S.CalorieLabel>권장 열량</S.CalorieLabel>
            <S.CalorieValue>2300kcal</S.CalorieValue>
          </S.CalorieItem>
          <S.CalorieItem>
            <S.CalorieLabel>섭취 열량</S.CalorieLabel>
            <S.CalorieValue>1923kcal</S.CalorieValue>
          </S.CalorieItem>
          <S.CalorieItem>
            <S.CalorieLabel>잔여 열량</S.CalorieLabel>
            <S.CalorieValueRed>377kcal</S.CalorieValueRed>
          </S.CalorieItem>
        </S.CalorieDetails>
        <S.CalorieChart>
          <CalorieChart />
        </S.CalorieChart>
      </S.CalorieInfo>
    </S.Container>
  );
};

export default Dashboard;