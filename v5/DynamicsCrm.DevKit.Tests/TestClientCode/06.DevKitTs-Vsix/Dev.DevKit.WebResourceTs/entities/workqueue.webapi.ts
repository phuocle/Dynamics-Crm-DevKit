/**
 * workqueue.webapi.ts - workqueue WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * workqueue WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IworkqueueApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IworkqueueApi, 'FormattedValue'>]: string };
	/** Indicates whether updating the input while the item is in processing is allowed. Default value is NotSet. */
	allowupdateinputwhileprocessing: number | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Indicates whether item should be processed even if SLA is violated. Default value is NotSet. */
	continueprocessingifslaviolated: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** The default lifespan in minutes of work queue items when added to the work queue. */
	defaultitemtimetoliveinminutes: number | null;
	/** The work queue description. */
	description: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** The input schema field contains the expected input schema used for input validation at enqueue time. */
	inputschema: string | null;
	/** The input schema type allows to validate the input field at enqueue time against a specific schema. */
	inputschematype: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** The maximum number of times an item can be requeued. */
	itemmaxrequeuecount: number | null;
	/** The maximum number of times an item should be retried. This can be overridden at runtime. */
	itemmaxretrycount: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the work queue. */
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
	/** The priority type determines the pick and processing order for work queue items in a work queue. */
	prioritytype: number | null;
	/** The SLA Threshold in percentage for items added to the work queue. */
	slathresholdinpercentage: number | null;
	/** Date and time that the SLA Threshold was modified on. */
	slathresholdmodifiedon_UtcDateAndTime: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** The status of the work queue. */
	statecode: number | null;
	/** Reason for the status of the Work Queue */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
	/** Unique identifier for entity instances. */
	workqueueId: DevKit.Guid | null;
	/** Work Queue Key */
	workqueuekey: string | null;
	/** The work queue type allows to handle more specific work queue behavior. */
	WorkQueueType: number | null;
}

const workqueueFieldConfig: DevKit.IWebApiFieldConfigMap = {
	allowupdateinputwhileprocessing: { logicalName: 'allowupdateinputwhileprocessing', type: 'Integer' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	continueprocessingifslaviolated: { logicalName: 'continueprocessingifslaviolated', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	defaultitemtimetoliveinminutes: { logicalName: 'defaultitemtimetoliveinminutes', type: 'Integer' },
	description: { logicalName: 'description' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	inputschema: { logicalName: 'inputschema' },
	inputschematype: { logicalName: 'inputschematype', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	itemmaxrequeuecount: { logicalName: 'itemmaxrequeuecount', type: 'Integer' },
	itemmaxretrycount: { logicalName: 'itemmaxretrycount', type: 'Integer' },
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
	prioritytype: { logicalName: 'prioritytype', type: 'Integer' },
	slathresholdinpercentage: { logicalName: 'slathresholdinpercentage', type: 'Integer' },
	slathresholdmodifiedon_UtcDateAndTime: { logicalName: 'slathresholdmodifiedon', type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	workqueueId: { logicalName: 'workqueueid' },
	workqueuekey: { logicalName: 'workqueuekey' },
	WorkQueueType: { logicalName: 'workqueuetype', type: 'Integer' },
};

/**
 * workqueue WebApi class for early-bound style coding
 * Usage: const workqueue = new workqueueApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class workqueueApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IworkqueueApi>(entity, 'workqueue', 'workqueues', workqueueFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface workqueueApi extends IworkqueueApi { }
