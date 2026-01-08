/**
 * SdkMessageProcessingStep.webapi.ts - SdkMessageProcessingStep WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SdkMessageProcessingStep WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISdkMessageProcessingStepApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISdkMessageProcessingStepApi, 'FormattedValue'>]: string };
	/** Indicates whether the asynchronous system job is automatically deleted on completion. */
	AsyncAutoDelete: boolean | null;
	CanBeBypassed: boolean | null;
	/** Identifies whether a SDK Message Processing Step type will be ReadOnly or Read Write. false - ReadWrite, true - ReadOnly  */
	CanUseReadOnlyConnection: boolean | null;
	/** For internal use only. */
	Category: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Step-specific configuration for the plug-in type. Passed to the plug-in constructor at run time. */
	Configuration: string | null;
	/** Unique identifier of the user who created the SDK message processing step. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the SDK message processing step was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the sdkmessageprocessingstep. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Customization level of the SDK message processing step. */
	readonly CustomizationLevel: number | null;
	/** Description of the SDK message processing step. */
	Description: string | null;
	/** EnablePluginProfiler */
	EnablePluginProfiler: boolean | null;
	/** Configuration for sending pipeline events to the Event Expander service. */
	EventExpander: string | null;
	/** Unique identifier of the associated event handler. */
	EventHandler: DevKit.Guid | null;
	/** Comma-separated list of attributes. If at least one of these attributes is modified, the plug-in should execute. */
	FilteringAttributes: string | null;
	/** Unique identifier for fxexpression associated with SdkMessageProcessingStep. */
	FxExpressionId: DevKit.Guid | null;
	/** Unique identifier of the user to impersonate context when step is executed. */
	ImpersonatingUserId: DevKit.Guid | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	/** Identifies if a plug-in should be executed from a parent pipeline, a child pipeline, or both. */
	InvocationSource: number | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Information that specifies whether this component should be hidden. */
	IsHidden: string | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** Run-time mode of execution, for example, synchronous or asynchronous. */
	Mode: number | null;
	/** Unique identifier of the user who last modified the SDK message processing step. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the SDK message processing step was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the sdkmessageprocessingstep. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of SdkMessage processing step. */
	Name: string | null;
	/** Unique identifier of the organization with which the SDK message processing step is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the plug-in type associated with the step. */
	PluginTypeId: DevKit.Guid | null;
	/** Unique identifier for powerfxrule associated with SdkMessageProcessingStep. */
	PowerfxRuleId: DevKit.Guid | null;
	/** Processing order within the stage. */
	Rank: number | null;
	/** For internal use only. Holds miscellaneous properties related to runtime integration. */
	RuntimeIntegrationProperties: string | null;
	/** Unique identifier of the SDK message filter. */
	SdkMessageFilterId: DevKit.Guid | null;
	/** Unique identifier of the SDK message. */
	SdkMessageId: DevKit.Guid | null;
	/** Unique identifier of the SDK message processing step entity. */
	SdkMessageProcessingStepId: DevKit.Guid | null;
	/** Unique identifier of the SDK message processing step. */
	readonly SdkMessageProcessingStepIdUnique: DevKit.Guid | null;
	/** Unique identifier of the Sdk message processing step secure configuration. */
	SdkMessageProcessingStepSecureConfigId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Stage in the execution pipeline that the SDK message processing step is in. */
	Stage: number | null;
	/** Status of the SDK message processing step. */
	StateCode: number | null;
	/** Reason for the status of the SDK message processing step. */
	StatusCode: number | null;
	/** Deployment that the SDK message processing step should be executed on; server, client, or both. */
	SupportedDeployment: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Number that identifies a specific revision of the SDK message processing step.  */
	readonly VersionNumber: number | null;
}

const SdkMessageProcessingStepFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AsyncAutoDelete: { logicalName: 'asyncautodelete', type: 'Boolean' },
	CanBeBypassed: { logicalName: 'canbebypassed', type: 'Boolean' },
	CanUseReadOnlyConnection: { logicalName: 'canusereadonlyconnection', type: 'Boolean' },
	Category: { logicalName: 'category' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	Configuration: { logicalName: 'configuration' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomizationLevel: { logicalName: 'customizationlevel', readOnly: true, type: 'Integer' },
	Description: { logicalName: 'description' },
	EnablePluginProfiler: { logicalName: 'enablepluginprofiler', type: 'Boolean' },
	EventExpander: { logicalName: 'eventexpander' },
	EventHandler: { schemaName: 'EventHandler', logicalName: '_eventhandler_value', entityCollectionName: 'plugintypes', entityLogicalName: 'plugintype' },
	FilteringAttributes: { logicalName: 'filteringattributes' },
	FxExpressionId: { schemaName: 'FxExpressionId', logicalName: '_fxexpressionid_value', entityCollectionName: 'fxexpressions', entityLogicalName: 'fxexpression' },
	ImpersonatingUserId: { schemaName: 'ImpersonatingUserId', logicalName: '_impersonatinguserid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	InvocationSource: { logicalName: 'invocationsource', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsHidden: { logicalName: 'ishidden' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	Mode: { logicalName: 'mode', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PluginTypeId: { schemaName: 'PluginTypeId', logicalName: '_plugintypeid_value', entityCollectionName: 'sdkmessagefilters', entityLogicalName: 'sdkmessagefilter' },
	PowerfxRuleId: { schemaName: 'PowerfxRuleId', logicalName: '_powerfxruleid_value', entityCollectionName: 'powerfxrules', entityLogicalName: 'powerfxrule' },
	Rank: { logicalName: 'rank', type: 'Integer' },
	RuntimeIntegrationProperties: { logicalName: 'runtimeintegrationproperties' },
	SdkMessageFilterId: { schemaName: 'SdkMessageFilterId', logicalName: '_sdkmessagefilterid_value', entityCollectionName: 'sdkmessagefilters', entityLogicalName: 'sdkmessagefilter' },
	SdkMessageId: { schemaName: 'SdkMessageId', logicalName: '_sdkmessageid_value', entityCollectionName: 'sdkmessages', entityLogicalName: 'sdkmessage' },
	SdkMessageProcessingStepId: { logicalName: 'sdkmessageprocessingstepid' },
	SdkMessageProcessingStepIdUnique: { logicalName: 'sdkmessageprocessingstepidunique', readOnly: true },
	SdkMessageProcessingStepSecureConfigId: { schemaName: 'SdkMessageProcessingStepSecureConfigId', logicalName: '_sdkmessageprocessingstepsecureconfigid_value', entityCollectionName: 'sdkmessageprocessingstepsecureconfigs', entityLogicalName: 'sdkmessageprocessingstepsecureconfig' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	Stage: { logicalName: 'stage', type: 'Integer' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SupportedDeployment: { logicalName: 'supporteddeployment', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SdkMessageProcessingStep WebApi class for early-bound style coding
 * Usage: const sdkMessageProcessingStep = new SdkMessageProcessingStepApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SdkMessageProcessingStepApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISdkMessageProcessingStepApi>(entity, 'sdkmessageprocessingstep', 'sdkmessageprocessingsteps', SdkMessageProcessingStepFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SdkMessageProcessingStepApi extends ISdkMessageProcessingStepApi { }
