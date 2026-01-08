/**
 * SqlEncryptionAudit.webapi.ts - SqlEncryptionAudit WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SqlEncryptionAudit WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISqlEncryptionAuditApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISqlEncryptionAuditApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the account. */
	readonly CreatedBy: DevKit.Guid | null;
	readonly CreatedOn_UtcDateOnly: Date | null;
}

const SqlEncryptionAuditFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateOnly: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
};

/**
 * SqlEncryptionAudit WebApi class for early-bound style coding
 * Usage: const sqlEncryptionAudit = new SqlEncryptionAuditApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SqlEncryptionAuditApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISqlEncryptionAuditApi>(entity, 'sqlencryptionaudit', 'sqlencryptionaudits', SqlEncryptionAuditFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SqlEncryptionAuditApi extends ISqlEncryptionAuditApi { }
