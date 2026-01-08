/**
 * ProcessTrigger.webapi.ts - ProcessTrigger WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ProcessTrigger
 * All fields return string representation of their values
 */
export interface IProcessTriggerFormattedValue {
	readonly ComponentState: string;
	readonly ControlName: string;
	readonly ControlType: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Event: string;
	readonly FormId: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly MethodId: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningUser: string;
	readonly PipelineStage: string;
	readonly ProcessId: string;
	readonly ProcessTriggerId: string;
	readonly ProcessTriggerIdUnique: string;
	readonly Scope: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * ProcessTrigger WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IProcessTriggerApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IProcessTriggerFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Name of the control. */
	ControlName: string | null;
	/** Type of the control to which this trigger is bound */
	ControlType: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Indicates the event. */
	Event: string | null;
	/** Unique identifier of the form associated with the trigger. */
	FormId: DevKit.Guid | null;
	/** Indicates whether this component can be customized. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Displays StageID to which the PBL rule belongs to */
	MethodId: DevKit.Guid | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	readonly OwnerId: DevKit.Guid | null;
	/** Select the business unit that owns the record. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Pipeline Stage to Execute Workflow Event Plugin. */
	PipelineStage: number | null;
	/** Shows the ID of the process. */
	ProcessId: DevKit.Guid | null;
	/** Unique identifier of the process trigger record. */
	ProcessTriggerId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ProcessTriggerIdUnique: DevKit.Guid | null;
	/** Scope level for PBL rules. */
	Scope: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const ProcessTriggerFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ControlName: { logicalName: 'controlname' },
	ControlType: { logicalName: 'controltype', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Event: { logicalName: 'event' },
	FormId: { schemaName: 'FormId', logicalName: '_formid_value', entityCollectionName: 'systemforms', entityLogicalName: 'systemform' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	MethodId: { logicalName: 'methodid' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit', readOnly: true },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	PipelineStage: { logicalName: 'pipelinestage', type: 'Integer' },
	ProcessId: { schemaName: 'ProcessId', logicalName: '_processid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	ProcessTriggerId: { logicalName: 'processtriggerid' },
	ProcessTriggerIdUnique: { logicalName: 'processtriggeridunique', readOnly: true },
	Scope: { logicalName: 'scope', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ProcessTrigger WebApi class for early-bound style coding
 * Usage: const processTrigger = new ProcessTriggerApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ProcessTriggerApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IProcessTriggerApi>(entity, 'processtrigger', 'processtriggers', ProcessTriggerFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ProcessTriggerApi extends IProcessTriggerApi { }
