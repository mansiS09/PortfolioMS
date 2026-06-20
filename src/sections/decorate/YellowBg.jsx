import React from 'react';
import yellowBg from '/src/assets/yellowBg.png';

const YellowBg = () => {
  return (
    <div className="fixed inset-0 bg-cover bg-center"
        style={{backgroundImage:`url(${yellowBg})`}}>
    </div>
  )
}

export default YellowBg;
