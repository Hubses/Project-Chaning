import { InitialPage } from './app.po';

describe('initial App', () => {
  let page: InitialPage;

  beforeEach(() => {
    page = new InitialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
