/**
 * mspp_publishingstate.webapi.ts - mspp_publishingstate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_publishingstate
 * All fields return string representation of their values
 */
export interface Imspp_publishingstateFormattedValue {
	readonly mspp_createdby: string;
	readonly mspp_createdon_UtcDateAndTime: string;
	readonly mspp_displayorder: string;
	readonly mspp_isdefault: string;
	readonly mspp_isvisible: string;
	readonly mspp_modifiedby: string;
	readonly mspp_modifiedon_UtcDateAndTime: string;
	readonly mspp_name: string;
	readonly mspp_publishingstateId: string;
	readonly mspp_websiteid: string;
	readonly statecode: string;
	readonly statuscode: string;
}

/**
 * mspp_publishingstate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_publishingstateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_publishingstateFormattedValue;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Display Order */
	mspp_displayorder: number | null;
	/** Is Default */
	mspp_isdefault: boolean | null;
	/** Select whether the publishing state is visible. */
	mspp_isvisible: boolean | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Unique identifier for entity instances */
	mspp_publishingstateId: DevKit.Guid | null;
	/** Unique identifier for Website associated with Publishing State. */
	mspp_websiteid: DevKit.Guid | null;
	/** Status of the Publishing State */
	statecode: number | null;
	/** Reason for the status of the Publishing State */
	statuscode: number | null;
}

const mspp_publishingstateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_displayorder: { logicalName: 'mspp_displayorder', type: 'Integer' },
	mspp_isdefault: { logicalName: 'mspp_isdefault', type: 'Boolean' },
	mspp_isvisible: { logicalName: 'mspp_isvisible', type: 'Boolean' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_publishingstateId: { logicalName: 'mspp_publishingstateid' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_publishingstate WebApi class for early-bound style coding
 * Usage: const mspp_publishingstate = new mspp_publishingstateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_publishingstateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_publishingstateApi>(entity, 'mspp_publishingstate', 'mspp_publishingstates', mspp_publishingstateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_publishingstateApi extends Imspp_publishingstateApi { }
