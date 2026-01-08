/**
 * msdyn_slakpi.webapi.ts - msdyn_slakpi WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_slakpi
 * All fields return string representation of their values
 */
export interface Imsdyn_slakpiFormattedValue {
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msdyn_AdvancedPauseConfiguration: string;
	readonly msdyn_ApplicableFromDisplayName: string;
	readonly msdyn_ApplicableFromField: string;
	readonly msdyn_Description: string;
	readonly msdyn_EntityDisplayName: string;
	readonly msdyn_EntityName: string;
	readonly msdyn_KPIField: string;
	readonly msdyn_name: string;
	readonly msdyn_PauseConfigurationXml: string;
	readonly msdyn_slakpiId: string;
	readonly msdyn_WorkflowInfo: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly SolutionId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SupportingSolutionId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_slakpi WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_slakpiApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_slakpiFormattedValue;
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
	/** Override entity pause configurations? */
	msdyn_AdvancedPauseConfiguration: boolean | null;
	/** Applicable From */
	msdyn_ApplicableFromDisplayName: string | null;
	/** Applicable From */
	msdyn_ApplicableFromField: string | null;
	/** Description */
	msdyn_Description: string | null;
	/** Entity */
	msdyn_EntityDisplayName: string | null;
	/** Entity */
	msdyn_EntityName: string | null;
	/** KPI Field */
	msdyn_KPIField: string | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** PauseConfigurationXml */
	msdyn_PauseConfigurationXml: string | null;
	/** Unique identifier for entity instances */
	msdyn_slakpiId: DevKit.Guid | null;
	/** WorkFlow Info */
	msdyn_WorkflowInfo: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the SLAKPI */
	statecode: number | null;
	/** Reason for the status of the SLAKPI */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_slakpiFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AdvancedPauseConfiguration: { logicalName: 'msdyn_advancedpauseconfiguration', type: 'Boolean' },
	msdyn_ApplicableFromDisplayName: { logicalName: 'msdyn_applicablefromdisplayname' },
	msdyn_ApplicableFromField: { logicalName: 'msdyn_applicablefromfield' },
	msdyn_Description: { logicalName: 'msdyn_description' },
	msdyn_EntityDisplayName: { logicalName: 'msdyn_entitydisplayname' },
	msdyn_EntityName: { logicalName: 'msdyn_entityname' },
	msdyn_KPIField: { logicalName: 'msdyn_kpifield' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_PauseConfigurationXml: { logicalName: 'msdyn_pauseconfigurationxml' },
	msdyn_slakpiId: { logicalName: 'msdyn_slakpiid' },
	msdyn_WorkflowInfo: { logicalName: 'msdyn_workflowinfo' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_slakpi WebApi class for early-bound style coding
 * Usage: const msdyn_slakpi = new msdyn_slakpiApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_slakpiApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_slakpiApi>(entity, 'msdyn_slakpi', 'msdyn_slakpis', msdyn_slakpiFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_slakpiApi extends Imsdyn_slakpiApi { }
