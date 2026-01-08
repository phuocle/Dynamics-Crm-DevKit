/**
 * ProcessStage.webapi.ts - ProcessStage WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ProcessStage
 * All fields return string representation of their values
 */
export interface IProcessStageFormattedValue {
	readonly ClientData: string;
	readonly Connector: string;
	readonly IsTrigger: string;
	readonly OperationId: string;
	readonly OperationKind: string;
	readonly OperationType: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly ParameterName: string;
	readonly ParameterValue: string;
	readonly ParentProcessStageId: string;
	readonly ProcessId: string;
	readonly ProcessStageId: string;
	readonly StageCategory: string;
	readonly StageName: string;
	readonly VersionNumber: string;
}

/**
 * ProcessStage WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IProcessStageApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IProcessStageFormattedValue;
	/** Step metadata for process stage */
	readonly ClientData: string | null;
	/** The connector associated with the stage. */
	Connector: string | null;
	/** Whether the stage is a trigger */
	IsTrigger: boolean | null;
	/** The operation id of the stage */
	OperationId: string | null;
	/** The operation kind */
	OperationKind: number | null;
	/** The type of the operation */
	OperationType: number | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	readonly OwnerId: DevKit.Guid | null;
	/** Select the business unit that owns the record. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** The parameter name. */
	ParameterName: string | null;
	/** The parameter value. */
	ParameterValue: string | null;
	/** The parent stage for the parameter. */
	ParentProcessStageId: DevKit.Guid | null;
	/** Shows the ID of the process. */
	ProcessId: DevKit.Guid | null;
	/** Shows the ID of the process stage record. */
	ProcessStageId: DevKit.Guid | null;
	/** Select the category of the sales process. */
	StageCategory: number | null;
	/** Type a name for the process stage. */
	StageName: string | null;
	/** Version number of the process stage. */
	readonly VersionNumber: number | null;
}

const ProcessStageFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ClientData: { logicalName: 'clientdata', readOnly: true },
	Connector: { logicalName: 'connector' },
	IsTrigger: { logicalName: 'istrigger', type: 'Boolean' },
	OperationId: { logicalName: 'operationid' },
	OperationKind: { logicalName: 'operationkind', type: 'Integer' },
	OperationType: { logicalName: 'operationtype', type: 'Integer' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit', readOnly: true },
	ParameterName: { logicalName: 'parametername' },
	ParameterValue: { logicalName: 'parametervalue' },
	ParentProcessStageId: { schemaName: 'ParentProcessStageId', logicalName: '_parentprocessstageid_value', entityCollectionName: 'processstages', entityLogicalName: 'processstage' },
	ProcessId: { schemaName: 'ProcessId', logicalName: '_processid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	ProcessStageId: { logicalName: 'processstageid' },
	StageCategory: { logicalName: 'stagecategory', type: 'Integer' },
	StageName: { logicalName: 'stagename' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ProcessStage WebApi class for early-bound style coding
 * Usage: const processStage = new ProcessStageApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ProcessStageApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IProcessStageApi>(entity, 'processstage', 'processstages', ProcessStageFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ProcessStageApi extends IProcessStageApi { }
