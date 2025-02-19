'use client';

import { ModuleType, SkillsType } from '@/types';
import Image from 'next/image';
import React, { useState } from 'react';

export const Module = ({module, moduleIndex}: {module: ModuleType, moduleIndex: number}) => {
  const [activeBlock, setActiveBlock] = useState(false)
  
  const handleClick = () => {

    setActiveBlock(!activeBlock)
    if (activeBlock) {
      return
    }
  };

  return (
    <div key={moduleIndex} className="module">
      <div className={`module__index ${activeBlock && 'active'}`} onClick={() => handleClick()}>
        <div className='plus__container'>
        <Image className='plus' src={`plus.svg`} alt={`Плюс ${moduleIndex + 1}`} width={18} height={18}/>
        </div>
        {moduleIndex + 1} модуль
      </div>
      <ul id={`skills${moduleIndex}`} className={`skills ${activeBlock && 'active'}`}>
        {module.skills
          .slice(moduleIndex * 5, (moduleIndex + 1) * 5)
          .map((skill: SkillsType) => (
            <li className='skill' key={skill.id}>{skill.string}</li>
          ))}
      </ul>
    </div>
  );
};