export interface ProgramType {
  id: number;
  title: string;
  specializedSubjects: ModuleType[];
}

export interface ModuleType {
  id: number;
  skills: SkillsType[];
}

export interface SkillsType {
  id: number;
  string: string;
}