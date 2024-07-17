import React, { useState, useEffect } from 'react';
import * as S from '@/components/calendar/index.style';

import TodayMenuImg from "@/assets/today/todaymymeal.svg"
import PlusButton from "@/assets/today/plus-circle.svg"

const App: React.FC = () => {
  const [meals, setMeals] = useState<{ [key: string]: any[] }>({});
  const [date, setDate] = useState<Date>(new Date());
  const [mealType, setMealType] = useState<string>('아침');
  const [mealDetails, setMealDetails] = useState<string>('');

  useEffect(() => {
    const today = new Date();
    setDate(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dateString = date.toISOString().slice(0, 10);
    const newMeal = { mealType, mealDetails };

    setMeals({
      ...meals,
      [dateString]: [...(meals[dateString] || []), newMeal],
    });
    setMealDetails('');
  };

  const generateCalendar = () => {
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const calendarDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(<S.Day key={`empty-${i}`} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(currentYear, currentMonth, day);
      const isToday = currentDate.toDateString() === new Date().toDateString();
      const isSelected = currentDate.toDateString() === date.toDateString();

      calendarDays.push(
        <S.Day
          key={day}
          isToday={isToday}
          isSelected={isSelected}
          onClick={() => setDate(currentDate)}
        >
          {day}
        </S.Day>
      );
    }

    return calendarDays;
  };

  const changeMonth = (offset: number) => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + offset, 1);
    setDate(newDate);
  };

  return (
    <S.Container>
      <S.Sidebar>
        <S.CalendarContainer>
          <S.MonthTitle>
            {date.getFullYear()}년 {date.getMonth() + 1}월
          </S.MonthTitle>
          <S.BabDiary> 식단 다이어리 </S.BabDiary>
          <div>
            <S.NavButton onClick={() => changeMonth(-1)}>이전 달</S.NavButton>
            <S.NavButton onClick={() => changeMonth(1)}>다음 달</S.NavButton>
          </div>
          <S.CalendarGrid>
            {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
              <S.Day key={day}>{day}</S.Day>
            ))}
            {generateCalendar()}
          </S.CalendarGrid>
        </S.CalendarContainer>
        
      </S.Sidebar>
      <S.MealDetails>
        <S.TodayMenuWrap>
            <S.TodayMenuImg src={TodayMenuImg}/>
            <S.TodayMenu>{new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1).toISOString().slice(0, 10)}</S.TodayMenu>
        </S.TodayMenuWrap>
        {meals[date.toISOString().slice(0, 10)] ? (
          <S.EventList>
            <thead>
              <tr>
                <th>식사 종류</th>
                <th>상세 내역</th>
              </tr>
            </thead>
            <tbody>
              {meals[date.toISOString().slice(0, 10)].map((meal, index) => (
                <S.EventRow key={index}>
                  <S.EventCell>{meal.mealType}</S.EventCell>
                  <S.EventCell>{meal.mealDetails}</S.EventCell>
                </S.EventRow>
              ))}
            </tbody>
          </S.EventList>
        ) : (
          <S.TodayNotEat>오늘 먹은 식사가 없어요 ㅜㅜ</S.TodayNotEat>
        )}
        <S.EventForm onSubmit={handleSubmit}>
        <S.MealTypeSelecter value={mealType} onChange={(e) => setMealType(e.target.value)}>
          <option value="아침">아침</option>
          <option value="점심">점심</option>
          <option value="저녁">저녁</option>
        </S.MealTypeSelecter>
        <textarea
          placeholder="식사 상세 내용"
          value={mealDetails}
          onChange={(e) => setMealDetails(e.target.value)}
        />
        <S.SubmitButton type="submit">
            <img src={PlusButton}/>
        </S.SubmitButton>
      </S.EventForm>
      </S.MealDetails>
    </S.Container>
  );
};

export default App;


