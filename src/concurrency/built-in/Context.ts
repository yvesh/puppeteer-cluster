
import * as puppeteer from 'puppeteer';

import { ResourceData } from '../ConcurrencyImplementation';
import SingleBrowserImplementation from '../SingleBrowserImplementation';

export default class Context extends SingleBrowserImplementation {

  protected async createResources(): Promise<ResourceData> {
    // @ts-ignore - puppeteer typings are old
    const context = await (this.browser as puppeteer.Browser).createBrowserContext();
    const page = await context.newPage();
    return {
      context,
      page,
    };
  }

  protected async freeResources(resources: ResourceData): Promise<void> {
    await resources.context.close();
  }

}
