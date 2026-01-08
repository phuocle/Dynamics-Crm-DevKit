/**
 * RibbonTabToCommandMap.webapi.ts - RibbonTabToCommandMap WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * RibbonTabToCommandMap WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRibbonTabToCommandMapApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IRibbonTabToCommandMapApi, 'FormattedValue'>]: string };
	/** A command Id of a control within that tab. */
	Command: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** A control id within that tab. */
	ControlId: string | null;
	/** The entity this rule applies to, also the entity this rule was imported from, will be exported to. */
	Entity2: string | null;
	readonly IsManaged: boolean | null;
	/** Unique identifier of the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the ribbon customization with which the ribbon command is associated. */
	RibbonDiffId: DevKit.Guid | null;
	/** Unique identifier. */
	RibbonTabToCommandMapId: DevKit.Guid | null;
	/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
	readonly RibbonTabToCommandMapUniqueId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** The Id of a tab */
	TabId: string | null;
	/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
	readonly VersionNumber: number | null;
}

const RibbonTabToCommandMapFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Command: { logicalName: 'command' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ControlId: { logicalName: 'controlid' },
	Entity2: { logicalName: 'entity' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	RibbonDiffId: { schemaName: 'RibbonDiffId', logicalName: '_ribbondiffid_value', entityCollectionName: 'ribbondiffs', entityLogicalName: 'ribbondiff' },
	RibbonTabToCommandMapId: { logicalName: 'ribbontabtocommandmapid' },
	RibbonTabToCommandMapUniqueId: { logicalName: 'ribbontabtocommandmapuniqueid', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TabId: { logicalName: 'tabid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * RibbonTabToCommandMap WebApi class for early-bound style coding
 * Usage: const ribbonTabToCommandMap = new RibbonTabToCommandMapApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RibbonTabToCommandMapApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRibbonTabToCommandMapApi>(entity, 'ribbontabtocommandmap', 'ribbontabtocommandmaps', RibbonTabToCommandMapFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RibbonTabToCommandMapApi extends IRibbonTabToCommandMapApi { }
