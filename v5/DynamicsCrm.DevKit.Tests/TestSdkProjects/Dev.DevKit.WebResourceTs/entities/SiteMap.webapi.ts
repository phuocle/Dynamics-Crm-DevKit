/**
 * SiteMap.webapi.ts - SiteMap WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SiteMap WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISiteMapApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISiteMapApi, 'FormattedValue'>]: string };
	/** Component State */
	readonly ComponentState: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalfÂ of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Enable to allow sitemap groups to be collapsed. */
	EnableCollapsibleGroups: boolean | null;
	/** Information about whether the site map is associated with app module. */
	IsAppAware: boolean | null;
	readonly IsManaged: boolean | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	readonly OrganizationId: DevKit.Guid | null;
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Enable to show the home button in the sitemap. */
	ShowHome: boolean | null;
	/** Enable to show the pinned dropdown in the sitemap. */
	ShowPinned: boolean | null;
	/** Enable to show the recents dropdown in the sitemap. */
	ShowRecents: boolean | null;
	readonly SiteMapId: DevKit.Guid | null;
	readonly SiteMapIdUnique: DevKit.Guid | null;
	SiteMapName: string | null;
	SiteMapNameUnique: string | null;
	SiteMapXml: string | null;
	readonly SiteMapXmlManaged: string | null;
	readonly SolutionId: DevKit.Guid | null;
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const SiteMapFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EnableCollapsibleGroups: { logicalName: 'enablecollapsiblegroups', type: 'Boolean' },
	IsAppAware: { logicalName: 'isappaware', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ShowHome: { logicalName: 'showhome', type: 'Boolean' },
	ShowPinned: { logicalName: 'showpinned', type: 'Boolean' },
	ShowRecents: { logicalName: 'showrecents', type: 'Boolean' },
	SiteMapId: { logicalName: 'sitemapid', readOnly: true },
	SiteMapIdUnique: { logicalName: 'sitemapidunique', readOnly: true },
	SiteMapName: { logicalName: 'sitemapname' },
	SiteMapNameUnique: { logicalName: 'sitemapnameunique' },
	SiteMapXml: { logicalName: 'sitemapxml' },
	SiteMapXmlManaged: { logicalName: 'sitemapxmlmanaged', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SiteMap WebApi class for early-bound style coding
 * Usage: const siteMap = new SiteMapApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SiteMapApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISiteMapApi>(entity, 'sitemap', 'sitemaps', SiteMapFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SiteMapApi extends ISiteMapApi { }
