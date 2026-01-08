/**
 * SystemForm.webapi.ts - SystemForm WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SystemForm
 * All fields return string representation of their values
 */
export interface ISystemFormFormattedValue {
	readonly AncestorFormId: string;
	readonly CanBeDeleted: string;
	readonly ComponentState: string;
	readonly Description: string;
	readonly FormActivationState: string;
	readonly FormId: string;
	readonly FormIdUnique: string;
	readonly FormJson: string;
	readonly FormPresentation: string;
	readonly FormXml: string;
	readonly FormXmlManaged: string;
	readonly IntroducedVersion: string;
	readonly IsAIRMerged: string;
	readonly IsCustomizable: string;
	readonly IsDefault: string;
	readonly IsDesktopEnabled: string;
	readonly IsManaged: string;
	readonly IsTabletEnabled: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly PublishedOn_UtcDateAndTime: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly Type: string;
	readonly UniqueName: string;
	readonly Version: string;
	readonly VersionNumber: string;
}

/**
 * SystemForm WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISystemFormApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISystemFormFormattedValue;
	/** Unique identifier of the parent form. */
	AncestorFormId: DevKit.Guid | null;
	/** Information that specifies whether this component can be deleted. */
	CanBeDeleted: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Description of the form or dashboard. */
	Description: string | null;
	/** Specifies the state of the form. */
	FormActivationState: number | null;
	/** Unique identifier of the record type form. */
	FormId: DevKit.Guid | null;
	/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
	readonly FormIdUnique: DevKit.Guid | null;
	/** Json representation of the form layout. */
	FormJson: string | null;
	/** Specifies whether this form is in the updated UI layout in Microsoft Dynamics CRM 2015 or Microsoft Dynamics CRM Online 2015 Update. */
	FormPresentation: number | null;
	/** XML representation of the form layout. */
	FormXml: string | null;
	/** formXml diff as in a managed solution. for internal use only */
	readonly FormXmlManaged: string | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	/** Specifies whether this form is merged with the updated UI layout in Microsoft Dynamics CRM 2015 or Microsoft Dynamics CRM Online 2015 Update. */
	IsAIRMerged: boolean | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Information that specifies whether the form or the dashboard is the system default. */
	IsDefault: boolean | null;
	/** Information that specifies whether the dashboard is enabled for desktop. */
	IsDesktopEnabled: boolean | null;
	/** State */
	readonly IsManaged: boolean | null;
	/** Information that specifies whether the dashboard is enabled for tablet. */
	IsTabletEnabled: boolean | null;
	/** Name of the form. */
	Name: string | null;
	/** Unique identifier of the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Published On */
	readonly PublishedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Type of the form, for example, Dashboard or Preview. */
	Type: number | null;
	/** Unique Name */
	UniqueName: string | null;
	/** For internal use only. */
	Version: number | null;
	/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
	readonly VersionNumber: number | null;
}

const SystemFormFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AncestorFormId: { schemaName: 'AncestorFormId', logicalName: '_ancestorformid_value', entityCollectionName: 'systemforms', entityLogicalName: 'systemform' },
	CanBeDeleted: { logicalName: 'canbedeleted' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	Description: { logicalName: 'description' },
	FormActivationState: { logicalName: 'formactivationstate', type: 'Integer' },
	FormId: { logicalName: 'formid' },
	FormIdUnique: { logicalName: 'formidunique', readOnly: true },
	FormJson: { logicalName: 'formjson' },
	FormPresentation: { logicalName: 'formpresentation', type: 'Integer' },
	FormXml: { logicalName: 'formxml' },
	FormXmlManaged: { logicalName: 'formxmlmanaged', readOnly: true },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsAIRMerged: { logicalName: 'isairmerged', type: 'Boolean' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsDefault: { logicalName: 'isdefault', type: 'Boolean' },
	IsDesktopEnabled: { logicalName: 'isdesktopenabled', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsTabletEnabled: { logicalName: 'istabletenabled', type: 'Boolean' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PublishedOn_UtcDateAndTime: { logicalName: 'publishedon', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	Type: { logicalName: 'type', type: 'Integer' },
	UniqueName: { logicalName: 'uniquename' },
	Version: { logicalName: 'version', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SystemForm WebApi class for early-bound style coding
 * Usage: const systemForm = new SystemFormApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SystemFormApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISystemFormApi>(entity, 'systemform', 'systemforms', SystemFormFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SystemFormApi extends ISystemFormApi { }
