/**
 * msdyn_dmsrequest.webapi.ts - msdyn_dmsrequest WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_dmsrequest
 * All fields return string representation of their values
 */
export interface Imsdyn_dmsrequestFormattedValue {
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
	readonly msdyn_AdditionalProperties: string;
	readonly msdyn_CdmEntityInformation: string;
	readonly msdyn_CdmToDataverseEntityMapping: string;
	readonly msdyn_CorrelationId: string;
	readonly msdyn_DatalakeFolderName: string;
	readonly msdyn_DataverseEntityInformation: string;
	readonly msdyn_dmsrequestId: string;
	readonly msdyn_ModelJsonPath: string;
	readonly msdyn_RequestParameters: string;
	readonly msdyn_RequestType: string;
	readonly msdyn_RequestUniqueName: string;
	readonly msdyn_UserObjectId: string;
	readonly msdyn_UserTenantId: string;
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
 * msdyn_dmsrequest WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_dmsrequestApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_dmsrequestFormattedValue;
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
	/** Json with property bag. */
	msdyn_AdditionalProperties: string | null;
	/** Dictionary of Entity Name and CDM Entity Information. */
	msdyn_CdmEntityInformation: string | null;
	/** Json with Mapping with Cdm entity and dataverse entity */
	msdyn_CdmToDataverseEntityMapping: string | null;
	/** Correlation Id */
	msdyn_CorrelationId: string | null;
	/** Datalake Folder Name  */
	msdyn_DatalakeFolderName: string | null;
	/** Dictionary of Entity Name and Dataverse Entity Information. */
	msdyn_DataverseEntityInformation: string | null;
	/** Unique identifier for entity instances */
	msdyn_dmsrequestId: DevKit.Guid | null;
	/** Model Json Path  */
	msdyn_ModelJsonPath: string | null;
	/** Json with parameters specific to request type. */
	msdyn_RequestParameters: string | null;
	/** Request Type */
	msdyn_RequestType: string | null;
	/** Request Unique Name */
	msdyn_RequestUniqueName: string | null;
	/** User Object Id  */
	msdyn_UserObjectId: string | null;
	/** User Tenant Id */
	msdyn_UserTenantId: string | null;
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
	/** Status of the msdyn_dmsrequest */
	statecode: number | null;
	/** Reason for the status of the msdyn_dmsrequest */
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

const msdyn_dmsrequestFieldConfig: DevKit.IWebApiFieldConfigMap = {
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
	msdyn_AdditionalProperties: { logicalName: 'msdyn_additionalproperties' },
	msdyn_CdmEntityInformation: { logicalName: 'msdyn_cdmentityinformation' },
	msdyn_CdmToDataverseEntityMapping: { logicalName: 'msdyn_cdmtodataverseentitymapping' },
	msdyn_CorrelationId: { logicalName: 'msdyn_correlationid' },
	msdyn_DatalakeFolderName: { logicalName: 'msdyn_datalakefoldername' },
	msdyn_DataverseEntityInformation: { logicalName: 'msdyn_dataverseentityinformation' },
	msdyn_dmsrequestId: { logicalName: 'msdyn_dmsrequestid' },
	msdyn_ModelJsonPath: { logicalName: 'msdyn_modeljsonpath' },
	msdyn_RequestParameters: { logicalName: 'msdyn_requestparameters' },
	msdyn_RequestType: { logicalName: 'msdyn_requesttype' },
	msdyn_RequestUniqueName: { logicalName: 'msdyn_requestuniquename' },
	msdyn_UserObjectId: { logicalName: 'msdyn_userobjectid' },
	msdyn_UserTenantId: { logicalName: 'msdyn_usertenantid' },
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
 * msdyn_dmsrequest WebApi class for early-bound style coding
 * Usage: const msdyn_dmsrequest = new msdyn_dmsrequestApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_dmsrequestApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_dmsrequestApi>(entity, 'msdyn_dmsrequest', 'msdyn_dmsrequests', msdyn_dmsrequestFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_dmsrequestApi extends Imsdyn_dmsrequestApi { }
