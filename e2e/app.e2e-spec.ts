import { ParallaxExamplePage } from './app.po';

describe('parallax-example App', () => {
  let page: ParallaxExamplePage;

  beforeEach(() => {
    page = new ParallaxExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
