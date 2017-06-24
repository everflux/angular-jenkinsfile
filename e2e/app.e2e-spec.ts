import { HerokuDemoPage } from './app.po';

describe('heroku-demo App', () => {
  let page: HerokuDemoPage;

  beforeEach(() => {
    page = new HerokuDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works on heroku!');
  });
});
