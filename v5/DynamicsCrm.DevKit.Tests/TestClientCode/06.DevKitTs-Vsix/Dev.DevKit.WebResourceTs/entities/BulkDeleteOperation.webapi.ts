/**
 * BulkDeleteOperation.webapi.ts - BulkDeleteOperation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for BulkDeleteOperation
 * All fields return string representation of their values
 */
export interface IBulkDeleteOperationFormattedValue {
	readonly AsyncOperationId: string;
	readonly BulkDeleteOperationId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly FailureCount: string;
	readonly IsRecurring: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly NextRun_UtcDateAndTime: string;
	readonly OrderedQuerySetXml: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningUser: string;
	readonly ProcessingQEIndex: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly SuccessCount: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
}

/**
 * BulkDeleteOperation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IBulkDeleteOperationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IBulkDeleteOperationFormattedValue;
	/** Unique identifier of the system job that created this record */
	readonly AsyncOperationId: DevKit.Guid | null;
	/** Unique identifier of the bulk deletion job. */
	readonly BulkDeleteOperationId: DevKit.Guid | null;
	/** Unique identifier of the user who created the bulk deletion job. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the bulk deletion job was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the bulkdeleteoperation. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Number of records that could not be deleted by the bulk deletion job. */
	readonly FailureCount: number | null;
	/** Information about if recurrence is defined for the bulk deletion job. */
	readonly IsRecurring: boolean | null;
	/** Unique identifier of the user who last modified the bulk deletion job. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the bulk deletion job record was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the bulkdeleteoperation. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the bulk deletion job. */
	readonly Name: string | null;
	/** Next scheduled time for the bulk deletion job to run. */
	readonly NextRun_UtcDateAndTime: Date | null;
	/** Fetch XML of the ordered query set. */
	readonly OrderedQuerySetXml: string | null;
	/** Unique identifier of the user or team who owns the bulk delete operation. */
	readonly OwnerId: DevKit.Guid | null;
	/** Business unit that owns the bulk deletion job. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Business user what owns the bulk delete operation. */
	readonly OwningUser: DevKit.Guid | null;
	/** Index of the ordered query expression that defines the deletion set. */
	readonly ProcessingQEIndex: number | null;
	/** Status of the bulk deletion job. */
	readonly StateCode: number | null;
	/** Reason for the status of the bulk deletion job. */
	readonly StatusCode: number | null;
	/** Number of records deleted by the bulk deletion job. */
	readonly SuccessCount: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const BulkDeleteOperationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AsyncOperationId: { schemaName: 'AsyncOperationId', logicalName: '_asyncoperationid_value', readOnly: true, entityCollectionName: 'asyncoperations', entityLogicalName: 'asyncoperation' },
	BulkDeleteOperationId: { logicalName: 'bulkdeleteoperationid', readOnly: true },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	FailureCount: { logicalName: 'failurecount', readOnly: true, type: 'Integer' },
	IsRecurring: { logicalName: 'isrecurring', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name', readOnly: true },
	NextRun_UtcDateAndTime: { logicalName: 'nextrun', readOnly: true, type: 'DateTime' },
	OrderedQuerySetXml: { logicalName: 'orderedquerysetxml', readOnly: true },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ProcessingQEIndex: { logicalName: 'processingqeindex', readOnly: true, type: 'Integer' },
	StateCode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', readOnly: true, type: 'Integer' },
	SuccessCount: { logicalName: 'successcount', readOnly: true, type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * BulkDeleteOperation WebApi class for early-bound style coding
 * Usage: const bulkDeleteOperation = new BulkDeleteOperationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class BulkDeleteOperationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IBulkDeleteOperationApi>(entity, 'bulkdeleteoperation', 'bulkdeleteoperations', BulkDeleteOperationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface BulkDeleteOperationApi extends IBulkDeleteOperationApi { }
