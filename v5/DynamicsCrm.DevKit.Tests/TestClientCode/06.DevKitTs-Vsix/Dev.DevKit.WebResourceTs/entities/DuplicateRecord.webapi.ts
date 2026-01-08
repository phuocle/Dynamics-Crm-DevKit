/**
 * DuplicateRecord.webapi.ts - DuplicateRecord WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for DuplicateRecord
 * All fields return string representation of their values
 */
export interface IDuplicateRecordFormattedValue {
	readonly AsyncOperationId: string;
	readonly BaseRecordId: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly DuplicateId: string;
	readonly DuplicateRecordId2: string;
	readonly DuplicateRuleId: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningUser: string;
}

/**
 * DuplicateRecord WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IDuplicateRecordApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IDuplicateRecordFormattedValue;
	/** Unique identifier of the system job that created this record. */
	readonly AsyncOperationId: DevKit.Guid | null;
	/** Unique identifier of the base record. */
	readonly BaseRecordId: DevKit.Guid | null;
	/** Date and time when the duplicate record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the duplicate record. */
	DuplicateId: DevKit.Guid | null;
	/** Unique identifier of the potential duplicate record. */
	readonly DuplicateRecordId2: DevKit.Guid | null;
	/** Unique identifier of the duplicate rule against which this duplicate was found. */
	readonly DuplicateRuleId: DevKit.Guid | null;
	/** Unique identifier of the user or team who owns the duplicate record. */
	readonly OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the duplicate record. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the user who owns the duplicate record. */
	readonly OwningUser: DevKit.Guid | null;
}

const DuplicateRecordFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AsyncOperationId: { schemaName: 'AsyncOperationId', logicalName: '_asyncoperationid_value', readOnly: true, entityCollectionName: 'asyncoperations', entityLogicalName: 'asyncoperation' },
	BaseRecordId: { schemaName: 'BaseRecordId', logicalName: '_baserecordid_value', readOnly: true, entityCollectionName: 'accounts', entityLogicalName: 'account' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	DuplicateId: { logicalName: 'duplicateid' },
	DuplicateRecordId2: { schemaName: 'DuplicateRecordId', logicalName: '_duplicaterecordid_value', readOnly: true, entityCollectionName: 'accounts', entityLogicalName: 'account' },
	DuplicateRuleId: { schemaName: 'DuplicateRuleId', logicalName: '_duplicateruleid_value', readOnly: true, entityCollectionName: 'duplicaterules', entityLogicalName: 'duplicaterule' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit', readOnly: true },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
};

/**
 * DuplicateRecord WebApi class for early-bound style coding
 * Usage: const duplicateRecord = new DuplicateRecordApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class DuplicateRecordApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IDuplicateRecordApi>(entity, 'duplicaterecord', 'duplicaterecords', DuplicateRecordFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface DuplicateRecordApi extends IDuplicateRecordApi { }
