/**
 * PlannerSyncAction.webapi.ts - PlannerSyncAction WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * PlannerSyncAction WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPlannerSyncActionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IPlannerSyncActionApi, 'FormattedValue'>]: string };
	/** Assignments */
	Assignments: string | null;
	/** Date and time when the planner task is due. */
	DueDateTime_TimezoneDateAndTime: Date | null;
	/** External Bucket Id */
	ExternalBucketId: string | null;
	/** External References */
	ExternalReferences: string | null;
	/** Group Id */
	GroupId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. Date and time when the action was last attempted. */
	LastAttemptedOn_TimezoneDateAndTime: Date | null;
	/** Last Sync Error */
	LastSyncError: string | null;
	/** Notes */
	Notes: string | null;
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
	/** The attempts available for processing the planner sync action. */
	PendingAttempts: number | null;
	/** The percentage of completion for the planner task. */
	PercentComplete: number | null;
	/** Id of the Business Scenario in Planner. */
	PlannerBusinessScenarioId: DevKit.Guid | null;
	/** Planner Sync Action Id */
	PlannerSyncActionId: DevKit.Guid | null;
	/** The priority of the planner task. */
	Priority: number | null;
	/** For internal use only. Date and time when the action was queued. */
	QueuedOn_TimezoneDateAndTime: Date | null;
	/** Source Record Entity Logical Name */
	SourceRecordEntityLogicalName: string | null;
	/** Source Record Id */
	SourceRecordId: DevKit.Guid | null;
	/** Date and time when the planner task was started. */
	StartDateTime_TimezoneDateAndTime: Date | null;
	/** Status of the Planner Sync Action */
	statecode: number | null;
	/** Reason for the status of the Planner Sync Action */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Title */
	Title: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const PlannerSyncActionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Assignments: { logicalName: 'assignments' },
	DueDateTime_TimezoneDateAndTime: { logicalName: 'duedatetime', type: 'DateTime' },
	ExternalBucketId: { logicalName: 'externalbucketid' },
	ExternalReferences: { logicalName: 'externalreferences' },
	GroupId: { logicalName: 'groupid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	LastAttemptedOn_TimezoneDateAndTime: { logicalName: 'lastattemptedon', type: 'DateTime' },
	LastSyncError: { logicalName: 'lastsyncerror' },
	Notes: { logicalName: 'notes' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PendingAttempts: { logicalName: 'pendingattempts', type: 'Integer' },
	PercentComplete: { logicalName: 'percentcomplete', type: 'Integer' },
	PlannerBusinessScenarioId: { schemaName: 'PlannerBusinessScenarioId', logicalName: '_plannerbusinessscenarioid_value', entityCollectionName: 'plannerbusinessscenarios', entityLogicalName: 'plannerbusinessscenario' },
	PlannerSyncActionId: { logicalName: 'plannersyncactionid' },
	Priority: { logicalName: 'priority', type: 'Integer' },
	QueuedOn_TimezoneDateAndTime: { logicalName: 'queuedon', type: 'DateTime' },
	SourceRecordEntityLogicalName: { logicalName: 'sourcerecordentitylogicalname' },
	SourceRecordId: { logicalName: 'sourcerecordid' },
	StartDateTime_TimezoneDateAndTime: { logicalName: 'startdatetime', type: 'DateTime' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	Title: { logicalName: 'title' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * PlannerSyncAction WebApi class for early-bound style coding
 * Usage: const plannerSyncAction = new PlannerSyncActionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PlannerSyncActionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPlannerSyncActionApi>(entity, 'plannersyncaction', 'plannersyncactions', PlannerSyncActionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PlannerSyncActionApi extends IPlannerSyncActionApi { }
