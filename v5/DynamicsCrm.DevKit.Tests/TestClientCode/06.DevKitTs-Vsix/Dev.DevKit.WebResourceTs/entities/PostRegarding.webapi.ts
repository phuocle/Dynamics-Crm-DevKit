/**
 * PostRegarding.webapi.ts - PostRegarding WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for PostRegarding
 * All fields return string representation of their values
 */
export interface IPostRegardingFormattedValue {
	readonly LatestAutoPostModifiedOn_UtcDateAndTime: string;
	readonly LatestManualPostModifiedOn_UtcDateAndTime: string;
	readonly PostRegardingId: string;
	readonly RegardingObjectId: string;
	readonly RegardingObjectOwnerId: string;
	readonly RegardingObjectOwningBusinessUnit: string;
}

/**
 * PostRegarding WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPostRegardingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IPostRegardingFormattedValue;
	/** Date of Latest Auto Post on the Regarding entity */
	readonly LatestAutoPostModifiedOn_UtcDateAndTime: Date | null;
	/** Date of Latest Manual Post on the Regarding entity */
	readonly LatestManualPostModifiedOn_UtcDateAndTime: Date | null;
	/** Shows the ID of the record that the post is referring to. */
	PostRegardingId: DevKit.Guid | null;
	/** Choose the record that the post relates to. */
	RegardingObjectId: DevKit.Guid | null;
	/** Unique identifier of the user or team who owns the regarding object. */
	RegardingObjectOwnerId: DevKit.Guid | null;
	/** Select the business unit that owns the regarding object. */
	readonly RegardingObjectOwningBusinessUnit: DevKit.Guid | null;
}

const PostRegardingFieldConfig: DevKit.IWebApiFieldConfigMap = {
	LatestAutoPostModifiedOn_UtcDateAndTime: { logicalName: 'latestautopostmodifiedon', readOnly: true, type: 'DateTime' },
	LatestManualPostModifiedOn_UtcDateAndTime: { logicalName: 'latestmanualpostmodifiedon', readOnly: true, type: 'DateTime' },
	PostRegardingId: { logicalName: 'postregardingid' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	RegardingObjectOwnerId: { schemaName: 'RegardingObjectOwnerId', logicalName: '_regardingobjectownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	RegardingObjectOwningBusinessUnit: { schemaName: 'RegardingObjectOwningBusinessUnit', logicalName: '_regardingobjectowningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
};

/**
 * PostRegarding WebApi class for early-bound style coding
 * Usage: const postRegarding = new PostRegardingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PostRegardingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPostRegardingApi>(entity, 'postregarding', 'postregardings', PostRegardingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PostRegardingApi extends IPostRegardingApi { }
