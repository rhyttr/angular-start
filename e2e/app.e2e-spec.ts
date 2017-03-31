import { VcxnetPage } from './app.po';

describe('vcxnet App', () => {
  let page: VcxnetPage;

  beforeEach(() => {
    page = new VcxnetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
