/**
 * workqueueitem.webapi.ts - workqueueitem WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for workqueueitem
 * All fields return string representation of their values
 */
export interface IworkqueueitemFormattedValue {
	readonly completedon_UtcDateOnly: string;
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly delayuntil_UtcDateOnly: string;
	readonly executioncontext: string;
	readonly expirydate_UtcDateAndTime: string;
	readonly ImportSequenceNumber: string;
	readonly input: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly machineuser: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly priority: string;
	readonly processingduration: string;
	readonly processingresult: string;
	readonly processingstarttime_UtcDateOnly: string;
	readonly processinguser: string;
	readonly processorid: string;
	readonly processortype: string;
	readonly requeuecount: string;
	readonly retrycount: string;
	readonly slastatus: string;
	readonly slathresholddate_UtcDateAndTime: string;
	readonly SolutionId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SupportingSolutionId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly uniqueidbyqueue: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
	readonly workqueueid: string;
	readonly workqueueitemId: string;
}

/**
 * workqueueitem WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IworkqueueitemApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IworkqueueitemFormattedValue;
	/** The date and time when the work queue item was completed. */
	completedon_UtcDateOnly: Date | null;
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
	/** The date and time after which the work queue item can be dequeued again. */
	delayuntil_UtcDateOnly: Date | null;
	/** The execution context contains a system-managed list of processing attempts, along with important debugging information. */
	executioncontext: string | null;
	/** The expiry date indicates the deadline when the work queue items has to be processed by. */
	expirydate_UtcDateAndTime: Date | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** The input field contains the actual work item data used for processing by bots, humans, or integrations. */
	input: string | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Machine User that processed the item. */
	machineuser: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the work queue item which is by default set to an auto number (e.g., 2023-02-13-000000001). */
	name: string | null;
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
	/** The priority value determines the pick and processing order for work queue items in a work queue. A lower value corresponds to a higher priority with 1 being the highest. */
	priority: number | null;
	/** The duration of the processing in seconds. */
	processingduration: number | null;
	/** Processing Result */
	processingresult: string | null;
	/** The date and time when the processing has started. */
	processingstarttime_UtcDateOnly: Date | null;
	/** Unique identifier for the user that processed the item. */
	processinguser: DevKit.Guid | null;
	/** Unique identifier for the processor (workflow, flowmachine, etc.) that processed the item. */
	processorid: string | null;
	/** The processor type allows to display if the item was processed through a cloud flow, a flow machine or another processor type. */
	processortype: number | null;
	/** The number of times the item has been requeued. */
	requeuecount: number | null;
	/** The number of times the item has been retried. */
	retrycount: number | null;
	/** The SLA status provides more context for on the item processing status (In SLA, At Risk, Out of SLA). */
	slastatus: number | null;
	/** Date and time on which the work queue item starts to be at risk of SLA violation. */
	slathresholddate_UtcDateAndTime: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** The status of the work queue item (Queued, Processed, Exception etc.) */
	statecode: number | null;
	/** The status reason provides more context for a set status (Queued, Processing, On hold etc.). */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** An identifier of the work queue item used to uniquely identify a work queue item inside a work queue. */
	uniqueidbyqueue: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
	/** The work queue id of the parent work queue record. */
	workqueueid: DevKit.Guid | null;
	/** Unique identifier for entity instances. */
	workqueueitemId: DevKit.Guid | null;
}

const workqueueitemFieldConfig: DevKit.IWebApiFieldConfigMap = {
	completedon_UtcDateOnly: { logicalName: 'completedon', type: 'DateTime' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	delayuntil_UtcDateOnly: { logicalName: 'delayuntil', type: 'DateTime' },
	executioncontext: { logicalName: 'executioncontext' },
	expirydate_UtcDateAndTime: { logicalName: 'expirydate', type: 'DateTime' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	input: { logicalName: 'input' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	machineuser: { logicalName: 'machineuser' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	priority: { logicalName: 'priority', type: 'Integer' },
	processingduration: { logicalName: 'processingduration', type: 'Integer' },
	processingresult: { logicalName: 'processingresult' },
	processingstarttime_UtcDateOnly: { logicalName: 'processingstarttime', type: 'DateTime' },
	processinguser: { schemaName: 'processinguser', logicalName: '_processinguser_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	processorid: { logicalName: 'processorid' },
	processortype: { logicalName: 'processortype', type: 'Integer' },
	requeuecount: { logicalName: 'requeuecount', type: 'Integer' },
	retrycount: { logicalName: 'retrycount', type: 'Integer' },
	slastatus: { logicalName: 'slastatus', type: 'Integer' },
	slathresholddate_UtcDateAndTime: { logicalName: 'slathresholddate', type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	uniqueidbyqueue: { logicalName: 'uniqueidbyqueue' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	workqueueid: { schemaName: 'workqueueid', logicalName: '_workqueueid_value', entityCollectionName: 'workqueues', entityLogicalName: 'workqueue' },
	workqueueitemId: { logicalName: 'workqueueitemid' },
};

/**
 * workqueueitem WebApi class for early-bound style coding
 * Usage: const workqueueitem = new workqueueitemApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class workqueueitemApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IworkqueueitemApi>(entity, 'workqueueitem', 'workqueueitems', workqueueitemFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface workqueueitemApi extends IworkqueueitemApi { }
