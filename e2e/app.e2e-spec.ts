import { QtcliPage } from './app.po';

describe('qtcli App', () => {
  let page: QtcliPage;

  beforeEach(() => {
    page = new QtcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
