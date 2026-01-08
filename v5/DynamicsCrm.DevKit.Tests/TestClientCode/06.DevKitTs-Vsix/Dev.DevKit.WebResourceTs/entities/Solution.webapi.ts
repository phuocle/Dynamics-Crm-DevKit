/**
 * Solution.webapi.ts - Solution WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for Solution
 * All fields return string representation of their values
 */
export interface ISolutionFormattedValue {
	readonly ConfigurationPageId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly EnabledForSourceControlIntegration: string;
	readonly FileId_name: string;
	readonly FriendlyName: string;
	readonly InstalledOn_UtcDateOnly: string;
	readonly IsApiManaged: string;
	readonly IsInternal: string;
	readonly IsManaged: string;
	readonly IsVisible: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly ParentSolutionId: string;
	readonly PinpointAssetId: string;
	readonly PinpointPublisherId: string;
	readonly PinpointSolutionDefaultLocale: string;
	readonly PinpointSolutionId: string;
	readonly PublisherId: string;
	readonly SolutionId: string;
	readonly SolutionPackageVersion: string;
	readonly SolutionType: string;
	readonly SourceControlSyncStatus: string;
	readonly TemplateSuffix: string;
	readonly Thumbprint: string;
	readonly UniqueName: string;
	readonly UpdatedOn_UtcDateAndTime: string;
	readonly UpgradeInfo: string;
	readonly Version: string;
	readonly VersionNumber: string;
}

/**
 * Solution WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISolutionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISolutionFormattedValue;
	/** A link to an optional configuration page for this solution. */
	ConfigurationPageId: DevKit.Guid | null;
	/** Unique identifier of the user who created the solution. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the solution was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the solution. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of the solution. */
	Description: string | null;
	/** Indicates if solution is enabled for source control integration */
	EnabledForSourceControlIntegration: boolean | null;
	/** File Id for the blob url used for file storage. */
	readonly FileId_name: string | null;
	/** User display name for the solution. */
	FriendlyName: string | null;
	/** Date and time when the solution was installed/upgraded. */
	readonly InstalledOn_UtcDateOnly: Date | null;
	/** Information about whether the solution is api managed. */
	readonly IsApiManaged: boolean | null;
	/** Indicates whether the solution is internal or not. */
	readonly IsInternal: boolean | null;
	/** Indicates whether the solution is managed or unmanaged. */
	readonly IsManaged: boolean | null;
	/** Indicates whether the solution is visible outside of the platform. */
	readonly IsVisible: boolean | null;
	/** Unique identifier of the user who last modified the solution. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the solution was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the solution. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the solution. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Unique identifier of the parent solution. Should only be non-null if this solution is a patch. */
	readonly ParentSolutionId: DevKit.Guid | null;
	readonly PinpointAssetId: string | null;
	/** Identifier of the publisher of this solution in Microsoft Pinpoint. */
	readonly PinpointPublisherId: number | null;
	/** Default locale of the solution in Microsoft Pinpoint. */
	readonly PinpointSolutionDefaultLocale: string | null;
	/** Identifier of the solution in Microsoft Pinpoint. */
	readonly PinpointSolutionId: number | null;
	/** Unique identifier of the publisher. */
	PublisherId: DevKit.Guid | null;
	/** Unique identifier of the solution. */
	SolutionId: DevKit.Guid | null;
	/** Solution package source organization version */
	SolutionPackageVersion: string | null;
	/** Solution Type */
	SolutionType: number | null;
	/** Indicates the current status of source control integration */
	SourceControlSyncStatus: number | null;
	/** The template suffix of this solution */
	TemplateSuffix: string | null;
	/** thumbprint of the solution signature */
	Thumbprint: string | null;
	/** The unique name of this solution */
	UniqueName: string | null;
	/** Date and time when the solution was updated. */
	readonly UpdatedOn_UtcDateAndTime: Date | null;
	/** Contains component info for the solution upgrade operation */
	readonly UpgradeInfo: string | null;
	/** Solution version, used to identify a solution for upgrades and hotfixes. */
	Version: string | null;
	readonly VersionNumber: number | null;
}

const SolutionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ConfigurationPageId: { schemaName: 'ConfigurationPageId', logicalName: '_configurationpageid_value', entityCollectionName: 'webresources', entityLogicalName: 'webresource' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	EnabledForSourceControlIntegration: { logicalName: 'enabledforsourcecontrolintegration', type: 'Boolean' },
	FileId_name: { logicalName: 'fileid', readOnly: true },
	FriendlyName: { logicalName: 'friendlyname' },
	InstalledOn_UtcDateOnly: { logicalName: 'installedon', readOnly: true, type: 'DateTime' },
	IsApiManaged: { logicalName: 'isapimanaged', readOnly: true, type: 'Boolean' },
	IsInternal: { logicalName: 'isinternal', readOnly: true, type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsVisible: { logicalName: 'isvisible', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	ParentSolutionId: { schemaName: 'ParentSolutionId', logicalName: '_parentsolutionid_value', readOnly: true, entityCollectionName: 'solutions', entityLogicalName: 'solution' },
	PinpointAssetId: { logicalName: 'pinpointassetid', readOnly: true },
	PinpointPublisherId: { logicalName: 'pinpointpublisherid', readOnly: true, type: 'Integer' },
	PinpointSolutionDefaultLocale: { logicalName: 'pinpointsolutiondefaultlocale', readOnly: true },
	PinpointSolutionId: { logicalName: 'pinpointsolutionid', readOnly: true, type: 'Integer' },
	PublisherId: { schemaName: 'PublisherId', logicalName: '_publisherid_value', entityCollectionName: 'publishers', entityLogicalName: 'publisher' },
	SolutionId: { logicalName: 'solutionid' },
	SolutionPackageVersion: { logicalName: 'solutionpackageversion' },
	SolutionType: { logicalName: 'solutiontype', type: 'Integer' },
	SourceControlSyncStatus: { logicalName: 'sourcecontrolsyncstatus', type: 'Integer' },
	TemplateSuffix: { logicalName: 'templatesuffix' },
	Thumbprint: { logicalName: 'thumbprint' },
	UniqueName: { logicalName: 'uniquename' },
	UpdatedOn_UtcDateAndTime: { logicalName: 'updatedon', readOnly: true, type: 'DateTime' },
	UpgradeInfo: { logicalName: 'upgradeinfo', readOnly: true },
	Version: { logicalName: 'version' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Solution WebApi class for early-bound style coding
 * Usage: const solution = new SolutionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SolutionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISolutionApi>(entity, 'solution', 'solutions', SolutionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SolutionApi extends ISolutionApi { }
