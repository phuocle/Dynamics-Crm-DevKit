/**
 * msdyn_pminferredtask.webapi.ts - msdyn_pminferredtask WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_pminferredtask WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_pminferredtaskApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_pminferredtaskApi, 'FormattedValue'>]: string };
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
	/** Information about the analysis schedule. */
	msdyn_analysisschedule: string | null;
	/** Computed data to drive automation for this task. */
	msdyn_automationdata: string | null;
	/** The status of automation for this task. */
	msdyn_automationstatus: number | null;
	/** Business Process */
	msdyn_businessprocessid: DevKit.Guid | null;
	/** Information about the data validation for the data source. */
	msdyn_datavalidation: string | null;
	/** Description */
	msdyn_description: string | null;
	/** Location of the data used as input for Task Analysis. */
	msdyn_inputdatabinding: string | null;
	/** Surfaces whether the analysis report is currently available. */
	msdyn_isreportavailable: boolean | null;
	/** Identifies uniquely the last successful processing of the task. */
	msdyn_iterationid: string | null;
	/** Last Errors */
	msdyn_lasterrors: string | null;
	/** Last Errors Report */
	readonly msdyn_lasterrorsreport_name: string | null;
	/** Date and time when the corresponding report was last refreshed. */
	msdyn_lastreportrefreshdate_TimezoneDateAndTime: Date | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** Output Data */
	msdyn_outputdata: string | null;
	/** Unique identifier for entity instances */
	msdyn_pminferredtaskId: DevKit.Guid | null;
	/** Data related to the report for this task. */
	msdyn_reportdata: string | null;
	/** The current status of the provisioning operation for the report associated to this task. */
	msdyn_reportprovisioningstatus: number | null;
	/** Shared Recording Metadata */
	msdyn_sharedrecordingmetadata: string | null;
	/** The data source of this Pm Inferred Task. */
	msdyn_source: number | null;
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
	/** Status of the PM Inferred Task */
	statecode: number | null;
	/** Reason for the status of the PM Inferred Task */
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

const msdyn_pminferredtaskFieldConfig: DevKit.IWebApiFieldConfigMap = {
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
	msdyn_analysisschedule: { logicalName: 'msdyn_analysisschedule' },
	msdyn_automationdata: { logicalName: 'msdyn_automationdata' },
	msdyn_automationstatus: { logicalName: 'msdyn_automationstatus', type: 'Integer' },
	msdyn_businessprocessid: { schemaName: 'msdyn_businessprocessid', logicalName: '_msdyn_businessprocessid_value', entityCollectionName: 'businessprocesses', entityLogicalName: 'businessprocess' },
	msdyn_datavalidation: { logicalName: 'msdyn_datavalidation' },
	msdyn_description: { logicalName: 'msdyn_description' },
	msdyn_inputdatabinding: { logicalName: 'msdyn_inputdatabinding' },
	msdyn_isreportavailable: { logicalName: 'msdyn_isreportavailable', type: 'Boolean' },
	msdyn_iterationid: { logicalName: 'msdyn_iterationid' },
	msdyn_lasterrors: { logicalName: 'msdyn_lasterrors' },
	msdyn_lasterrorsreport_name: { logicalName: 'msdyn_lasterrorsreport', readOnly: true },
	msdyn_lastreportrefreshdate_TimezoneDateAndTime: { logicalName: 'msdyn_lastreportrefreshdate', type: 'DateTime' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_outputdata: { logicalName: 'msdyn_outputdata' },
	msdyn_pminferredtaskId: { logicalName: 'msdyn_pminferredtaskid' },
	msdyn_reportdata: { logicalName: 'msdyn_reportdata' },
	msdyn_reportprovisioningstatus: { logicalName: 'msdyn_reportprovisioningstatus', type: 'Integer' },
	msdyn_sharedrecordingmetadata: { logicalName: 'msdyn_sharedrecordingmetadata' },
	msdyn_source: { logicalName: 'msdyn_source', type: 'Integer' },
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
 * msdyn_pminferredtask WebApi class for early-bound style coding
 * Usage: const msdyn_pminferredtask = new msdyn_pminferredtaskApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_pminferredtaskApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_pminferredtaskApi>(entity, 'msdyn_pminferredtask', 'msdyn_pminferredtasks', msdyn_pminferredtaskFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_pminferredtaskApi extends Imsdyn_pminferredtaskApi { }
