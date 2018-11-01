import { GaragePage } from './app.po';

describe('garage App', () => {
  let page: GaragePage;

  beforeEach(() => {
    page = new GaragePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
