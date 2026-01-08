/**
 * ChannelAccessProfileEntityAccessLevel.webapi.ts - ChannelAccessProfileEntityAccessLevel WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ChannelAccessProfileEntityAccessLevel
 * All fields return string representation of their values
 */
export interface IChannelAccessProfileEntityAccessLevelFormattedValue {
	readonly ChannelAccessProfileEntityAccessLevelId: string;
	readonly ChannelAccessProfileEntityAccessLevelIdUnique: string;
	readonly ChannelAccessProfileId: string;
	readonly ComponentState: string;
	readonly EntityAccessLevelDepthMask: string;
	readonly EntityAccessLevelId: string;
	readonly IsManaged: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * ChannelAccessProfileEntityAccessLevel WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IChannelAccessProfileEntityAccessLevelApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IChannelAccessProfileEntityAccessLevelFormattedValue;
	/** Unique identifier of the entity access level associated with the channel access profile. */
	ChannelAccessProfileEntityAccessLevelId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ChannelAccessProfileEntityAccessLevelIdUnique: DevKit.Guid | null;
	/** Unique identifier of the channel access profile. */
	readonly ChannelAccessProfileId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** System-generated attribute that stores the privileges associated with the role. */
	EntityAccessLevelDepthMask: number | null;
	/** Unique identifier of the entity access level associated with the channel access profile */
	readonly EntityAccessLevelId: DevKit.Guid | null;
	readonly IsManaged: boolean | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const ChannelAccessProfileEntityAccessLevelFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ChannelAccessProfileEntityAccessLevelId: { logicalName: 'channelaccessprofileentityaccesslevelid' },
	ChannelAccessProfileEntityAccessLevelIdUnique: { logicalName: 'channelaccessprofileentityaccesslevelidunique', readOnly: true },
	ChannelAccessProfileId: { logicalName: 'channelaccessprofileid', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	EntityAccessLevelDepthMask: { logicalName: 'entityaccessleveldepthmask', type: 'Integer' },
	EntityAccessLevelId: { logicalName: 'entityaccesslevelid', readOnly: true },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ChannelAccessProfileEntityAccessLevel WebApi class for early-bound style coding
 * Usage: const channelAccessProfileEntityAccessLevel = new ChannelAccessProfileEntityAccessLevelApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ChannelAccessProfileEntityAccessLevelApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IChannelAccessProfileEntityAccessLevelApi>(entity, 'channelaccessprofileentityaccesslevel', '', ChannelAccessProfileEntityAccessLevelFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ChannelAccessProfileEntityAccessLevelApi extends IChannelAccessProfileEntityAccessLevelApi { }
