import styled from 'styled-components';

export const Container = styled.div`

`;

export const AllTitle = styled.div`

`

export const HealtTitle = styled.div`
    padding-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const HealthTitleNameWrap = styled.span`
    width: 72px;
    height: 33px;
    flex-shrink: 0;

    border-radius: 50px;
    background: #A2CC71;

    margin-top: 30px;
`

export const HealthTitleName = styled.div`
    display: flex;
    /* justify-content: center; */
    margin-top: 5px;
    align-items: center;
    /* width: 61px;
    height: 27px; */
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    
    color: var(--Sub-White, #FFF);

    text-align: center;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const HealthNow = styled.span`
    color: #5B5B5B;

    text-align: center;
    font-family: Pretendard;
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    padding-left: 11px;

    margin-top: 30px;
`

export const HealthStatus = styled.div`
    text-align: center;
    width: 349px;
    height: 382px;
    flex-shrink: 0;

    border-radius: 10px;
    background: var(--Sub-White, #FFF);

    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

    margin-left: 140px;
`;

export const Title = styled.h2`
  font-size: 1.2em;
  margin-bottom: 8px;

  margin-left: 30px;
  margin-top: 15px;
`;

export const CharacterImg = styled.img`
    width: 199px;
    height: 166px;
    flex-shrink: 0;
    padding-left: 30px;

    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
`;

export const HeightWeight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Height = styled.div`
  font-size: 1em;
`;

export const Weight = styled.div`
  font-size: 1em;
`;

export const BMIStatus = styled.div`
  display: flex;
  justify-content: center;
`;

export const BMIBar = styled.div`

`;

export const BMIPointer = styled.img`
  /* width: 10px;
  height: 10px;
  background: black;
  position: absolute;
  top: 3px; */
`;

export const DietDiary = styled.div`
    width: 276px;
    height: 382px;
    flex-shrink: 0;

    border-radius: 10px;
    background: var(--Sub-White, #FFF);

    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    margin-left: 520px;
    margin-top: -380px;
`;

export const Meal = styled.div`
  margin-bottom: 8px;
`;

export const MealTime = styled.div`
  font-weight: bold;
  margin-left: 30px;
  margin-top: 30px;
`;

export const MealDetails = styled.div`
  font-size: 0.9em;
  color: #555;
  margin-left: 30px;
`;

export const Calories = styled.div`
  font-size: 0.9em;
  color: #999;

  margin-left: 200px;
  margin-top: 15px;
`;

export const Caloriese = styled.div`
  font-size: 0.9em;
  color: #999;

  margin-left: 360px;
  margin-top: 15px;
`;

export const RecommendedDiet = styled.div`
    width: 450px;
    height: 714px;
    flex-shrink: 0;

    border-radius: 10px;
    background: var(--Sub-White, #FFF);

    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

    margin-left: 900px;
    position: absolute;
    margin-top: -380px;
`;

export const RecreateButton = styled.button`
  background: #6BCB77;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 16px;

  margin-left: 330px;

  &:hover {
    background: #56a863;
  }
`;

export const CalorieInfo = styled.div`
    width: 648px;
    height: 303px;
    flex-shrink: 0;
    
    border-radius: 10px;
    background: var(--Sub-White, #FFF);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

    position: absolute;
    margin-left: 145px;
    margin-top: 30px;
`;

export const InfoIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 16px;
`;

export const CalorieDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const CalorieItem = styled.div`
    display: flex; justify-content: space-between;
`


export const CalorieLabel = styled.div`
    font-size: 0.9em;
`


export const CalorieValue = styled.div`
    font-size: 0.9em; 
    font-weight: bold;;
`

export const CalorieChart = styled.div`
    width: 100%; 
    height: 100px; 
    background: #eee;;
`