export interface Employee {
  fullName: string;
  email: string;
  department: string;
  title: string;
  profilePicture: string;
  clientProject: string;
  techStack: {
    professionalTechStack: Array<string>,
    preferredTechStack: Array<string>,
    previousWorkingExperience: Array<string>
  }
}