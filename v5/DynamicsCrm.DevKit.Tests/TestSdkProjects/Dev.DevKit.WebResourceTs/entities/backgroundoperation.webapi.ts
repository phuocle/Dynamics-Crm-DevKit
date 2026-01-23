/**
 * backgroundoperation.webapi.ts - backgroundoperation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * backgroundoperation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IbackgroundoperationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IbackgroundoperationApi, 'FormattedValue'>]: string };
	/** Unique identifier for entity instances */
	backgroundoperationId: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** The is display name of background operation. */
	DisplayName: string | null;
	/** The date time when background operation finished execution. */
	EndTime_UtcDateAndTime: Date | null;
	/** The error code of error for background operation in case of failure. */
	ErrorCode: number | null;
	/** The error message of error for background operation in case of failure. */
	ErrorMessage: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** The input parameters that were supplied to start background operation. */
	InputParameters: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the background operation. */
	Name: string | null;
	/** The response of background operation. */
	OutputParameters: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** The priority of background operation execution. */
	Priority: number | null;
	/** The number of times background operation was retried. */
	RetryCount: number | null;
	/** The identity of user which was used to execute background operation. */
	RunAs: string | null;
	/** The date time when background operation started execution. */
	StartTime_UtcDateAndTime: Date | null;
	/** The status of background operation. */
	StateCode: number | null;
	/** The status reason for background operation. */
	StatusCode: number | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const backgroundoperationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	backgroundoperationId: { logicalName: 'backgroundoperationid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DisplayName: { logicalName: 'displayname' },
	EndTime_UtcDateAndTime: { logicalName: 'endtime', type: 'DateTime' },
	ErrorCode: { logicalName: 'errorcode', type: 'Integer' },
	ErrorMessage: { logicalName: 'errormessage' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	InputParameters: { logicalName: 'inputparameters' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OutputParameters: { logicalName: 'outputparameters' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PartitionId: { logicalName: 'partitionid' },
	Priority: { logicalName: 'priority', type: 'Integer' },
	RetryCount: { logicalName: 'retrycount', type: 'Integer' },
	RunAs: { logicalName: 'runas' },
	StartTime_UtcDateAndTime: { logicalName: 'starttime', type: 'DateTime' },
	StateCode: { logicalName: 'backgroundoperationstatecode', type: 'Integer' },
	StatusCode: { logicalName: 'backgroundoperationstatuscode', type: 'Integer' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * backgroundoperation WebApi class for early-bound style coding
 * Usage: const backgroundoperation = new backgroundoperationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class backgroundoperationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IbackgroundoperationApi>(entity, 'backgroundoperation', 'backgroundoperations', backgroundoperationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface backgroundoperationApi extends IbackgroundoperationApi { }
