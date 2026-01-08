/**
 * SLA.webapi.ts - SLA WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SLA
 * All fields return string representation of their values
 */
export interface ISLAFormattedValue {
	readonly AllowPauseResume: string;
	readonly ApplicableFrom: string;
	readonly ApplicableFromPickList: string;
	readonly BusinessHoursId: string;
	readonly ChangedAttributeList: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly ExchangeRate: string;
	readonly IsDefault: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly ObjectTypeCode: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly PrimaryEntityOTC: string;
	readonly SLAId: string;
	readonly SLAIdUnique: string;
	readonly SLAType: string;
	readonly slaversion: string;
	readonly SolutionId: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly SupportingSolutionId: string;
	readonly TransactionCurrencyId: string;
	readonly VersionNumber: string;
	readonly WorkflowId: string;
}

/**
 * SLA WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISLAApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISLAFormattedValue;
	/** Select whether this SLA will allow pausing and resuming during the time calculation. */
	AllowPauseResume: boolean | null;
	/** Select the field that specifies the date and time from which the SLA items will be calculated for the case record. For example, if you select the Case Created On field, SLA calculation will begin from the time the case is created.  */
	ApplicableFrom: string | null;
	/** Select the field that specifies the date and time from which the SLA items will be calculated. For example, if you select the Case Created On field, SLA calculation will begin from the time the case is created. */
	ApplicableFromPickList: number | null;
	/** Choose the business hours for calculating SLA item timelines. */
	BusinessHoursId: DevKit.Guid | null;
	/** Type additional information to describe the SLA */
	ChangedAttributeList: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type additional information to describe the SLA */
	Description: string | null;
	/** Exchange rate between the currency associated with the SLA record and the base currency. */
	readonly ExchangeRate: number | null;
	/** Tells whether this SLA is the default one. */
	IsDefault: boolean | null;
	/** For internal use only. */
	readonly IsManaged: boolean | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type a descriptive name of the service level agreement (SLA). */
	Name: string | null;
	/** Choose the entity type that the SLA is defined. */
	readonly ObjectTypeCode: number | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Enter the user or team who owns the SLA. This field is updated every time the item is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	OwningUser: DevKit.Guid | null;
	/** Shows the primary entity that the SLA has been created for. */
	PrimaryEntityOTC: number | null;
	/** Unique identifier of the SLA. */
	SLAId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SLAIdUnique: DevKit.Guid | null;
	/** Select the type of service level agreement (SLA). */
	SLAType: number | null;
	/** Record version */
	slaversion: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Shows whether the Service Level Agreement (SLA) is active or inactive. */
	StateCode: number | null;
	/** Select the status of the service level agreement (SLA). */
	StatusCode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Unique identifier of the currency associated with the SLA record. */
	readonly TransactionCurrencyId: DevKit.Guid | null;
	/** Version number of the SLA. */
	readonly VersionNumber: number | null;
	/** Workflow associated with the SLA. */
	WorkflowId: DevKit.Guid | null;
}

const SLAFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AllowPauseResume: { logicalName: 'allowpauseresume', type: 'Boolean' },
	ApplicableFrom: { logicalName: 'applicablefrom' },
	ApplicableFromPickList: { logicalName: 'applicablefrompicklist', type: 'Integer' },
	BusinessHoursId: { schemaName: 'BusinessHoursId', logicalName: '_businesshoursid_value', entityCollectionName: 'calendars', entityLogicalName: 'calendar' },
	ChangedAttributeList: { logicalName: 'changedattributelist' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	IsDefault: { logicalName: 'isdefault', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	ObjectTypeCode: { logicalName: 'objecttypecode', readOnly: true, type: 'Integer' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PrimaryEntityOTC: { logicalName: 'primaryentityotc', type: 'Integer' },
	SLAId: { logicalName: 'slaid' },
	SLAIdUnique: { logicalName: 'slaidunique', readOnly: true },
	SLAType: { logicalName: 'slatype', type: 'Integer' },
	slaversion: { logicalName: 'slaversion', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', readOnly: true, entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WorkflowId: { schemaName: 'WorkflowId', logicalName: '_workflowid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
};

/**
 * SLA WebApi class for early-bound style coding
 * Usage: const sLA = new SLAApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SLAApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISLAApi>(entity, 'sla', 'slas', SLAFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SLAApi extends ISLAApi { }
