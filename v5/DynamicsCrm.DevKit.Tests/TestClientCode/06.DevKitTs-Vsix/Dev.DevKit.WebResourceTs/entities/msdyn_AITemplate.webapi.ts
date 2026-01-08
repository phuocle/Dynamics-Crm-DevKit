/**
 * msdyn_AITemplate.webapi.ts - msdyn_AITemplate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_AITemplate
 * All fields return string representation of their values
 */
export interface Imsdyn_AITemplateFormattedValue {
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly IntroducedVersion: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msdyn_AITemplateId: string;
	readonly msdyn_AITemplateIdUnique: string;
	readonly msdyn_DataBinding: string;
	readonly msdyn_defaultrunschedulingoptions: string;
	readonly msdyn_IsTrainable: string;
	readonly msdyn_ModelAction: string;
	readonly msdyn_ResourceInfo: string;
	readonly msdyn_RunConfigSchema: string;
	readonly msdyn_RunDataSpecification: string;
	readonly msdyn_TemplateVersion: string;
	readonly msdyn_TrainingConfigSchema: string;
	readonly msdyn_TrainingDataSpecification: string;
	readonly msdyn_UniqueName: string;
	readonly msdyn_UXConfiguration: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateOnly: string;
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
 * msdyn_AITemplate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_AITemplateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_AITemplateFormattedValue;
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
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	/** Tells whether the component can be customized. */
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
	msdyn_AITemplateId: DevKit.Guid | null;
	/** For internal use only. */
	readonly msdyn_AITemplateIdUnique: DevKit.Guid | null;
	/** Data binding */
	msdyn_DataBinding: string | null;
	/** DefaultRunSchedulingOptions */
	msdyn_defaultrunschedulingoptions: string | null;
	/** IsTrainable */
	msdyn_IsTrainable: boolean | null;
	/** Model Action */
	msdyn_ModelAction: string | null;
	/** ResourceInfo */
	msdyn_ResourceInfo: string | null;
	/** RunConfigSchema */
	msdyn_RunConfigSchema: string | null;
	/** RunDataSpecification */
	msdyn_RunDataSpecification: string | null;
	/** Template Version */
	msdyn_TemplateVersion: number | null;
	/** TrainingConfigSchema */
	msdyn_TrainingConfigSchema: string | null;
	/** TrainingDataSpecification */
	msdyn_TrainingDataSpecification: string | null;
	/** The name of the custom entity. */
	msdyn_UniqueName: string | null;
	/** UXConfiguration */
	msdyn_UXConfiguration: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
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
	/** Status of the AITemplate */
	statecode: number | null;
	/** Reason for the status of the AITemplate */
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

const msdyn_AITemplateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AITemplateId: { logicalName: 'msdyn_aitemplateid' },
	msdyn_AITemplateIdUnique: { logicalName: 'msdyn_aitemplateidunique', readOnly: true },
	msdyn_DataBinding: { logicalName: 'msdyn_databinding' },
	msdyn_defaultrunschedulingoptions: { logicalName: 'msdyn_defaultrunschedulingoptions' },
	msdyn_IsTrainable: { logicalName: 'msdyn_istrainable', type: 'Boolean' },
	msdyn_ModelAction: { logicalName: 'msdyn_modelaction' },
	msdyn_ResourceInfo: { logicalName: 'msdyn_resourceinfo' },
	msdyn_RunConfigSchema: { logicalName: 'msdyn_runconfigschema' },
	msdyn_RunDataSpecification: { logicalName: 'msdyn_rundataspecification' },
	msdyn_TemplateVersion: { logicalName: 'msdyn_templateversion', type: 'Integer' },
	msdyn_TrainingConfigSchema: { logicalName: 'msdyn_trainingconfigschema' },
	msdyn_TrainingDataSpecification: { logicalName: 'msdyn_trainingdataspecification' },
	msdyn_UniqueName: { logicalName: 'msdyn_uniquename' },
	msdyn_UXConfiguration: { logicalName: 'msdyn_uxconfiguration' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
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
 * msdyn_AITemplate WebApi class for early-bound style coding
 * Usage: const msdyn_AITemplate = new msdyn_AITemplateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_AITemplateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_AITemplateApi>(entity, 'msdyn_aitemplate', 'msdyn_aitemplates', msdyn_AITemplateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_AITemplateApi extends Imsdyn_AITemplateApi { }
