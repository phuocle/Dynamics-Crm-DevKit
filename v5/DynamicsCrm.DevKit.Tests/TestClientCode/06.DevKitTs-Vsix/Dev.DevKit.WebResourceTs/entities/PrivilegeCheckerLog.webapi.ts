/**
 * PrivilegeCheckerLog.webapi.ts - PrivilegeCheckerLog WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for PrivilegeCheckerLog
 * All fields return string representation of their values
 */
export interface IPrivilegeCheckerLogFormattedValue {
	readonly CheckedPrivilege: string;
	readonly CheckedUser: string;
	readonly CheckType: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImpersonatingUser: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly PrivilegeCheckerLogId: string;
	readonly PrivilegeCheckerRunId: string;
	readonly PrivilegeDepth: string;
	readonly Request: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SupportingCaller: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * PrivilegeCheckerLog WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPrivilegeCheckerLogApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IPrivilegeCheckerLogFormattedValue;
	/** The checked privilege. */
	readonly CheckedPrivilege: DevKit.Guid | null;
	/** The user whose privilege was checked. */
	readonly CheckedUser: DevKit.Guid | null;
	/** The type of authorization check that was done. */
	readonly CheckType: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** If this was an impersonation, this will give who was impersonating -- in this case, their privilege was also checked. */
	readonly ImpersonatingUser: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	readonly ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the log. */
	readonly Name: string | null;
	/** Date and time that the record was migrated. */
	readonly OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	readonly OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	readonly PrivilegeCheckerLogId: DevKit.Guid | null;
	/** Privilege Checker Run for this log */
	PrivilegeCheckerRunId: DevKit.Guid | null;
	/** Depth that was checked for the privilege. */
	readonly PrivilegeDepth: number | null;
	/** A brief description of the web request. */
	readonly Request: string | null;
	/** Status of the Privilege checker log */
	readonly statecode: number | null;
	/** Reason for the status of the Privilege checker log */
	readonly statuscode: number | null;
	/** If this was a flow execution, this will give who was the owner of the flow -- in this case, their privilege was also checked. */
	readonly SupportingCaller: DevKit.Guid | null;
	/** For internal use only. */
	readonly TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	readonly UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const PrivilegeCheckerLogFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CheckedPrivilege: { schemaName: 'CheckedPrivilege', logicalName: '_checkedprivilege_value', readOnly: true, entityCollectionName: 'privileges', entityLogicalName: 'privilege' },
	CheckedUser: { schemaName: 'CheckedUser', logicalName: '_checkeduser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CheckType: { logicalName: 'checktype', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImpersonatingUser: { schemaName: 'ImpersonatingUser', logicalName: '_impersonatinguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', readOnly: true, type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name', readOnly: true },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	PrivilegeCheckerLogId: { logicalName: 'privilegecheckerlogid', readOnly: true },
	PrivilegeCheckerRunId: { schemaName: 'PrivilegeCheckerRunId', logicalName: '_privilegecheckerrunid_value', entityCollectionName: 'privilegecheckerruns', entityLogicalName: 'privilegecheckerrun' },
	PrivilegeDepth: { logicalName: 'privilegedepth', readOnly: true, type: 'Integer' },
	Request: { logicalName: 'request', readOnly: true },
	statecode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	statuscode: { logicalName: 'statuscode', readOnly: true, type: 'Integer' },
	SupportingCaller: { schemaName: 'SupportingCaller', logicalName: '_supportingcaller_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', readOnly: true, type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', readOnly: true, type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * PrivilegeCheckerLog WebApi class for early-bound style coding
 * Usage: const privilegeCheckerLog = new PrivilegeCheckerLogApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PrivilegeCheckerLogApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPrivilegeCheckerLogApi>(entity, 'privilegecheckerlog', 'privilegecheckerlogs', PrivilegeCheckerLogFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PrivilegeCheckerLogApi extends IPrivilegeCheckerLogApi { }
