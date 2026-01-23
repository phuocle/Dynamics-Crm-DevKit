/**
 * ProcessSession.webapi.ts - ProcessSession WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ProcessSession WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IProcessSessionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IProcessSessionApi, 'FormattedValue'>]: string };
	/** Name of the activity that is being executed. */
	ActivityName: string | null;
	/** Unique identifier of the user who canceled the dialog session. */
	readonly CanceledBy: DevKit.Guid | null;
	/** Date and time when the dialog session was canceled. */
	CanceledOn_UtcDateAndTime: Date | null;
	/** User comments. */
	Comments: string | null;
	/** Unique identifier of the user who completed the dialog session. */
	readonly CompletedBy: DevKit.Guid | null;
	/** Date and time when the dialog session was completed. */
	CompletedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the user who started the dialog session. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the dialog session was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the dialog session. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Error code related to the dialog session. */
	ErrorCode: number | null;
	/** Unique identifier of the user who ran the dialog process. */
	ExecutedBy: DevKit.Guid | null;
	/** Date and time when the dialog process was run. */
	readonly ExecutedOn_UtcDateAndTime: Date | null;
	/** Input arguments for the child dialog process. */
	InputArguments: string | null;
	/** Unique identifier of the user who last modified the dialog session. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the dialog session was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the dialog session. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the dialog session. */
	Name: string | null;
	/** Unique identifier of the succeeding linked dialog session. */
	NextLinkedSessionId: DevKit.Guid | null;
	/** Unique identifier of the originating dialog session. */
	OriginatingSessionId: DevKit.Guid | null;
	/** Unique identifier of the user or team who owns the dialog session. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the dialog session. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the dialog session. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the dialog session. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the preceding linked dialog session. */
	PreviousLinkedSessionId: DevKit.Guid | null;
	/** Select the process activation record that is related to the dialog session. */
	ProcessId: DevKit.Guid | null;
	/** Unique identifier of the dialog session. */
	ProcessSessionId: DevKit.Guid | null;
	/** Name of the dialog stage. */
	ProcessStageName: string | null;
	/** State of the dialog process. */
	ProcessState: string | null;
	/** For internal use only. */
	readonly ProtectionKey: string | null;
	/** Unique identifier of the object with which the dialog session is associated. */
	RegardingObjectId: DevKit.Guid | null;
	/** Unique identifier of the user who started the dialog session. */
	readonly StartedBy: DevKit.Guid | null;
	/** Date and time when the dialog session was started. */
	StartedOn_UtcDateAndTime: Date | null;
	/** Status of the dialog session. */
	StateCode: number | null;
	/** Reason for the status of the dialog session. */
	StatusCode: number | null;
	/** Name of the dialog step. */
	StepName: string | null;
}

const ProcessSessionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActivityName: { logicalName: 'activityname' },
	CanceledBy: { schemaName: 'CanceledBy', logicalName: '_canceledby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CanceledOn_UtcDateAndTime: { logicalName: 'canceledon', type: 'DateTime' },
	Comments: { logicalName: 'comments' },
	CompletedBy: { schemaName: 'CompletedBy', logicalName: '_completedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CompletedOn_UtcDateAndTime: { logicalName: 'completedon', type: 'DateTime' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ErrorCode: { logicalName: 'errorcode', type: 'Integer' },
	ExecutedBy: { schemaName: 'ExecutedBy', logicalName: '_executedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ExecutedOn_UtcDateAndTime: { logicalName: 'executedon', readOnly: true, type: 'DateTime' },
	InputArguments: { logicalName: 'inputarguments' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	NextLinkedSessionId: { schemaName: 'NextLinkedSessionId', logicalName: '_nextlinkedsessionid_value', entityCollectionName: 'processsessions', entityLogicalName: 'processsession' },
	OriginatingSessionId: { schemaName: 'OriginatingSessionId', logicalName: '_originatingsessionid_value', entityCollectionName: 'processsessions', entityLogicalName: 'processsession' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PreviousLinkedSessionId: { schemaName: 'PreviousLinkedSessionId', logicalName: '_previouslinkedsessionid_value', entityCollectionName: 'processsessions', entityLogicalName: 'processsession' },
	ProcessId: { schemaName: 'ProcessId', logicalName: '_processid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	ProcessSessionId: { logicalName: 'processsessionid' },
	ProcessStageName: { logicalName: 'processstagename' },
	ProcessState: { logicalName: 'processstate' },
	ProtectionKey: { logicalName: 'protectionkey', readOnly: true },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	StartedBy: { schemaName: 'StartedBy', logicalName: '_startedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	StartedOn_UtcDateAndTime: { logicalName: 'startedon', type: 'DateTime' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	StepName: { logicalName: 'stepname' },
};

/**
 * ProcessSession WebApi class for early-bound style coding
 * Usage: const processSession = new ProcessSessionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ProcessSessionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IProcessSessionApi>(entity, 'processsession', 'processsessions', ProcessSessionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ProcessSessionApi extends IProcessSessionApi { }
