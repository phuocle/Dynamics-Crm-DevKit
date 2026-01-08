/**
 * EmailHash.webapi.ts - EmailHash WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for EmailHash
 * All fields return string representation of their values
 */
export interface IEmailHashFormattedValue {
	readonly ActivityId: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly EmailHashId: string;
	readonly Hash: string;
	readonly HashType: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningUser: string;
	readonly VersionNumber: string;
}

/**
 * EmailHash WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IEmailHashApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IEmailHashFormattedValue;
	/** Unique identifier of the activity with which the hash is associated. */
	ActivityId: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the email hash. */
	EmailHashId: DevKit.Guid | null;
	/** Hash value. */
	Hash: number | null;
	/** Hash type. */
	HashType: number | null;
	/** Unique identifier of the user or team who owns the email hash. */
	readonly OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the email hash. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the user who owns the email hash. */
	readonly OwningUser: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const EmailHashFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActivityId: { schemaName: 'ActivityId', logicalName: '_activityid_value', entityCollectionName: 'activitypointers', entityLogicalName: 'activitypointer' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	EmailHashId: { logicalName: 'emailhashid' },
	Hash: { logicalName: 'hash', type: 'Integer' },
	HashType: { logicalName: 'hashtype', type: 'Integer' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit', readOnly: true },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * EmailHash WebApi class for early-bound style coding
 * Usage: const emailHash = new EmailHashApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class EmailHashApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IEmailHashApi>(entity, 'emailhash', 'emailhashs', EmailHashFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface EmailHashApi extends IEmailHashApi { }
