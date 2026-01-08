/**
 * flowmachineimageversion.webapi.ts - flowmachineimageversion WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for flowmachineimageversion
 * All fields return string representation of their values
 */
export interface IflowmachineimageversionFormattedValue {
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly flowmachineimage: string;
	readonly flowmachineimageversionId: string;
	readonly generalizationlogs_name: string;
	readonly ImportSequenceNumber: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly ProvisioningError: string;
	readonly reference: string;
	readonly SolutionId: string;
	readonly sourcemachineid: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly statuserrormessage: string;
	readonly SupportedScenario: string;
	readonly SupportingSolutionId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly Version: string;
	readonly VersionNumber: string;
}

/**
 * flowmachineimageversion WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IflowmachineimageversionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IflowmachineimageversionFormattedValue;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for Flow Machine Image associated with Flow Machine Image Version. */
	flowmachineimage: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	flowmachineimageversionId: DevKit.Guid | null;
	/** File containing logs of image generalization process to help debug provisioning errors. */
	readonly generalizationlogs_name: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Flow machine image provisioning error */
	ProvisioningError: string | null;
	/** The reference to the underlying image, can be an Azure resource, a blob uri or internal resource. */
	reference: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** The Hosted Machine which the image was created from */
	sourcemachineid: DevKit.Guid | null;
	/** Status of the Flow Machine Image Version */
	statecode: number | null;
	/** Reason for the status of the Flow Machine Image Version */
	statuscode: number | null;
	/** Flow Machine Image Version Error Message. */
	statuserrormessage: string | null;
	/** The Flow machine image version supported scenario. */
	SupportedScenario: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** The version of the image */
	Version: string | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const flowmachineimageversionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	flowmachineimage: { schemaName: 'flowmachineimage', logicalName: '_flowmachineimage_value', entityCollectionName: 'flowmachineimages', entityLogicalName: 'flowmachineimage' },
	flowmachineimageversionId: { logicalName: 'flowmachineimageversionid' },
	generalizationlogs_name: { logicalName: 'generalizationlogs', readOnly: true },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ProvisioningError: { logicalName: 'provisioningerror' },
	reference: { logicalName: 'reference' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	sourcemachineid: { schemaName: 'sourcemachineid', logicalName: '_sourcemachineid_value', entityCollectionName: 'flowmachines', entityLogicalName: 'flowmachine' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	statuserrormessage: { logicalName: 'statuserrormessage' },
	SupportedScenario: { logicalName: 'supportedscenario', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	Version: { logicalName: 'version' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * flowmachineimageversion WebApi class for early-bound style coding
 * Usage: const flowmachineimageversion = new flowmachineimageversionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class flowmachineimageversionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IflowmachineimageversionApi>(entity, 'flowmachineimageversion', 'flowmachineimageversions', flowmachineimageversionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface flowmachineimageversionApi extends IflowmachineimageversionApi { }
