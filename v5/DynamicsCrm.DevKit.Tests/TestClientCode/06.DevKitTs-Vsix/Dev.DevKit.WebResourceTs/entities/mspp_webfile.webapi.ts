/**
 * mspp_webfile.webapi.ts - mspp_webfile WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_webfile
 * All fields return string representation of their values
 */
export interface Imspp_webfileFormattedValue {
	readonly mspp_alloworigin: string;
	readonly mspp_cloudblobaddress: string;
	readonly mspp_contentdisposition: string;
	readonly mspp_createdby: string;
	readonly mspp_createdbyipaddress: string;
	readonly mspp_createdbyusername: string;
	readonly mspp_createdon_UtcDateAndTime: string;
	readonly mspp_displaydate_UtcDateAndTime: string;
	readonly mspp_displayorder: string;
	readonly mspp_excludefromsearch: string;
	readonly mspp_expirationdate_UtcDateAndTime: string;
	readonly mspp_hiddenfromsitemap: string;
	readonly mspp_masterwebfileid: string;
	readonly mspp_modifiedby: string;
	readonly mspp_modifiedbyipaddress: string;
	readonly mspp_modifiedbyusername: string;
	readonly mspp_modifiedon_UtcDateAndTime: string;
	readonly mspp_name: string;
	readonly mspp_parentpageid: string;
	readonly mspp_partialurl: string;
	readonly mspp_publishingstateid: string;
	readonly mspp_releasedate_UtcDateAndTime: string;
	readonly mspp_summary: string;
	readonly mspp_title: string;
	readonly mspp_webfileId: string;
	readonly mspp_websiteid: string;
	readonly statecode: string;
	readonly statuscode: string;
}

/**
 * mspp_webfile WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_webfileApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_webfileFormattedValue;
	/** Defines CORS header Access-Control-Allow-Origin for cross origin requests. */
	mspp_alloworigin: string | null;
	/** Cloud Blob Address */
	mspp_cloudblobaddress: string | null;
	/** Shows the value to be applied to the HTTP Response Headers Content-Disposition. */
	mspp_contentdisposition: number | null;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Created By IP Address */
	mspp_createdbyipaddress: string | null;
	/** Created By Username */
	mspp_createdbyusername: string | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Display Date */
	mspp_displaydate_UtcDateAndTime: Date | null;
	/** Display Order */
	mspp_displayorder: number | null;
	/** Shows whether the web file is excluded from the portal search. */
	mspp_excludefromsearch: boolean | null;
	/** Expiration Date */
	mspp_expirationdate_UtcDateAndTime: Date | null;
	/** Hidden From Sitemap */
	mspp_hiddenfromsitemap: boolean | null;
	/** Unique identifier for Web File associated with Web File. */
	mspp_masterwebfileid: DevKit.Guid | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Modified By IP Address */
	mspp_modifiedbyipaddress: string | null;
	/** Modified By Username */
	mspp_modifiedbyusername: string | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Unique identifier for Web Page associated with Web File. */
	mspp_parentpageid: DevKit.Guid | null;
	/** Partial URL */
	mspp_partialurl: string | null;
	/** Unique identifier for Publishing State associated with Web File. */
	mspp_publishingstateid: DevKit.Guid | null;
	/** Release Date */
	mspp_releasedate_UtcDateAndTime: Date | null;
	/** Summary */
	mspp_summary: string | null;
	/** Title */
	mspp_title: string | null;
	/** Unique identifier for entity instances */
	mspp_webfileId: DevKit.Guid | null;
	/** Unique identifier for Website associated with Web File. */
	mspp_websiteid: DevKit.Guid | null;
	/** Status of the Web File */
	statecode: number | null;
	/** Reason for the status of the Web File */
	statuscode: number | null;
}

const mspp_webfileFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_alloworigin: { logicalName: 'mspp_alloworigin' },
	mspp_cloudblobaddress: { logicalName: 'mspp_cloudblobaddress' },
	mspp_contentdisposition: { logicalName: 'mspp_contentdisposition', type: 'Integer' },
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdbyipaddress: { logicalName: 'mspp_createdbyipaddress' },
	mspp_createdbyusername: { logicalName: 'mspp_createdbyusername' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_displaydate_UtcDateAndTime: { logicalName: 'mspp_displaydate', type: 'DateTime' },
	mspp_displayorder: { logicalName: 'mspp_displayorder', type: 'Integer' },
	mspp_excludefromsearch: { logicalName: 'mspp_excludefromsearch', type: 'Boolean' },
	mspp_expirationdate_UtcDateAndTime: { logicalName: 'mspp_expirationdate', type: 'DateTime' },
	mspp_hiddenfromsitemap: { logicalName: 'mspp_hiddenfromsitemap', type: 'Boolean' },
	mspp_masterwebfileid: { schemaName: 'mspp_masterwebfileid', logicalName: '_mspp_masterwebfileid_value', entityCollectionName: 'mspp_webfiles', entityLogicalName: 'mspp_webfile' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedbyipaddress: { logicalName: 'mspp_modifiedbyipaddress' },
	mspp_modifiedbyusername: { logicalName: 'mspp_modifiedbyusername' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_parentpageid: { schemaName: 'mspp_parentpageid', logicalName: '_mspp_parentpageid_value', entityCollectionName: 'mspp_webpages', entityLogicalName: 'mspp_webpage' },
	mspp_partialurl: { logicalName: 'mspp_partialurl' },
	mspp_publishingstateid: { schemaName: 'mspp_publishingstateid', logicalName: '_mspp_publishingstateid_value', entityCollectionName: 'mspp_publishingstates', entityLogicalName: 'mspp_publishingstate' },
	mspp_releasedate_UtcDateAndTime: { logicalName: 'mspp_releasedate', type: 'DateTime' },
	mspp_summary: { logicalName: 'mspp_summary' },
	mspp_title: { logicalName: 'mspp_title' },
	mspp_webfileId: { logicalName: 'mspp_webfileid' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_webfile WebApi class for early-bound style coding
 * Usage: const mspp_webfile = new mspp_webfileApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_webfileApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_webfileApi>(entity, 'mspp_webfile', 'mspp_webfiles', mspp_webfileFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_webfileApi extends Imspp_webfileApi { }
