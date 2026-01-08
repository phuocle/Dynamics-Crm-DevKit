/**
 * WorkflowDependency.webapi.ts - WorkflowDependency WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * WorkflowDependency WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IWorkflowDependencyApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IWorkflowDependencyApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the process dependency. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the process dependency was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the process dependency. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Name of the entity used in the process. */
	CustomEntityName: string | null;
	/** Name of the attribute used in the process. */
	DependentAttributeName: string | null;
	/** Name of the entity used in the process. */
	DependentEntityName: string | null;
	/** Comma-separated list of attributes that will be passed to process instance. */
	EntityAttributes: string | null;
	/** Unique identifier of the user who last modified the process dependency. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the process dependency was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the process dependency. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the user or team who owns the parent workflow instance. */
	readonly OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the process dependency. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the user who owns the process dependency. */
	readonly OwningUser: DevKit.Guid | null;
	/** Name of the process parameter. */
	ParameterName: string | null;
	/** Fully qualified name of the CLR type of the local parameter. */
	ParameterType: string | null;
	/** Attribute of the primary entity that specifies related entity. */
	RelatedAttributeName: string | null;
	/** Name of the related entity. */
	RelatedEntityName: string | null;
	/** Unique identifier of the SDK message. */
	SdkMessageId: DevKit.Guid | null;
	/** Type of the process dependency. */
	Type: number | null;
	readonly VersionNumber: number | null;
	/** Unique identifier of the process dependency. */
	WorkflowDependencyId: DevKit.Guid | null;
	/** Unique identifier of the process with which the dependency is associated. */
	WorkflowId: DevKit.Guid | null;
}

const WorkflowDependencyFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomEntityName: { logicalName: 'customentityname' },
	DependentAttributeName: { logicalName: 'dependentattributename' },
	DependentEntityName: { logicalName: 'dependententityname' },
	EntityAttributes: { logicalName: 'entityattributes' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit', readOnly: true },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	ParameterName: { logicalName: 'parametername' },
	ParameterType: { logicalName: 'parametertype' },
	RelatedAttributeName: { logicalName: 'relatedattributename' },
	RelatedEntityName: { logicalName: 'relatedentityname' },
	SdkMessageId: { schemaName: 'SdkMessageId', logicalName: '_sdkmessageid_value', entityCollectionName: 'sdkmessages', entityLogicalName: 'sdkmessage' },
	Type: { logicalName: 'type', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WorkflowDependencyId: { logicalName: 'workflowdependencyid' },
	WorkflowId: { schemaName: 'WorkflowId', logicalName: '_workflowid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
};

/**
 * WorkflowDependency WebApi class for early-bound style coding
 * Usage: const workflowDependency = new WorkflowDependencyApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class WorkflowDependencyApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IWorkflowDependencyApi>(entity, 'workflowdependency', 'workflowdependencies', WorkflowDependencyFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface WorkflowDependencyApi extends IWorkflowDependencyApi { }
