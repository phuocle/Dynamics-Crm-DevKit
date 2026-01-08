/**
 * msdyn_AIEvaluationMetric.webapi.ts - msdyn_AIEvaluationMetric WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_AIEvaluationMetric WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_AIEvaluationMetricApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_AIEvaluationMetricApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	msdyn_AIEvaluationMetricId: DevKit.Guid | null;
	/** Evaluator Name */
	msdyn_AIEvaluatorName: string | null;
	/** Object Id */
	msdyn_AIObjectId: string | null;
	/** Object Type */
	msdyn_AIObjectType: string | null;
	/** Evaluation Average score */
	msdyn_EvalAvgScore: number | null;
	/** Evaluation P50 score */
	msdyn_EvalP50Score: number | null;
	/** Evaluation P75 score */
	msdyn_EvalP75Score: number | null;
	/** Evaluation P95 score */
	msdyn_EvalP95Score: number | null;
	/** Last calculated time */
	msdyn_LastCalculatedAt_UtcDateAndTime: Date | null;
	/** Lookback duration in minutes */
	msdyn_LookBackWindowDurationInMinutes: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_AIEvaluationMetricFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AIEvaluationMetricId: { logicalName: 'msdyn_aievaluationmetricid' },
	msdyn_AIEvaluatorName: { logicalName: 'msdyn_aievaluatorname' },
	msdyn_AIObjectId: { logicalName: 'msdyn_aiobjectid' },
	msdyn_AIObjectType: { logicalName: 'msdyn_aiobjecttype' },
	msdyn_EvalAvgScore: { logicalName: 'msdyn_evalavgscore', type: 'Number' },
	msdyn_EvalP50Score: { logicalName: 'msdyn_evalp50score', type: 'Number' },
	msdyn_EvalP75Score: { logicalName: 'msdyn_evalp75score', type: 'Number' },
	msdyn_EvalP95Score: { logicalName: 'msdyn_evalp95score', type: 'Number' },
	msdyn_LastCalculatedAt_UtcDateAndTime: { logicalName: 'msdyn_lastcalculatedat', type: 'DateTime' },
	msdyn_LookBackWindowDurationInMinutes: { logicalName: 'msdyn_lookbackwindowdurationinminutes', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PartitionId: { logicalName: 'partitionid' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_AIEvaluationMetric WebApi class for early-bound style coding
 * Usage: const msdyn_AIEvaluationMetric = new msdyn_AIEvaluationMetricApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_AIEvaluationMetricApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_AIEvaluationMetricApi>(entity, 'msdyn_aievaluationmetric', 'msdyn_aievaluationmetrics', msdyn_AIEvaluationMetricFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_AIEvaluationMetricApi extends Imsdyn_AIEvaluationMetricApi { }
