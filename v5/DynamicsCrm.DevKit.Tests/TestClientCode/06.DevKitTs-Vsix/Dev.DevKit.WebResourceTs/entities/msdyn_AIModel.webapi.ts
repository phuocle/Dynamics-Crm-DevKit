/**
 * msdyn_AIModel.webapi.ts - msdyn_AIModel WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_AIModel
 * All fields return string representation of their values
 */
export interface Imsdyn_AIModelFormattedValue {
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
	readonly msdyn_ActiveRunConfigurationId: string;
	readonly msdyn_AIModelCatalog: string;
	readonly msdyn_AIModelId: string;
	readonly msdyn_AIModelIdUnique: string;
	readonly msdyn_ModelCreationContext: string;
	readonly msdyn_Name: string;
	readonly msdyn_RetrainWorkflowId: string;
	readonly msdyn_ScheduleInferenceWorkflowId: string;
	readonly msdyn_ShareWithOrganizationOnCreate: string;
	readonly msdyn_TemplateId: string;
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
 * msdyn_AIModel WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_AIModelApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_AIModelFormattedValue;
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
	/** Unique identifier for the active run configuration id associated with AIModel. */
	msdyn_ActiveRunConfigurationId: DevKit.Guid | null;
	/** Lookup to AI Model Catalog */
	msdyn_AIModelCatalog: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	msdyn_AIModelId: DevKit.Guid | null;
	/** For internal use only. */
	readonly msdyn_AIModelIdUnique: DevKit.Guid | null;
	/** ModelCreationContext */
	msdyn_ModelCreationContext: string | null;
	/** The name of the custom entity. */
	msdyn_Name: string | null;
	/** Unique identifier for Retrain Process associated with AI Model. */
	msdyn_RetrainWorkflowId: DevKit.Guid | null;
	/** Unique identifier for Schedule Inference Process associated with AI Model. */
	msdyn_ScheduleInferenceWorkflowId: DevKit.Guid | null;
	/** ShareWithOrganizationOnCreate */
	msdyn_ShareWithOrganizationOnCreate: boolean | null;
	/** Unique identifier for AITemplate associated with AIModel. */
	msdyn_TemplateId: DevKit.Guid | null;
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
	/** Status of the AIModel */
	statecode: number | null;
	/** Reason for the status of the AIModel */
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

const msdyn_AIModelFieldConfig: DevKit.IWebApiFieldConfigMap = {
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
	msdyn_ActiveRunConfigurationId: { logicalName: 'msdyn_activerunconfigurationid' },
	msdyn_AIModelCatalog: { schemaName: 'msdyn_AIModelCatalog', logicalName: '_msdyn_aimodelcatalog_value', entityCollectionName: 'msdyn_aimodelcatalogs', entityLogicalName: 'msdyn_aimodelcatalog' },
	msdyn_AIModelId: { logicalName: 'msdyn_aimodelid' },
	msdyn_AIModelIdUnique: { logicalName: 'msdyn_aimodelidunique', readOnly: true },
	msdyn_ModelCreationContext: { logicalName: 'msdyn_modelcreationcontext' },
	msdyn_Name: { logicalName: 'msdyn_name' },
	msdyn_RetrainWorkflowId: { schemaName: 'msdyn_RetrainWorkflowId', logicalName: '_msdyn_retrainworkflowid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	msdyn_ScheduleInferenceWorkflowId: { schemaName: 'msdyn_ScheduleInferenceWorkflowId', logicalName: '_msdyn_scheduleinferenceworkflowid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	msdyn_ShareWithOrganizationOnCreate: { logicalName: 'msdyn_sharewithorganizationoncreate', type: 'Boolean' },
	msdyn_TemplateId: { schemaName: 'msdyn_TemplateId', logicalName: '_msdyn_templateid_value', entityCollectionName: 'msdyn_aitemplates', entityLogicalName: 'msdyn_aitemplate' },
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
 * msdyn_AIModel WebApi class for early-bound style coding
 * Usage: const msdyn_AIModel = new msdyn_AIModelApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_AIModelApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_AIModelApi>(entity, 'msdyn_aimodel', 'msdyn_aimodels', msdyn_AIModelFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_AIModelApi extends Imsdyn_AIModelApi { }
