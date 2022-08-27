export class Person {
  fullName: string;
  constructor(firstname: string, middlename: string, lastname: string) {
    this.fullName = firstname + middlename + lastname;
  }
  getfullName() {
    return 'Olá, ' + this.fullName;
  }
  getbirthdayYear() {
    return;
  }
}
