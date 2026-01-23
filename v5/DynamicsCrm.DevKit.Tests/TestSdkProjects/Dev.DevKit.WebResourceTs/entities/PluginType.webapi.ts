/**
 * PluginType.webapi.ts - PluginType WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * PluginType WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPluginTypeApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IPluginTypeApi, 'FormattedValue'>]: string };
	/** Full path name of the plug-in assembly. */
	readonly AssemblyName: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the plug-in type. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the plug-in type was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the plugintype. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Culture code for the plug-in assembly. */
	readonly Culture: string | null;
	/** Customization level of the plug-in type. */
	readonly CustomizationLevel: number | null;
	/** Serialized Custom Activity Type information, including required arguments. For more information, see SandboxCustomActivityInfo. */
	readonly CustomWorkflowActivityInfo: string | null;
	/** Description of the plug-in type. */
	Description: string | null;
	/** User friendly name for the plug-in. */
	FriendlyName: string | null;
	readonly IsManaged: boolean | null;
	/** Indicates if the plug-in is a custom activity for workflows. */
	readonly IsWorkflowActivity: boolean | null;
	/** Major of the version number of the assembly for the plug-in type. */
	readonly Major: number | null;
	/** Minor of the version number of the assembly for the plug-in type. */
	readonly Minor: number | null;
	/** Unique identifier of the user who last modified the plug-in type. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the plug-in type was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the plugintype. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the plug-in type. */
	Name: string | null;
	/** Unique identifier of the organization with which the plug-in type is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the plug-in assembly that contains this plug-in type. */
	PluginAssemblyId: DevKit.Guid | null;
	/** Uniquely identifies the plug-in type associated with a plugin package when exporting a solution. */
	PluginTypeExportKey: string | null;
	/** Unique identifier of the plug-in type. */
	PluginTypeId: DevKit.Guid | null;
	/** Unique identifier of the plug-in type. */
	readonly PluginTypeIdUnique: DevKit.Guid | null;
	/** Public key token of the assembly for the plug-in type. */
	readonly PublicKeyToken: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Fully qualified type name of the plug-in type. */
	TypeName: string | null;
	/** Version number of the assembly for the plug-in type. */
	readonly Version: string | null;
	readonly VersionNumber: number | null;
	/** Group name of workflow custom activity. */
	WorkflowActivityGroupName: string | null;
}

const PluginTypeFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AssemblyName: { logicalName: 'assemblyname', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Culture: { logicalName: 'culture', readOnly: true },
	CustomizationLevel: { logicalName: 'customizationlevel', readOnly: true, type: 'Integer' },
	CustomWorkflowActivityInfo: { logicalName: 'customworkflowactivityinfo', readOnly: true },
	Description: { logicalName: 'description' },
	FriendlyName: { logicalName: 'friendlyname' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsWorkflowActivity: { logicalName: 'isworkflowactivity', readOnly: true, type: 'Boolean' },
	Major: { logicalName: 'major', readOnly: true, type: 'Integer' },
	Minor: { logicalName: 'minor', readOnly: true, type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PluginAssemblyId: { schemaName: 'PluginAssemblyId', logicalName: '_pluginassemblyid_value', entityCollectionName: 'pluginassemblies', entityLogicalName: 'pluginassembly' },
	PluginTypeExportKey: { logicalName: 'plugintypeexportkey' },
	PluginTypeId: { logicalName: 'plugintypeid' },
	PluginTypeIdUnique: { logicalName: 'plugintypeidunique', readOnly: true },
	PublicKeyToken: { logicalName: 'publickeytoken', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TypeName: { logicalName: 'typename' },
	Version: { logicalName: 'version', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WorkflowActivityGroupName: { logicalName: 'workflowactivitygroupname' },
};

/**
 * PluginType WebApi class for early-bound style coding
 * Usage: const pluginType = new PluginTypeApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PluginTypeApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPluginTypeApi>(entity, 'plugintype', 'plugintypes', PluginTypeFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PluginTypeApi extends IPluginTypeApi { }
