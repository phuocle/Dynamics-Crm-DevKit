//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_entitylist_Information {
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
			tab_4_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_map_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_map_section_2: DevKit.Controls.Section;
			tab_map_section_3: DevKit.Controls.Section;
			tab_map_section_4: DevKit.Controls.Section;
		}
		interface tab_tab_odata_Sections {
			tab_5_section_1: DevKit.Controls.Section;
			tab_odata_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_options_Sections {
			mspp_entitylist_registerstartupscript_MonacoEditor: DevKit.Controls.Section;
			tab_3_section_1: DevKit.Controls.Section;
			tab_configuration: DevKit.Controls.Section;
		}
		interface tab_tab_webpages_Sections {
			tab_6_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface tab_tab_map extends DevKit.Controls.ITab {
			Section: tab_tab_map_Sections;
		}
		interface tab_tab_odata extends DevKit.Controls.ITab {
			Section: tab_tab_odata_Sections;
		}
		interface tab_tab_options extends DevKit.Controls.ITab {
			Section: tab_tab_options_Sections;
		}
		interface tab_tab_webpages extends DevKit.Controls.ITab {
			Section: tab_tab_webpages_Sections;
		}
		interface Tabs {
			tab_4: tab_tab_4;
			tab_map: tab_tab_map;
			tab_odata: tab_tab_odata;
			tab_options: tab_tab_options;
			tab_webpages: tab_tab_webpages;
		}
		interface Body {
			Tab: Tabs;
			mspp_calendar_alldayfieldname: DevKit.Controls.String;
			mspp_calendar_descriptionfieldname: DevKit.Controls.String;
			mspp_calendar_enabled: DevKit.Controls.Boolean;
			mspp_calendar_enddatefieldname: DevKit.Controls.String;
			mspp_calendar_initialdate: DevKit.Controls.Date;
			mspp_calendar_initialview: DevKit.Controls.OptionSet;
			mspp_calendar_locationfieldname: DevKit.Controls.String;
			mspp_calendar_organizerfieldname: DevKit.Controls.String;
			mspp_calendar_startdatefieldname: DevKit.Controls.String;
			mspp_calendar_style: DevKit.Controls.OptionSet;
			mspp_calendar_summaryfieldname: DevKit.Controls.String;
			mspp_calendar_timezone: DevKit.Controls.Integer;
			mspp_calendar_timezonemode: DevKit.Controls.OptionSet;
			mspp_createbuttonlabel: DevKit.Controls.String;
			mspp_detailsbuttonlabel: DevKit.Controls.String;
			mspp_emptylisttext: DevKit.Controls.String;
			mspp_entityname: DevKit.Controls.String;
			/** Indicates whether or not the table permission provider will assert privileges on the entity type associated with this list. */
			mspp_entitypermissionsenabled: DevKit.Controls.Boolean;
			mspp_filter_applybuttonlabel: DevKit.Controls.String;
			mspp_filter_definition: DevKit.Controls.String;
			mspp_filter_enabled: DevKit.Controls.Boolean;
			mspp_filter_orientation: DevKit.Controls.OptionSet;
			mspp_filteraccount: DevKit.Controls.String;
			mspp_filterportaluser: DevKit.Controls.String;
			mspp_filterwebsite: DevKit.Controls.String;
			/** The name of the parameter added to the Query String of the list item's URL that will contain the list item record's ID. */
			mspp_idquerystringparametername: DevKit.Controls.String;
			/** Use a configured code component */
			mspp_iscodecomponent: DevKit.Controls.Boolean;
			/** A non-localizable string that can be used by queries to retrieve the record. */
			mspp_key: DevKit.Controls.String;
			mspp_map_credentials: DevKit.Controls.String;
			mspp_map_distanceunits: DevKit.Controls.OptionSet;
			/** Shows a comma-delimited list of integer values to be populated in the drop-down list  in the web portal for selecting the distance to search for a location on the map. */
			mspp_map_distancevalues: DevKit.Controls.String;
			/** Indicates if a map view of the data is to be rendered. */
			mspp_map_enabled: DevKit.Controls.Boolean;
			mspp_map_infoboxdescriptionfieldname: DevKit.Controls.String;
			mspp_map_infoboxoffsetx: DevKit.Controls.Integer;
			mspp_map_infoboxoffsety: DevKit.Controls.Integer;
			mspp_map_infoboxtitlefieldname: DevKit.Controls.String;
			mspp_map_latitude: DevKit.Controls.Double;
			mspp_map_latitudefieldname: DevKit.Controls.String;
			mspp_map_longitude: DevKit.Controls.Double;
			mspp_map_longitudefieldname: DevKit.Controls.String;
			mspp_map_pushpinheight: DevKit.Controls.Integer;
			mspp_map_pushpinurl: DevKit.Controls.String;
			mspp_map_pushpinwidth: DevKit.Controls.Integer;
			mspp_map_resturl: DevKit.Controls.String;
			mspp_map_zoom: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			mspp_odata_enabled: DevKit.Controls.Boolean;
			mspp_odata_entitysetname: DevKit.Controls.String;
			mspp_odata_entitytypename: DevKit.Controls.String;
			/** The entity view that defines the columns that will be mapped to properties of the entity exposed in the OData feed. */
			mspp_odata_view: DevKit.Controls.String;
			mspp_pagesize: DevKit.Controls.Integer;
			mspp_primarykeyname: DevKit.Controls.String;
			mspp_provisionedlanguages: DevKit.Controls.Integer;
			/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
			mspp_registerstartupscript: DevKit.Controls.String;
			/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
			mspp_registerstartupscript1: DevKit.Controls.String;
			mspp_searchenabled: DevKit.Controls.Boolean;
			mspp_searchplaceholdertext: DevKit.Controls.String;
			mspp_searchtooltiptext: DevKit.Controls.String;
			mspp_settings: DevKit.Controls.String;
			/** Deprecated */
			mspp_view: DevKit.Controls.String;
			mspp_views: DevKit.Controls.String;
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
		interface Navigation {
			mspp_webpage_entitylist: DevKit.Controls.NavigationItem
		}
		interface Grid {
			grid_webpages: DevKit.Controls.Grid;
		}
	}
	class Formmspp_entitylist_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_entitylist_Information */
		Body: DevKit.Formmspp_entitylist_Information.Body;
		/** The Navigation of form mspp_entitylist_Information */
		Navigation: DevKit.Formmspp_entitylist_Information.Navigation;
		/** The Grid of form mspp_entitylist_Information */
		Grid: DevKit.Formmspp_entitylist_Information.Grid;
		/** The SidePanes of form mspp_entitylist_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_entitylistApi {
		/**
		* DynamicsCrm.DevKit mspp_entitylistApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		mspp_calendar_alldayfieldname: string;
		mspp_calendar_descriptionfieldname: string;
		mspp_calendar_enabled: boolean;
		mspp_calendar_enddatefieldname: string;
		mspp_calendar_initialdate_UtcDateOnly: Date;
		mspp_calendar_initialview: OptionSet.mspp_entitylist.mspp_calendar_initialview;
		mspp_calendar_locationfieldname: string;
		mspp_calendar_organizerfieldname: string;
		mspp_calendar_startdatefieldname: string;
		mspp_calendar_style: OptionSet.mspp_entitylist.mspp_calendar_style;
		mspp_calendar_summaryfieldname: string;
		mspp_calendar_timezone: number;
		mspp_calendar_timezonemode: OptionSet.mspp_entitylist.mspp_calendar_timezonemode;
		mspp_createbuttonlabel: string;
		/** Shows who created the record. */
		mspp_createdby: string;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date;
		mspp_detailsbuttonlabel: string;
		mspp_emptylisttext: string;
		/** Unique identifier for entity instances */
		mspp_entitylistId: string;
		mspp_entityname: string;
		/** Indicates whether or not the table permission provider will assert privileges on the entity type associated with this list. */
		mspp_entitypermissionsenabled: boolean;
		mspp_filter_applybuttonlabel: string;
		mspp_filter_definition: string;
		mspp_filter_enabled: boolean;
		mspp_filter_orientation: OptionSet.mspp_entitylist.mspp_filter_orientation;
		mspp_filteraccount: string;
		mspp_filterportaluser: string;
		mspp_filterwebsite: string;
		/** The name of the parameter added to the Query String of the list item's URL that will contain the list item record's ID. */
		mspp_idquerystringparametername: string;
		/** Use a configured code component */
		mspp_iscodecomponent: boolean;
		/** A non-localizable string that can be used by queries to retrieve the record. */
		mspp_key: string;
		mspp_map_credentials: string;
		mspp_map_distanceunits: OptionSet.mspp_entitylist.mspp_map_distanceunits;
		/** Shows a comma-delimited list of integer values to be populated in the drop-down list  in the web portal for selecting the distance to search for a location on the map. */
		mspp_map_distancevalues: string;
		/** Indicates if a map view of the data is to be rendered. */
		mspp_map_enabled: boolean;
		mspp_map_infoboxdescriptionfieldname: string;
		mspp_map_infoboxoffsetx: number;
		mspp_map_infoboxoffsety: number;
		mspp_map_infoboxtitlefieldname: string;
		mspp_map_latitude: number;
		mspp_map_latitudefieldname: string;
		mspp_map_longitude: number;
		mspp_map_longitudefieldname: string;
		mspp_map_pushpinheight: number;
		mspp_map_pushpinurl: string;
		mspp_map_pushpinwidth: number;
		mspp_map_resturl: string;
		mspp_map_type: OptionSet.mspp_entitylist.mspp_map_type;
		mspp_map_zoom: number;
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		mspp_name: string;
		mspp_odata_enabled: boolean;
		mspp_odata_entitysetname: string;
		mspp_odata_entitytypename: string;
		/** The entity view that defines the columns that will be mapped to properties of the entity exposed in the OData feed. */
		mspp_odata_view: string;
		mspp_pagesize: number;
		mspp_primarykeyname: string;
		mspp_provisionedlanguages: number;
		/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
		mspp_registerstartupscript: string;
		mspp_searchenabled: boolean;
		mspp_searchplaceholdertext: string;
		mspp_searchtooltiptext: string;
		mspp_settings: string;
		/** Deprecated */
		mspp_view: string;
		mspp_views: string;
		/** Unique identifier for Web Page associated with Entity List. */
		mspp_webpageforcreate: string;
		/** Unique identifier for Web Page associated with Entity List. */
		mspp_webpagefordetailsview: string;
		/** Unique identifier for Website entity associated with this record */
		mspp_websiteid: string;
		/** Status of the List */
		statecode: OptionSet.mspp_entitylist.statecode;
		/** Reason for the status of the List */
		statuscode: OptionSet.mspp_entitylist.statuscode;
		readonly FormattedValue: {
			readonly mspp_calendar_alldayfieldname: string;
			readonly mspp_calendar_descriptionfieldname: string;
			readonly mspp_calendar_enabled: string;
			readonly mspp_calendar_enddatefieldname: string;
			readonly mspp_calendar_initialdate_UtcDateOnly: string;
			readonly mspp_calendar_initialview: string;
			readonly mspp_calendar_locationfieldname: string;
			readonly mspp_calendar_organizerfieldname: string;
			readonly mspp_calendar_startdatefieldname: string;
			readonly mspp_calendar_style: string;
			readonly mspp_calendar_summaryfieldname: string;
			readonly mspp_calendar_timezone: string;
			readonly mspp_calendar_timezonemode: string;
			readonly mspp_createbuttonlabel: string;
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_detailsbuttonlabel: string;
			readonly mspp_emptylisttext: string;
			/** Unique identifier for entity instances */
			readonly mspp_entitylistId: string;
			readonly mspp_entityname: string;
			/** Indicates whether or not the table permission provider will assert privileges on the entity type associated with this list. */
			readonly mspp_entitypermissionsenabled: string;
			readonly mspp_filter_applybuttonlabel: string;
			readonly mspp_filter_definition: string;
			readonly mspp_filter_enabled: string;
			readonly mspp_filter_orientation: string;
			readonly mspp_filteraccount: string;
			readonly mspp_filterportaluser: string;
			readonly mspp_filterwebsite: string;
			/** The name of the parameter added to the Query String of the list item's URL that will contain the list item record's ID. */
			readonly mspp_idquerystringparametername: string;
			/** Use a configured code component */
			readonly mspp_iscodecomponent: string;
			/** A non-localizable string that can be used by queries to retrieve the record. */
			readonly mspp_key: string;
			readonly mspp_map_credentials: string;
			readonly mspp_map_distanceunits: string;
			/** Shows a comma-delimited list of integer values to be populated in the drop-down list  in the web portal for selecting the distance to search for a location on the map. */
			readonly mspp_map_distancevalues: string;
			/** Indicates if a map view of the data is to be rendered. */
			readonly mspp_map_enabled: string;
			readonly mspp_map_infoboxdescriptionfieldname: string;
			readonly mspp_map_infoboxoffsetx: string;
			readonly mspp_map_infoboxoffsety: string;
			readonly mspp_map_infoboxtitlefieldname: string;
			readonly mspp_map_latitude: string;
			readonly mspp_map_latitudefieldname: string;
			readonly mspp_map_longitude: string;
			readonly mspp_map_longitudefieldname: string;
			readonly mspp_map_pushpinheight: string;
			readonly mspp_map_pushpinurl: string;
			readonly mspp_map_pushpinwidth: string;
			readonly mspp_map_resturl: string;
			readonly mspp_map_type: string;
			readonly mspp_map_zoom: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			readonly mspp_odata_enabled: string;
			readonly mspp_odata_entitysetname: string;
			readonly mspp_odata_entitytypename: string;
			/** The entity view that defines the columns that will be mapped to properties of the entity exposed in the OData feed. */
			readonly mspp_odata_view: string;
			readonly mspp_pagesize: string;
			readonly mspp_primarykeyname: string;
			readonly mspp_provisionedlanguages: string;
			/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
			readonly mspp_registerstartupscript: string;
			readonly mspp_searchenabled: string;
			readonly mspp_searchplaceholdertext: string;
			readonly mspp_searchtooltiptext: string;
			readonly mspp_settings: string;
			/** Deprecated */
			readonly mspp_view: string;
			readonly mspp_views: string;
			/** Unique identifier for Web Page associated with Entity List. */
			readonly mspp_webpageforcreate: string;
			/** Unique identifier for Web Page associated with Entity List. */
			readonly mspp_webpagefordetailsview: string;
			/** Unique identifier for Website entity associated with this record */
			readonly mspp_websiteid: string;
			/** Status of the List */
			readonly statecode: string;
			/** Reason for the status of the List */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_entitylist {
		enum mspp_calendar_initialview {
			/** 756150003 */
			Day,
			/** 756150001 */
			Month,
			/** 756150002 */
			Week,
			/** 756150000 */
			Year
		}
		enum mspp_calendar_style {
			/** 756150001 */
			Event_list,
			/** 756150000 */
			Full_calendar
		}
		enum mspp_calendar_timezonemode {
			/** 756150001 */
			Specific_Time_Zone,
			/** 756150000 */
			User_Local_Time_Zone
		}
		enum mspp_filter_orientation {
			/** 756150000 */
			Horizontal,
			/** 756150001 */
			Vertical
		}
		enum mspp_map_distanceunits {
			/** 756150000 */
			Km,
			/** 756150001 */
			miles
		}
		enum mspp_map_type {
			/** 756150000 */
			Bing,
			/** 756150002 */
			Esri,
			/** 756150001 */
			Google
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}