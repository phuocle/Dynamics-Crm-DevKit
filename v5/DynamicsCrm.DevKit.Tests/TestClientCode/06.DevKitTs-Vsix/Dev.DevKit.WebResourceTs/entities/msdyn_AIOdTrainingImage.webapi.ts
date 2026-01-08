/**
 * msdyn_AIOdTrainingImage.webapi.ts - msdyn_AIOdTrainingImage WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_AIOdTrainingImage WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_AIOdTrainingImageApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_AIOdTrainingImageApi, 'FormattedValue'>]: string };
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
	/** Unique identifier for AIConfiguration associated with Training Image. */
	msdyn_AIConfigurationId: DevKit.Guid | null;
	/** Unique identifier for Image associated with Training Image. */
	msdyn_AIOdImageId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	msdyn_AIOdTrainingImageId: DevKit.Guid | null;
	/** Last Modified Date */
	msdyn_LastModifiedDate_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** SourceType */
	msdyn_SourceType: string | null;
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
	/** Status of the Training Image */
	statecode: number | null;
	/** Reason for the status of the Training Image */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_AIOdTrainingImageFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AIConfigurationId: { schemaName: 'msdyn_AIConfigurationId', logicalName: '_msdyn_aiconfigurationid_value', entityCollectionName: 'msdyn_aiconfigurations', entityLogicalName: 'msdyn_aiconfiguration' },
	msdyn_AIOdImageId: { schemaName: 'msdyn_AIOdImageId', logicalName: '_msdyn_aiodimageid_value', entityCollectionName: 'msdyn_aiodimages', entityLogicalName: 'msdyn_aiodimage' },
	msdyn_AIOdTrainingImageId: { logicalName: 'msdyn_aiodtrainingimageid' },
	msdyn_LastModifiedDate_UtcDateAndTime: { logicalName: 'msdyn_lastmodifieddate', type: 'DateTime' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_SourceType: { logicalName: 'msdyn_sourcetype' },
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
 * msdyn_AIOdTrainingImage WebApi class for early-bound style coding
 * Usage: const msdyn_AIOdTrainingImage = new msdyn_AIOdTrainingImageApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_AIOdTrainingImageApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_AIOdTrainingImageApi>(entity, 'msdyn_aiodtrainingimage', 'msdyn_aiodtrainingimages', msdyn_AIOdTrainingImageFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_AIOdTrainingImageApi extends Imsdyn_AIOdTrainingImageApi { }
