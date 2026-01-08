/**
 * InterProcessLock.webapi.ts - InterProcessLock WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for InterProcessLock
 * All fields return string representation of their values
 */
export interface IInterProcessLockFormattedValue {
	readonly InterProcessLockId: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly Token: string;
}

/**
 * InterProcessLock WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IInterProcessLockApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IInterProcessLockFormattedValue;
	/** Unique identifier of the Inter Process Lock record. */
	InterProcessLockId: DevKit.Guid | null;
	/** Date and time when the record was last modified. */
	ModifiedOn_UtcDateAndTime: Date | null;
	/** Lock token. */
	Token: DevKit.Guid | null;
}

const InterProcessLockFieldConfig: DevKit.IWebApiFieldConfigMap = {
	InterProcessLockId: { logicalName: 'interprocesslockid' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', type: 'DateTime' },
	Token: { logicalName: 'token' },
};

/**
 * InterProcessLock WebApi class for early-bound style coding
 * Usage: const interProcessLock = new InterProcessLockApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class InterProcessLockApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IInterProcessLockApi>(entity, 'interprocesslock', 'interprocesslocks', InterProcessLockFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface InterProcessLockApi extends IInterProcessLockApi { }
