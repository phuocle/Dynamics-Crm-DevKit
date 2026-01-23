/**
 * CustomAPI.webapi.ts - CustomAPI WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * CustomAPI WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ICustomAPIApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ICustomAPIApi, 'FormattedValue'>]: string };
	/** The type of custom processing step allowed */
	AllowedCustomProcessingStepType: number | null;
	/** The binding type of the custom API */
	BindingType: number | null;
	/** The logical name of the entity bound to the custom API */
	BoundEntityLogicalName: string | null;
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
	/** Unique identifier for custom API instances */
	CustomAPIId: DevKit.Guid | null;
	/** Localized description for custom API instances */
	Description: string | null;
	/** Localized display name for custom API instances */
	DisplayName: string | null;
	/** Name of the privilege that allows execution of the custom API */
	ExecutePrivilegeName: string | null;
	/** Unique identifier for fxexpression associated with Custom API. */
	FxExpressionId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates if the custom API is a function (GET is supported) or not (POST is supported) */
	IsFunction: boolean | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Indicates if the custom API is private (hidden from metadata and documentation) */
	IsPrivate: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The primary name of the custom API */
	Name: string | null;
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
	/** Plugin Type */
	PluginTypeId: DevKit.Guid | null;
	/** Unique identifier for powerfxrule associated with Custom API. */
	PowerfxRuleId: DevKit.Guid | null;
	/** Sdk Message */
	SdkMessageId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Custom API */
	statecode: number | null;
	/** Reason for the status of the Custom API */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique name for the custom API */
	UniqueName: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
	/** Indicates if the custom API is enabled as a workflow action */
	WorkflowSdkStepEnabled: boolean | null;
}

const CustomAPIFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AllowedCustomProcessingStepType: { logicalName: 'allowedcustomprocessingsteptype', type: 'Integer' },
	BindingType: { logicalName: 'bindingtype', type: 'Integer' },
	BoundEntityLogicalName: { logicalName: 'boundentitylogicalname' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomAPIId: { logicalName: 'customapiid' },
	Description: { logicalName: 'description' },
	DisplayName: { logicalName: 'displayname' },
	ExecutePrivilegeName: { logicalName: 'executeprivilegename' },
	FxExpressionId: { schemaName: 'FxExpressionId', logicalName: '_fxexpressionid_value', entityCollectionName: 'fxexpressions', entityLogicalName: 'fxexpression' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsFunction: { logicalName: 'isfunction', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsPrivate: { logicalName: 'isprivate', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PluginTypeId: { schemaName: 'PluginTypeId', logicalName: '_plugintypeid_value', entityCollectionName: 'plugintypes', entityLogicalName: 'plugintype' },
	PowerfxRuleId: { schemaName: 'PowerfxRuleId', logicalName: '_powerfxruleid_value', entityCollectionName: 'powerfxrules', entityLogicalName: 'powerfxrule' },
	SdkMessageId: { schemaName: 'SdkMessageId', logicalName: '_sdkmessageid_value', entityCollectionName: 'sdkmessages', entityLogicalName: 'sdkmessage' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UniqueName: { logicalName: 'uniquename' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WorkflowSdkStepEnabled: { logicalName: 'workflowsdkstepenabled', type: 'Boolean' },
};

/**
 * CustomAPI WebApi class for early-bound style coding
 * Usage: const customAPI = new CustomAPIApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class CustomAPIApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ICustomAPIApi>(entity, 'customapi', 'customapis', CustomAPIFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface CustomAPIApi extends ICustomAPIApi { }
