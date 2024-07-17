import React, { useState } from 'react';
import Dashboard from '@/components/personal/index';

const ParentComponent = () => {
  const [meals, setMeals] = useState<{ [key: string]: { mealType: string; mealDetails: string }[] }>({});

  const addMeal = (dateString: string, mealType: string, mealDetails: string) => {
    const newMeal = { mealType, mealDetails };
    setMeals({
      ...meals,
      [dateString]: [...(meals[dateString] || []), newMeal],
    });
  };

  return (
    <div>
      <Dashboard meals={meals} addMeal={addMeal} />
    </div>
  );
};

export default ParentComponent;