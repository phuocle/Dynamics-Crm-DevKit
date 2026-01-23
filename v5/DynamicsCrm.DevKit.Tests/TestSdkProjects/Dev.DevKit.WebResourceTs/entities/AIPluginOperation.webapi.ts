/**
 * AIPluginOperation.webapi.ts - AIPluginOperation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * AIPluginOperation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAIPluginOperationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAIPluginOperationApi, 'FormattedValue'>]: string };
	/** AIPlugin */
	AIPlugin: DevKit.Guid | null;
	/** AI Plugin Operation Export Key */
	AIPluginOperationExportKey: string | null;
	/** Unique identifier for entity instances */
	AIPluginOperationId: DevKit.Guid | null;
	/** AIPluginOperationResponseTemplate */
	AIPluginOperationResponseTemplate: DevKit.Guid | null;
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
	/** Custom API */
	CustomAPI: DevKit.Guid | null;
	/** Operation Description */
	Description: string | null;
	/** DVFileSearch */
	DVFileSearch: DevKit.Guid | null;
	/** DVTableSearch */
	DVTableSearch: DevKit.Guid | null;
	/** Entity */
	Entity2: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Defines if the AIPluginOperation is consequential. */
	IsConsequential: boolean | null;
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
	/** Lookup to AI Model */
	msdyn_AIModel: DevKit.Guid | null;
	/** Name */
	Name: string | null;
	/** OperationId on the swagger file */
	OperationId: string | null;
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
	/** ReferencedOperationId Description */
	ReferencedOperationId: string | null;
	/** ResponseSemantics for the AI Plugin Operation */
	ResponseSemantics: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the AIPluginOperation */
	statecode: number | null;
	/** Reason for the status of the AIPluginOperation */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
	/** Process */
	Workflow: DevKit.Guid | null;
}

const AIPluginOperationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AIPlugin: { schemaName: 'AIPlugin', logicalName: '_aiplugin_value', entityCollectionName: 'aiplugins', entityLogicalName: 'aiplugin' },
	AIPluginOperationExportKey: { logicalName: 'aipluginoperationexportkey' },
	AIPluginOperationId: { logicalName: 'aipluginoperationid' },
	AIPluginOperationResponseTemplate: { schemaName: 'AIPluginOperationResponseTemplate', logicalName: '_aipluginoperationresponsetemplate_value', entityCollectionName: 'aipluginoperationresponsetemplates', entityLogicalName: 'aipluginoperationresponsetemplate' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomAPI: { schemaName: 'CustomAPI', logicalName: '_customapi_value', entityCollectionName: 'customapis', entityLogicalName: 'customapi' },
	Description: { logicalName: 'description' },
	DVFileSearch: { schemaName: 'DVFileSearch', logicalName: '_dvfilesearch_value', entityCollectionName: 'dvfilesearchs', entityLogicalName: 'dvfilesearch' },
	DVTableSearch: { schemaName: 'DVTableSearch', logicalName: '_dvtablesearch_value', entityCollectionName: 'dvtablesearchs', entityLogicalName: 'dvtablesearch' },
	Entity2: { schemaName: 'Entity', logicalName: '_entity_value', entityCollectionName: 'entities', entityLogicalName: 'entity' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsConsequential: { logicalName: 'isconsequential', type: 'Boolean' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AIModel: { schemaName: 'msdyn_AIModel', logicalName: '_msdyn_aimodel_value', entityCollectionName: 'msdyn_aimodels', entityLogicalName: 'msdyn_aimodel' },
	Name: { logicalName: 'name' },
	OperationId: { logicalName: 'operationid' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ReferencedOperationId: { logicalName: 'referencedoperationid' },
	ResponseSemantics: { logicalName: 'responsesemantics' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	Workflow: { schemaName: 'Workflow', logicalName: '_workflow_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
};

/**
 * AIPluginOperation WebApi class for early-bound style coding
 * Usage: const aIPluginOperation = new AIPluginOperationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AIPluginOperationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAIPluginOperationApi>(entity, 'aipluginoperation', 'aipluginoperations', AIPluginOperationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AIPluginOperationApi extends IAIPluginOperationApi { }
