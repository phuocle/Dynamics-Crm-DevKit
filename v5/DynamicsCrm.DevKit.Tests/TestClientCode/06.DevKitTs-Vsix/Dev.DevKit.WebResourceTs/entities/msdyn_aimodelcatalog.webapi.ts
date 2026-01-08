/**
 * msdyn_aimodelcatalog.webapi.ts - msdyn_aimodelcatalog WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_aimodelcatalog WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_aimodelcatalogApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_aimodelcatalogApi, 'FormattedValue'>]: string };
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
	msdyn_aimodelcatalogId: DevKit.Guid | null;
	/** Underlying model used by the deployed model endpoint */
	readonly msdyn_basemodelname: string | null;
	/** Internal use only, computed column. */
	readonly msdyn_canuseconnection: boolean | null;
	/** Connection Reference Id */
	msdyn_connectionreferenceid: DevKit.Guid | null;
	/** JSON format to store additional metadata about the base model */
	msdyn_modelconfiguration: string | null;
	/** Model Description */
	msdyn_modeldescription: string | null;
	/** Option Set of Model Type. It could be BYOM or FineTuning. */
	msdyn_modelsubmissiontype: number | null;
	/** Model Task Type. None for BYOM, QueryBoosting, Classification etc. */
	msdyn_modeltasktype: number | null;
	/** Model Name */
	msdyn_name: string | null;
	/** Option Set of providers like Foundry. Other 3P providers such as Gemini to be added as needed */
	msdyn_providertype: number | null;
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
	/** Status of the AI Model Catalog */
	statecode: number | null;
	/** Reason for the status of the AI Model Catalog */
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

const msdyn_aimodelcatalogFieldConfig: DevKit.IWebApiFieldConfigMap = {
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
	msdyn_aimodelcatalogId: { logicalName: 'msdyn_aimodelcatalogid' },
	msdyn_basemodelname: { logicalName: 'msdyn_basemodelname', readOnly: true },
	msdyn_canuseconnection: { logicalName: 'msdyn_canuseconnection', readOnly: true, type: 'Boolean' },
	msdyn_connectionreferenceid: { schemaName: 'msdyn_connectionreferenceid', logicalName: '_msdyn_connectionreferenceid_value', entityCollectionName: 'connectionreferences', entityLogicalName: 'connectionreference' },
	msdyn_modelconfiguration: { logicalName: 'msdyn_modelconfiguration' },
	msdyn_modeldescription: { logicalName: 'msdyn_modeldescription' },
	msdyn_modelsubmissiontype: { logicalName: 'msdyn_modelsubmissiontype', type: 'Integer' },
	msdyn_modeltasktype: { logicalName: 'msdyn_modeltasktype', type: 'Integer' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_providertype: { logicalName: 'msdyn_providertype', type: 'Integer' },
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
 * msdyn_aimodelcatalog WebApi class for early-bound style coding
 * Usage: const msdyn_aimodelcatalog = new msdyn_aimodelcatalogApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_aimodelcatalogApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_aimodelcatalogApi>(entity, 'msdyn_aimodelcatalog', 'msdyn_aimodelcatalogs', msdyn_aimodelcatalogFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_aimodelcatalogApi extends Imsdyn_aimodelcatalogApi { }
