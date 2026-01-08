/**
 * RibbonCommand.webapi.ts - RibbonCommand WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * RibbonCommand WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRibbonCommandApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IRibbonCommandApi, 'FormattedValue'>]: string };
	/** The command's Id */
	Command: string | null;
	/** The JScript library and function to run when this command is executed. */
	CommandDefinition: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** The entity this rule applies to, also the entity this rule was imported from, will be exported to. */
	Entity2: string | null;
	readonly IsManaged: boolean | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier. */
	RibbonCommandId: DevKit.Guid | null;
	/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
	readonly RibbonCommandUniqueId: DevKit.Guid | null;
	/** Unique identifier of the ribbon customization with which the ribbon command is associated. */
	RibbonCustomizationId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
	readonly VersionNumber: number | null;
}

const RibbonCommandFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Command: { logicalName: 'command' },
	CommandDefinition: { logicalName: 'commanddefinition' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Entity2: { logicalName: 'entity' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	RibbonCommandId: { logicalName: 'ribboncommandid' },
	RibbonCommandUniqueId: { logicalName: 'ribboncommanduniqueid', readOnly: true },
	RibbonCustomizationId: { schemaName: 'RibbonCustomizationId', logicalName: '_ribboncustomizationid_value', entityCollectionName: 'ribboncustomizations', entityLogicalName: 'ribboncustomization' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * RibbonCommand WebApi class for early-bound style coding
 * Usage: const ribbonCommand = new RibbonCommandApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RibbonCommandApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRibbonCommandApi>(entity, 'ribboncommand', 'ribboncommands', RibbonCommandFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RibbonCommandApi extends IRibbonCommandApi { }
