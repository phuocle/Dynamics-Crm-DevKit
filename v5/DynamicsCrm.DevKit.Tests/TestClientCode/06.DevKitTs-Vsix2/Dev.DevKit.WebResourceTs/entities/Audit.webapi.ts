/**
 * Audit.webapi.ts - Audit WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Audit WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAuditApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAuditApi, 'FormattedValue'>]: string };
	/** Actions the user can perform that cause a change */
	readonly Action: number | null;
	/** Additional Info for Audit */
	AdditionalInfo: string | null;
	/** Contains a CSV of the ColumnNumber metadata property of attributes */
	readonly AttributeMask: string | null;
	/** Unique identifier of the auditing instance */
	readonly AuditId: DevKit.Guid | null;
	/** Unique identifier of the calling user in case of an impersonated call */
	readonly CallingUserId: DevKit.Guid | null;
	/** For given audit action, contains a string value describing the change details when corresponding IsAuditEnabled property is True */
	readonly ChangeData: string | null;
	/** Date and time when the audit record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the record that is being audited */
	readonly ObjectId: DevKit.Guid | null;
	/** The action that causes the audit--it will be create, delete, update, upsert or archive */
	readonly Operation: number | null;
	/** Unique identifier of the object with which the record is associated. */
	RegardingObjectId: DevKit.Guid | null;
	/** Time to live in seconds for audit record */
	readonly TimeToLiveInSeconds: number | null;
	/** Unique identifier for multiple changes that are part of a single operation; this field contains the same GUID for all the audit rows generated in a single transaction */
	readonly TransactionId: DevKit.Guid | null;
	/** Additional information associated to the user who caused the change. */
	UserAdditionalInfo: string | null;
	/** Unique identifier of the user who caused a change */
	readonly UserId: DevKit.Guid | null;
	/** Version number of the audit. */
	readonly VersionNumber: number | null;
}

const AuditFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Action: { logicalName: 'action', readOnly: true, type: 'Integer' },
	AdditionalInfo: { logicalName: 'additionalinfo' },
	AttributeMask: { logicalName: 'attributemask', readOnly: true },
	AuditId: { logicalName: 'auditid', readOnly: true },
	CallingUserId: { schemaName: 'CallingUserId', logicalName: '_callinguserid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ChangeData: { logicalName: 'changedata', readOnly: true },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	ObjectId: { logicalName: 'objectid', readOnly: true },
	Operation: { logicalName: 'operation', readOnly: true, type: 'Integer' },
	RegardingObjectId: { logicalName: 'regardingobjectid' },
	TimeToLiveInSeconds: { logicalName: 'timetoliveinseconds', readOnly: true, type: 'Integer' },
	TransactionId: { logicalName: 'transactionid', readOnly: true },
	UserAdditionalInfo: { logicalName: 'useradditionalinfo' },
	UserId: { schemaName: 'UserId', logicalName: '_userid_value', readOnly: true, entityCollectionName: 'externalparties', entityLogicalName: 'externalparty' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Audit WebApi class for early-bound style coding
 * Usage: const audit = new AuditApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AuditApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAuditApi>(entity, 'audit', 'audits', AuditFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AuditApi extends IAuditApi { }
