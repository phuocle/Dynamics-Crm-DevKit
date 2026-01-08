/**
 * mspp_websiteaccess.webapi.ts - mspp_websiteaccess WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_websiteaccess
 * All fields return string representation of their values
 */
export interface Imspp_websiteaccessFormattedValue {
	readonly mspp_createdby: string;
	readonly mspp_createdon_UtcDateAndTime: string;
	readonly mspp_managecontentsnippets: string;
	readonly mspp_managesitemarkers: string;
	readonly mspp_manageweblinksets: string;
	readonly mspp_modifiedby: string;
	readonly mspp_modifiedon_UtcDateAndTime: string;
	readonly mspp_name: string;
	readonly mspp_previewunpublishedentities: string;
	readonly mspp_websiteaccessId: string;
	readonly mspp_websiteid: string;
	readonly statecode: string;
	readonly statuscode: string;
}

/**
 * mspp_websiteaccess WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_websiteaccessApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_websiteaccessFormattedValue;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Manage Content Snippets */
	mspp_managecontentsnippets: boolean | null;
	/** Manage Site Markers */
	mspp_managesitemarkers: boolean | null;
	/** Manage Web Link Sets */
	mspp_manageweblinksets: boolean | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Preview Unpublished Entities */
	mspp_previewunpublishedentities: boolean | null;
	/** Unique identifier for entity instances */
	mspp_websiteaccessId: DevKit.Guid | null;
	/** Unique identifier for Website associated with Website Access. */
	mspp_websiteid: DevKit.Guid | null;
	/** Status of the Website Access */
	statecode: number | null;
	/** Reason for the status of the Website Access */
	statuscode: number | null;
}

const mspp_websiteaccessFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_managecontentsnippets: { logicalName: 'mspp_managecontentsnippets', type: 'Boolean' },
	mspp_managesitemarkers: { logicalName: 'mspp_managesitemarkers', type: 'Boolean' },
	mspp_manageweblinksets: { logicalName: 'mspp_manageweblinksets', type: 'Boolean' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_previewunpublishedentities: { logicalName: 'mspp_previewunpublishedentities', type: 'Boolean' },
	mspp_websiteaccessId: { logicalName: 'mspp_websiteaccessid' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_websiteaccess WebApi class for early-bound style coding
 * Usage: const mspp_websiteaccess = new mspp_websiteaccessApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_websiteaccessApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_websiteaccessApi>(entity, 'mspp_websiteaccess', 'mspp_websiteaccesses', mspp_websiteaccessFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_websiteaccessApi extends Imspp_websiteaccessApi { }
