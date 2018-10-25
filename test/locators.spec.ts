import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Given a form', () => {

  const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  it('When I fill all the information', async () => {

    await personalInformationPage.fillForm({
      firstName: 'Alejandro',
      lastName: 'Perdomo',
      sex: 'Male',
      experience: 7,
      profession: ['Automation Tester'],
      tools: ['Selenium Webdriver'],
      continent: 'South America',
      commands: [
        'Browser Commands',
        'Navigation Commands',
        'Switch Commands',
        'Wait Commands',
        'WebElement Commands']
    });

  });

  it('Then the information is sent', async () => {
    await personalInformationPage.sendForm();
  });

  it('And the title is verified', async () => {
    expect(personalInformationPage.getPageTitle()).toBe('Practice Automation Form');
  });
});
