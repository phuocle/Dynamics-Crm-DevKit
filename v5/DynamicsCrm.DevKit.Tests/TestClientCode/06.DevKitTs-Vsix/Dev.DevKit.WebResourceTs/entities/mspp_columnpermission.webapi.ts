/**
 * mspp_columnpermission.webapi.ts - mspp_columnpermission WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * mspp_columnpermission WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_columnpermissionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imspp_columnpermissionApi, 'FormattedValue'>]: string };
	/** The name of the custom entity. */
	mspp_columnname: string | null;
	/** Unique identifier for entity instances */
	mspp_columnpermissionId: DevKit.Guid | null;
	/** Column Permission Profile */
	mspp_columnpermissionprofileid: DevKit.Guid | null;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** Permissions */
	mspp_permissions: Array<number> | null;
	/** Status of the Column Permission */
	statecode: number | null;
	/** Reason for the status of the Column Permission */
	statuscode: number | null;
}

const mspp_columnpermissionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_columnname: { logicalName: 'mspp_columnname' },
	mspp_columnpermissionId: { logicalName: 'mspp_columnpermissionid' },
	mspp_columnpermissionprofileid: { schemaName: 'mspp_columnpermissionprofileid', logicalName: '_mspp_columnpermissionprofileid_value', entityCollectionName: 'mspp_columnpermissionprofiles', entityLogicalName: 'mspp_columnpermissionprofile' },
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_permissions: { logicalName: 'mspp_permissions', type: 'MultiOptionSet' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_columnpermission WebApi class for early-bound style coding
 * Usage: const mspp_columnpermission = new mspp_columnpermissionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_columnpermissionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_columnpermissionApi>(entity, 'mspp_columnpermission', 'mspp_columnpermissions', mspp_columnpermissionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_columnpermissionApi extends Imspp_columnpermissionApi { }
