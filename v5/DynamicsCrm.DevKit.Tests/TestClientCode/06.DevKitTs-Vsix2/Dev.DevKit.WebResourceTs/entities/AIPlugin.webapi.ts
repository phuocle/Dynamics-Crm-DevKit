/**
 * AIPlugin.webapi.ts - AIPlugin WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * AIPlugin WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAIPluginApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAIPluginApi, 'FormattedValue'>]: string };
	/** Unique identifier for entity instances */
	AIPluginId: DevKit.Guid | null;
	AIPluginTitle: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Connector reference for AIPlugin */
	Connector: DevKit.Guid | null;
	/** Contact Email */
	ContactEmail: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Human-readable description of the Plugin */
	HumanDescription: string | null;
	/** Human-readable name for the model */
	HumanName: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Legal Info Url */
	LegalInfoUrl: string | null;
	/** Description better tailored to the model, such as token context length considerations or keyword usage for improved plugin prompting. */
	ModelDescription: string | null;
	/** Model name for the plugin */
	ModelName: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name */
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
	/** Auth reference for AIPlugin */
	PluginAuthId: DevKit.Guid | null;
	/** PluginSubType */
	PluginSubType: number | null;
	/** PluginType */
	PluginType: number | null;
	/** Privacy Policy Url */
	PrivacyPolicyUrl: string | null;
	/** SchemaVersion of OpenAI Manifest */
	SchemaVersion: number | null;
	/** SharedConnector Description */
	SharedConnector: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the AIPlugin */
	statecode: number | null;
	/** Reason for the status of the AIPlugin */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Swagger value that is upserted to generated plugin definition, used to provide override for properties not exposed as table/columns.  Example:  {   "info": {       "x-ms-keywords": [ "sales", "support" ]    } }  Adds x-ms-keywords in info property. */
	UpsertSwagger: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const AIPluginFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AIPluginId: { logicalName: 'aipluginid' },
	AIPluginTitle: { schemaName: 'AIPluginTitle', logicalName: '_aiplugintitle_value', entityCollectionName: 'aiplugintitles', entityLogicalName: 'aiplugintitle' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	Connector: { schemaName: 'Connector', logicalName: '_connector_value', entityCollectionName: 'connectors', entityLogicalName: 'connector' },
	ContactEmail: { logicalName: 'contactemail' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	HumanDescription: { logicalName: 'humandescription' },
	HumanName: { logicalName: 'humanname' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	LegalInfoUrl: { logicalName: 'legalinfourl' },
	ModelDescription: { logicalName: 'modeldescription' },
	ModelName: { logicalName: 'modelname' },
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
	PluginAuthId: { schemaName: 'PluginAuthId', logicalName: '_pluginauthid_value', entityCollectionName: 'aipluginauths', entityLogicalName: 'aipluginauth' },
	PluginSubType: { logicalName: 'pluginsubtype', type: 'Integer' },
	PluginType: { logicalName: 'plugintype', type: 'Integer' },
	PrivacyPolicyUrl: { logicalName: 'privacypolicyurl' },
	SchemaVersion: { logicalName: 'schemaversion', type: 'Integer' },
	SharedConnector: { logicalName: 'sharedconnector' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UpsertSwagger: { logicalName: 'upsertswagger' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * AIPlugin WebApi class for early-bound style coding
 * Usage: const aIPlugin = new AIPluginApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AIPluginApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAIPluginApi>(entity, 'aiplugin', 'aiplugins', AIPluginFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AIPluginApi extends IAIPluginApi { }
