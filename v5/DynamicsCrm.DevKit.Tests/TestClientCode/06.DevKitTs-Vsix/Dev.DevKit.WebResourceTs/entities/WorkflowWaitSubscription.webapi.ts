/**
 * WorkflowWaitSubscription.webapi.ts - WorkflowWaitSubscription WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * WorkflowWaitSubscription WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IWorkflowWaitSubscriptionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IWorkflowWaitSubscriptionApi, 'FormattedValue'>]: string };
	/** Unique identifier of the asynchronous operation with which the subscription is associated. */
	AsyncOperationId: DevKit.Guid | null;
	/** Unstructured data associated with the subscription. */
	Data: string | null;
	/** Id of entity to which workflow instance subscribes. */
	EntityId: DevKit.Guid | null;
	/** Name of entity to which workflow instance subscribes. */
	EntityName2: string | null;
	/** Indicates whether the entity to which workflow instance subscribes is deleted after the subscription is created. */
	readonly IsDeleted: boolean | null;
	/** Indicates whether the entity to which workflow instance subscribes is modified after the subscription is created. */
	readonly IsModified: boolean | null;
	/** Date and time when the entity was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the user or team who owns the parent workflow instance. */
	readonly OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the parent workflow instance. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the user who owns the parent workflow instance. */
	readonly OwningUser: DevKit.Guid | null;
	/** Attributes on which the subscription is waiting to change. */
	WaitOnAttributeList: string | null;
	/** Unique identifier of the subscription. */
	WorkflowWaitSubscriptionId: DevKit.Guid | null;
}

const WorkflowWaitSubscriptionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AsyncOperationId: { schemaName: 'AsyncOperationId', logicalName: '_asyncoperationid_value', entityCollectionName: 'asyncoperations', entityLogicalName: 'asyncoperation' },
	Data: { logicalName: 'data' },
	EntityId: { logicalName: 'entityid' },
	EntityName2: { logicalName: 'entityname' },
	IsDeleted: { logicalName: 'isdeleted', readOnly: true, type: 'Boolean' },
	IsModified: { logicalName: 'ismodified', readOnly: true, type: 'Boolean' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit', readOnly: true },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	WaitOnAttributeList: { logicalName: 'waitonattributelist' },
	WorkflowWaitSubscriptionId: { logicalName: 'workflowwaitsubscriptionid' },
};

/**
 * WorkflowWaitSubscription WebApi class for early-bound style coding
 * Usage: const workflowWaitSubscription = new WorkflowWaitSubscriptionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class WorkflowWaitSubscriptionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IWorkflowWaitSubscriptionApi>(entity, 'workflowwaitsubscription', 'workflowwaitsubscriptions', WorkflowWaitSubscriptionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface WorkflowWaitSubscriptionApi extends IWorkflowWaitSubscriptionApi { }
