import { browser, element, by, ElementFinder } from 'protractor';
import { resolve } from 'path';
import { existsSync } from 'fs';
import * as remote from 'selenium-webdriver/remote';
import { DownloadService } from '../service/download.service';

interface PersonalInformation {
  firstName: string;
  lastName: string;
  sex: string;
  experience: number;
  profession: string[];
  tools: string[];
  continent: string;
  commands: string[];
  file?: string;
  downloadFile?: boolean;
}

export class PersonalInformationPage {
  private firstName: ElementFinder;
  private lastName: ElementFinder;
  private date: ElementFinder;
  private sendButton: ElementFinder;
  private pageTitle: ElementFinder;
  private uploadInput: ElementFinder;
  private testDownload: ElementFinder;

  constructor () {
    this.firstName = element(by.name('firstname'));
    this.lastName = element(by.name('lastname'));
    this.date = element(by.id('datepicker'));
    this.sendButton = element(by.id('submit'));
    this.pageTitle = element(by.id('content')).element(by.tagName('h1'));
    this.uploadInput = element(by.id('photo'));
    this.testDownload = element(by.linkText('Test File to Download'));
  }

  private setSex(gender:string) {
    return element(by.css(`[name="sex"][value="${gender}"]`));
  }

  private setYearsOfExperience(years:number) {
    return element(by.css(`[name="exp"][value="${years}"]`));
  }

  private setProfession(profession:string) {
    return element.all(by.css(`[name="profession"][value="${profession}"]`));
  }

  private setAutomationTool(autool:string) {
    return element(by.css(`[name="tool"][value="${autool}"]`));
  }

  private setContinent(continent:string) {
    return element(by.id('continents')).element(by.cssContainingText('option', continent));
  }

  private setSeleniumCommand(selcommand:string) {
    return element(by.id('selenium_commands')).element(by.cssContainingText('option', selcommand));
  }

  public async getPageTitle(): Promise<string> {
    return await this.pageTitle.getText();
  }

  private async uploadFile(relativePath: string): Promise<void> {
    const fullPath = resolve(process.cwd(), relativePath);

    if (existsSync(fullPath)) {
      await browser.setFileDetector(new remote.FileDetector());
      await this.uploadInput.sendKeys(fullPath);
      await browser.setFileDetector(undefined);
    }
  }

  private async download() {
    const link = await this.testDownload.getAttribute('href');
    const service = new DownloadService();
    await service.downloadFile(link, 'test-document.xlsx');
  }

  public async getFilename(): Promise<string> {
    const fullPath: string = await this.uploadInput.getAttribute('value');
    return fullPath.split(/(\\|\/)/g).pop();
  }

  public async fillForm(information: PersonalInformation): Promise<void> {
    await this.firstName.sendKeys(information.firstName);
    await this.lastName.sendKeys(information.lastName);
    await this.date.sendKeys('10/10/2018');
    await this.setSex(information.sex).click();
    await this.setYearsOfExperience(information.experience).click();

    await information.profession.forEach(async (element) => {
      await this.setProfession(element);
    });

    if (information.file) {
      await this.uploadFile(information.file);
    }

    await information.tools.forEach(async (element) => {
      await this.setAutomationTool(element);
    });

    await this.setContinent(information.continent).click();

    information.commands.forEach(async (element) => {
      await this.setSeleniumCommand(element);
    });

    if (information.downloadFile) {
      await this.download();
    }
  }

  public async sendForm(): Promise<void> {
    await this.sendButton.click();
  }
}
