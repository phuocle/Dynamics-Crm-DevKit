/**
 * RibbonCustomization.webapi.ts - RibbonCustomization WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for RibbonCustomization
 * All fields return string representation of their values
 */
export interface IRibbonCustomizationFormattedValue {
	readonly ComponentState: string;
	readonly Entity2: string;
	readonly IsManaged: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly PublishedOn_UtcDateAndTime: string;
	readonly RibbonCustomizationId: string;
	readonly RibbonCustomizationUniqueId: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * RibbonCustomization WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRibbonCustomizationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IRibbonCustomizationFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Specifies which entity's ribbons this customization applies to. If null, then the customizations apply to the global ribbons. */
	Entity2: string | null;
	readonly IsManaged: boolean | null;
	/** Unique identifier of the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	readonly PublishedOn_UtcDateAndTime: Date | null;
	/** Unique identifier. */
	RibbonCustomizationId: DevKit.Guid | null;
	/** Unique identifier for this row. */
	readonly RibbonCustomizationUniqueId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
	readonly VersionNumber: number | null;
}

const RibbonCustomizationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	Entity2: { logicalName: 'entity' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PublishedOn_UtcDateAndTime: { logicalName: 'publishedon', readOnly: true, type: 'DateTime' },
	RibbonCustomizationId: { logicalName: 'ribboncustomizationid' },
	RibbonCustomizationUniqueId: { logicalName: 'ribboncustomizationuniqueid', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * RibbonCustomization WebApi class for early-bound style coding
 * Usage: const ribbonCustomization = new RibbonCustomizationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RibbonCustomizationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRibbonCustomizationApi>(entity, 'ribboncustomization', 'ribboncustomizations', RibbonCustomizationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RibbonCustomizationApi extends IRibbonCustomizationApi { }
