/**
 * Post.webapi.ts - Post WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for Post
 * All fields return string representation of their values
 */
export interface IPostFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly LargeText: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly PostId: string;
	readonly PostRegardingId: string;
	readonly PostToYammer: string;
	readonly RegardingObjectId: string;
	readonly RegardingObjectOwnerId: string;
	readonly RegardingObjectOwningBusinessUnit: string;
	readonly Source: string;
	readonly Text: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly Type: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly YammerPostState: string;
	readonly YammerRetryCount: string;
}

/**
 * Post WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPostApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IPostFormattedValue;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Shows the text of a post. */
	LargeText: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the solution. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	PostId: DevKit.Guid | null;
	/** Unique identifier of the post regarding with which the post is associated. */
	readonly PostRegardingId: DevKit.Guid | null;
	/** Internal use only. */
	readonly PostToYammer: boolean | null;
	/** Choose the parent record for the post to identify the customer, opportunity, case, or other record that the post most closely relates to. */
	RegardingObjectId: DevKit.Guid | null;
	/** Unique identifier of the user or team who owns the regarding object. */
	readonly RegardingObjectOwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the regarding object. */
	readonly RegardingObjectOwningBusinessUnit: DevKit.Guid | null;
	/** Select whether the post was created manually or automatically. */
	Source: number | null;
	/** Shows the text of a post. If this is a manual post, it appears in plain text. If this is an auto post, it appears in XML. */
	Text: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Select the post type. */
	Type: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Internal use only. */
	readonly YammerPostState: number | null;
	/** Internal use only. */
	readonly YammerRetryCount: number | null;
}

const PostFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	LargeText: { logicalName: 'largetext' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	PostId: { logicalName: 'postid' },
	PostRegardingId: { schemaName: 'PostRegardingId', logicalName: '_postregardingid_value', readOnly: true, entityCollectionName: 'postregardings', entityLogicalName: 'postregarding' },
	PostToYammer: { logicalName: 'posttoyammer', readOnly: true, type: 'Boolean' },
	RegardingObjectId: { logicalName: 'regardingobjectid' },
	RegardingObjectOwnerId: { schemaName: 'RegardingObjectOwnerId', logicalName: '_regardingobjectownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	RegardingObjectOwningBusinessUnit: { schemaName: 'RegardingObjectOwningBusinessUnit', logicalName: '_regardingobjectowningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	Source: { logicalName: 'source', type: 'Integer' },
	Text: { logicalName: 'text' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	Type: { logicalName: 'type', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	YammerPostState: { logicalName: 'yammerpoststate', readOnly: true, type: 'Integer' },
	YammerRetryCount: { logicalName: 'yammerretrycount', readOnly: true, type: 'Integer' },
};

/**
 * Post WebApi class for early-bound style coding
 * Usage: const post = new PostApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PostApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPostApi>(entity, 'post', 'posts', PostFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PostApi extends IPostApi { }
