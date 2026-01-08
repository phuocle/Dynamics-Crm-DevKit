/**
 * mspp_columnpermissionprofile.webapi.ts - mspp_columnpermissionprofile WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_columnpermissionprofile
 * All fields return string representation of their values
 */
export interface Imspp_columnpermissionprofileFormattedValue {
	readonly mspp_allcolumnpermissions: string;
	readonly mspp_columnpermissionprofileId: string;
	readonly mspp_createdby: string;
	readonly mspp_createdon_UtcDateAndTime: string;
	readonly mspp_modifiedby: string;
	readonly mspp_modifiedon_UtcDateAndTime: string;
	readonly mspp_profilename: string;
	readonly mspp_tablename: string;
	readonly mspp_websiteid: string;
	readonly statecode: string;
	readonly statuscode: string;
}

/**
 * mspp_columnpermissionprofile WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_columnpermissionprofileApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_columnpermissionprofileFormattedValue;
	/** All Column Permissions */
	mspp_allcolumnpermissions: Array<number> | null;
	/** Unique identifier for entity instances */
	mspp_columnpermissionprofileId: DevKit.Guid | null;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** Profile Name */
	mspp_profilename: string | null;
	/** Table Name */
	mspp_tablename: string | null;
	/** Website */
	mspp_websiteid: DevKit.Guid | null;
	/** Status of the Column Permission Profile */
	statecode: number | null;
	/** Reason for the status of the Column Permission Profile */
	statuscode: number | null;
}

const mspp_columnpermissionprofileFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_allcolumnpermissions: { logicalName: 'mspp_allcolumnpermissions', type: 'MultiOptionSet' },
	mspp_columnpermissionprofileId: { logicalName: 'mspp_columnpermissionprofileid' },
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_profilename: { logicalName: 'mspp_profilename' },
	mspp_tablename: { logicalName: 'mspp_tablename' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_columnpermissionprofile WebApi class for early-bound style coding
 * Usage: const mspp_columnpermissionprofile = new mspp_columnpermissionprofileApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_columnpermissionprofileApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_columnpermissionprofileApi>(entity, 'mspp_columnpermissionprofile', 'mspp_columnpermissionprofiles', mspp_columnpermissionprofileFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_columnpermissionprofileApi extends Imspp_columnpermissionprofileApi { }
