import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given a site with iforms', () => {

  const iframePage: IFramePage = new IFramePage();

  beforeAll(async () => {
    await browser.get('http://toolsqa.com/iframe-practice-page/');
  });

  it('Then I will change the hight of the Iframe 1', async () => {
    await iframePage.setHeight('300');
    expect(iframePage.getHeight()).toEqual('300');
  });
});
