import { ProgramType, ModuleType } from '@/types';
import React from 'react';
import { Module } from './module';

export const Programs = ({programs}: {programs: ProgramType[]}) => {
  return (
    <section className="programs__list">
      {programs.map((program: ProgramType) => (
        <div key={program.id}>
          <div className="program__title">{program.title}</div>
            {program.specializedSubjects.map((module: ModuleType) => (
              <div className="modules" key={module.id}>
                {[0, 1].map((moduleIndex) => (
                  <Module key={moduleIndex} module={module} moduleIndex={moduleIndex} />
                ))}
              </div>
            ))}
        </div>
      ))}
    </section>
  );
};