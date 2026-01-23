/**
 * OrganizationUI.webapi.ts - OrganizationUI WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * OrganizationUI WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IOrganizationUIApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IOrganizationUIApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** For internal use only. */
	FieldXml: string | null;
	/** Unique identifier of the record type form. */
	FormId: DevKit.Guid | null;
	/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
	readonly FormIdUnique: DevKit.Guid | null;
	/** XML representation of the form layout. */
	FormXml: string | null;
	/** Binary representation of the icon used in record type grid views. */
	GridIcon: string | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	readonly IsManaged: boolean | null;
	/** Binary representation of the large icon used in the record type form. */
	LargeEntityIcon: string | null;
	/** Unique identifier of the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Binary representation of the large icon used in the Microsoft Dynamics 365 client for Outlook for this record type. */
	OutlookShortcutIcon: string | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** For internal use only. */
	PreviewColumnsetXml: string | null;
	/** For internal use only. */
	PreviewXml: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	Version: number | null;
	/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
	readonly VersionNumber: number | null;
}

const OrganizationUIFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	FieldXml: { logicalName: 'fieldxml' },
	FormId: { logicalName: 'formid' },
	FormIdUnique: { logicalName: 'formidunique', readOnly: true },
	FormXml: { logicalName: 'formxml' },
	GridIcon: { logicalName: 'gridicon' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	LargeEntityIcon: { logicalName: 'largeentityicon' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OutlookShortcutIcon: { logicalName: 'outlookshortcuticon' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PreviewColumnsetXml: { logicalName: 'previewcolumnsetxml' },
	PreviewXml: { logicalName: 'previewxml' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	Version: { logicalName: 'version', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * OrganizationUI WebApi class for early-bound style coding
 * Usage: const organizationUI = new OrganizationUIApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class OrganizationUIApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IOrganizationUIApi>(entity, 'organizationui', 'organizationuis', OrganizationUIFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface OrganizationUIApi extends IOrganizationUIApi { }
