import React from 'react';
import * as S from '@/components/personal/index.style'; 

import CharacterImg from '@/assets/fit.svg'; 
import InfoIcon from '@/assets/info_icon.png'; 

const Dashboard = () => {
  return (
    <S.Container>
      <S.HealthStatus>
        <S.Title>김민규 님의 건강상태</S.Title>
        <S.CharacterImg src={CharacterImg} alt="Character" />
        <S.HeightWeight>
          <S.Height>180cm</S.Height>
          <S.Weight>120kg</S.Weight>
        </S.HeightWeight>
        <S.BMIStatus>
          <S.BMIBar>
            <S.BMIPointer style={{ left: '80%' }} /> 
          </S.BMIBar>
        </S.BMIStatus>
      </S.HealthStatus>
      
      <S.DietDiary>
        <S.Title>식단 다이어리</S.Title>
        <S.Meal>
          <S.MealTime>아침</S.MealTime>
          <S.MealDetails>현미밥, 쇠고기조랭떡국,<br/>오이부추무침, 미니토마토, 배추김치</S.MealDetails>
          <S.Calories>501kcal</S.Calories>
        </S.Meal>
        <S.Meal>
          <S.MealTime>점심</S.MealTime>
          <S.MealDetails>후리가케멸치밥, 맑은쇠고기무국, <br/>멸치볶음, 잡채, 양배추무침</S.MealDetails>
          <S.Calories>1030kcal</S.Calories>
        </S.Meal>
        <S.Meal>
          <S.MealTime>저녁</S.MealTime>
          <S.MealDetails>아직 추가하지 않았어요</S.MealDetails>
          <S.Calories>0kcal</S.Calories>
        </S.Meal>
      </S.DietDiary>
      
      <S.RecommendedDiet>
        <S.Title>추천 식단</S.Title>
        <S.RecreateButton>다시 생성하기</S.RecreateButton>
        <S.Meal>
          <S.MealTime>아침</S.MealTime>
          <S.MealDetails>현미밥, 닭가슴살, 시금치, 방울토마토, 사과</S.MealDetails>
          <S.Caloriese>493kcal</S.Caloriese>
        </S.Meal>
        <S.Meal>
          <S.MealDetails>그릭 요거트, 견과류, 과일, 통곡물 시리얼</S.MealDetails>
          <S.Caloriese>590kcal</S.Caloriese>
        </S.Meal>
        <S.Meal>
          <S.MealTime>점심</S.MealTime>
          <S.MealDetails>닭가슴살 샐러드, 현미밥, 된장국</S.MealDetails>
          <S.Caloriese>650kcal</S.Caloriese>
        </S.Meal>
        <S.Meal>
          <S.MealDetails>연어구이, 통곡물 밥, 샐러드</S.MealDetails>
          <S.Caloriese>590kcal</S.Caloriese>
        </S.Meal>
        <S.Meal>
          <S.MealTime>저녁</S.MealTime>
          <S.MealDetails>닭가슴살 구이, 샐러드, 현미밥</S.MealDetails>
          <S.Caloriese>590kcal</S.Caloriese>
        </S.Meal>
        <S.Meal>
          <S.MealDetails>연어찜, 볶음 채소, 고구마</S.MealDetails>
          <S.Caloriese>550kcal</S.Caloriese>
        </S.Meal>
      </S.RecommendedDiet>

      <S.CalorieInfo>
        <S.Title>열량 정보</S.Title>
        <S.InfoIcon src={InfoIcon} alt="Info" />
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
            <S.CalorieValue>377kcal</S.CalorieValue>
          </S.CalorieItem>
        </S.CalorieDetails>
        <S.CalorieChart>

        </S.CalorieChart>
      </S.CalorieInfo>
    </S.Container>
  );
};

export default Dashboard;