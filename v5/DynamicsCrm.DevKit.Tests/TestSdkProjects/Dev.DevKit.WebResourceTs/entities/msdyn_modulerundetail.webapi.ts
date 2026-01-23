/**
 * msdyn_modulerundetail.webapi.ts - msdyn_modulerundetail WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_modulerundetail WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_modulerundetailApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_modulerundetailApi, 'FormattedValue'>]: string };
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
	/** EndTime */
	msdyn_EndTime_UtcDateAndTime: Date | null;
	/** IsCompleted */
	msdyn_IsCompleted: boolean | null;
	/** ModelRunId */
	msdyn_ModelRunId: string | null;
	/** ModuleConfigId */
	msdyn_ModuleConfigId: string | null;
	/** ModuleConfigIdVersion */
	msdyn_ModuleConfigIdVersion: number | null;
	/** ModuleEndpointResults */
	msdyn_ModuleEndpointResults: string | null;
	/** ModuleResultCodes */
	msdyn_ModuleResultCodes: string | null;
	/** Unique identifier for entity instances */
	msdyn_modulerundetailId: DevKit.Guid | null;
	/** OutputModelJsonPath */
	msdyn_OutputModelJsonPath: string | null;
	/** QueuedTime */
	msdyn_QueuedTime_UtcDateAndTime: Date | null;
	/** StartTime */
	msdyn_StartTime_UtcDateAndTime: Date | null;
	/** SynapseSchemaSyncJobId */
	msdyn_SynapseSchemaSyncJobId: string | null;
	/** Version */
	msdyn_Version: number | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the ModuleRunDetail */
	statecode: number | null;
	/** Reason for the status of the ModuleRunDetail */
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

const msdyn_modulerundetailFieldConfig: DevKit.IWebApiFieldConfigMap = {
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
	msdyn_EndTime_UtcDateAndTime: { logicalName: 'msdyn_endtime', type: 'DateTime' },
	msdyn_IsCompleted: { logicalName: 'msdyn_iscompleted', type: 'Boolean' },
	msdyn_ModelRunId: { logicalName: 'msdyn_modelrunid' },
	msdyn_ModuleConfigId: { logicalName: 'msdyn_moduleconfigid' },
	msdyn_ModuleConfigIdVersion: { logicalName: 'msdyn_moduleconfigidversion', type: 'Integer' },
	msdyn_ModuleEndpointResults: { logicalName: 'msdyn_moduleendpointresults' },
	msdyn_ModuleResultCodes: { logicalName: 'msdyn_moduleresultcodes' },
	msdyn_modulerundetailId: { logicalName: 'msdyn_modulerundetailid' },
	msdyn_OutputModelJsonPath: { logicalName: 'msdyn_outputmodeljsonpath' },
	msdyn_QueuedTime_UtcDateAndTime: { logicalName: 'msdyn_queuedtime', type: 'DateTime' },
	msdyn_StartTime_UtcDateAndTime: { logicalName: 'msdyn_starttime', type: 'DateTime' },
	msdyn_SynapseSchemaSyncJobId: { logicalName: 'msdyn_synapseschemasyncjobid' },
	msdyn_Version: { logicalName: 'msdyn_version', type: 'Integer' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_modulerundetail WebApi class for early-bound style coding
 * Usage: const msdyn_modulerundetail = new msdyn_modulerundetailApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_modulerundetailApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_modulerundetailApi>(entity, 'msdyn_modulerundetail', 'msdyn_modulerundetails', msdyn_modulerundetailFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_modulerundetailApi extends Imsdyn_modulerundetailApi { }
