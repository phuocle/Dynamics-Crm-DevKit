/**
 * SLAKPIInstance.webapi.ts - SLAKPIInstance WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SLAKPIInstance WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISLAKPIInstanceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISLAKPIInstanceApi, 'FormattedValue'>]: string };
	/** Applicable From Value */
	ApplicableFromValue_UtcDateAndTime: Date | null;
	/** Computed Failure Date and time */
	ComputedFailureTime_UtcDateAndTime: Date | null;
	/** Computed Warning Date and time */
	ComputedWarningTime_UtcDateAndTime: Date | null;
	/** For internal use only. */
	readonly CreatedBy: DevKit.Guid | null;
	/** For internal use only. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** For internal use only. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	Description: string | null;
	/** Paused duration of a KPI in business hours */
	ElapsedTime: number | null;
	/** For internal use only. */
	readonly ExchangeRate: number | null;
	/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI) will expire. */
	FailureTime_UtcDateAndTime: Date | null;
	/** Last Resume Time */
	LastResumeTime_UtcDateAndTime: Date | null;
	/** For internal use only. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** For internal use only. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** For internal use only. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Action Execution Status */
	msdyn_ActionExecutionStatus: number | null;
	/** Time taken in business hours by a KPI instance to reach the Success or failed state */
	msdyn_activeduration: number | null;
	/** Applicable Calendar */
	msdyn_calendarid: string | null;
	/** Previous SLAKPI Instance */
	msdyn_prevslakpiinstanceid: string | null;
	/** Unique identifier for SLA KPI Instance associated with SLA Item. */
	msdyn_slaitemid: DevKit.Guid | null;
	/** Type a descriptive name for the service level agreement (SLA) key performance indicator (KPI) instance. */
	Name: string | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user or team. */
	OwnerId: DevKit.Guid | null;
	/** Owning Business Unit. */
	OwningBusinessUnit: DevKit.Guid | null;
	/** OwningTeam. */
	OwningTeam: DevKit.Guid | null;
	/** Owning User. */
	OwningUser: DevKit.Guid | null;
	/** Paused On */
	PausedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
	Regarding: DevKit.Guid | null;
	/** Regarding ID */
	RegardingEntityID: string | null;
	/** Unique identifier of the SLA KPI Instance. */
	SLAKPIInstanceId: DevKit.Guid | null;
	/** Reason for the status of the service level agreement (SLA) key performance indicator (KPI) instance. For example, the SLA KPI could be Noncompliant or Succeeded. */
	Status: number | null;
	/** Shows the date and time when the service level agreement (SLA) key performance indicator (KPI) success criteria was met. */
	SucceededOn_UtcDateAndTime: Date | null;
	/** SuccessCheckedAt */
	SuccessCheckedAt_TimezoneDateAndTime: Date | null;
	/** Terminal State Reached */
	TerminalStateReached: boolean | null;
	/** Terminal State Time */
	TerminalStateTime_UtcDateAndTime: Date | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** For internal use only. */
	readonly VersionNumber: number | null;
	/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI)will go to a warning state. */
	WarningTime_UtcDateAndTime: Date | null;
	/** Shows information about whether the case has reached its warning time. */
	WarningTimeReached: number | null;
}

const SLAKPIInstanceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ApplicableFromValue_UtcDateAndTime: { logicalName: 'applicablefromvalue', type: 'DateTime' },
	ComputedFailureTime_UtcDateAndTime: { logicalName: 'computedfailuretime', type: 'DateTime' },
	ComputedWarningTime_UtcDateAndTime: { logicalName: 'computedwarningtime', type: 'DateTime' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	ElapsedTime: { logicalName: 'elapsedtime', type: 'Integer' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	FailureTime_UtcDateAndTime: { logicalName: 'failuretime', type: 'DateTime' },
	LastResumeTime_UtcDateAndTime: { logicalName: 'lastresumetime', type: 'DateTime' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_ActionExecutionStatus: { logicalName: 'msdyn_actionexecutionstatus', type: 'Integer' },
	msdyn_activeduration: { logicalName: 'msdyn_activeduration', type: 'Integer' },
	msdyn_calendarid: { logicalName: 'msdyn_calendarid' },
	msdyn_prevslakpiinstanceid: { logicalName: 'msdyn_prevslakpiinstanceid' },
	msdyn_slaitemid: { schemaName: 'msdyn_slaitemid', logicalName: '_msdyn_slaitemid_value', entityCollectionName: 'slaitems', entityLogicalName: 'slaitem' },
	Name: { logicalName: 'name' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { logicalName: 'owningteam' },
	OwningUser: { logicalName: 'owninguser' },
	PausedOn_UtcDateAndTime: { logicalName: 'pausedon', type: 'DateTime' },
	Regarding: { schemaName: 'Regarding', logicalName: '_regarding_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	RegardingEntityID: { logicalName: 'regardingentityid' },
	SLAKPIInstanceId: { logicalName: 'slakpiinstanceid' },
	Status: { logicalName: 'status', type: 'Integer' },
	SucceededOn_UtcDateAndTime: { logicalName: 'succeededon', type: 'DateTime' },
	SuccessCheckedAt_TimezoneDateAndTime: { logicalName: 'successcheckedat', type: 'DateTime' },
	TerminalStateReached: { logicalName: 'terminalstatereached', type: 'Boolean' },
	TerminalStateTime_UtcDateAndTime: { logicalName: 'terminalstatetime', type: 'DateTime' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WarningTime_UtcDateAndTime: { logicalName: 'warningtime', type: 'DateTime' },
	WarningTimeReached: { logicalName: 'warningtimereached', type: 'Integer' },
};

/**
 * SLAKPIInstance WebApi class for early-bound style coding
 * Usage: const sLAKPIInstance = new SLAKPIInstanceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SLAKPIInstanceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISLAKPIInstanceApi>(entity, 'slakpiinstance', 'slakpiinstances', SLAKPIInstanceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SLAKPIInstanceApi extends ISLAKPIInstanceApi { }
