import { PersonaPage } from './app.po';

describe('persona App', () => {
  let page: PersonaPage;

  beforeEach(() => {
    page = new PersonaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
