/**
 * RibbonContextGroup.webapi.ts - RibbonContextGroup WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * RibbonContextGroup WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRibbonContextGroupApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IRibbonContextGroupApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** The id of a group of contextual tabs. */
	ContextGroupId: string | null;
	/** Layout XML for a contextual group header */
	ContextGroupXml: string | null;
	/** The entity this rule applies to, also the entity this rule was imported from, will be exported to. */
	Entity2: string | null;
	readonly IsManaged: boolean | null;
	/** Unique identifier of the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier. */
	RibbonContextGroupId: DevKit.Guid | null;
	/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
	readonly RibbonContextGroupUniqueId: DevKit.Guid | null;
	/** Unique identifier of the ribbon customization with which the ribbon command is associated. */
	RibbonCustomizationId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
	readonly VersionNumber: number | null;
}

const RibbonContextGroupFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ContextGroupId: { logicalName: 'contextgroupid' },
	ContextGroupXml: { logicalName: 'contextgroupxml' },
	Entity2: { logicalName: 'entity' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	RibbonContextGroupId: { logicalName: 'ribboncontextgroupid' },
	RibbonContextGroupUniqueId: { logicalName: 'ribboncontextgroupuniqueid', readOnly: true },
	RibbonCustomizationId: { schemaName: 'RibbonCustomizationId', logicalName: '_ribboncustomizationid_value', entityCollectionName: 'ribboncustomizations', entityLogicalName: 'ribboncustomization' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * RibbonContextGroup WebApi class for early-bound style coding
 * Usage: const ribbonContextGroup = new RibbonContextGroupApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RibbonContextGroupApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRibbonContextGroupApi>(entity, 'ribboncontextgroup', 'ribboncontextgroups', RibbonContextGroupFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RibbonContextGroupApi extends IRibbonContextGroupApi { }
