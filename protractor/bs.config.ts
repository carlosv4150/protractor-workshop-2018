import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/locators.spec.js'],
  getPageTimeout: 30000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  browserstackUser: process.env.BS_USERNAME,
  browserstackKey: process.env.BS_ACCESS_KEY,
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    name: 'UI Workshop',
    browserName: 'chrome',
    chromeOptions: {
      args: ['disable-infobars=true', '--window-size=800,600'],
      prefs: { credentials_enable_service: false }
    }
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0);
    reporter();
  }
};
