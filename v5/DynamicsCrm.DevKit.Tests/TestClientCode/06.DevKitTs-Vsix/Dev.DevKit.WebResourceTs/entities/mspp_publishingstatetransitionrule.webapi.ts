/**
 * mspp_publishingstatetransitionrule.webapi.ts - mspp_publishingstatetransitionrule WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_publishingstatetransitionrule
 * All fields return string representation of their values
 */
export interface Imspp_publishingstatetransitionruleFormattedValue {
	readonly mspp_createdby: string;
	readonly mspp_createdon_UtcDateAndTime: string;
	readonly mspp_fromstate_publishingstateid: string;
	readonly mspp_modifiedby: string;
	readonly mspp_modifiedon_UtcDateAndTime: string;
	readonly mspp_name: string;
	readonly mspp_publishingstatetransitionruleId: string;
	readonly mspp_tostate_publishingstateid: string;
	readonly mspp_websiteid: string;
	readonly statecode: string;
	readonly statuscode: string;
}

/**
 * mspp_publishingstatetransitionrule WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_publishingstatetransitionruleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_publishingstatetransitionruleFormattedValue;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Unique identifier for Publishing State associated with Publishing State Transition Rule. */
	mspp_fromstate_publishingstateid: DevKit.Guid | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Unique identifier for entity instances */
	mspp_publishingstatetransitionruleId: DevKit.Guid | null;
	/** Unique identifier for Publishing State associated with Publishing State Transition Rule. */
	mspp_tostate_publishingstateid: DevKit.Guid | null;
	/** Unique identifier for Website associated with Publishing State Transition Rule. */
	mspp_websiteid: DevKit.Guid | null;
	/** Status of the Publishing State Transition Rule */
	statecode: number | null;
	/** Reason for the status of the Publishing State Transition Rule */
	statuscode: number | null;
}

const mspp_publishingstatetransitionruleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_fromstate_publishingstateid: { schemaName: 'mspp_fromstate_publishingstateid', logicalName: '_mspp_fromstate_publishingstateid_value', entityCollectionName: 'mspp_publishingstates', entityLogicalName: 'mspp_publishingstate' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_publishingstatetransitionruleId: { logicalName: 'mspp_publishingstatetransitionruleid' },
	mspp_tostate_publishingstateid: { schemaName: 'mspp_tostate_publishingstateid', logicalName: '_mspp_tostate_publishingstateid_value', entityCollectionName: 'mspp_publishingstates', entityLogicalName: 'mspp_publishingstate' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_publishingstatetransitionrule WebApi class for early-bound style coding
 * Usage: const mspp_publishingstatetransitionrule = new mspp_publishingstatetransitionruleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_publishingstatetransitionruleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_publishingstatetransitionruleApi>(entity, 'mspp_publishingstatetransitionrule', 'mspp_publishingstatetransitionrules', mspp_publishingstatetransitionruleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_publishingstatetransitionruleApi extends Imspp_publishingstatetransitionruleApi { }
