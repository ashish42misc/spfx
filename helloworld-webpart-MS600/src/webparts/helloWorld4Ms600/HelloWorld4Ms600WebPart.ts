import {
  Version,
  DisplayMode,
  Environment,
  EnvironmentType,
  Log
} from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorld4Ms600WebPart.module.scss';
import * as strings from 'HelloWorld4Ms600WebPartStrings';

export interface IHelloWorld4Ms600WebPartProps {
  description: string;
  myContinent: string;
  numContinentsVisited: number;
}

export default class HelloWorld4Ms600WebPart extends BaseClientSideWebPart<IHelloWorld4Ms600WebPartProps> {

  public render(): void {

    const pageMode : string = (this.displayMode === DisplayMode.Edit)
    ? 'You are in edit mode'
    : 'You are in read mode';
  const environmentType : string = (Environment.type === EnvironmentType.Local)
    ? 'You are in local environment'
    : 'You are in SharePoint environment';

    this.context.statusRenderer.displayLoadingIndicator(this.domElement, "message");
    setTimeout(() => {
      this.context.statusRenderer.clearLoadingIndicator(this.domElement);


    this.domElement.innerHTML = `
      <div class="${ styles.helloWorld4Ms600 }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint!</span>

              <p class="${ styles.subTitle }"><strong>Page mode:</strong> ${ pageMode }</p>
              <p class="${ styles.subTitle }"><strong>Environment:</strong> ${ environmentType }</p>


              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description }">${escape(this.properties.description)}</p>
              <p class="${ styles.description }">Continent where I reside: ${escape(this.properties.myContinent)}</p>
              <p class="${ styles.description }">Number of continents I've visited: ${this.properties.numContinentsVisited}</p>
              <a href="#" class="${ styles.button }">
                <span class="${ styles.label }">Learn more 123</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;

      this.domElement.getElementsByClassName(`${ styles.button }`)[0]
      .addEventListener('click', (event: any) => {
        event.preventDefault();
        alert('Welcome to the SharePoint Framework!');
      });
    }, 5000);
      Log.info('HelloWorld', 'message', this.context.serviceScope);
      Log.warn('HelloWorld', 'WARNING message', this.context.serviceScope);
      Log.error('HelloWorld', new Error('Error message'), this.context.serviceScope);
      Log.verbose('HelloWorld', 'VERBOSE message', this.context.serviceScope);
  }

  private validateContinents(textboxValue: string): string {
    const validContinentOptions: string[] = ['africa', 'antarctica', 'asia', 'australia', 'europe', 'north america', 'south america'];
    const inputToValidate: string = textboxValue.toLowerCase();
  
    return (validContinentOptions.indexOf(inputToValidate) === -1)
      ? 'Invalid continent entry; valid options are "Africa", "Antarctica", "Asia", "Australia", "Europe", "North America", and "South America"'
      : '';
  }


  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('myContinent', {
                  label: 'Continent where I currently reside',
                  onGetErrorMessage: this.validateContinents.bind(this)
                }),
                PropertyPaneSlider('numContinentsVisited', {
                  label: 'Number of continents I\'ve visited',
                  min: 1, max: 7, showValue: true,
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
