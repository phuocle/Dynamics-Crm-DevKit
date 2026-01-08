/**
 * RoleEditorLayout.webapi.ts - RoleEditorLayout WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for RoleEditorLayout
 * All fields return string representation of their values
 */
export interface IRoleEditorLayoutFormattedValue {
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly DisplayName: string;
	readonly EntityLogicalName: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly IsPrivacyRelated: string;
	readonly ItemType: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly PrivilegeName: string;
	readonly RoleEditorLayoutHierarchyId: string;
	readonly RoleEditorLayoutId: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly TabOrder: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
}

/**
 * RoleEditorLayout WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRoleEditorLayoutApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IRoleEditorLayoutFormattedValue;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Display name used for tabs, sections and miscellaneous privileges. */
	DisplayName: string | null;
	/** For ItemType Entity: the logicalname of the entity. */
	EntityLogicalName: string | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Whether this is a privacy related miscellaneous privilege. */
	IsPrivacyRelated: boolean | null;
	/** The type of role editor layout item. */
	ItemType: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the role editor layout item. */
	Name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** For ItemType Privilege: Name of the privilege */
	PrivilegeName: string | null;
	/** Unique identifier for RoleEditorLayout associated with RoleEditorLayout. */
	RoleEditorLayoutHierarchyId: DevKit.Guid | null;
	/** Unique identifier for role editor layout instances */
	RoleEditorLayoutId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For ItemType Tab: the order of which this tab is for the UI. */
	TabOrder: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const RoleEditorLayoutFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { logicalName: 'createdby', readOnly: true },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { logicalName: 'createdonbehalfby', readOnly: true },
	DisplayName: { logicalName: 'displayname' },
	EntityLogicalName: { logicalName: 'entitylogicalname' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsPrivacyRelated: { logicalName: 'isprivacyrelated', type: 'Boolean' },
	ItemType: { logicalName: 'itemtype', type: 'Integer' },
	ModifiedBy: { logicalName: 'modifiedby', readOnly: true },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { logicalName: 'modifiedonbehalfby', readOnly: true },
	Name: { logicalName: 'name' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PrivilegeName: { logicalName: 'privilegename' },
	RoleEditorLayoutHierarchyId: { schemaName: 'RoleEditorLayoutHierarchyId', logicalName: '_roleeditorlayouthierarchyid_value', entityCollectionName: 'roleeditorlayouts', entityLogicalName: 'roleeditorlayout' },
	RoleEditorLayoutId: { logicalName: 'roleeditorlayoutid' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TabOrder: { logicalName: 'taborder', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * RoleEditorLayout WebApi class for early-bound style coding
 * Usage: const roleEditorLayout = new RoleEditorLayoutApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RoleEditorLayoutApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRoleEditorLayoutApi>(entity, 'roleeditorlayout', 'roleeditorlayouts', RoleEditorLayoutFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RoleEditorLayoutApi extends IRoleEditorLayoutApi { }
