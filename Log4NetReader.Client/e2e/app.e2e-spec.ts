import { Log4NetReader.ClientPage } from './app.po';

describe('log4-net-reader.client App', () => {
  let page: Log4NetReader.ClientPage;

  beforeEach(() => {
    page = new Log4NetReader.ClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
