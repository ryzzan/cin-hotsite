import { CinHotsitePage } from './app.po';

describe('cin-hotsite App', () => {
  let page: CinHotsitePage;

  beforeEach(() => {
    page = new CinHotsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
