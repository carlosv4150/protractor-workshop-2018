import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given a site with iforms', () => {

  const iframePage: IFramePage = new IFramePage();

  beforeAll(async () => {
    await browser.get('http://toolsqa.com/iframe-practice-page/');
  });

  it('Then I will verify the site title', async () => {
    expect(iframePage.getTitle()).toEqual('Sample Iframe page');
  });

  it('And I will change the height of the Iframe 1', async () => {
    await iframePage.setHeight('300');
    expect(iframePage.getHeight()).toEqual('300');
  });

  it('And I will move to Iframe 1', async () => {
    await iframePage.moveToFirstIframe();
    expect(iframePage.getTitle()).toBe('Practice Automation Form');
  });

  it('And I will return to the principal context', async () => {
    await iframePage.moveOutOfIframe();
    expect(iframePage.getTitle()).toEqual('Sample Iframe page');
  });
});
