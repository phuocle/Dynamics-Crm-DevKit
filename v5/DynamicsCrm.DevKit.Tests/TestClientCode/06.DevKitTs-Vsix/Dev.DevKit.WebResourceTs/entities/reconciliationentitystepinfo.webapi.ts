/**
 * reconciliationentitystepinfo.webapi.ts - reconciliationentitystepinfo WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for reconciliationentitystepinfo
 * All fields return string representation of their values
 */
export interface IreconciliationentitystepinfoFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly EntityLogicalName: string;
	readonly FileName: string;
	readonly FormattedCriteria: string;
	readonly HasMoreRecords: string;
	readonly ImportSequenceNumber: string;
	readonly InputCriteria: string;
	readonly Message: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly PagingCookie: string;
	readonly ReconciliationEntityInfoId: string;
	readonly reconciliationentitystepinfoId: string;
	readonly ReconciliationInfoId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * reconciliationentitystepinfo WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IreconciliationentitystepinfoApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IreconciliationentitystepinfoFormattedValue;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Table name */
	EntityLogicalName: string | null;
	/** FileName for reconciliation. */
	FileName: string | null;
	/** FormattedCriteria for running reconciliation. */
	FormattedCriteria: string | null;
	/** Are records pending. */
	HasMoreRecords: boolean | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** InputCriteria for running reconciliation. */
	InputCriteria: string | null;
	/** Message during reconciliation. */
	Message: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** PagingCookie for running reconciliation. */
	PagingCookie: string | null;
	/** Id of the reconciliation operation. */
	ReconciliationEntityInfoId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	reconciliationentitystepinfoId: DevKit.Guid | null;
	/** Id of the reconciliation operation. */
	ReconciliationInfoId: DevKit.Guid | null;
	/** Status of the ReconciliationEntityStepInfo */
	statecode: number | null;
	/** Reason for the status of the ReconciliationEntityStepInfo */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const reconciliationentitystepinfoFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EntityLogicalName: { logicalName: 'entitylogicalname' },
	FileName: { logicalName: 'filename' },
	FormattedCriteria: { logicalName: 'formattedcriteria' },
	HasMoreRecords: { logicalName: 'hasmorerecords', type: 'Boolean' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	InputCriteria: { logicalName: 'inputcriteria' },
	Message: { logicalName: 'message' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PagingCookie: { logicalName: 'pagingcookie' },
	ReconciliationEntityInfoId: { logicalName: 'reconciliationentityinfoid' },
	reconciliationentitystepinfoId: { logicalName: 'reconciliationentitystepinfoid' },
	ReconciliationInfoId: { logicalName: 'reconciliationinfoid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * reconciliationentitystepinfo WebApi class for early-bound style coding
 * Usage: const reconciliationentitystepinfo = new reconciliationentitystepinfoApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class reconciliationentitystepinfoApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IreconciliationentitystepinfoApi>(entity, 'reconciliationentitystepinfo', 'reconciliationentitystepinfos', reconciliationentitystepinfoFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface reconciliationentitystepinfoApi extends IreconciliationentitystepinfoApi { }
