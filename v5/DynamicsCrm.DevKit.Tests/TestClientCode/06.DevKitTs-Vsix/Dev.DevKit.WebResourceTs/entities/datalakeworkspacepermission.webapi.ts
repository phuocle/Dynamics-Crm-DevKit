/**
 * datalakeworkspacepermission.webapi.ts - datalakeworkspacepermission WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * datalakeworkspacepermission WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IdatalakeworkspacepermissionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IdatalakeworkspacepermissionApi, 'FormattedValue'>]: string };
	/** Additional application id that needs access to the workspace. */
	appid: DevKit.Guid | null;
	/** Indicates whether application id has execute access to the workspace. */
	canexecute: boolean | null;
	/** Indicates whether the application id has read access to the workspace. */
	canread: boolean | null;
	/** Indicates whether application id has write access to the workspace. */
	canwrite: boolean | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique Name for the entity. */
	datalakeworkspacepermission_UniqueName: string | null;
	/** Unique identifier for entity instances */
	datalakeworkspacepermissionId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Data Lake Workspace Permission */
	readonly statecode: number | null;
	/** Reason for the status of the Data Lake Workspace Permission */
	readonly statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** AAD tenant id where the application id is registered. */
	tenantid: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
	/** Application Id that is white listed in AAD tenant id to access the Graph API. */
	whitelistedappid: DevKit.Guid | null;
	/** Unique identifier of the workspace for which this permission is applicable. */
	workspaceid: DevKit.Guid | null;
}

const datalakeworkspacepermissionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	appid: { logicalName: 'appid' },
	canexecute: { logicalName: 'canexecute', type: 'Boolean' },
	canread: { logicalName: 'canread', type: 'Boolean' },
	canwrite: { logicalName: 'canwrite', type: 'Boolean' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	datalakeworkspacepermission_UniqueName: { logicalName: 'datalakeworkspacepermission_uniquename' },
	datalakeworkspacepermissionId: { logicalName: 'datalakeworkspacepermissionid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	statuscode: { logicalName: 'statuscode', readOnly: true, type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	tenantid: { logicalName: 'tenantid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	whitelistedappid: { logicalName: 'whitelistedappid' },
	workspaceid: { schemaName: 'workspaceid', logicalName: '_workspaceid_value', entityCollectionName: 'datalakeworkspaces', entityLogicalName: 'datalakeworkspace' },
};

/**
 * datalakeworkspacepermission WebApi class for early-bound style coding
 * Usage: const datalakeworkspacepermission = new datalakeworkspacepermissionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class datalakeworkspacepermissionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IdatalakeworkspacepermissionApi>(entity, 'datalakeworkspacepermission', 'datalakeworkspacepermissions', datalakeworkspacepermissionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface datalakeworkspacepermissionApi extends IdatalakeworkspacepermissionApi { }
