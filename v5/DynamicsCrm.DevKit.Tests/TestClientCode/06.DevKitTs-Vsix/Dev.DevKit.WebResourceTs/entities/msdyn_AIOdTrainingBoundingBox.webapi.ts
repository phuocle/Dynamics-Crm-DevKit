/**
 * msdyn_AIOdTrainingBoundingBox.webapi.ts - msdyn_AIOdTrainingBoundingBox WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_AIOdTrainingBoundingBox
 * All fields return string representation of their values
 */
export interface Imsdyn_AIOdTrainingBoundingBoxFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msdyn_AIOdLabelId: string;
	readonly msdyn_AIOdTrainingBoundingBoxId: string;
	readonly msdyn_AIOdTrainingImageId: string;
	readonly msdyn_Height: string;
	readonly msdyn_Left: string;
	readonly msdyn_name: string;
	readonly msdyn_Top: string;
	readonly msdyn_Width: string;
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
 * msdyn_AIOdTrainingBoundingBox WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_AIOdTrainingBoundingBoxApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_AIOdTrainingBoundingBoxFormattedValue;
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
	/** Unique identifier for Label associated with Training Bounding Box. */
	msdyn_AIOdLabelId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	msdyn_AIOdTrainingBoundingBoxId: DevKit.Guid | null;
	/** Unique identifier for Training Image associated with TrainingBoundingBox. */
	msdyn_AIOdTrainingImageId: DevKit.Guid | null;
	/** Height */
	msdyn_Height: number | null;
	/** Left */
	msdyn_Left: number | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** Top */
	msdyn_Top: number | null;
	/** Width */
	msdyn_Width: number | null;
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
	/** Status of the TrainingBoundingBox */
	statecode: number | null;
	/** Reason for the status of the TrainingBoundingBox */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_AIOdTrainingBoundingBoxFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AIOdLabelId: { schemaName: 'msdyn_AIOdLabelId', logicalName: '_msdyn_aiodlabelid_value', entityCollectionName: 'msdyn_aiodlabels', entityLogicalName: 'msdyn_aiodlabel' },
	msdyn_AIOdTrainingBoundingBoxId: { logicalName: 'msdyn_aiodtrainingboundingboxid' },
	msdyn_AIOdTrainingImageId: { schemaName: 'msdyn_AIOdTrainingImageId', logicalName: '_msdyn_aiodtrainingimageid_value', entityCollectionName: 'msdyn_aiodtrainingimages', entityLogicalName: 'msdyn_aiodtrainingimage' },
	msdyn_Height: { logicalName: 'msdyn_height', type: 'Number' },
	msdyn_Left: { logicalName: 'msdyn_left', type: 'Number' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_Top: { logicalName: 'msdyn_top', type: 'Number' },
	msdyn_Width: { logicalName: 'msdyn_width', type: 'Number' },
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
 * msdyn_AIOdTrainingBoundingBox WebApi class for early-bound style coding
 * Usage: const msdyn_AIOdTrainingBoundingBox = new msdyn_AIOdTrainingBoundingBoxApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_AIOdTrainingBoundingBoxApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_AIOdTrainingBoundingBoxApi>(entity, 'msdyn_aiodtrainingboundingbox', 'msdyn_aiodtrainingboundingboxes', msdyn_AIOdTrainingBoundingBoxFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_AIOdTrainingBoundingBoxApi extends Imsdyn_AIOdTrainingBoundingBoxApi { }
