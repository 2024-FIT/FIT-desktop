import React from 'react';
import Lottie from "lottie-react";
import runningLottie from "@/assets/info/running.json";
import Singup from "@/components/signup/index"

import * as S from '@/pages/login/index.style';

const Index = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative', 
    }}>
      <Lottie 
        animationData={runningLottie} 
        style={{ 
          width: '100%', 
          height: '100%', 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%) scale(1.5)'
        }} 
      />
      <S.BlackBox/>
      <Singup/>
    </div>
  );
};

export default Index;