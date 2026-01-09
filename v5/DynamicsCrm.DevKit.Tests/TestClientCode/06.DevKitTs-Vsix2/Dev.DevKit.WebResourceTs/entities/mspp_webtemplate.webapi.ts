/**
 * mspp_webtemplate.webapi.ts - mspp_webtemplate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * mspp_webtemplate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_webtemplateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imspp_webtemplateApi, 'FormattedValue'>]: string };
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Shows the MIME type of the web template content. */
	mspp_mimetype: string | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Source */
	mspp_source: string | null;
	/** Unique identifier for Website associated with Web Template */
	mspp_websiteid: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	mspp_webtemplateId: DevKit.Guid | null;
	/** Status of the Web Template */
	statecode: number | null;
	/** Reason for the status of the Web Template */
	statuscode: number | null;
}

const mspp_webtemplateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_mimetype: { logicalName: 'mspp_mimetype' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_source: { logicalName: 'mspp_source' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	mspp_webtemplateId: { logicalName: 'mspp_webtemplateid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_webtemplate WebApi class for early-bound style coding
 * Usage: const mspp_webtemplate = new mspp_webtemplateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_webtemplateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_webtemplateApi>(entity, 'mspp_webtemplate', 'mspp_webtemplates', mspp_webtemplateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_webtemplateApi extends Imspp_webtemplateApi { }
