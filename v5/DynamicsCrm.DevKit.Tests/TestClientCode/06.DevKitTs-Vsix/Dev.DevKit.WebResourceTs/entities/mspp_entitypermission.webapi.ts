/**
 * mspp_entitypermission.webapi.ts - mspp_entitypermission WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_entitypermission
 * All fields return string representation of their values
 */
export interface Imspp_entitypermissionFormattedValue {
	readonly mspp_accountrelationship: string;
	readonly mspp_append: string;
	readonly mspp_appendto: string;
	readonly mspp_contactrelationship: string;
	readonly mspp_create: string;
	readonly mspp_createdby: string;
	readonly mspp_createdon_UtcDateAndTime: string;
	readonly mspp_delete: string;
	readonly mspp_entitylogicalname: string;
	readonly mspp_entityname: string;
	readonly mspp_entitypermissionId: string;
	readonly mspp_modifiedby: string;
	readonly mspp_modifiedon_UtcDateAndTime: string;
	readonly mspp_parententitypermission: string;
	readonly mspp_parentrelationship: string;
	readonly mspp_read: string;
	readonly mspp_scope: string;
	readonly mspp_websiteid: string;
	readonly mspp_write: string;
	readonly statecode: string;
	readonly statuscode: string;
}

/**
 * mspp_entitypermission WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_entitypermissionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_entitypermissionFormattedValue;
	/** Account Relationship */
	mspp_accountrelationship: string | null;
	/** Controls whether the user can attach another record to the specified record. The Append and Append To permissions work in combination. */
	mspp_append: boolean | null;
	/** Controls whether the user can append the specified record to another record. The Append and Append To permissions work in combination. */
	mspp_appendto: boolean | null;
	/** Contact Relationship */
	mspp_contactrelationship: string | null;
	/** The Create privilege controls whether you can create a record. */
	mspp_create: boolean | null;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Controls whether the user can delete a record. */
	mspp_delete: boolean | null;
	/** Table Name */
	mspp_entitylogicalname: string | null;
	/** The name of the custom entity. */
	mspp_entityname: string | null;
	/** Unique identifier for entity instances */
	mspp_entitypermissionId: DevKit.Guid | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** Parent Table Permission */
	mspp_parententitypermission: DevKit.Guid | null;
	/** Parent Relationship */
	mspp_parentrelationship: string | null;
	/** Controls whether the user can read a record. */
	mspp_read: boolean | null;
	/** Access Type */
	mspp_scope: number | null;
	/** Unique identifier for Website associated with Entity Permission */
	mspp_websiteid: DevKit.Guid | null;
	/** Controls whether the user can update a record. */
	mspp_write: boolean | null;
	/** Status of the Table Permission */
	statecode: number | null;
	/** Reason for the status of the Table Permission */
	statuscode: number | null;
}

const mspp_entitypermissionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_accountrelationship: { logicalName: 'mspp_accountrelationship' },
	mspp_append: { logicalName: 'mspp_append', type: 'Boolean' },
	mspp_appendto: { logicalName: 'mspp_appendto', type: 'Boolean' },
	mspp_contactrelationship: { logicalName: 'mspp_contactrelationship' },
	mspp_create: { logicalName: 'mspp_create', type: 'Boolean' },
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_delete: { logicalName: 'mspp_delete', type: 'Boolean' },
	mspp_entitylogicalname: { logicalName: 'mspp_entitylogicalname' },
	mspp_entityname: { logicalName: 'mspp_entityname' },
	mspp_entitypermissionId: { logicalName: 'mspp_entitypermissionid' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_parententitypermission: { schemaName: 'mspp_parententitypermission', logicalName: '_mspp_parententitypermission_value', entityCollectionName: 'mspp_entitypermissions', entityLogicalName: 'mspp_entitypermission' },
	mspp_parentrelationship: { logicalName: 'mspp_parentrelationship' },
	mspp_read: { logicalName: 'mspp_read', type: 'Boolean' },
	mspp_scope: { logicalName: 'mspp_scope', type: 'Integer' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	mspp_write: { logicalName: 'mspp_write', type: 'Boolean' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_entitypermission WebApi class for early-bound style coding
 * Usage: const mspp_entitypermission = new mspp_entitypermissionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_entitypermissionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_entitypermissionApi>(entity, 'mspp_entitypermission', 'mspp_entitypermissions', mspp_entitypermissionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_entitypermissionApi extends Imspp_entitypermissionApi { }
