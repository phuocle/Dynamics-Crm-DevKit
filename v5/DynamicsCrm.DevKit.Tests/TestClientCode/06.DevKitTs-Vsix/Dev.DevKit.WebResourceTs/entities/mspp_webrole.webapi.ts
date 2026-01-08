/**
 * mspp_webrole.webapi.ts - mspp_webrole WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_webrole
 * All fields return string representation of their values
 */
export interface Imspp_webroleFormattedValue {
	readonly mspp_anonymoususersrole: string;
	readonly mspp_authenticatedusersrole: string;
	readonly mspp_createdby: string;
	readonly mspp_createdon_UtcDateAndTime: string;
	readonly mspp_description: string;
	readonly mspp_key: string;
	readonly mspp_modifiedby: string;
	readonly mspp_modifiedon_UtcDateAndTime: string;
	readonly mspp_name: string;
	readonly mspp_webroleId: string;
	readonly mspp_websiteid: string;
	readonly statecode: string;
	readonly statuscode: string;
}

/**
 * mspp_webrole WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_webroleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_webroleFormattedValue;
	/** Anonymous Users Role */
	mspp_anonymoususersrole: boolean | null;
	/** Authenticated Users Role */
	mspp_authenticatedusersrole: boolean | null;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Description */
	mspp_description: string | null;
	/** An alternate key that is not intended to be localized to allow retrieval of a specific Web Role in workflows or code. */
	mspp_key: string | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Unique identifier for entity instances */
	mspp_webroleId: DevKit.Guid | null;
	/** Unique identifier for Website associated with Web Role. */
	mspp_websiteid: DevKit.Guid | null;
	/** Status of the Web Role */
	statecode: number | null;
	/** Reason for the status of the Web Role */
	statuscode: number | null;
}

const mspp_webroleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_anonymoususersrole: { logicalName: 'mspp_anonymoususersrole', type: 'Boolean' },
	mspp_authenticatedusersrole: { logicalName: 'mspp_authenticatedusersrole', type: 'Boolean' },
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_description: { logicalName: 'mspp_description' },
	mspp_key: { logicalName: 'mspp_key' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_webroleId: { logicalName: 'mspp_webroleid' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_webrole WebApi class for early-bound style coding
 * Usage: const mspp_webrole = new mspp_webroleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_webroleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_webroleApi>(entity, 'mspp_webrole', 'mspp_webroles', mspp_webroleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_webroleApi extends Imspp_webroleApi { }
