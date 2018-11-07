import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

const firefoxConfig = {
  browserName: 'firefox',
  platform: 'linux',
  name: 'firefox-tests',
  shardTestFiles: true,
  maxInstances: 1
};

const chromeConfig = {
  browserName: 'chrome',
  platform: 'windows',
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
  noGlobals: true,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  browserstackUser: process.env.BS_USERNAME,
  browserstackKey: process.env.BS_ACCESS_KEY,
  SELENIUM_PROMISE_MANAGER: false,
  seleniumAddress: 'http://192.168.99.100:4444/wd/hub',
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0);
    reporter();
  }
};
