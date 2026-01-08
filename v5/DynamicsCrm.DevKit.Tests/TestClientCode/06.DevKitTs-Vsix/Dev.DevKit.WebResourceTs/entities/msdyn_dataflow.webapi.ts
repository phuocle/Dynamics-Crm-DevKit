/**
 * msdyn_dataflow.webapi.ts - msdyn_dataflow WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_dataflow
 * All fields return string representation of their values
 */
export interface Imsdyn_dataflowFormattedValue {
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msdyn_dataflowId: string;
	readonly msdyn_Description: string;
	readonly msdyn_DestinationADLS: string;
	readonly msdyn_EmailSettings: string;
	readonly msdyn_GatewayObjectId: string;
	readonly msdyn_InternalVersion: string;
	readonly msdyn_MashupDocument: string;
	readonly msdyn_MashupSettings: string;
	readonly msdyn_name: string;
	readonly msdyn_OriginalDataflowId: string;
	readonly msdyn_RefreshHistory: string;
	readonly msdyn_RefreshSettings: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly SolutionId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SupportingSolutionId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_dataflow WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_dataflowApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_dataflowFormattedValue;
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
	/** Unique identifier for entity instances */
	msdyn_dataflowId: DevKit.Guid | null;
	/** Description */
	msdyn_Description: string | null;
	/** DestinationADLS */
	msdyn_DestinationADLS: string | null;
	/** EmailSettings */
	msdyn_EmailSettings: string | null;
	/** GatewayObjectId */
	msdyn_GatewayObjectId: string | null;
	/** InternalVersion */
	msdyn_InternalVersion: string | null;
	/** Mashup document */
	msdyn_MashupDocument: string | null;
	/** Mashup Settings (JSON) */
	msdyn_MashupSettings: string | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** OriginalDataflowId */
	msdyn_OriginalDataflowId: string | null;
	/** Refresh History (JSON) */
	msdyn_RefreshHistory: string | null;
	/** RefreshSettings */
	msdyn_RefreshSettings: string | null;
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
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Dataflow */
	statecode: number | null;
	/** Reason for the status of the Dataflow */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_dataflowFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_dataflowId: { logicalName: 'msdyn_dataflowid' },
	msdyn_Description: { logicalName: 'msdyn_description' },
	msdyn_DestinationADLS: { logicalName: 'msdyn_destinationadls' },
	msdyn_EmailSettings: { logicalName: 'msdyn_emailsettings' },
	msdyn_GatewayObjectId: { logicalName: 'msdyn_gatewayobjectid' },
	msdyn_InternalVersion: { logicalName: 'msdyn_internalversion' },
	msdyn_MashupDocument: { logicalName: 'msdyn_mashupdocument' },
	msdyn_MashupSettings: { logicalName: 'msdyn_mashupsettings' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_OriginalDataflowId: { logicalName: 'msdyn_originaldataflowid' },
	msdyn_RefreshHistory: { logicalName: 'msdyn_refreshhistory' },
	msdyn_RefreshSettings: { logicalName: 'msdyn_refreshsettings' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_dataflow WebApi class for early-bound style coding
 * Usage: const msdyn_dataflow = new msdyn_dataflowApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_dataflowApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_dataflowApi>(entity, 'msdyn_dataflow', 'msdyn_dataflows', msdyn_dataflowFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_dataflowApi extends Imsdyn_dataflowApi { }
