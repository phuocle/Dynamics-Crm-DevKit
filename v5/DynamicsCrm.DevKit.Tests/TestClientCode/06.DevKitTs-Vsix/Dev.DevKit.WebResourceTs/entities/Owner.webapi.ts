/**
 * Owner.webapi.ts - Owner WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for Owner
 * All fields return string representation of their values
 */
export interface IOwnerFormattedValue {
	readonly Name: string;
	readonly OwnerId: string;
	readonly VersionNumber: string;
	readonly YomiName: string;
}

/**
 * Owner WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IOwnerApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IOwnerFormattedValue;
	/** Name of the Owner. */
	readonly Name: string | null;
	/** Unique identifier for the Owner: systemuserid or teamid. */
	OwnerId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
	/** Pronunciation of the name of the owner, written in phonetic hiragana or katakana characters. */
	readonly YomiName: string | null;
}

const OwnerFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Name: { logicalName: 'name', readOnly: true },
	OwnerId: { logicalName: 'ownerid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	YomiName: { logicalName: 'yominame', readOnly: true },
};

/**
 * Owner WebApi class for early-bound style coding
 * Usage: const owner = new OwnerApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class OwnerApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IOwnerApi>(entity, 'owner', 'owners', OwnerFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface OwnerApi extends IOwnerApi { }
