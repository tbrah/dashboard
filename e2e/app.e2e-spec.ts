import { OrdbogenDashboardPage } from './app.po';

describe('ordbogen-dashboard App', () => {
  let page: OrdbogenDashboardPage;

  beforeEach(() => {
    page = new OrdbogenDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
