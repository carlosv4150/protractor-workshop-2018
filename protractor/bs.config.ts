import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

const firefoxConfig = {
  browserName: 'firefox',
  platform: 'mac',
  name: 'firefox-tests',
  shardTestFiles: true,
  maxInstances: 1
};

const chromeConfig = {
  browserName: 'chrome',
  name: 'chrome-tests',
  shardTestFiles: true,
  maxInstances: 1,
  chromeOptions: {
    args: ['disable-infobars=true', '--window-size=800,600'],
    prefs: { credentials_enable_service: false }
  }
};

const multiCapabilities = [chromeConfig, firefoxConfig];

export let config: Config = {
  multiCapabilities,
  framework: 'jasmine',
  specs: ['../test/**/locators.spec.js'],
  getPageTimeout: 30000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  browserstackUser: 'carlosvibanco1', // process.env.BS_USERNAME,
  browserstackKey: 'whZJxUyWPxZUGzgx1DjK', // process.env.BS_ACCESS_KEY,
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0);
    reporter();
  }
};
