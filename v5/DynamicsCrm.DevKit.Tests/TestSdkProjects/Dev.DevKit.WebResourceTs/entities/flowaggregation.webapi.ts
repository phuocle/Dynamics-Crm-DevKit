/**
 * flowaggregation.webapi.ts - flowaggregation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * flowaggregation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IflowaggregationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IflowaggregationApi, 'FormattedValue'>]: string };
	/** Aggregation Type */
	aggregationtype: string | null;
	/** Aggregation value */
	aggregationvalue: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Error Code */
	errorcode: string | null;
	/** Unique identifier for entity instances */
	flowaggregationId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Is Top Level Run */
	IsTopLevelRun: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name */
	Name: string | null;
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
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Status */
	status: string | null;
	/** Time End */
	timeend_UtcDateAndTime: Date | null;
	/** Time Start */
	timestart_UtcDateAndTime: Date | null;
	/** TriggerType */
	triggertype: string | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** Value */
	value: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
	/** WorkflowCategory */
	WorkflowCategory: number | null;
	/** Workflow Id */
	workflowid: DevKit.Guid | null;
}

const flowaggregationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	aggregationtype: { logicalName: 'aggregationtype' },
	aggregationvalue: { logicalName: 'aggregationvalue', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	errorcode: { logicalName: 'errorcode' },
	flowaggregationId: { logicalName: 'flowaggregationid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsTopLevelRun: { logicalName: 'istoplevelrun', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PartitionId: { logicalName: 'partitionid' },
	status: { logicalName: 'status' },
	timeend_UtcDateAndTime: { logicalName: 'timeend', type: 'DateTime' },
	timestart_UtcDateAndTime: { logicalName: 'timestart', type: 'DateTime' },
	triggertype: { logicalName: 'triggertype' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	value: { logicalName: 'value', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WorkflowCategory: { logicalName: 'workflowcategory', type: 'Integer' },
	workflowid: { schemaName: 'workflowid', logicalName: '_workflowid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
};

/**
 * flowaggregation WebApi class for early-bound style coding
 * Usage: const flowaggregation = new flowaggregationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class flowaggregationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IflowaggregationApi>(entity, 'flowaggregation', 'flowaggregations', flowaggregationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface flowaggregationApi extends IflowaggregationApi { }
