import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './HelloWorldAgainIn2022WebPart.module.scss';

export interface IHelloWorldAgainIn2022WebPartProps {
}

export default class HelloWorldAgainIn2022WebPart extends BaseClientSideWebPart<IHelloWorldAgainIn2022WebPartProps> {

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.helloWorldAgainIn2022 }"></div>My web part..`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
