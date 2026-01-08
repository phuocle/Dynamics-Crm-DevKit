/**
 * SLAItem.webapi.ts - SLAItem WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SLAItem
 * All fields return string representation of their values
 */
export interface ISLAItemFormattedValue {
	readonly actionflowuniquename: string;
	readonly ActionURL: string;
	readonly AllowPauseResume: string;
	readonly ApplicableEntity: string;
	readonly ApplicableWhenXml: string;
	readonly BusinessHoursId: string;
	readonly ChangedAttributeList: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly ExchangeRate: string;
	readonly FailureAfter: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msdyn_AdvancedPauseConfiguration: string;
	readonly msdyn_CustomTimeCalculation: string;
	readonly msdyn_CustomTimeCalculationWorkflowId: string;
	readonly msdyn_PauseConfigurationXml: string;
	readonly msdyn_slakpiid: string;
	readonly Name: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningUser: string;
	readonly RelatedField: string;
	readonly SequenceNumber: string;
	readonly SLAId: string;
	readonly SLAItemId: string;
	readonly SLAItemIdUnique: string;
	readonly SolutionId: string;
	readonly SuccessConditionsXml: string;
	readonly SupportingSolutionId: string;
	readonly TransactionCurrencyId: string;
	readonly VersionNumber: string;
	readonly WarnAfter: string;
	readonly WorkflowId: string;
}

/**
 * SLAItem WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISLAItemApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISLAItemFormattedValue;
	/** Action Flow Unique Name */
	actionflowuniquename: string | null;
	/** Action URL */
	ActionURL: string | null;
	/** Select whether this SLA will allow pausing and resuming during the time calculation. */
	AllowPauseResume: boolean | null;
	/** Applicable Entity */
	ApplicableEntity: string | null;
	/** Condition for SLA item */
	ApplicableWhenXml: string | null;
	/** Choose the business hours for calculating SLA item timelines. */
	BusinessHoursId: DevKit.Guid | null;
	/** Changed Attribute List */
	ChangedAttributeList: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type additional information to describe the SLA Item */
	Description: string | null;
	/** Exchange rate between the currency associated with the SLA Item record and the base currency. */
	readonly ExchangeRate: number | null;
	/** Select how soon the success criteria must be met until the SLA item is considered failed and failure actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
	FailureAfter: number | null;
	/** For internal use only. */
	readonly IsManaged: boolean | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Advanced Pause Configuration */
	msdyn_AdvancedPauseConfiguration: boolean | null;
	/** Custom Time Calculation Flag */
	msdyn_CustomTimeCalculation: boolean | null;
	/** Unique identifier for Custom Time Calculation Workflow associated with SLA Item. */
	msdyn_CustomTimeCalculationWorkflowId: DevKit.Guid | null;
	/** PauseConfigurationXml */
	msdyn_PauseConfigurationXml: string | null;
	/** Unique identifier for SLAKPI associated with SLA Item. */
	msdyn_slakpiid: DevKit.Guid | null;
	/** Type a descriptive name of the service level agreement (SLA) item. */
	Name: string | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Enter the user or team who owns the SLA. This field is updated every time the item is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the user who owns the SLA Item record. */
	OwningUser: DevKit.Guid | null;
	/** Select the service level agreement (SLA) key performance indicator (KPI) that this SLA Item is created for. */
	RelatedField: string | null;
	/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
	SequenceNumber: number | null;
	/** Unique identifier for SLA associated with SLA Item. */
	SLAId: DevKit.Guid | null;
	/** Unique identifier of the SLA Item. */
	SLAItemId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SLAItemIdUnique: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Condition for SLA item */
	SuccessConditionsXml: string | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Unique identifier of the currency associated with the SLA Item record. */
	readonly TransactionCurrencyId: DevKit.Guid | null;
	/** Version number of the SLA Item. */
	readonly VersionNumber: number | null;
	/** Select how soon the success criteria must be met before warning actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
	WarnAfter: number | null;
	/** Workflow associated with the SLA Item. */
	WorkflowId: DevKit.Guid | null;
}

const SLAItemFieldConfig: DevKit.IWebApiFieldConfigMap = {
	actionflowuniquename: { logicalName: 'actionflowuniquename' },
	ActionURL: { logicalName: 'actionurl' },
	AllowPauseResume: { logicalName: 'allowpauseresume', type: 'Boolean' },
	ApplicableEntity: { logicalName: 'applicableentity' },
	ApplicableWhenXml: { logicalName: 'applicablewhenxml' },
	BusinessHoursId: { schemaName: 'BusinessHoursId', logicalName: '_businesshoursid_value', entityCollectionName: 'calendars', entityLogicalName: 'calendar' },
	ChangedAttributeList: { logicalName: 'changedattributelist' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	FailureAfter: { logicalName: 'failureafter', type: 'Integer' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AdvancedPauseConfiguration: { logicalName: 'msdyn_advancedpauseconfiguration', type: 'Boolean' },
	msdyn_CustomTimeCalculation: { logicalName: 'msdyn_customtimecalculation', type: 'Boolean' },
	msdyn_CustomTimeCalculationWorkflowId: { schemaName: 'msdyn_CustomTimeCalculationWorkflowId', logicalName: '_msdyn_customtimecalculationworkflowid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	msdyn_PauseConfigurationXml: { logicalName: 'msdyn_pauseconfigurationxml' },
	msdyn_slakpiid: { schemaName: 'msdyn_slakpiid', logicalName: '_msdyn_slakpiid_value', entityCollectionName: 'msdyn_slakpis', entityLogicalName: 'msdyn_slakpi' },
	Name: { logicalName: 'name' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningUser: { logicalName: 'owninguser' },
	RelatedField: { logicalName: 'relatedfield' },
	SequenceNumber: { logicalName: 'sequencenumber', type: 'Integer' },
	SLAId: { schemaName: 'SLAId', logicalName: '_slaid_value', entityCollectionName: 'slas', entityLogicalName: 'sla' },
	SLAItemId: { logicalName: 'slaitemid' },
	SLAItemIdUnique: { logicalName: 'slaitemidunique', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SuccessConditionsXml: { logicalName: 'successconditionsxml' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', readOnly: true, entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WarnAfter: { logicalName: 'warnafter', type: 'Integer' },
	WorkflowId: { schemaName: 'WorkflowId', logicalName: '_workflowid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
};

/**
 * SLAItem WebApi class for early-bound style coding
 * Usage: const sLAItem = new SLAItemApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SLAItemApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISLAItemApi>(entity, 'slaitem', 'slaitems', SLAItemFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SLAItemApi extends ISLAItemApi { }
