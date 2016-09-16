import { EorderConsolePage } from './app.po';

describe('eorder-console App', function() {
  let page: EorderConsolePage;

  beforeEach(() => {
    page = new EorderConsolePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
