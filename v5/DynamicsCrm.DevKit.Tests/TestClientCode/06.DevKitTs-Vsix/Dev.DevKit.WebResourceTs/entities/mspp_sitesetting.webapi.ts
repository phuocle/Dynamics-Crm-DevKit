/**
 * mspp_sitesetting.webapi.ts - mspp_sitesetting WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_sitesetting
 * All fields return string representation of their values
 */
export interface Imspp_sitesettingFormattedValue {
	readonly mspp_createdby: string;
	readonly mspp_createdon_UtcDateAndTime: string;
	readonly mspp_description: string;
	readonly mspp_environmentvariable: string;
	readonly mspp_envvar_schema: string;
	readonly mspp_modifiedby: string;
	readonly mspp_modifiedon_UtcDateAndTime: string;
	readonly mspp_name: string;
	readonly mspp_sitesettingId: string;
	readonly mspp_source: string;
	readonly mspp_value: string;
	readonly mspp_websiteid: string;
	readonly statecode: string;
	readonly statuscode: string;
}

/**
 * mspp_sitesetting WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_sitesettingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_sitesettingFormattedValue;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Description */
	mspp_description: string | null;
	/** Environment Variable */
	mspp_environmentvariable: DevKit.Guid | null;
	/** Environment Variable Schema Name */
	mspp_envvar_schema: string | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Unique identifier for entity instances */
	mspp_sitesettingId: DevKit.Guid | null;
	/** Source from value is taken */
	mspp_source: number | null;
	/** Value */
	mspp_value: string | null;
	/** Unique identifier for Website associated with Site Setting. */
	mspp_websiteid: DevKit.Guid | null;
	/** Status of the Site Setting */
	statecode: number | null;
	/** Reason for the status of the Site Setting */
	statuscode: number | null;
}

const mspp_sitesettingFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_description: { logicalName: 'mspp_description' },
	mspp_environmentvariable: { schemaName: 'mspp_environmentvariable', logicalName: '_mspp_environmentvariable_value', entityCollectionName: 'environmentvariabledefinitions', entityLogicalName: 'environmentvariabledefinition' },
	mspp_envvar_schema: { logicalName: 'mspp_envvar_schema' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_sitesettingId: { logicalName: 'mspp_sitesettingid' },
	mspp_source: { logicalName: 'mspp_source', type: 'Integer' },
	mspp_value: { logicalName: 'mspp_value' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_sitesetting WebApi class for early-bound style coding
 * Usage: const mspp_sitesetting = new mspp_sitesettingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_sitesettingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_sitesettingApi>(entity, 'mspp_sitesetting', 'mspp_sitesettings', mspp_sitesettingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_sitesettingApi extends Imspp_sitesettingApi { }
