/**
 * msdyn_pmsimulation.webapi.ts - msdyn_pmsimulation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_pmsimulation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_pmsimulationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_pmsimulationApi, 'FormattedValue'>]: string };
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
	/** Description of custom entity. */
	msdyn_description: string | null;
	/** The end of the simulation. */
	msdyn_end_UtcDateAndTime: Date | null;
	/** Indicates if the simulation log will be generated during the simulation. */
	msdyn_generatelog: boolean | null;
	/** The name of custom entity. */
	msdyn_name: string | null;
	/** Unique identifier for PM Inferred Task associated with PM Simulation. The imported process from simulation log. */
	msdyn_pminferredtaskid: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	msdyn_pmsimulationId: DevKit.Guid | null;
	/** Unique identifier from PM View associated with PM Simulation. */
	msdyn_pmviewid: DevKit.Guid | null;
	/** The Guid of PSE simulation. */
	msdyn_psesimulationid: string | null;
	/** The result of simulation. */
	msdyn_result: string | null;
	/** The settings of simulation. */
	msdyn_setting: string | null;
	/** The start of simulation. */
	msdyn_start_UtcDateAndTime: Date | null;
	/** The state of simulation. */
	msdyn_state: number | null;
	/** The version number of entity. */
	msdyn_version: number | null;
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
	/** Status of the PM Simulation */
	statecode: number | null;
	/** Reason for the status of the PM Simulation */
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

const msdyn_pmsimulationFieldConfig: DevKit.IWebApiFieldConfigMap = {
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
	msdyn_description: { logicalName: 'msdyn_description' },
	msdyn_end_UtcDateAndTime: { logicalName: 'msdyn_end', type: 'DateTime' },
	msdyn_generatelog: { logicalName: 'msdyn_generatelog', type: 'Boolean' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_pminferredtaskid: { schemaName: 'msdyn_pminferredtaskid', logicalName: '_msdyn_pminferredtaskid_value', entityCollectionName: 'msdyn_pminferredtasks', entityLogicalName: 'msdyn_pminferredtask' },
	msdyn_pmsimulationId: { logicalName: 'msdyn_pmsimulationid' },
	msdyn_pmviewid: { schemaName: 'msdyn_pmviewid', logicalName: '_msdyn_pmviewid_value', entityCollectionName: 'msdyn_pmviews', entityLogicalName: 'msdyn_pmview' },
	msdyn_psesimulationid: { logicalName: 'msdyn_psesimulationid' },
	msdyn_result: { logicalName: 'msdyn_result' },
	msdyn_setting: { logicalName: 'msdyn_setting' },
	msdyn_start_UtcDateAndTime: { logicalName: 'msdyn_start', type: 'DateTime' },
	msdyn_state: { logicalName: 'msdyn_state', type: 'Integer' },
	msdyn_version: { logicalName: 'msdyn_version', type: 'Integer' },
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
 * msdyn_pmsimulation WebApi class for early-bound style coding
 * Usage: const msdyn_pmsimulation = new msdyn_pmsimulationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_pmsimulationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_pmsimulationApi>(entity, 'msdyn_pmsimulation', 'msdyn_pmsimulations', msdyn_pmsimulationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_pmsimulationApi extends Imsdyn_pmsimulationApi { }
