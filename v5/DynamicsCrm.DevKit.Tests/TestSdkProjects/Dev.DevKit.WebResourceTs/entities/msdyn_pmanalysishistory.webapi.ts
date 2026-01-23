/**
 * msdyn_pmanalysishistory.webapi.ts - msdyn_pmanalysishistory WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_pmanalysishistory WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_pmanalysishistoryApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_pmanalysishistoryApi, 'FormattedValue'>]: string };
	/** Actionable insights gerenation state management for completed analysis. */
	ActionableInsightsGenerationStatus: string | null;
	/** Date and time that the actionable insight last published on(to ensure to pick the last published one). */
	ActionableInsightsLastPublishedOn_UtcDateOnly: Date | null;
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
	/** Analysis Result */
	msdyn_analysisresult: number | null;
	/** Analysis Type */
	msdyn_analysistype: number | null;
	/** Iteration identifier of analysis. */
	msdyn_iterationid: string | null;
	/** Last Errors */
	msdyn_lasterrors: string | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** Parent Task */
	msdyn_parenttask: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	msdyn_pmanalysishistoryId: DevKit.Guid | null;
	/** Start Time */
	msdyn_starttime_TimezoneDateOnly: Date | null;
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
	/** Status of the PM Analysis History */
	statecode: number | null;
	/** Reason for the status of the PM Analysis History */
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

const msdyn_pmanalysishistoryFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActionableInsightsGenerationStatus: { logicalName: 'actionableinsightsgenerationstatus' },
	ActionableInsightsLastPublishedOn_UtcDateOnly: { logicalName: 'actionableinsightslastpublishedon', type: 'DateTime' },
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
	msdyn_analysisresult: { logicalName: 'msdyn_analysisresult', type: 'Integer' },
	msdyn_analysistype: { logicalName: 'msdyn_analysistype', type: 'Integer' },
	msdyn_iterationid: { logicalName: 'msdyn_iterationid' },
	msdyn_lasterrors: { logicalName: 'msdyn_lasterrors' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_parenttask: { schemaName: 'msdyn_parenttask', logicalName: '_msdyn_parenttask_value', entityCollectionName: 'msdyn_pminferredtasks', entityLogicalName: 'msdyn_pminferredtask' },
	msdyn_pmanalysishistoryId: { logicalName: 'msdyn_pmanalysishistoryid' },
	msdyn_starttime_TimezoneDateOnly: { logicalName: 'msdyn_starttime', type: 'DateTime' },
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
 * msdyn_pmanalysishistory WebApi class for early-bound style coding
 * Usage: const msdyn_pmanalysishistory = new msdyn_pmanalysishistoryApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_pmanalysishistoryApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_pmanalysishistoryApi>(entity, 'msdyn_pmanalysishistory', 'msdyn_pmanalysishistories', msdyn_pmanalysishistoryFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_pmanalysishistoryApi extends Imsdyn_pmanalysishistoryApi { }
