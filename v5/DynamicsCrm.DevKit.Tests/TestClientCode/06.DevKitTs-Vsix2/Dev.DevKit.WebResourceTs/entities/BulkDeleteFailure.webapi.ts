/**
 * BulkDeleteFailure.webapi.ts - BulkDeleteFailure WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * BulkDeleteFailure WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IBulkDeleteFailureApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IBulkDeleteFailureApi, 'FormattedValue'>]: string };
	/** Unique identifier of the system job that created this record. */
	readonly AsyncOperationId: DevKit.Guid | null;
	/** Unique identifier of the bulk deletion failure record. */
	readonly BulkDeleteFailureId: DevKit.Guid | null;
	/** Unique identifier of the bulk operation job which created this record */
	readonly BulkDeleteOperationId: DevKit.Guid | null;
	/** Description of the error. */
	readonly ErrorDescription: string | null;
	/** Error code for the failed bulk deletion. */
	readonly ErrorNumber: number | null;
	/** Index of the ordered query expression that retrieved this record. */
	readonly OrderedQueryIndex: number | null;
	/** Unique identifier of the user or team who owns the bulk operation log. */
	readonly OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the bulk deletion failure. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the user who owns the bulk deletion failure record.  */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the record that can not be deleted. */
	readonly RegardingObjectId: DevKit.Guid | null;
}

const BulkDeleteFailureFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AsyncOperationId: { schemaName: 'AsyncOperationId', logicalName: '_asyncoperationid_value', readOnly: true, entityCollectionName: 'asyncoperations', entityLogicalName: 'asyncoperation' },
	BulkDeleteFailureId: { logicalName: 'bulkdeletefailureid', readOnly: true },
	BulkDeleteOperationId: { schemaName: 'BulkDeleteOperationId', logicalName: '_bulkdeleteoperationid_value', readOnly: true, entityCollectionName: 'bulkdeleteoperations', entityLogicalName: 'bulkdeleteoperation' },
	ErrorDescription: { logicalName: 'errordescription', readOnly: true },
	ErrorNumber: { logicalName: 'errornumber', readOnly: true, type: 'Integer' },
	OrderedQueryIndex: { logicalName: 'orderedqueryindex', readOnly: true, type: 'Integer' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit', readOnly: true },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', readOnly: true, entityCollectionName: 'accounts', entityLogicalName: 'account' },
};

/**
 * BulkDeleteFailure WebApi class for early-bound style coding
 * Usage: const bulkDeleteFailure = new BulkDeleteFailureApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class BulkDeleteFailureApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IBulkDeleteFailureApi>(entity, 'bulkdeletefailure', 'bulkdeletefailures', BulkDeleteFailureFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface BulkDeleteFailureApi extends IBulkDeleteFailureApi { }
