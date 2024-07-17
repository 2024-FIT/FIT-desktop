import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-left: 2%;
  margin-top: 30px;
`;

export const MonthTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 30px;
`;

export const TodayNotEat = styled.div`
  color: #3c3c3c;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  margin-left: 33px;
  margin-top: 20px;
`;

export const BabDiary = styled.div`
  color: #5b5b5b;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Sidebar = styled.div`
  margin-right: 20px;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 662px;
  height: 711px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--Sub-White, #fff);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

export const Day = styled.div<{ isToday?: boolean; isSelected?: boolean }>`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isToday, isSelected }) =>
    isSelected ? '#a2cc71' : isToday ? '#aaa' : '#fff'};
  color: ${({ isToday }) => (isToday ? '#fff' : '#000')};
  cursor: pointer;
  border-radius: 100%;
`;

export const NavButton = styled.button`
  margin: 5px;
  background-color: white;
  border: none;
  padding-bottom: 20px;
  cursor: pointer;

  &:hover {
    color: #a2cc71;
  }
`;

export const MealDetails = styled.div`
  width: 415px;
  height: 711px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--Sub-White, #fff);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TodayMenuImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const TodayMenuWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 23px;
  margin-left: 33px;
`;

export const TodayMenu = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  margin-left: 8px;
`;

export const EventForm = styled.form`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const SelectBox = styled.select`
  flex: 1;
  height: 40px;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
`;

export const TextArea = styled.textarea`
  flex: 2;
  height: 80px;
  font-size: 16px;
  resize: vertical;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
  border: none;
  background: none;
`;

export const MealTypeSelecter = styled.select`
  border: none;
  color: #000;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const EventList = styled.table`
  margin-top: 20px;
  border-collapse: collapse;
  width: 100%;
  cursor: pointer;
`;

export const EventRow = styled.tr``;

export const EventCell = styled.td`
  padding: 10px;
  margin-left: 33px;
`;