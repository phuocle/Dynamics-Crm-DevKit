/**
 * Workflow.webapi.ts - Workflow WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for Workflow
 * All fields return string representation of their values
 */
export interface IWorkflowFormattedValue {
	readonly ActiveWorkflowId: string;
	readonly AsyncAutoDelete: string;
	readonly BillingContext: string;
	readonly BusinessProcessType: string;
	readonly Category: string;
	readonly Claims: string;
	readonly ClientData: string;
	readonly ClientDataIsCompressed: string;
	readonly ComponentState: string;
	readonly ConnectionReferences: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CreateMetadata: string;
	readonly CreateStage: string;
	readonly Credentials: string;
	readonly Definition: string;
	readonly DeleteStage: string;
	readonly Dependencies: string;
	readonly Description: string;
	readonly DesktopFlowModules: string;
	readonly DynamicsSolutionContext: string;
	readonly EntityImage: string;
	readonly EntityImageId: string;
	readonly FormId: string;
	readonly InputParameters: string;
	readonly Inputs: string;
	readonly IntroducedVersion: string;
	readonly IsCrmUIWorkflow: string;
	readonly IsCustomizable: string;
	readonly IsCustomProcessingStepAllowedForOtherPublishers: string;
	readonly IsManaged: string;
	readonly IsTransacted: string;
	readonly LanguageCode: string;
	readonly Licensee: string;
	readonly LicenseEntitledBy: string;
	readonly Metadata: string;
	readonly Mode: string;
	readonly ModernFlowType: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly ModifyMetadata: string;
	readonly Name: string;
	readonly OnDemand: string;
	readonly Outputs: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly ParentWorkflowId: string;
	readonly PlanVerified: string;
	readonly PluginTypeId: string;
	readonly ProcessOrder: string;
	readonly ProcessRoleAssignment: string;
	readonly ProcessTriggerFormId: string;
	readonly ProcessTriggerScope: string;
	readonly Rank: string;
	readonly ResourceContainer: string;
	readonly ResourceId: string;
	readonly RunAs: string;
	readonly SchemaVersion: string;
	readonly Scope: string;
	readonly SdkMessageId: string;
	readonly SolutionId: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly Subprocess: string;
	readonly SupportingSolutionId: string;
	readonly SuspensionReasonDetails: string;
	readonly SyncWorkflowLogOnFailure: string;
	readonly ThrottlingBehavior: string;
	readonly TriggerOnCreate: string;
	readonly TriggerOnDelete: string;
	readonly TriggerOnUpdateAttributeList: string;
	readonly TrustedAccess: string;
	readonly Type: string;
	readonly UIData: string;
	readonly UIFlowType: string;
	readonly UniqueName: string;
	readonly UpdateStage: string;
	readonly VersionNumber: string;
	readonly WorkflowId: string;
	readonly WorkflowIdUnique: string;
	readonly Xaml: string;
}

/**
 * Workflow WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IWorkflowApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IWorkflowFormattedValue;
	/** Unique identifier of the latest activation record for the process. */
	readonly ActiveWorkflowId: DevKit.Guid | null;
	/** Indicates whether the asynchronous system job is automatically deleted on completion. */
	AsyncAutoDelete: boolean | null;
	/** Billing context this flow is in. */
	BillingContext: string | null;
	/** Business Process Type. */
	BusinessProcessType: number | null;
	/** Category of the process. */
	Category: number | null;
	/** Claims related to this workflow. */
	Claims: string | null;
	/** Business logic converted into client data */
	ClientData: string | null;
	/** For Internal Use Only. */
	readonly ClientDataIsCompressed: boolean | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Connection References related to this workflow. */
	ConnectionReferences: string | null;
	/** Unique identifier of the user who created the process. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the process was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the process. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Create metadata for this workflow. */
	CreateMetadata: string | null;
	/** Stage of the process when triggered on Create. */
	CreateStage: number | null;
	/** Credentials related to this workflow. */
	Credentials: string | null;
	/** Definition of the business logic of this workflow instance. */
	Definition: string | null;
	/** Stage of the process when triggered on Delete. */
	DeleteStage: number | null;
	/** Soft dependencies of this workflow instance. */
	Dependencies: string | null;
	/** Description of the process. */
	Description: string | null;
	/** Desktop flow modules related to this workflow. */
	DesktopFlowModules: string | null;
	/** comma separated list of one or more Dynamics First Party Solution Unique names that this workflow is in context of. */
	DynamicsSolutionContext: string | null;
	/** Shows the default image for the record. */
	EntityImage: string | null;
	/** For internal use only. */
	readonly EntityImageId: DevKit.Guid | null;
	/** Unique identifier of the associated form. */
	FormId: DevKit.Guid | null;
	/** Input parameters to the process. */
	InputParameters: string | null;
	/** Inputs definition for this workflow. */
	Inputs: string | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	/** Indicates whether the process was created using the Microsoft Dynamics 365 Web application. */
	readonly IsCrmUIWorkflow: boolean | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Defines whether other publishers can attach custom processing steps to this action */
	IsCustomProcessingStepAllowedForOtherPublishers: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Whether or not the steps in the process are executed in a single transaction. */
	IsTransacted: boolean | null;
	/** Language of the process. */
	LanguageCode: number | null;
	/** The user object that should be used to establish the license the flow should operate under. */
	Licensee: DevKit.Guid | null;
	/** The source of the license entitlements. */
	LicenseEntitledBy: DevKit.Guid | null;
	/** Additional metadata for this workflow. */
	Metadata: string | null;
	/** Shows the mode of the process. */
	Mode: number | null;
	/** Type of the Modern Flow. */
	ModernFlowType: number | null;
	/** Unique identifier of the user who last modified the process. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the process was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the process. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Flow modify metadata used for telemetry, etc. */
	ModifyMetadata: string | null;
	/** Name of the process. */
	Name: string | null;
	/** Indicates whether the process is able to run as an on-demand process. */
	OnDemand: boolean | null;
	/** Outputs definition for this workflow. */
	Outputs: string | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the process. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the process. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the process. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the process. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the definition for process activation. */
	readonly ParentWorkflowId: DevKit.Guid | null;
	/** For Internal Use Only. */
	PlanVerified: boolean | null;
	/** Unique identifier of the plug-in type. */
	readonly PluginTypeId: DevKit.Guid | null;
	/** Type the business process flow order. */
	ProcessOrder: number | null;
	/** Contains the role assignment for the process. */
	ProcessRoleAssignment: string | null;
	/** Unique identifier of the associated form for process trigger. */
	ProcessTriggerFormId: DevKit.Guid | null;
	/** Scope of the process trigger. */
	ProcessTriggerScope: number | null;
	/** Indicates the rank for order of execution for the synchronous workflow. */
	Rank: number | null;
	/** For internal use only. */
	ResourceContainer: string | null;
	/** For internal use only. */
	ResourceId: DevKit.Guid | null;
	/** Specifies the system user account under which a workflow executes. */
	RunAs: number | null;
	/** Schema version for this workflow. */
	SchemaVersion: string | null;
	/** Scope of the process. */
	Scope: number | null;
	/** Unique identifier of the SDK Message associated with this workflow. */
	readonly SdkMessageId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the workflow */
	StateCode: number | null;
	/** Reason for the status of the workflow */
	StatusCode: number | null;
	/** Indicates whether the process can be included in other processes as a child process. */
	Subprocess: boolean | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	SuspensionReasonDetails: string | null;
	/** Select whether synchronous workflow failures will be saved to log files. */
	SyncWorkflowLogOnFailure: boolean | null;
	/** The throttling behavior type. */
	ThrottlingBehavior: number | null;
	/** Indicates whether the process will be triggered when the primary entity is created. */
	TriggerOnCreate: boolean | null;
	/** Indicates whether the process will be triggered on deletion of the primary entity. */
	TriggerOnDelete: boolean | null;
	/** Attributes that trigger the process when updated. */
	TriggerOnUpdateAttributeList: string | null;
	/** For Internal Use Only. */
	readonly TrustedAccess: boolean | null;
	/** Type of the process. */
	Type: number | null;
	/** For internal use only. */
	readonly UIData: string | null;
	/** Type of the UI Flow process. */
	UIFlowType: number | null;
	/** Unique name of the process */
	UniqueName: string | null;
	/** Select the stage a process will be triggered on update. */
	UpdateStage: number | null;
	readonly VersionNumber: number | null;
	/** Unique identifier of the process. */
	WorkflowId: DevKit.Guid | null;
	/** For internal use only. */
	readonly WorkflowIdUnique: DevKit.Guid | null;
	/** XAML that defines the process. */
	Xaml: string | null;
}

const WorkflowFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActiveWorkflowId: { schemaName: 'ActiveWorkflowId', logicalName: '_activeworkflowid_value', readOnly: true, entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	AsyncAutoDelete: { logicalName: 'asyncautodelete', type: 'Boolean' },
	BillingContext: { logicalName: 'billingcontext' },
	BusinessProcessType: { logicalName: 'businessprocesstype', type: 'Integer' },
	Category: { logicalName: 'category', type: 'Integer' },
	Claims: { logicalName: 'claims' },
	ClientData: { logicalName: 'clientdata' },
	ClientDataIsCompressed: { logicalName: 'clientdataiscompressed', readOnly: true, type: 'Boolean' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ConnectionReferences: { logicalName: 'connectionreferences' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreateMetadata: { logicalName: 'createmetadata' },
	CreateStage: { logicalName: 'createstage', type: 'Integer' },
	Credentials: { logicalName: 'credentials' },
	Definition: { logicalName: 'definition' },
	DeleteStage: { logicalName: 'deletestage', type: 'Integer' },
	Dependencies: { logicalName: 'dependencies' },
	Description: { logicalName: 'description' },
	DesktopFlowModules: { logicalName: 'desktopflowmodules' },
	DynamicsSolutionContext: { logicalName: 'dynamicssolutioncontext' },
	EntityImage: { logicalName: 'entityimage' },
	EntityImageId: { logicalName: 'entityimageid', readOnly: true },
	FormId: { logicalName: 'formid' },
	InputParameters: { logicalName: 'inputparameters' },
	Inputs: { logicalName: 'inputs' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCrmUIWorkflow: { logicalName: 'iscrmuiworkflow', readOnly: true, type: 'Boolean' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsCustomProcessingStepAllowedForOtherPublishers: { logicalName: 'iscustomprocessingstepallowedforotherpublishers' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsTransacted: { logicalName: 'istransacted', type: 'Boolean' },
	LanguageCode: { logicalName: 'languagecode', type: 'Integer' },
	Licensee: { schemaName: 'Licensee', logicalName: '_licensee_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	LicenseEntitledBy: { schemaName: 'LicenseEntitledBy', logicalName: '_licenseentitledby_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	Metadata: { logicalName: 'metadata' },
	Mode: { logicalName: 'mode', type: 'Integer' },
	ModernFlowType: { logicalName: 'modernflowtype', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifyMetadata: { logicalName: 'modifymetadata' },
	Name: { logicalName: 'name' },
	OnDemand: { logicalName: 'ondemand', type: 'Boolean' },
	Outputs: { logicalName: 'outputs' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ParentWorkflowId: { schemaName: 'ParentWorkflowId', logicalName: '_parentworkflowid_value', readOnly: true, entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	PlanVerified: { logicalName: 'planverified', type: 'Boolean' },
	PluginTypeId: { schemaName: 'PluginTypeId', logicalName: '_plugintypeid_value', readOnly: true, entityCollectionName: 'sdkmessagefilters', entityLogicalName: 'sdkmessagefilter' },
	ProcessOrder: { logicalName: 'processorder', type: 'Integer' },
	ProcessRoleAssignment: { logicalName: 'processroleassignment' },
	ProcessTriggerFormId: { logicalName: 'processtriggerformid' },
	ProcessTriggerScope: { logicalName: 'processtriggerscope', type: 'Integer' },
	Rank: { logicalName: 'rank', type: 'Integer' },
	ResourceContainer: { logicalName: 'resourcecontainer' },
	ResourceId: { logicalName: 'resourceid' },
	RunAs: { logicalName: 'runas', type: 'Integer' },
	SchemaVersion: { logicalName: 'schemaversion' },
	Scope: { logicalName: 'scope', type: 'Integer' },
	SdkMessageId: { schemaName: 'SdkMessageId', logicalName: '_sdkmessageid_value', readOnly: true, entityCollectionName: 'sdkmessages', entityLogicalName: 'sdkmessage' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	Subprocess: { logicalName: 'subprocess', type: 'Boolean' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	SuspensionReasonDetails: { logicalName: 'suspensionreasondetails' },
	SyncWorkflowLogOnFailure: { logicalName: 'syncworkflowlogonfailure', type: 'Boolean' },
	ThrottlingBehavior: { logicalName: 'throttlingbehavior', type: 'Integer' },
	TriggerOnCreate: { logicalName: 'triggeroncreate', type: 'Boolean' },
	TriggerOnDelete: { logicalName: 'triggerondelete', type: 'Boolean' },
	TriggerOnUpdateAttributeList: { logicalName: 'triggeronupdateattributelist' },
	TrustedAccess: { logicalName: 'trustedaccess', readOnly: true, type: 'Boolean' },
	Type: { logicalName: 'type', type: 'Integer' },
	UIData: { logicalName: 'uidata', readOnly: true },
	UIFlowType: { logicalName: 'uiflowtype', type: 'Integer' },
	UniqueName: { logicalName: 'uniquename' },
	UpdateStage: { logicalName: 'updatestage', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WorkflowId: { logicalName: 'workflowid' },
	WorkflowIdUnique: { logicalName: 'workflowidunique', readOnly: true },
	Xaml: { logicalName: 'xaml' },
};

/**
 * Workflow WebApi class for early-bound style coding
 * Usage: const workflow = new WorkflowApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class WorkflowApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IWorkflowApi>(entity, 'workflow', 'workflows', WorkflowFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface WorkflowApi extends IWorkflowApi { }
