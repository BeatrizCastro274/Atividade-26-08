export class Person {
  constructor() {
    function fullName(pessoa: { name: string; lastname: string }): string {
      return pessoa.name + ' ' + pessoa.lastname;
    }

    const appDivFunc: HTMLElement = document.getElementById('app-Func');
    appDivFunc.innerHTML = `
  <h1>Functions</h1>
  <h2> Soma de 2 e 3: ${sum(2, 3)}</h2>
  <h2> Soma de 11 e 329: ${sum(11, 329)}</h2>
  <h2> Meu nome completo: ${fullName({
    lastname: 'Araujo',
    name: 'Beatriz C.',
  })}</h2>
  `;
  }
}
