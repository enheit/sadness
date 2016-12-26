import { SadnessPage } from './app.po';

describe('sadness App', function() {
  let page: SadnessPage;

  beforeEach(() => {
    page = new SadnessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
