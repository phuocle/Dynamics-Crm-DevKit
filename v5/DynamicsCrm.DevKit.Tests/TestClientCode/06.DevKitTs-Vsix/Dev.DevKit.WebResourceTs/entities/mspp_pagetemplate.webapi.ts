/**
 * mspp_pagetemplate.webapi.ts - mspp_pagetemplate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_pagetemplate
 * All fields return string representation of their values
 */
export interface Imspp_pagetemplateFormattedValue {
	readonly mspp_createdby: string;
	readonly mspp_createdon_UtcDateAndTime: string;
	readonly mspp_description: string;
	readonly mspp_entityname: string;
	readonly mspp_isdefault: string;
	readonly mspp_modifiedby: string;
	readonly mspp_modifiedon_UtcDateAndTime: string;
	readonly mspp_name: string;
	readonly mspp_pagetemplateId: string;
	readonly mspp_rewriteurl: string;
	readonly mspp_type: string;
	readonly mspp_usewebsiteheaderandfooter: string;
	readonly mspp_websiteid: string;
	readonly mspp_webtemplateid: string;
	readonly statecode: string;
	readonly statuscode: string;
}

/**
 * mspp_pagetemplate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_pagetemplateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_pagetemplateFormattedValue;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Description */
	mspp_description: string | null;
	/** Table Name */
	mspp_entityname: string | null;
	/** Is Default */
	mspp_isdefault: boolean | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Unique identifier for entity instances */
	mspp_pagetemplateId: DevKit.Guid | null;
	/** Rewrite Url */
	mspp_rewriteurl: string | null;
	/** The type of the record. */
	mspp_type: number | null;
	/** Control whether this web template page template will be rendered using the website header and footer, or control rendering of all page content. */
	mspp_usewebsiteheaderandfooter: boolean | null;
	/** Unique identifier for Website associated with Page Template. */
	mspp_websiteid: DevKit.Guid | null;
	/** Unique identifier for Web Template associated with Page Template. */
	mspp_webtemplateid: DevKit.Guid | null;
	/** Status of the Page Template */
	statecode: number | null;
	/** Reason for the status of the Page Template */
	statuscode: number | null;
}

const mspp_pagetemplateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_description: { logicalName: 'mspp_description' },
	mspp_entityname: { logicalName: 'mspp_entityname' },
	mspp_isdefault: { logicalName: 'mspp_isdefault', type: 'Boolean' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_pagetemplateId: { logicalName: 'mspp_pagetemplateid' },
	mspp_rewriteurl: { logicalName: 'mspp_rewriteurl' },
	mspp_type: { logicalName: 'mspp_type', type: 'Integer' },
	mspp_usewebsiteheaderandfooter: { logicalName: 'mspp_usewebsiteheaderandfooter', type: 'Boolean' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	mspp_webtemplateid: { schemaName: 'mspp_webtemplateid', logicalName: '_mspp_webtemplateid_value', entityCollectionName: 'mspp_webtemplates', entityLogicalName: 'mspp_webtemplate' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_pagetemplate WebApi class for early-bound style coding
 * Usage: const mspp_pagetemplate = new mspp_pagetemplateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_pagetemplateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_pagetemplateApi>(entity, 'mspp_pagetemplate', 'mspp_pagetemplates', mspp_pagetemplateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_pagetemplateApi extends Imspp_pagetemplateApi { }
