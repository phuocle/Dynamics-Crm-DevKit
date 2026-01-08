/**
 * mspp_entitylist.form.ts - mspp_entitylist Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_entitylist containing form classes: mspp_entitylist.FormClassName
 * 3. Aggregate Form class: mspp_entitylist.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_entitylist {

	// ========================================================================
	// Form: mspp_entitylist_Information
	// ========================================================================

	export namespace mspp_entitylist_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Is All Day Field Name */
			mspp_calendar_alldayfieldname: DevKit.Controls.String;
			/** Description Field Name */
			mspp_calendar_descriptionfieldname: DevKit.Controls.String;
			/** Calendar View Enabled */
			mspp_calendar_enabled: DevKit.Controls.Boolean;
			/** End Date Field Name */
			mspp_calendar_enddatefieldname: DevKit.Controls.String;
			/** Calendar Initial Date */
			mspp_calendar_initialdate: DevKit.Controls.DateOnly;
			/** Calendar Initial View */
			mspp_calendar_initialview: DevKit.Controls.OptionSet;
			/** Location Field Name */
			mspp_calendar_locationfieldname: DevKit.Controls.String;
			/** Organizer Field Name */
			mspp_calendar_organizerfieldname: DevKit.Controls.String;
			/** Start Date Field Name */
			mspp_calendar_startdatefieldname: DevKit.Controls.String;
			/** Calendar Style */
			mspp_calendar_style: DevKit.Controls.OptionSet;
			/** Summary Field Name */
			mspp_calendar_summaryfieldname: DevKit.Controls.String;
			/** Display Time Zone */
			mspp_calendar_timezone: DevKit.Controls.Integer;
			/** Time Zone Display Mode */
			mspp_calendar_timezonemode: DevKit.Controls.OptionSet;
			/** Create Button Label */
			mspp_createbuttonlabel: DevKit.Controls.String;
			/** Details Button Label */
			mspp_detailsbuttonlabel: DevKit.Controls.String;
			/** Empty List Text */
			mspp_emptylisttext: DevKit.Controls.Memo;
			/** Table Name */
			mspp_entityname: DevKit.Controls.String;
			/** Indicates whether or not the table permission provider will assert privileges on the entity type associated with this list. */
			mspp_entitypermissionsenabled: DevKit.Controls.Boolean;
			/** Apply Button Label */
			mspp_filter_applybuttonlabel: DevKit.Controls.String;
			/** Filter Definition */
			mspp_filter_definition: DevKit.Controls.Memo;
			/** Filter Enabled */
			mspp_filter_enabled: DevKit.Controls.Boolean;
			/** Filter Orientation */
			mspp_filter_orientation: DevKit.Controls.OptionSet;
			/** Filter Account Attribute */
			mspp_filteraccount: DevKit.Controls.String;
			/** Filter Portal User Attribute */
			mspp_filterportaluser: DevKit.Controls.String;
			/** Filter Website Attribute */
			mspp_filterwebsite: DevKit.Controls.String;
			/** The name of the parameter added to the Query String of the list item's URL that will contain the list item record's ID. */
			mspp_idquerystringparametername: DevKit.Controls.String;
			/** Use a configured code component */
			mspp_iscodecomponent: DevKit.Controls.Boolean;
			/** A non-localizable string that can be used by queries to retrieve the record. */
			mspp_key: DevKit.Controls.String;
			/** Credentials */
			mspp_map_credentials: DevKit.Controls.String;
			/** Distance Units */
			mspp_map_distanceunits: DevKit.Controls.OptionSet;
			/** Shows a comma-delimited list of integer values to be populated in the drop-down list  in the web portal for selecting the distance to search for a location on the map. */
			mspp_map_distancevalues: DevKit.Controls.String;
			/** Indicates if a map view of the data is to be rendered. */
			mspp_map_enabled: DevKit.Controls.Boolean;
			/** Infobox Description Field Name */
			mspp_map_infoboxdescriptionfieldname: DevKit.Controls.String;
			/** Infobox Offset x */
			mspp_map_infoboxoffsetx: DevKit.Controls.Integer;
			/** Infobox Offset y */
			mspp_map_infoboxoffsety: DevKit.Controls.Integer;
			/** Infobox Title Field Name */
			mspp_map_infoboxtitlefieldname: DevKit.Controls.String;
			/** Latitude */
			mspp_map_latitude: DevKit.Controls.Double;
			/** Latitude Field Name */
			mspp_map_latitudefieldname: DevKit.Controls.String;
			/** Longitude */
			mspp_map_longitude: DevKit.Controls.Double;
			/** Longitude Field Name */
			mspp_map_longitudefieldname: DevKit.Controls.String;
			/** Pin Image Height */
			mspp_map_pushpinheight: DevKit.Controls.Integer;
			/** Pin Image URL */
			mspp_map_pushpinurl: DevKit.Controls.String;
			/** Pin Image Width */
			mspp_map_pushpinwidth: DevKit.Controls.Integer;
			/** REST URL */
			mspp_map_resturl: DevKit.Controls.String;
			/** Zoom */
			mspp_map_zoom: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** OData Enabled */
			mspp_odata_enabled: DevKit.Controls.Boolean;
			/** OData Entity Set Name */
			mspp_odata_entitysetname: DevKit.Controls.String;
			/** OData Entity Type Name */
			mspp_odata_entitytypename: DevKit.Controls.String;
			/** The entity view that defines the columns that will be mapped to properties of the entity exposed in the OData feed. */
			mspp_odata_view: DevKit.Controls.String;
			/** Page Size */
			mspp_pagesize: DevKit.Controls.Integer;
			/** Primary Key Name */
			mspp_primarykeyname: DevKit.Controls.String;
			/** Provisioned Languages */
			mspp_provisionedlanguages: DevKit.Controls.Integer;
			/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
			mspp_registerstartupscript: DevKit.Controls.Memo;
			/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
			mspp_registerstartupscript1: DevKit.Controls.Memo;
			/** Search Enabled */
			mspp_searchenabled: DevKit.Controls.Boolean;
			/** Search Placeholder Text */
			mspp_searchplaceholdertext: DevKit.Controls.String;
			/** Search Tooltip Text */
			mspp_searchtooltiptext: DevKit.Controls.String;
			/** Settings */
			mspp_settings: DevKit.Controls.Memo;
			/** Deprecated */
			mspp_view: DevKit.Controls.String;
			/** Views */
			mspp_views: DevKit.Controls.Memo;
			/** Unique identifier for Web Page associated with Entity List. */
			mspp_webpageforcreate: DevKit.Controls.Lookup;
			/** Unique identifier for Web Page associated with Entity List. */
			mspp_webpagefordetailsview: DevKit.Controls.Lookup;
			/** Unique identifier for Website entity associated with this record */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_filter_applybuttonlabel: DevKit.Controls.WebResource;
			WebResource_filter_definition: DevKit.Controls.WebResource;
			WebResource_grid_settings: DevKit.Controls.WebResource;
			WebResource_localize_detailsbuttonlabel: DevKit.Controls.WebResource;
			WebResource_localize_emptylisttext: DevKit.Controls.WebResource;
			WebResource_localizecreatebuttonlabel: DevKit.Controls.WebResource;
			WebResource_localizesearchplaceholdertext: DevKit.Controls.WebResource;
			WebResource_localizesearchtooltiptext: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_alldayfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_descriptionfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_enddatefieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_locationfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_organizerfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_startdatefieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_summaryfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_entityname: DevKit.Controls.WebResource;
			WebResource_mspp_filteraccount: DevKit.Controls.WebResource;
			WebResource_mspp_filterportaluser: DevKit.Controls.WebResource;
			WebResource_mspp_filterwebsite: DevKit.Controls.WebResource;
			WebResource_mspp_map_infoboxdescriptionfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_map_infoboxtitlefieldname: DevKit.Controls.WebResource;
			WebResource_mspp_map_latitudefieldname: DevKit.Controls.WebResource;
			WebResource_mspp_map_longitudefieldname: DevKit.Controls.WebResource;
			WebResource_views: DevKit.Controls.WebResource;
			WebResource_viewselector_odataview: DevKit.Controls.WebResource;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface Itab_4TabSections {
			/** Section */
			tab_4_section_1: DevKit.Controls.Section;
			/** Entity Field Mappings */
			tab_4_section_2: DevKit.Controls.Section;
			/** Settings */
			tab_4_section_3: DevKit.Controls.Section;
		}

		export interface Itab_mapTabSections {
			/** Section */
			tab_2_section_1: DevKit.Controls.Section;
			/** Settings */
			tab_map_section_2: DevKit.Controls.Section;
			/** Entity Field Mappings */
			tab_map_section_3: DevKit.Controls.Section;
			/** Search Options */
			tab_map_section_4: DevKit.Controls.Section;
		}

		export interface Itab_odataTabSections {
			/** Section */
			tab_5_section_1: DevKit.Controls.Section;
			/** Settings */
			tab_odata_section_2: DevKit.Controls.Section;
		}

		export interface Itab_optionsTabSections {
			/** Custom JavaScript */
			mspp_entitylist_registerstartupscript_MonacoEditor: DevKit.Controls.Section;
			/** Custom JavaScript */
			tab_3_section_1: DevKit.Controls.Section;
			/** Configuration */
			tab_configuration: DevKit.Controls.Section;
		}

		export interface Itab_webpagesTabSections {
			/** Section */
			tab_6_section_1: DevKit.Controls.Section;
		}

		/** Calendar View */
		export interface Itab_4Tab extends DevKit.Controls.ITab {
			Section: Itab_4TabSections;
		}

		/** Map View */
		export interface Itab_mapTab extends DevKit.Controls.ITab {
			Section: Itab_mapTabSections;
		}

		/** OData Feed */
		export interface Itab_odataTab extends DevKit.Controls.ITab {
			Section: Itab_odataTabSections;
		}

		/** Options */
		export interface Itab_optionsTab extends DevKit.Controls.ITab {
			Section: Itab_optionsTabSections;
		}

		/** Web Pages */
		export interface Itab_webpagesTab extends DevKit.Controls.ITab {
			Section: Itab_webpagesTabSections;
		}

		export interface ITabs {
			/** Calendar View */
			tab_4: Itab_4Tab;
			/** Map View */
			tab_map: Itab_mapTab;
			/** OData Feed */
			tab_odata: Itab_odataTab;
			/** Options */
			tab_options: Itab_optionsTab;
			/** Web Pages */
			tab_webpages: Itab_webpagesTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Web Pages (List) */
			grid_webpages: DevKit.Controls.Grid;
		}

		/**
		 * Navigation interface
		 * Contains navigation items
		 */
		export interface INavigation {
		}

		/**
		 * QuickForm interface
		 * Contains quick view form controls
		 */
		export interface IQuickForm {
		}

		/**
		 * Process interface
		 * Contains business process flow definitions
		 */
		export interface IProcess extends DevKit.Controls.IProcess {
		}

		/**
		 * Dialog interface
		 * For quick create dialogs or other dialog forms
		 */
		export interface IDialog extends DevKit.IDialog {
		}
	}

	/**
	 * mspp_entitylist_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_entitylist.mspp_entitylist_Information(executionContext)
	 */
	export class mspp_entitylist_Information extends FormBase<mspp_entitylist_Information.IBody, mspp_entitylist_Information.IHeader, mspp_entitylist_Information.IGrid, mspp_entitylist_Information.INavigation, mspp_entitylist_Information.IQuickForm, mspp_entitylist_Information.IProcess, mspp_entitylist_Information.IDialog> {
		/**
		 * Creates a mspp_entitylist_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_calendar_alldayfieldname', 'mspp_calendar_descriptionfieldname', 'mspp_calendar_enabled', 'mspp_calendar_enddatefieldname', 'mspp_calendar_initialdate', 'mspp_calendar_initialview', 'mspp_calendar_locationfieldname', 'mspp_calendar_organizerfieldname', 'mspp_calendar_startdatefieldname', 'mspp_calendar_style', 'mspp_calendar_summaryfieldname', 'mspp_calendar_timezone', 'mspp_calendar_timezonemode', 'mspp_createbuttonlabel', 'mspp_detailsbuttonlabel', 'mspp_emptylisttext', 'mspp_entityname', 'mspp_entitypermissionsenabled', 'mspp_filter_applybuttonlabel', 'mspp_filter_definition', 'mspp_filter_enabled', 'mspp_filter_orientation', 'mspp_filteraccount', 'mspp_filterportaluser', 'mspp_filterwebsite', 'mspp_idquerystringparametername', 'mspp_iscodecomponent', 'mspp_key', 'mspp_map_credentials', 'mspp_map_distanceunits', 'mspp_map_distancevalues', 'mspp_map_enabled', 'mspp_map_infoboxdescriptionfieldname', 'mspp_map_infoboxoffsetx', 'mspp_map_infoboxoffsety', 'mspp_map_infoboxtitlefieldname', 'mspp_map_latitude', 'mspp_map_latitudefieldname', 'mspp_map_longitude', 'mspp_map_longitudefieldname', 'mspp_map_pushpinheight', 'mspp_map_pushpinurl', 'mspp_map_pushpinwidth', 'mspp_map_resturl', 'mspp_map_zoom', 'mspp_name', 'mspp_odata_enabled', 'mspp_odata_entitysetname', 'mspp_odata_entitytypename', 'mspp_odata_view', 'mspp_pagesize', 'mspp_primarykeyname', 'mspp_provisionedlanguages', 'mspp_registerstartupscript', 'mspp_registerstartupscript1', 'mspp_searchenabled', 'mspp_searchplaceholdertext', 'mspp_searchtooltiptext', 'mspp_settings', 'mspp_view', 'mspp_views', 'mspp_webpageforcreate', 'mspp_webpagefordetailsview', 'mspp_websiteid', 'WebResource_filter_applybuttonlabel', 'WebResource_filter_definition', 'WebResource_grid_settings', 'WebResource_localize_detailsbuttonlabel', 'WebResource_localize_emptylisttext', 'WebResource_localizecreatebuttonlabel', 'WebResource_localizesearchplaceholdertext', 'WebResource_localizesearchtooltiptext', 'WebResource_mspp_calendar_alldayfieldname', 'WebResource_mspp_calendar_descriptionfieldname', 'WebResource_mspp_calendar_enddatefieldname', 'WebResource_mspp_calendar_locationfieldname', 'WebResource_mspp_calendar_organizerfieldname', 'WebResource_mspp_calendar_startdatefieldname', 'WebResource_mspp_calendar_summaryfieldname', 'WebResource_mspp_entityname', 'WebResource_mspp_filteraccount', 'WebResource_mspp_filterportaluser', 'WebResource_mspp_filterwebsite', 'WebResource_mspp_map_infoboxdescriptionfieldname', 'WebResource_mspp_map_infoboxtitlefieldname', 'WebResource_mspp_map_latitudefieldname', 'WebResource_mspp_map_longitudefieldname', 'WebResource_views', 'WebResource_viewselector_odataview'],
				header: [],
				tab: ['tab_4___tab_4_section_1', 'tab_4___tab_4_section_2', 'tab_4___tab_4_section_3', 'tab_map___tab_2_section_1', 'tab_map___tab_map_section_2', 'tab_map___tab_map_section_3', 'tab_map___tab_map_section_4', 'tab_odata___tab_5_section_1', 'tab_odata___tab_odata_section_2', 'tab_options___mspp_entitylist_registerstartupscript_MonacoEditor', 'tab_options___tab_3_section_1', 'tab_options___tab_configuration', 'tab_webpages___tab_6_section_1'],
				grid: ['grid_webpages'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Aggregate Form: Form (contains all fields from all forms)
	// ========================================================================

	export namespace AllInOne {

		/**
		 * Aggregate Body controls interface
		 * Contains all controls from all forms on the entity
		 */
		export interface IBody {
			/** Is All Day Field Name */
			mspp_calendar_alldayfieldname: DevKit.Controls.String;
			/** Description Field Name */
			mspp_calendar_descriptionfieldname: DevKit.Controls.String;
			/** Calendar View Enabled */
			mspp_calendar_enabled: DevKit.Controls.Boolean;
			/** End Date Field Name */
			mspp_calendar_enddatefieldname: DevKit.Controls.String;
			/** Calendar Initial Date */
			mspp_calendar_initialdate: DevKit.Controls.DateOnly;
			/** Calendar Initial View */
			mspp_calendar_initialview: DevKit.Controls.OptionSet;
			/** Location Field Name */
			mspp_calendar_locationfieldname: DevKit.Controls.String;
			/** Organizer Field Name */
			mspp_calendar_organizerfieldname: DevKit.Controls.String;
			/** Start Date Field Name */
			mspp_calendar_startdatefieldname: DevKit.Controls.String;
			/** Calendar Style */
			mspp_calendar_style: DevKit.Controls.OptionSet;
			/** Summary Field Name */
			mspp_calendar_summaryfieldname: DevKit.Controls.String;
			/** Display Time Zone */
			mspp_calendar_timezone: DevKit.Controls.Integer;
			/** Time Zone Display Mode */
			mspp_calendar_timezonemode: DevKit.Controls.OptionSet;
			/** Create Button Label */
			mspp_createbuttonlabel: DevKit.Controls.String;
			/** Details Button Label */
			mspp_detailsbuttonlabel: DevKit.Controls.String;
			/** Empty List Text */
			mspp_emptylisttext: DevKit.Controls.Memo;
			/** Table Name */
			mspp_entityname: DevKit.Controls.String;
			/** Indicates whether or not the table permission provider will assert privileges on the entity type associated with this list. */
			mspp_entitypermissionsenabled: DevKit.Controls.Boolean;
			/** Apply Button Label */
			mspp_filter_applybuttonlabel: DevKit.Controls.String;
			/** Filter Definition */
			mspp_filter_definition: DevKit.Controls.Memo;
			/** Filter Enabled */
			mspp_filter_enabled: DevKit.Controls.Boolean;
			/** Filter Orientation */
			mspp_filter_orientation: DevKit.Controls.OptionSet;
			/** Filter Account Attribute */
			mspp_filteraccount: DevKit.Controls.String;
			/** Filter Portal User Attribute */
			mspp_filterportaluser: DevKit.Controls.String;
			/** Filter Website Attribute */
			mspp_filterwebsite: DevKit.Controls.String;
			/** The name of the parameter added to the Query String of the list item's URL that will contain the list item record's ID. */
			mspp_idquerystringparametername: DevKit.Controls.String;
			/** Use a configured code component */
			mspp_iscodecomponent: DevKit.Controls.Boolean;
			/** A non-localizable string that can be used by queries to retrieve the record. */
			mspp_key: DevKit.Controls.String;
			/** Credentials */
			mspp_map_credentials: DevKit.Controls.String;
			/** Distance Units */
			mspp_map_distanceunits: DevKit.Controls.OptionSet;
			/** Shows a comma-delimited list of integer values to be populated in the drop-down list  in the web portal for selecting the distance to search for a location on the map. */
			mspp_map_distancevalues: DevKit.Controls.String;
			/** Indicates if a map view of the data is to be rendered. */
			mspp_map_enabled: DevKit.Controls.Boolean;
			/** Infobox Description Field Name */
			mspp_map_infoboxdescriptionfieldname: DevKit.Controls.String;
			/** Infobox Offset x */
			mspp_map_infoboxoffsetx: DevKit.Controls.Integer;
			/** Infobox Offset y */
			mspp_map_infoboxoffsety: DevKit.Controls.Integer;
			/** Infobox Title Field Name */
			mspp_map_infoboxtitlefieldname: DevKit.Controls.String;
			/** Latitude */
			mspp_map_latitude: DevKit.Controls.Double;
			/** Latitude Field Name */
			mspp_map_latitudefieldname: DevKit.Controls.String;
			/** Longitude */
			mspp_map_longitude: DevKit.Controls.Double;
			/** Longitude Field Name */
			mspp_map_longitudefieldname: DevKit.Controls.String;
			/** Pin Image Height */
			mspp_map_pushpinheight: DevKit.Controls.Integer;
			/** Pin Image URL */
			mspp_map_pushpinurl: DevKit.Controls.String;
			/** Pin Image Width */
			mspp_map_pushpinwidth: DevKit.Controls.Integer;
			/** REST URL */
			mspp_map_resturl: DevKit.Controls.String;
			/** Zoom */
			mspp_map_zoom: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** OData Enabled */
			mspp_odata_enabled: DevKit.Controls.Boolean;
			/** OData Entity Set Name */
			mspp_odata_entitysetname: DevKit.Controls.String;
			/** OData Entity Type Name */
			mspp_odata_entitytypename: DevKit.Controls.String;
			/** The entity view that defines the columns that will be mapped to properties of the entity exposed in the OData feed. */
			mspp_odata_view: DevKit.Controls.String;
			/** Page Size */
			mspp_pagesize: DevKit.Controls.Integer;
			/** Primary Key Name */
			mspp_primarykeyname: DevKit.Controls.String;
			/** Provisioned Languages */
			mspp_provisionedlanguages: DevKit.Controls.Integer;
			/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
			mspp_registerstartupscript: DevKit.Controls.Memo;
			/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
			mspp_registerstartupscript1: DevKit.Controls.Memo;
			/** Search Enabled */
			mspp_searchenabled: DevKit.Controls.Boolean;
			/** Search Placeholder Text */
			mspp_searchplaceholdertext: DevKit.Controls.String;
			/** Search Tooltip Text */
			mspp_searchtooltiptext: DevKit.Controls.String;
			/** Settings */
			mspp_settings: DevKit.Controls.Memo;
			/** Deprecated */
			mspp_view: DevKit.Controls.String;
			/** Views */
			mspp_views: DevKit.Controls.Memo;
			/** Unique identifier for Web Page associated with Entity List. */
			mspp_webpageforcreate: DevKit.Controls.Lookup;
			/** Unique identifier for Web Page associated with Entity List. */
			mspp_webpagefordetailsview: DevKit.Controls.Lookup;
			/** Unique identifier for Website entity associated with this record */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_filter_applybuttonlabel: DevKit.Controls.WebResource;
			WebResource_filter_definition: DevKit.Controls.WebResource;
			WebResource_grid_settings: DevKit.Controls.WebResource;
			WebResource_localize_detailsbuttonlabel: DevKit.Controls.WebResource;
			WebResource_localize_emptylisttext: DevKit.Controls.WebResource;
			WebResource_localizecreatebuttonlabel: DevKit.Controls.WebResource;
			WebResource_localizesearchplaceholdertext: DevKit.Controls.WebResource;
			WebResource_localizesearchtooltiptext: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_alldayfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_descriptionfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_enddatefieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_locationfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_organizerfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_startdatefieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_summaryfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_entityname: DevKit.Controls.WebResource;
			WebResource_mspp_filteraccount: DevKit.Controls.WebResource;
			WebResource_mspp_filterportaluser: DevKit.Controls.WebResource;
			WebResource_mspp_filterwebsite: DevKit.Controls.WebResource;
			WebResource_mspp_map_infoboxdescriptionfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_map_infoboxtitlefieldname: DevKit.Controls.WebResource;
			WebResource_mspp_map_latitudefieldname: DevKit.Controls.WebResource;
			WebResource_mspp_map_longitudefieldname: DevKit.Controls.WebResource;
			WebResource_views: DevKit.Controls.WebResource;
			WebResource_viewselector_odataview: DevKit.Controls.WebResource;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		/**
		 * Aggregate Grid controls interface
		 */
		export interface IGrid {
			/** Web Pages (List) */
			grid_webpages: DevKit.Controls.Grid;
		}

		/**
		 * Aggregate Navigation interface
		 */
		export interface INavigation {
		}

		/**
		 * Aggregate QuickForm interface
		 */
		export interface IQuickForm {
		}

		/**
		 * Aggregate Process interface
		 */
		export interface IProcess extends DevKit.Controls.IProcess {
		}

	}

	/**
	 * Aggregate Form class
	 * Contains all fields from all forms - useful when form type is unknown at compile time
	 * Usage: new mspp_entitylist.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_entitylist Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_calendar_alldayfieldname', 'mspp_calendar_descriptionfieldname', 'mspp_calendar_enabled', 'mspp_calendar_enddatefieldname', 'mspp_calendar_initialdate', 'mspp_calendar_initialview', 'mspp_calendar_locationfieldname', 'mspp_calendar_organizerfieldname', 'mspp_calendar_startdatefieldname', 'mspp_calendar_style', 'mspp_calendar_summaryfieldname', 'mspp_calendar_timezone', 'mspp_calendar_timezonemode', 'mspp_createbuttonlabel', 'mspp_detailsbuttonlabel', 'mspp_emptylisttext', 'mspp_entityname', 'mspp_entitypermissionsenabled', 'mspp_filter_applybuttonlabel', 'mspp_filter_definition', 'mspp_filter_enabled', 'mspp_filter_orientation', 'mspp_filteraccount', 'mspp_filterportaluser', 'mspp_filterwebsite', 'mspp_idquerystringparametername', 'mspp_iscodecomponent', 'mspp_key', 'mspp_map_credentials', 'mspp_map_distanceunits', 'mspp_map_distancevalues', 'mspp_map_enabled', 'mspp_map_infoboxdescriptionfieldname', 'mspp_map_infoboxoffsetx', 'mspp_map_infoboxoffsety', 'mspp_map_infoboxtitlefieldname', 'mspp_map_latitude', 'mspp_map_latitudefieldname', 'mspp_map_longitude', 'mspp_map_longitudefieldname', 'mspp_map_pushpinheight', 'mspp_map_pushpinurl', 'mspp_map_pushpinwidth', 'mspp_map_resturl', 'mspp_map_zoom', 'mspp_name', 'mspp_odata_enabled', 'mspp_odata_entitysetname', 'mspp_odata_entitytypename', 'mspp_odata_view', 'mspp_pagesize', 'mspp_primarykeyname', 'mspp_provisionedlanguages', 'mspp_registerstartupscript', 'mspp_registerstartupscript1', 'mspp_searchenabled', 'mspp_searchplaceholdertext', 'mspp_searchtooltiptext', 'mspp_settings', 'mspp_view', 'mspp_views', 'mspp_webpageforcreate', 'mspp_webpagefordetailsview', 'mspp_websiteid', 'WebResource_filter_applybuttonlabel', 'WebResource_filter_definition', 'WebResource_grid_settings', 'WebResource_localize_detailsbuttonlabel', 'WebResource_localize_emptylisttext', 'WebResource_localizecreatebuttonlabel', 'WebResource_localizesearchplaceholdertext', 'WebResource_localizesearchtooltiptext', 'WebResource_mspp_calendar_alldayfieldname', 'WebResource_mspp_calendar_descriptionfieldname', 'WebResource_mspp_calendar_enddatefieldname', 'WebResource_mspp_calendar_locationfieldname', 'WebResource_mspp_calendar_organizerfieldname', 'WebResource_mspp_calendar_startdatefieldname', 'WebResource_mspp_calendar_summaryfieldname', 'WebResource_mspp_entityname', 'WebResource_mspp_filteraccount', 'WebResource_mspp_filterportaluser', 'WebResource_mspp_filterwebsite', 'WebResource_mspp_map_infoboxdescriptionfieldname', 'WebResource_mspp_map_infoboxtitlefieldname', 'WebResource_mspp_map_latitudefieldname', 'WebResource_mspp_map_longitudefieldname', 'WebResource_views', 'WebResource_viewselector_odataview'],
				header: [],
				tab: ['tab_4___tab_4_section_1', 'tab_4___tab_4_section_2', 'tab_4___tab_4_section_3', 'tab_map___tab_2_section_1', 'tab_map___tab_map_section_2', 'tab_map___tab_map_section_3', 'tab_map___tab_map_section_4', 'tab_odata___tab_5_section_1', 'tab_odata___tab_odata_section_2', 'tab_options___mspp_entitylist_registerstartupscript_MonacoEditor', 'tab_options___tab_3_section_1', 'tab_options___tab_configuration', 'tab_webpages___tab_6_section_1'],
				grid: ['grid_webpages'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
