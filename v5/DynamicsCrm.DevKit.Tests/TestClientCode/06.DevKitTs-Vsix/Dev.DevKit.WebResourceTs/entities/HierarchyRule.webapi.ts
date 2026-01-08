/**
 * HierarchyRule.webapi.ts - HierarchyRule WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for HierarchyRule
 * All fields return string representation of their values
 */
export interface IHierarchyRuleFormattedValue {
	readonly ComponentState: string;
	readonly Description: string;
	readonly HierarchyRuleID: string;
	readonly HierarchyRuleIDUnique: string;
	readonly IntroducedVersion: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly PrimaryEntityFormID: string;
	readonly PrimaryEntityLogicalName: string;
	readonly PublishedOn_UtcDateAndTime: string;
	readonly RelatedEntityFormId: string;
	readonly RelatedEntityLogicalName: string;
	readonly ShowDisabled: string;
	readonly SolutionId: string;
	readonly SortBy: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * HierarchyRule WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IHierarchyRuleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IHierarchyRuleFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Description of the hierarchy rule. */
	Description: string | null;
	/** Unique identifier of the record type hierarchy rule. */
	HierarchyRuleID: DevKit.Guid | null;
	/** Unique identifier of the hierarchy rule used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
	readonly HierarchyRuleIDUnique: DevKit.Guid | null;
	/** Version in which the hierarchy rule is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** State */
	readonly IsManaged: boolean | null;
	/** Name of the hierarchy rule. */
	Name: string | null;
	/** Unique identifier of the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Form Id for the Primary Entity */
	PrimaryEntityFormID: DevKit.Guid | null;
	/** Logical Name for the Primary entity. */
	PrimaryEntityLogicalName: string | null;
	readonly PublishedOn_UtcDateAndTime: Date | null;
	/** Form Id for the Related Entity. */
	readonly RelatedEntityFormId: DevKit.Guid | null;
	/** Logical Name for the Related entity. */
	readonly RelatedEntityLogicalName: string | null;
	/** To show disabled records or not. */
	ShowDisabled: boolean | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** columns to sort in the primary entity */
	readonly SortBy: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Version number of the Hierarchy rule. */
	readonly VersionNumber: number | null;
}

const HierarchyRuleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	Description: { logicalName: 'description' },
	HierarchyRuleID: { logicalName: 'hierarchyruleid' },
	HierarchyRuleIDUnique: { logicalName: 'hierarchyruleidunique', readOnly: true },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PrimaryEntityFormID: { logicalName: 'primaryentityformid' },
	PrimaryEntityLogicalName: { logicalName: 'primaryentitylogicalname' },
	PublishedOn_UtcDateAndTime: { logicalName: 'publishedon', readOnly: true, type: 'DateTime' },
	RelatedEntityFormId: { logicalName: 'relatedentityformid', readOnly: true },
	RelatedEntityLogicalName: { logicalName: 'relatedentitylogicalname', readOnly: true },
	ShowDisabled: { logicalName: 'showdisabled', type: 'Boolean' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SortBy: { logicalName: 'sortby', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * HierarchyRule WebApi class for early-bound style coding
 * Usage: const hierarchyRule = new HierarchyRuleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class HierarchyRuleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IHierarchyRuleApi>(entity, 'hierarchyrule', 'hierarchyrules', HierarchyRuleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface HierarchyRuleApi extends IHierarchyRuleApi { }
