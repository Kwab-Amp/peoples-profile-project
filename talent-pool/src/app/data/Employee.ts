export interface Employee {
  fullName: string;
  email: string;
  department: string;
  title: string;
  photoUrl: string;
  clientProject: string;
  profile: {
    professionalTechStack: Array<string>,
    preferredTechStack: Array<string>,
    previousWorkingExperience: Array<string>
  }
}