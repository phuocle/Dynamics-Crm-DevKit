/**
 * mspp_webpageaccesscontrolrule.webapi.ts - mspp_webpageaccesscontrolrule WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * mspp_webpageaccesscontrolrule WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_webpageaccesscontrolruleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imspp_webpageaccesscontrolruleApi, 'FormattedValue'>]: string };
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Description */
	mspp_description: string | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Right */
	mspp_right: number | null;
	/** All child web files directly related to this web page will be excluded from security validation. This does not exclude the children's descendants. */
	mspp_scope: number | null;
	/** Unique identifier for entity instances */
	mspp_webpageaccesscontrolruleId: DevKit.Guid | null;
	/** Unique identifier for Web Page associated with Web Page Access Control Rule. */
	mspp_webpageid: DevKit.Guid | null;
	/** Unique identifier for Website associated with Web Page Access Control Rule. */
	mspp_websiteid: DevKit.Guid | null;
	/** Status of the Web Page Access Control Rule */
	statecode: number | null;
	/** Reason for the status of the Web Page Access Control Rule */
	statuscode: number | null;
}

const mspp_webpageaccesscontrolruleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_description: { logicalName: 'mspp_description' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_right: { logicalName: 'mspp_right', type: 'Integer' },
	mspp_scope: { logicalName: 'mspp_scope', type: 'Integer' },
	mspp_webpageaccesscontrolruleId: { logicalName: 'mspp_webpageaccesscontrolruleid' },
	mspp_webpageid: { schemaName: 'mspp_webpageid', logicalName: '_mspp_webpageid_value', entityCollectionName: 'mspp_webpages', entityLogicalName: 'mspp_webpage' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_webpageaccesscontrolrule WebApi class for early-bound style coding
 * Usage: const mspp_webpageaccesscontrolrule = new mspp_webpageaccesscontrolruleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_webpageaccesscontrolruleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_webpageaccesscontrolruleApi>(entity, 'mspp_webpageaccesscontrolrule', 'mspp_webpageaccesscontrolrules', mspp_webpageaccesscontrolruleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_webpageaccesscontrolruleApi extends Imspp_webpageaccesscontrolruleApi { }
