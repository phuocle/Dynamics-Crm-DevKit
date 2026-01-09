/**
 * PostFollow.webapi.ts - PostFollow WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * PostFollow WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPostFollowApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IPostFollowApi, 'FormattedValue'>]: string };
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the follow. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user who owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Shows the ID of the post follow. */
	PostFollowId: DevKit.Guid | null;
	/** Internal Use Only */
	readonly PostToYammer: boolean | null;
	/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
	RegardingObjectId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of post follow. */
	readonly VersionNumber: number | null;
	/** Internal Use Only */
	readonly YammerPostState: number | null;
	/** Internal Use Only */
	readonly YammerRetryCount: number | null;
}

const PostFollowFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PostFollowId: { logicalName: 'postfollowid' },
	PostToYammer: { logicalName: 'posttoyammer', readOnly: true, type: 'Boolean' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	YammerPostState: { logicalName: 'yammerpoststate', readOnly: true, type: 'Integer' },
	YammerRetryCount: { logicalName: 'yammerretrycount', readOnly: true, type: 'Integer' },
};

/**
 * PostFollow WebApi class for early-bound style coding
 * Usage: const postFollow = new PostFollowApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PostFollowApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPostFollowApi>(entity, 'postfollow', 'postfollows', PostFollowFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PostFollowApi extends IPostFollowApi { }
