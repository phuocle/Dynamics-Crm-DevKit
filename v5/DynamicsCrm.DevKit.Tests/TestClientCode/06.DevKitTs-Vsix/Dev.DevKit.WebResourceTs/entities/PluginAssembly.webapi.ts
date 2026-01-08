/**
 * PluginAssembly.webapi.ts - PluginAssembly WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * PluginAssembly WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPluginAssemblyApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IPluginAssemblyApi, 'FormattedValue'>]: string };
	/** Specifies mode of authentication with web sources like WebApp */
	AuthType: number | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Bytes of the assembly, in Base64 format. */
	Content: string | null;
	/** Unique identifier of the user who created the plug-in assembly. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the plug-in assembly was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the pluginassembly. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Culture code for the plug-in assembly. */
	Culture: string | null;
	/** Customization Level. */
	readonly CustomizationLevel: number | null;
	/** Description of the plug-in assembly. */
	Description: string | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Information that specifies whether this component should be hidden. */
	IsHidden: string | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** Information about how the plugin assembly is to be isolated at execution time; None / Sandboxed. */
	IsolationMode: number | null;
	readonly IsPasswordSet: boolean | null;
	/** Major of the assembly version. */
	readonly Major: number | null;
	/** Unique identifier for managedidentity associated with pluginassembly. */
	ManagedIdentityId: DevKit.Guid | null;
	/** Minor of the assembly version. */
	readonly Minor: number | null;
	/** Unique identifier of the user who last modified the plug-in assembly. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the plug-in assembly was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the pluginassembly. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the plug-in assembly. */
	Name: string | null;
	/** Unique identifier of the organization with which the plug-in assembly is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier for Plugin Package associated with Plug-in Assembly. */
	PackageId: DevKit.Guid | null;
	/** User Password */
	Password: string | null;
	/** File name of the plug-in assembly. Used when the source type is set to 1. */
	Path: string | null;
	/** Unique identifier of the plug-in assembly. */
	PluginAssemblyId: DevKit.Guid | null;
	/** Unique identifier of the plug-in assembly. */
	readonly PluginAssemblyIdUnique: DevKit.Guid | null;
	/** Public key token of the assembly. This value can be obtained from the assembly by using reflection. */
	PublicKeyToken: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Hash of the source of the assembly. */
	SourceHash: string | null;
	/** Location of the assembly, for example 0=database, 1=on-disk. */
	SourceType: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Web Url */
	Url: string | null;
	/** User Name */
	UserName: string | null;
	/** Version number of the assembly. The value can be obtained from the assembly through reflection. */
	Version: string | null;
	readonly VersionNumber: number | null;
}

const PluginAssemblyFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AuthType: { logicalName: 'authtype', type: 'Integer' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	Content: { logicalName: 'content' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Culture: { logicalName: 'culture' },
	CustomizationLevel: { logicalName: 'customizationlevel', readOnly: true, type: 'Integer' },
	Description: { logicalName: 'description' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsHidden: { logicalName: 'ishidden' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsolationMode: { logicalName: 'isolationmode', type: 'Integer' },
	IsPasswordSet: { logicalName: 'ispasswordset', readOnly: true, type: 'Boolean' },
	Major: { logicalName: 'major', readOnly: true, type: 'Integer' },
	ManagedIdentityId: { schemaName: 'ManagedIdentityId', logicalName: '_managedidentityid_value', entityCollectionName: 'managedidentities', entityLogicalName: 'managedidentity' },
	Minor: { logicalName: 'minor', readOnly: true, type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PackageId: { schemaName: 'PackageId', logicalName: '_packageid_value', entityCollectionName: 'pluginpackages', entityLogicalName: 'pluginpackage' },
	Password: { logicalName: 'password' },
	Path: { logicalName: 'path' },
	PluginAssemblyId: { logicalName: 'pluginassemblyid' },
	PluginAssemblyIdUnique: { logicalName: 'pluginassemblyidunique', readOnly: true },
	PublicKeyToken: { logicalName: 'publickeytoken' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SourceHash: { logicalName: 'sourcehash' },
	SourceType: { logicalName: 'sourcetype', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	Url: { logicalName: 'url' },
	UserName: { logicalName: 'username' },
	Version: { logicalName: 'version' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * PluginAssembly WebApi class for early-bound style coding
 * Usage: const pluginAssembly = new PluginAssemblyApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PluginAssemblyApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPluginAssemblyApi>(entity, 'pluginassembly', 'pluginassemblies', PluginAssemblyFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PluginAssemblyApi extends IPluginAssemblyApi { }
