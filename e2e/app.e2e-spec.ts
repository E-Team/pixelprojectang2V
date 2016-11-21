import { FontendPage } from './app.po';

describe('fontend App', function() {
  let page: FontendPage;

  beforeEach(() => {
    page = new FontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
