import { atom } from 'recoil';

export const mealsState = atom({
  key: 'mealsState',
  default: {} as { [key: string]: Meal[] },
});

interface Meal {
  mealType: '아침' | '점심' | '저녁';
  mealDetails: string;
}