/**
 * RibbonDiff.webapi.ts - RibbonDiff WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for RibbonDiff
 * All fields return string representation of their values
 */
export interface IRibbonDiffFormattedValue {
	readonly ComponentState: string;
	readonly ContextGroupId: string;
	readonly DiffId: string;
	readonly DiffType: string;
	readonly Entity2: string;
	readonly IsAppAware: string;
	readonly IsManaged: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly RDX: string;
	readonly RibbonCustomizationId: string;
	readonly RibbonDiffId: string;
	readonly RibbonDiffUniqueId: string;
	readonly Sequence: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly TabId: string;
	readonly VersionNumber: string;
}

/**
 * RibbonDiff WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRibbonDiffApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IRibbonDiffFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the context group for this tab. If this ribbon definition adds a new tab, then it is a contextual tab. */
	ContextGroupId: DevKit.Guid | null;
	/** The string ID of this ribbon definition. */
	DiffId: string | null;
	/** Indicates the type of ribbon definition. */
	readonly DiffType: number | null;
	/** The entity this rule applies to, also the entity this rule was imported from, will be exported to. */
	Entity2: string | null;
	/** Information about whether the ribbondiff is associated with app module. */
	readonly IsAppAware: boolean | null;
	readonly IsManaged: boolean | null;
	/** Unique identifier of the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Ribbon definition XML string that contains one change action. */
	RDX: string | null;
	/** Unique identifier of the ribbon customization with which the ribbon command is associated. */
	RibbonCustomizationId: DevKit.Guid | null;
	/** Unique identifier. */
	RibbonDiffId: DevKit.Guid | null;
	/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
	readonly RibbonDiffUniqueId: DevKit.Guid | null;
	/** Sequence in which the definition is to be applied. */
	Sequence: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** The ID of the tab this definition applies to. */
	TabId: string | null;
	/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
	readonly VersionNumber: number | null;
}

const RibbonDiffFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ContextGroupId: { logicalName: 'contextgroupid' },
	DiffId: { logicalName: 'diffid' },
	DiffType: { logicalName: 'difftype', readOnly: true, type: 'Integer' },
	Entity2: { logicalName: 'entity' },
	IsAppAware: { logicalName: 'isappaware', readOnly: true, type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	RDX: { logicalName: 'rdx' },
	RibbonCustomizationId: { schemaName: 'RibbonCustomizationId', logicalName: '_ribboncustomizationid_value', entityCollectionName: 'ribboncustomizations', entityLogicalName: 'ribboncustomization' },
	RibbonDiffId: { logicalName: 'ribbondiffid' },
	RibbonDiffUniqueId: { logicalName: 'ribbondiffuniqueid', readOnly: true },
	Sequence: { logicalName: 'sequence', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TabId: { logicalName: 'tabid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * RibbonDiff WebApi class for early-bound style coding
 * Usage: const ribbonDiff = new RibbonDiffApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RibbonDiffApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRibbonDiffApi>(entity, 'ribbondiff', 'ribbondiffs', RibbonDiffFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RibbonDiffApi extends IRibbonDiffApi { }
