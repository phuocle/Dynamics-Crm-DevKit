/**
 * datalakeworkspace.webapi.ts - datalakeworkspace WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for datalakeworkspace
 * All fields return string representation of their values
 */
export interface IdatalakeworkspaceFormattedValue {
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly containerendpoint: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly datalakeworkspace_UniqueName: string;
	readonly datalakeworkspaceId: string;
	readonly ImportSequenceNumber: string;
	readonly iscustomercapacity: string;
	readonly IsCustomizable: string;
	readonly isdeepcopyenabled: string;
	readonly IsManaged: string;
	readonly isprivate: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly owningappid: string;
	readonly path: string;
	readonly SolutionId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SupportingSolutionId: string;
	readonly tenantid: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
	readonly whitelistedappid: string;
}

/**
 * datalakeworkspace WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IdatalakeworkspaceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IdatalakeworkspaceFormattedValue;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Azure Data Lake container endpoint for this workspace. */
	readonly containerendpoint: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique Name for the entity. */
	datalakeworkspace_UniqueName: string | null;
	/** Unique identifier for entity instances */
	datalakeworkspaceId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Indicates if workspace data storage uses customer capacity. */
	iscustomercapacity: boolean | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates if deep copy is enabled for workspace. */
	isdeepcopyenabled: boolean | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Indicates if workspace data and metadata are visible to all applications, or only visible to the workspace owner and applications with explicit permissions to the workspace. */
	isprivate: boolean | null;
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
	/** The app id which owns this workspace. The owning app id has full control i.e. read, write and execute permissions on the ADLS folder. */
	owningappid: DevKit.Guid | null;
	/** Workspace path in the Azure Data Lake container. */
	readonly path: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Data Lake Workspace */
	readonly statecode: number | null;
	/** Reason for the status of the Data Lake Workspace */
	readonly statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** AAD tenant id where the owning application id is registered. */
	tenantid: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
	/** Application Id that is white listed in AAD Tenant ID to access the Graph API. */
	whitelistedappid: DevKit.Guid | null;
}

const datalakeworkspaceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	containerendpoint: { logicalName: 'containerendpoint', readOnly: true },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	datalakeworkspace_UniqueName: { logicalName: 'datalakeworkspace_uniquename' },
	datalakeworkspaceId: { logicalName: 'datalakeworkspaceid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	iscustomercapacity: { logicalName: 'iscustomercapacity', type: 'Boolean' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	isdeepcopyenabled: { logicalName: 'isdeepcopyenabled', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	isprivate: { logicalName: 'isprivate', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	owningappid: { logicalName: 'owningappid' },
	path: { logicalName: 'path', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	statuscode: { logicalName: 'statuscode', readOnly: true, type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	tenantid: { logicalName: 'tenantid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	whitelistedappid: { logicalName: 'whitelistedappid' },
};

/**
 * datalakeworkspace WebApi class for early-bound style coding
 * Usage: const datalakeworkspace = new datalakeworkspaceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class datalakeworkspaceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IdatalakeworkspaceApi>(entity, 'datalakeworkspace', 'datalakeworkspaces', datalakeworkspaceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface datalakeworkspaceApi extends IdatalakeworkspaceApi { }
