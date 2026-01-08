/**
 * msdyn_richtextfile.webapi.ts - msdyn_richtextfile WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_richtextfile
 * All fields return string representation of their values
 */
export interface Imsdyn_richtextfileFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msdyn_fileblob_name: string;
	readonly msdyn_imageblob: string;
	readonly msdyn_imageblobId: string;
	readonly msdyn_name: string;
	readonly msdyn_parententity_fieldname: string;
	readonly msdyn_parententityname: string;
	readonly msdyn_parentid: string;
	readonly msdyn_richtextfileId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_richtextfile WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_richtextfileApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_richtextfileFormattedValue;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Base64 encoded file content for Rich Text Attachments */
	readonly msdyn_fileblob_name: string | null;
	/** Base64 encoded image content for Rich Text Attachments */
	msdyn_imageblob: string | null;
	readonly msdyn_imageblobId: DevKit.Guid | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** Parent Entity Field Name */
	msdyn_parententity_fieldname: string | null;
	/** Parent Entity Name */
	msdyn_parententityname: string | null;
	/** Parent ID */
	msdyn_parentid: string | null;
	/** Unique identifier for entity instances */
	msdyn_richtextfileId: DevKit.Guid | null;
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
	/** Status of the Rich Text Attachment */
	statecode: number | null;
	/** Reason for the status of the Rich Text Attachment */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_richtextfileFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_fileblob_name: { logicalName: 'msdyn_fileblob', readOnly: true },
	msdyn_imageblob: { logicalName: 'msdyn_imageblob' },
	msdyn_imageblobId: { logicalName: 'msdyn_imageblobid', readOnly: true },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_parententity_fieldname: { logicalName: 'msdyn_parententity_fieldname' },
	msdyn_parententityname: { logicalName: 'msdyn_parententityname' },
	msdyn_parentid: { logicalName: 'msdyn_parentid' },
	msdyn_richtextfileId: { logicalName: 'msdyn_richtextfileid' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_richtextfile WebApi class for early-bound style coding
 * Usage: const msdyn_richtextfile = new msdyn_richtextfileApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_richtextfileApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_richtextfileApi>(entity, 'msdyn_richtextfile', 'msdyn_richtextfiles', msdyn_richtextfileFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_richtextfileApi extends Imsdyn_richtextfileApi { }
