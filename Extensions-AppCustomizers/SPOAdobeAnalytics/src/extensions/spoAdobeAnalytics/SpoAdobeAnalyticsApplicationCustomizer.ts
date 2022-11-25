import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'SpoAdobeAnalyticsApplicationCustomizerStrings';

const LOG_SOURCE: string = 'SpoAdobeAnalyticsApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISpoAdobeAnalyticsApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SpoAdobeAnalyticsApplicationCustomizer
  extends BaseApplicationCustomizer<ISpoAdobeAnalyticsApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

    //Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);

    //Set up Adobe EDDL Library hook
    // var adobeAnalyticsLibScript = document.createElement("script");
    // adobeAnalyticsLibScript.type ="text/javascript";
    // adobeAnalyticsLibScript.src = "//assets.adobedtm.com/8ad521cd18f2/119a23820b18/launch-c3df1d05baa4-development.min.js";
    // adobeAnalyticsLibScript.async = true;
    // document.head.append(adobeAnalyticsLibScript);

    //Set up base Adobe EDDL Object
    // var adobeAnalyticsDataLayerObjScript = document.createElement("script");
    // adobeAnalyticsDataLayerObjScript.type ="text/javascript";
    // adobeAnalyticsDataLayerObjScript.innerHTML = "window.appEventData = window.appEventData || []; ";
    // document.head.append(adobeAnalyticsDataLayerObjScript);

    //Push test EDDL Event

    // eval(`
    //     window.appEventData.push({
    //       "event": "Page Loaded",
    //       "page":{
    //               "pageName" : window.document.title,
    //       }
    //     })
    // `);
  

    return Promise.resolve();
  }
}
