/**
 * mspp_webform.webapi.ts - mspp_webform WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * mspp_webform WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_webformApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imspp_webformApi, 'FormattedValue'>]: string };
	/** Redirect to sign in if the user is anonymous. */
	mspp_authenticationrequired: boolean | null;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Determines if an existing record can be edited. This setting is ignored If the form mode on the form step is set to edit mode. Otherwise, an edit form wouldn't function properly. */
	mspp_editexistingrecordpermitted: boolean | null;
	/** Edit Expired Message */
	mspp_editexpiredmessage: string | null;
	/** Edit Expired State Code */
	mspp_editexpiredstatecode: number | null;
	/** Edit Expired Status Code */
	mspp_editexpiredstatuscode: number | null;
	/** Edit Not Permitted Message */
	mspp_editnotpermittedmessage: string | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** Multiple Records Per User Permitted */
	mspp_multiplerecordsperuserpermitted: boolean | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Enabled */
	mspp_progressindicatorenabled: boolean | null;
	/** Ignore Last Step In Progress Count */
	mspp_progressindicatorignorelaststep: boolean | null;
	/** Location of the progress indicator relative to the form */
	mspp_progressindicatorposition: number | null;
	/** Prepend Step Number to Step Title */
	mspp_progressindicatorprependstepnum: boolean | null;
	/** Type */
	mspp_progressindicatortype: number | null;
	/** Provisioned Languages */
	mspp_provisionedlanguages: number | null;
	/** Default message: Your changes have not been saved. To stay on the page so that you can save your changes, click Cancel. */
	mspp_savechangeswarningmessage: string | null;
	/** Displays a warning message to the user if they close the browser, or refresh the page, or click the previous button in a multiple step form and they have changes that haven't been saved. */
	mspp_savechangeswarningonclose: boolean | null;
	/** Start New Session On Load */
	mspp_startnewsessiononload: boolean | null;
	/** Unique identifier for Form Step associated with Multistep Form. */
	mspp_startstep: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	mspp_webformId: DevKit.Guid | null;
	/** Unique identifier for Website entity associated with this record */
	mspp_websiteid: DevKit.Guid | null;
	/** Status of the Multistep Form */
	statecode: number | null;
	/** Reason for the status of the Multistep Form */
	statuscode: number | null;
}

const mspp_webformFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_authenticationrequired: { logicalName: 'mspp_authenticationrequired', type: 'Boolean' },
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_editexistingrecordpermitted: { logicalName: 'mspp_editexistingrecordpermitted', type: 'Boolean' },
	mspp_editexpiredmessage: { logicalName: 'mspp_editexpiredmessage' },
	mspp_editexpiredstatecode: { logicalName: 'mspp_editexpiredstatecode', type: 'Integer' },
	mspp_editexpiredstatuscode: { logicalName: 'mspp_editexpiredstatuscode', type: 'Integer' },
	mspp_editnotpermittedmessage: { logicalName: 'mspp_editnotpermittedmessage' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_multiplerecordsperuserpermitted: { logicalName: 'mspp_multiplerecordsperuserpermitted', type: 'Boolean' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_progressindicatorenabled: { logicalName: 'mspp_progressindicatorenabled', type: 'Boolean' },
	mspp_progressindicatorignorelaststep: { logicalName: 'mspp_progressindicatorignorelaststep', type: 'Boolean' },
	mspp_progressindicatorposition: { logicalName: 'mspp_progressindicatorposition', type: 'Integer' },
	mspp_progressindicatorprependstepnum: { logicalName: 'mspp_progressindicatorprependstepnum', type: 'Boolean' },
	mspp_progressindicatortype: { logicalName: 'mspp_progressindicatortype', type: 'Integer' },
	mspp_provisionedlanguages: { logicalName: 'mspp_provisionedlanguages', type: 'Integer' },
	mspp_savechangeswarningmessage: { logicalName: 'mspp_savechangeswarningmessage' },
	mspp_savechangeswarningonclose: { logicalName: 'mspp_savechangeswarningonclose', type: 'Boolean' },
	mspp_startnewsessiononload: { logicalName: 'mspp_startnewsessiononload', type: 'Boolean' },
	mspp_startstep: { schemaName: 'mspp_startstep', logicalName: '_mspp_startstep_value', entityCollectionName: 'mspp_webformsteps', entityLogicalName: 'mspp_webformstep' },
	mspp_webformId: { logicalName: 'mspp_webformid' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_webform WebApi class for early-bound style coding
 * Usage: const mspp_webform = new mspp_webformApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_webformApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_webformApi>(entity, 'mspp_webform', 'mspp_webforms', mspp_webformFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_webformApi extends Imspp_webformApi { }
