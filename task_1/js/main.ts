interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const printTeacher = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`;
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClass;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}
  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}