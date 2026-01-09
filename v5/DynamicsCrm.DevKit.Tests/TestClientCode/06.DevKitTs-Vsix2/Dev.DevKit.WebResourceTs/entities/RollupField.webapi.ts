/**
 * RollupField.webapi.ts - RollupField WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * RollupField WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRollupFieldApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IRollupFieldApi, 'FormattedValue'>]: string };
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Select a date field for the selected record type, such as Actual Closed Date for the Opportunity record type. A record participates in the goal rollup, if the selected date falls between the start date and the end date for the goal. */
	DateAttribute: string | null;
	/** Select a rollup field where the metric rollup data will be displayed in the goal. The options are an integer or money, depending on the Metric Type you chose for the goal metric. */
	GoalAttribute: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Tells whether the state or status belongs to the parent entity. */
	IsStateParentEntityAttribute: boolean | null;
	/** Unique identifier of the goal metric associated with the rollup field. */
	MetricId: DevKit.Guid | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Choose the ID of the organization that the record is associated with. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Unique identifier of the rollup field. */
	RollupFieldId: DevKit.Guid | null;
	/** Type the name of the field that the data for the goal rolls up from. */
	SourceAttribute: string | null;
	/** Select the state of the records you want to use as the source of the rollup data for the metric. */
	SourceState: number | null;
	/** Select the status of the records you want to use as the source of the rollup data for the metric. */
	SourceStatus: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the rollup field. */
	readonly VersionNumber: number | null;
}

const RollupFieldFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DateAttribute: { logicalName: 'dateattribute' },
	GoalAttribute: { logicalName: 'goalattribute' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsStateParentEntityAttribute: { logicalName: 'isstateparententityattribute', type: 'Boolean' },
	MetricId: { schemaName: 'MetricId', logicalName: '_metricid_value', entityCollectionName: 'metrics', entityLogicalName: 'metric' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	RollupFieldId: { logicalName: 'rollupfieldid' },
	SourceAttribute: { logicalName: 'sourceattribute' },
	SourceState: { logicalName: 'sourcestate', type: 'Integer' },
	SourceStatus: { logicalName: 'sourcestatus', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * RollupField WebApi class for early-bound style coding
 * Usage: const rollupField = new RollupFieldApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RollupFieldApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRollupFieldApi>(entity, 'rollupfield', 'rollupfields', RollupFieldFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RollupFieldApi extends IRollupFieldApi { }
