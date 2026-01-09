/**
 * Theme.webapi.ts - Theme WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Theme WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IThemeApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IThemeApi, 'FormattedValue'>]: string };
	/** Choose the Unified Interface secondary theme color to be used on the process control */
	AccentColor: string | null;
	/** For internal use only. */
	BackgroundColor: string | null;
	/** Choose the color that controls will use for borders */
	ControlBorder: string | null;
	/** Choose the background color for controls to use to indicate when you hover over items */
	ControlShade: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Choose the default custom entity color if no color is assigned */
	DefaultCustomEntityColor: string | null;
	/** Choose the default color for system entities if no color is assigned */
	DefaultEntityColor: string | null;
	/** Exchange rate for the currency associated with the Theme with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Choose the color for all links, such as e-mail address and lookup links, and for all buttons that are in focus */
	GlobalLinkColor: string | null;
	/** Choose the color for title text, such as form tab labels */
	HeaderColor: string | null;
	/** Choose the color that commands or lists will use to indicate hovered over items */
	HoverLinkEffect: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Default status of theme. */
	IsDefaultTheme: boolean | null;
	/** Upload a web resource to use as a logo. Recommended dimensions are a height of 50 pixels and a maximum width of 400 pixels. */
	LogoId: DevKit.Guid | null;
	/** Enter text that will be used as the tooltip and alt text for the logo. */
	LogoToolTip: string | null;
	/** Choose the Unified Interface primary theme color to be used on main command bar, buttons and tabs */
	MainColor: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the Theme Entity. */
	Name: string | null;
	/** Choose the primary Navigation Bar background color */
	NavBarBackgroundColor: string | null;
	/** Choose the secondary Navigation Bar background color */
	NavBarShelfColor: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Choose the page header background color */
	PageHeaderBackgroundColor: string | null;
	/** Choose the panel header background color */
	PanelHeaderBackgroundColor: string | null;
	/** Choose the primary background color for process controls */
	ProcessControlColor: string | null;
	/** Choose the color that commands or lists will use to indicate selected items */
	SelectedLinkEffect: string | null;
	/** Status of the Theme */
	readonly statecode: number | null;
	/** Reason for the status of the Theme */
	statuscode: number | null;
	/** Unique identifier for entity instances */
	ThemeId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Exchange rate for the currency associated with the Theme with respect to the base currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Define type of theme. */
	Type: boolean | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	readonly VersionNumber: number | null;
}

const ThemeFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AccentColor: { logicalName: 'accentcolor' },
	BackgroundColor: { logicalName: 'backgroundcolor' },
	ControlBorder: { logicalName: 'controlborder' },
	ControlShade: { logicalName: 'controlshade' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DefaultCustomEntityColor: { logicalName: 'defaultcustomentitycolor' },
	DefaultEntityColor: { logicalName: 'defaultentitycolor' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	GlobalLinkColor: { logicalName: 'globallinkcolor' },
	HeaderColor: { logicalName: 'headercolor' },
	HoverLinkEffect: { logicalName: 'hoverlinkeffect' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsDefaultTheme: { logicalName: 'isdefaulttheme', type: 'Boolean' },
	LogoId: { schemaName: 'LogoId', logicalName: '_logoid_value', entityCollectionName: 'webresources', entityLogicalName: 'webresource' },
	LogoToolTip: { logicalName: 'logotooltip' },
	MainColor: { logicalName: 'maincolor' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	NavBarBackgroundColor: { logicalName: 'navbarbackgroundcolor' },
	NavBarShelfColor: { logicalName: 'navbarshelfcolor' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PageHeaderBackgroundColor: { logicalName: 'pageheaderbackgroundcolor' },
	PanelHeaderBackgroundColor: { logicalName: 'panelheaderbackgroundcolor' },
	ProcessControlColor: { logicalName: 'processcontrolcolor' },
	SelectedLinkEffect: { logicalName: 'selectedlinkeffect' },
	statecode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	ThemeId: { logicalName: 'themeid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	Type: { logicalName: 'type', type: 'Boolean' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Theme WebApi class for early-bound style coding
 * Usage: const theme = new ThemeApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ThemeApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IThemeApi>(entity, 'theme', 'themes', ThemeFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ThemeApi extends IThemeApi { }
