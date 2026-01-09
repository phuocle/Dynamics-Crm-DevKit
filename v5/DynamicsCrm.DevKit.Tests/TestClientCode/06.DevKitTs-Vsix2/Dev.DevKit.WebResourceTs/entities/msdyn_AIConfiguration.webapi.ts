/**
 * msdyn_AIConfiguration.webapi.ts - msdyn_AIConfiguration WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_AIConfiguration WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_AIConfigurationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_AIConfigurationApi, 'FormattedValue'>]: string };
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
	msdyn_AIConfigurationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly msdyn_AIConfigurationIdUnique: DevKit.Guid | null;
	/** Unique identifier for AIModel associated with AIConfiguration. */
	msdyn_AIModelId: DevKit.Guid | null;
	/** Unique identifier for Connection Reference associated with AIConfiguration. */
	msdyn_ConnectionReferenceId: DevKit.Guid | null;
	/** CreatedFromConfigurationId */
	msdyn_CreatedFromConfigurationId: DevKit.Guid | null;
	/** CustomConfiguration */
	msdyn_CustomConfiguration: string | null;
	/** DataBinding */
	msdyn_DataBinding: string | null;
	/** LastErrors */
	msdyn_lasterrors: string | null;
	/** LastTrainOrRunDate */
	msdyn_lasttrainorrundate_TimezoneDateAndTime: Date | null;
	/** MajorIterationNumber */
	msdyn_MajorIterationNumber: number | null;
	/** MinorIterationNumber */
	msdyn_MinorIterationNumber: number | null;
	/** This is a file type attribute to store Ai builder Model. */
	readonly msdyn_Model_name: string | null;
	/** Model Action */
	msdyn_ModelAction: string | null;
	/** ModelData */
	msdyn_ModelData: string | null;
	/** ModelGlobalExplainability */
	msdyn_modelglobalexplainability: string | null;
	/** ModelPerformance */
	msdyn_ModelPerformance: string | null;
	/** Model Provisioning Metadata */
	msdyn_ModelProvisioningMetadata: string | null;
	/** Model Provisioning Status */
	msdyn_ModelProvisioningStatus: string | null;
	/** ModelRunDataSpecification */
	msdyn_ModelRunDataSpecification: string | null;
	/** The name of the custom entity. */
	msdyn_Name: string | null;
	/** ResourceInfo */
	msdyn_ResourceInfo: string | null;
	/** Run Configuration */
	msdyn_RunConfiguration: string | null;
	/** SchedulingOptions */
	msdyn_SchedulingOptions: string | null;
	/** Template Version */
	msdyn_TemplateVersion: number | null;
	/** Unique identifier for AIConfiguration associated with AIConfiguration. */
	msdyn_TrainedModelAIConfigurationPareId: DevKit.Guid | null;
	/** Type */
	msdyn_Type: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Owner Id */
	readonly OwnerId: DevKit.Guid | null;
	readonly OwnerIdType: number | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the AIConfiguration */
	statecode: number | null;
	/** Reason for the status of the AIConfiguration */
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

const msdyn_AIConfigurationFieldConfig: DevKit.IWebApiFieldConfigMap = {
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
	msdyn_AIConfigurationId: { logicalName: 'msdyn_aiconfigurationid' },
	msdyn_AIConfigurationIdUnique: { logicalName: 'msdyn_aiconfigurationidunique', readOnly: true },
	msdyn_AIModelId: { schemaName: 'msdyn_AIModelId', logicalName: '_msdyn_aimodelid_value', entityCollectionName: 'msdyn_aimodels', entityLogicalName: 'msdyn_aimodel' },
	msdyn_ConnectionReferenceId: { schemaName: 'msdyn_ConnectionReferenceId', logicalName: '_msdyn_connectionreferenceid_value', entityCollectionName: 'connectionreferences', entityLogicalName: 'connectionreference' },
	msdyn_CreatedFromConfigurationId: { schemaName: 'msdyn_CreatedFromConfigurationId', logicalName: '_msdyn_createdfromconfigurationid_value', entityCollectionName: 'msdyn_aiconfigurations', entityLogicalName: 'msdyn_aiconfiguration' },
	msdyn_CustomConfiguration: { logicalName: 'msdyn_customconfiguration' },
	msdyn_DataBinding: { logicalName: 'msdyn_databinding' },
	msdyn_lasterrors: { logicalName: 'msdyn_lasterrors' },
	msdyn_lasttrainorrundate_TimezoneDateAndTime: { logicalName: 'msdyn_lasttrainorrundate', type: 'DateTime' },
	msdyn_MajorIterationNumber: { logicalName: 'msdyn_majoriterationnumber', type: 'Integer' },
	msdyn_MinorIterationNumber: { logicalName: 'msdyn_minoriterationnumber', type: 'Integer' },
	msdyn_Model_name: { logicalName: 'msdyn_model', readOnly: true },
	msdyn_ModelAction: { logicalName: 'msdyn_modelaction' },
	msdyn_ModelData: { logicalName: 'msdyn_modeldata' },
	msdyn_modelglobalexplainability: { logicalName: 'msdyn_modelglobalexplainability' },
	msdyn_ModelPerformance: { logicalName: 'msdyn_modelperformance' },
	msdyn_ModelProvisioningMetadata: { logicalName: 'msdyn_modelprovisioningmetadata' },
	msdyn_ModelProvisioningStatus: { logicalName: 'msdyn_modelprovisioningstatus' },
	msdyn_ModelRunDataSpecification: { logicalName: 'msdyn_modelrundataspecification' },
	msdyn_Name: { logicalName: 'msdyn_name' },
	msdyn_ResourceInfo: { logicalName: 'msdyn_resourceinfo' },
	msdyn_RunConfiguration: { logicalName: 'msdyn_runconfiguration' },
	msdyn_SchedulingOptions: { logicalName: 'msdyn_schedulingoptions' },
	msdyn_TemplateVersion: { logicalName: 'msdyn_templateversion', type: 'Integer' },
	msdyn_TrainedModelAIConfigurationPareId: { schemaName: 'msdyn_TrainedModelAIConfigurationPareId', logicalName: '_msdyn_trainedmodelaiconfigurationpareid_value', entityCollectionName: 'msdyn_aiconfigurations', entityLogicalName: 'msdyn_aiconfiguration' },
	msdyn_Type: { logicalName: 'msdyn_type', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwnerIdType: { logicalName: 'owneridtype', readOnly: true, type: 'Integer' },
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
 * msdyn_AIConfiguration WebApi class for early-bound style coding
 * Usage: const msdyn_AIConfiguration = new msdyn_AIConfigurationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_AIConfigurationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_AIConfigurationApi>(entity, 'msdyn_aiconfiguration', 'msdyn_aiconfigurations', msdyn_AIConfigurationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_AIConfigurationApi extends Imsdyn_AIConfigurationApi { }
