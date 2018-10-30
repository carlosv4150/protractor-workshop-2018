import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';
import { DownloadService } from '../src/service/download.service';

describe('Given a form', () => {

  const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('When I fill all the information', async () => {

    beforeAll(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        profession: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        file: './resources/sea.jpg',
        downloadFile: true,
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']
      });
    });

    it('Then file should be loaded', async () => {
      expect(await personalInformationPage.getFilename()).toBe('sea.jpg');
    });

    it('And a file should be downloaded', async () => {
      const service = new DownloadService();
      const file = await service.readFileFromTemp('test-document.xlsx');
      expect(file.byteLength).toBeGreaterThanOrEqual(8000);
    });

    it('And the information is sent', async () => {
      await personalInformationPage.sendForm();
    });

    it('And the title is verified', async () => {
      expect(personalInformationPage.getPageTitle()).toBe('Practice Automation Form');
    });
  });
});
