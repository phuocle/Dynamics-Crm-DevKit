/**
 * mspp_website.webapi.ts - mspp_website WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_website
 * All fields return string representation of their values
 */
export interface Imspp_websiteFormattedValue {
	readonly mspp_createdby: string;
	readonly mspp_createdon_UtcDateAndTime: string;
	readonly mspp_defaultlanguage: string;
	readonly mspp_footerwebtemplateid: string;
	readonly mspp_headerwebtemplateid: string;
	readonly mspp_modifiedby: string;
	readonly mspp_modifiedon_UtcDateAndTime: string;
	readonly mspp_name: string;
	readonly mspp_parentwebsiteid: string;
	readonly mspp_partialurl: string;
	readonly mspp_primarydomainname: string;
	readonly mspp_website_language: string;
	readonly mspp_website_version: string;
	readonly mspp_websiteId: string;
	readonly statecode: string;
	readonly statuscode: string;
}

/**
 * mspp_website WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_websiteApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_websiteFormattedValue;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Lookup to Website Language - the current default language of the website */
	mspp_defaultlanguage: DevKit.Guid | null;
	/** Web Template to use as Website footer content. */
	mspp_footerwebtemplateid: DevKit.Guid | null;
	/** Web Template to use as Website header content. */
	mspp_headerwebtemplateid: DevKit.Guid | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Unique identifier for Website associated with Website. */
	mspp_parentwebsiteid: DevKit.Guid | null;
	/** Partial URL */
	mspp_partialurl: string | null;
	/** Tracks the primary domain name of the Portal */
	mspp_primarydomainname: string | null;
	/** Language */
	mspp_website_language: number | null;
	/** Version of the website record */
	mspp_website_version: string | null;
	/** Unique identifier for entity instances */
	mspp_websiteId: DevKit.Guid | null;
	/** Status of the Website */
	statecode: number | null;
	/** Reason for the status of the Website */
	statuscode: number | null;
}

const mspp_websiteFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_defaultlanguage: { schemaName: 'mspp_defaultlanguage', logicalName: '_mspp_defaultlanguage_value', entityCollectionName: 'mspp_websitelanguages', entityLogicalName: 'mspp_websitelanguage' },
	mspp_footerwebtemplateid: { schemaName: 'mspp_footerwebtemplateid', logicalName: '_mspp_footerwebtemplateid_value', entityCollectionName: 'mspp_webtemplates', entityLogicalName: 'mspp_webtemplate' },
	mspp_headerwebtemplateid: { schemaName: 'mspp_headerwebtemplateid', logicalName: '_mspp_headerwebtemplateid_value', entityCollectionName: 'mspp_webtemplates', entityLogicalName: 'mspp_webtemplate' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_parentwebsiteid: { schemaName: 'mspp_parentwebsiteid', logicalName: '_mspp_parentwebsiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	mspp_partialurl: { logicalName: 'mspp_partialurl' },
	mspp_primarydomainname: { logicalName: 'mspp_primarydomainname' },
	mspp_website_language: { logicalName: 'mspp_website_language', type: 'Integer' },
	mspp_website_version: { logicalName: 'mspp_website_version' },
	mspp_websiteId: { logicalName: 'mspp_websiteid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_website WebApi class for early-bound style coding
 * Usage: const mspp_website = new mspp_websiteApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_websiteApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_websiteApi>(entity, 'mspp_website', 'mspp_websites', mspp_websiteFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_websiteApi extends Imspp_websiteApi { }
