/**
 * Comment.webapi.ts - Comment WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for Comment
 * All fields return string representation of their values
 */
export interface ICommentFormattedValue {
	readonly Anchor: string;
	readonly ArtifactId: string;
	readonly ArtifactType: string;
	readonly Body: string;
	readonly CommentId: string;
	readonly Container: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly Kind: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OriginalAuthorAadId: string;
	readonly OriginalAuthorEmail: string;
	readonly OriginalAuthorFullName: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly Parent: string;
	readonly State: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * Comment WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ICommentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ICommentFormattedValue;
	/** Anchor context for the record within the maker artifact */
	Anchor: string | null;
	/** Unique identifier of the maker artifact */
	ArtifactId: string | null;
	/** Type of the maker artifact */
	ArtifactType: number | null;
	/** Body content for the record */
	Body: string | null;
	/** Unique identifier for entity instances */
	CommentId: DevKit.Guid | null;
	/** Unique identifier for the container of this record */
	Container: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Kind of record */
	Kind: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Required name field */
	Name: string | null;
	/** AadId of the Original Author of the Comment */
	OriginalAuthorAadId: string | null;
	/** Email of the Original Author of the Comment */
	OriginalAuthorEmail: string | null;
	/** Full Name of the Original Author of the Comment */
	OriginalAuthorFullName: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier for the parent of this record */
	Parent: DevKit.Guid | null;
	/** State */
	State: number | null;
	/** Status of the Comment */
	statecode: number | null;
	/** Reason for the status of the Comment */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const CommentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Anchor: { logicalName: 'anchor' },
	ArtifactId: { logicalName: 'artifactid' },
	ArtifactType: { logicalName: 'artifacttype', type: 'Integer' },
	Body: { logicalName: 'body' },
	CommentId: { logicalName: 'commentid' },
	Container: { schemaName: 'Container', logicalName: '_container_value', entityCollectionName: 'comments', entityLogicalName: 'comment' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	Kind: { logicalName: 'kind', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OriginalAuthorAadId: { logicalName: 'originalauthoraadid' },
	OriginalAuthorEmail: { logicalName: 'originalauthoremail' },
	OriginalAuthorFullName: { logicalName: 'originalauthorfullname' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Parent: { schemaName: 'Parent', logicalName: '_parent_value', entityCollectionName: 'appmodules', entityLogicalName: 'appmodule' },
	State: { logicalName: 'state', type: 'Integer' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Comment WebApi class for early-bound style coding
 * Usage: const comment = new CommentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class CommentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ICommentApi>(entity, 'comment', 'comments', CommentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface CommentApi extends ICommentApi { }
