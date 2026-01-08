/**
 * BusinessProcessFlowInstance.webapi.ts - BusinessProcessFlowInstance WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for BusinessProcessFlowInstance
 * All fields return string representation of their values
 */
export interface IBusinessProcessFlowInstanceFormattedValue {
	readonly ActiveStageStartedOn_UtcDateAndTime: string;
	readonly BusinessProcessFlowInstanceId: string;
	readonly CompletedOn_UtcDateAndTime: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Entity1Id: string;
	readonly Entity2Id: string;
	readonly Entity3Id: string;
	readonly Entity4Id: string;
	readonly Entity5Id: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly ProcessId: string;
	readonly ProcessStageId: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly TraversedPath: string;
	readonly VersionNumber: string;
}

/**
 * BusinessProcessFlowInstance WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IBusinessProcessFlowInstanceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IBusinessProcessFlowInstanceFormattedValue;
	/** Date and time when the active stage was started. */
	readonly ActiveStageStartedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the business process flow instance. */
	BusinessProcessFlowInstanceId: DevKit.Guid | null;
	/** Date and time when the process completed. */
	readonly CompletedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the first entity instance. */
	Entity1Id: DevKit.Guid | null;
	/** Unique identifier of the second entity instance. */
	Entity2Id: DevKit.Guid | null;
	/** Unique identifier of the third entity instance. */
	Entity3Id: DevKit.Guid | null;
	/** Unique identifier of the fourth entity instance. */
	Entity4Id: DevKit.Guid | null;
	/** Unique identifier of the fifth entity instance. */
	Entity5Id: DevKit.Guid | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type a descriptive name for the instance. */
	Name: string | null;
	/** Unique identifier of the business process flow. */
	ProcessId: DevKit.Guid | null;
	/** Unique identifier of active stage in the business process flow instance. */
	ProcessStageId: DevKit.Guid | null;
	/** Shows whether the business process flow instance is active or inactive. */
	StateCode: number | null;
	/** Business process flow instance's status. */
	StatusCode: number | null;
	/** For internal use only. */
	TraversedPath: string | null;
	/** Version number of the business process flow instance. */
	readonly VersionNumber: number | null;
}

const BusinessProcessFlowInstanceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActiveStageStartedOn_UtcDateAndTime: { logicalName: 'activestagestartedon', readOnly: true, type: 'DateTime' },
	BusinessProcessFlowInstanceId: { logicalName: 'businessprocessflowinstanceid' },
	CompletedOn_UtcDateAndTime: { logicalName: 'completedon', readOnly: true, type: 'DateTime' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Entity1Id: { logicalName: 'entity1id' },
	Entity2Id: { logicalName: 'entity2id' },
	Entity3Id: { logicalName: 'entity3id' },
	Entity4Id: { logicalName: 'entity4id' },
	Entity5Id: { logicalName: 'entity5id' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	ProcessId: { schemaName: 'ProcessId', logicalName: '_processid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	ProcessStageId: { logicalName: 'processstageid' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	TraversedPath: { logicalName: 'traversedpath' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * BusinessProcessFlowInstance WebApi class for early-bound style coding
 * Usage: const businessProcessFlowInstance = new BusinessProcessFlowInstanceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class BusinessProcessFlowInstanceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IBusinessProcessFlowInstanceApi>(entity, 'businessprocessflowinstance', 'businessprocessflowinstances', BusinessProcessFlowInstanceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface BusinessProcessFlowInstanceApi extends IBusinessProcessFlowInstanceApi { }
