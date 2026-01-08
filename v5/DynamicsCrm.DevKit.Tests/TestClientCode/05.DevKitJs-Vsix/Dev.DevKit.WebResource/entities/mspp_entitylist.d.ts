//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_entitylist_Information {
		interface tab_tab_4_Sections {
			/** Section */
			tab_4_section_1: DevKit.Controls.Section;
			/** Entity Field Mappings */
			tab_4_section_2: DevKit.Controls.Section;
			/** Settings */
			tab_4_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_map_Sections {
			/** Section */
			tab_2_section_1: DevKit.Controls.Section;
			/** Settings */
			tab_map_section_2: DevKit.Controls.Section;
			/** Entity Field Mappings */
			tab_map_section_3: DevKit.Controls.Section;
			/** Search Options */
			tab_map_section_4: DevKit.Controls.Section;
		}
		interface tab_tab_odata_Sections {
			/** Section */
			tab_5_section_1: DevKit.Controls.Section;
			/** Settings */
			tab_odata_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_options_Sections {
			/** Custom JavaScript */
			mspp_entitylist_registerstartupscript_MonacoEditor: DevKit.Controls.Section;
			/** Custom JavaScript */
			tab_3_section_1: DevKit.Controls.Section;
			/** Configuration */
			tab_configuration: DevKit.Controls.Section;
		}
		interface tab_tab_webpages_Sections {
			/** Section */
			tab_6_section_1: DevKit.Controls.Section;
		}
		/** Calendar View */
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		/** Map View */
		interface tab_tab_map extends DevKit.Controls.ITab {
			Section: tab_tab_map_Sections;
		}
		/** OData Feed */
		interface tab_tab_odata extends DevKit.Controls.ITab {
			Section: tab_tab_odata_Sections;
		}
		/** Options */
		interface tab_tab_options extends DevKit.Controls.ITab {
			Section: tab_tab_options_Sections;
		}
		/** Web Pages */
		interface tab_tab_webpages extends DevKit.Controls.ITab {
			Section: tab_tab_webpages_Sections;
		}
		interface Tabs {
			/** Calendar View */
			tab_4: tab_tab_4;
			/** Map View */
			tab_map: tab_tab_map;
			/** OData Feed */
			tab_odata: tab_tab_odata;
			/** Options */
			tab_options: tab_tab_options;
			/** Web Pages */
			tab_webpages: tab_tab_webpages;
		}
		interface Body {
			Tab: Tabs;
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
			mspp_emptylisttext: DevKit.Controls.String;
			/** Table Name */
			mspp_entityname: DevKit.Controls.String;
			/** Indicates whether or not the table permission provider will assert privileges on the entity type associated with this list. */
			mspp_entitypermissionsenabled: DevKit.Controls.Boolean;
			/** Apply Button Label */
			mspp_filter_applybuttonlabel: DevKit.Controls.String;
			/** Filter Definition */
			mspp_filter_definition: DevKit.Controls.String;
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
			mspp_registerstartupscript: DevKit.Controls.String;
			/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
			mspp_registerstartupscript1: DevKit.Controls.String;
			/** Search Enabled */
			mspp_searchenabled: DevKit.Controls.Boolean;
			/** Search Placeholder Text */
			mspp_searchplaceholdertext: DevKit.Controls.String;
			/** Search Tooltip Text */
			mspp_searchtooltiptext: DevKit.Controls.String;
			/** Settings */
			mspp_settings: DevKit.Controls.String;
			/** Deprecated */
			mspp_view: DevKit.Controls.String;
			/** Views */
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
		interface Grid {
			/** Web Pages (List) */
			grid_webpages: DevKit.Controls.Grid;
		}
	}
	export class Formmspp_entitylist_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form mspp_entitylist_Information */
		Body: DevKit.Formmspp_entitylist_Information.Body;
		/** The Grid of form mspp_entitylist_Information */
		Grid: DevKit.Formmspp_entitylist_Information.Grid;
	}
	export class mspp_entitylistApi {
		/**
		* DynamicsCrm.DevKit mspp_entitylistApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		mspp_calendar_alldayfieldname: string | null;
		mspp_calendar_descriptionfieldname: string | null;
		mspp_calendar_enabled: boolean | null;
		mspp_calendar_enddatefieldname: string | null;
		mspp_calendar_initialdate_UtcDateOnly: Date | null;
		mspp_calendar_initialview: OptionSet.mspp_entitylist.mspp_calendar_initialview | null;
		mspp_calendar_locationfieldname: string | null;
		mspp_calendar_organizerfieldname: string | null;
		mspp_calendar_startdatefieldname: string | null;
		mspp_calendar_style: OptionSet.mspp_entitylist.mspp_calendar_style | null;
		mspp_calendar_summaryfieldname: string | null;
		mspp_calendar_timezone: number | null;
		mspp_calendar_timezonemode: OptionSet.mspp_entitylist.mspp_calendar_timezonemode | null;
		mspp_createbuttonlabel: string | null;
		/** Shows who created the record. */
		mspp_createdby: string | null;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date | null;
		mspp_detailsbuttonlabel: string | null;
		mspp_emptylisttext: string | null;
		/** Unique identifier for entity instances */
		mspp_entitylistId: string | null;
		mspp_entityname: string | null;
		/** Indicates whether or not the table permission provider will assert privileges on the entity type associated with this list. */
		mspp_entitypermissionsenabled: boolean | null;
		mspp_filter_applybuttonlabel: string | null;
		mspp_filter_definition: string | null;
		mspp_filter_enabled: boolean | null;
		mspp_filter_orientation: OptionSet.mspp_entitylist.mspp_filter_orientation | null;
		mspp_filteraccount: string | null;
		mspp_filterportaluser: string | null;
		mspp_filterwebsite: string | null;
		/** The name of the parameter added to the Query String of the list item's URL that will contain the list item record's ID. */
		mspp_idquerystringparametername: string | null;
		/** Use a configured code component */
		mspp_iscodecomponent: boolean | null;
		/** A non-localizable string that can be used by queries to retrieve the record. */
		mspp_key: string | null;
		mspp_map_credentials: string | null;
		mspp_map_distanceunits: OptionSet.mspp_entitylist.mspp_map_distanceunits | null;
		/** Shows a comma-delimited list of integer values to be populated in the drop-down list  in the web portal for selecting the distance to search for a location on the map. */
		mspp_map_distancevalues: string | null;
		/** Indicates if a map view of the data is to be rendered. */
		mspp_map_enabled: boolean | null;
		mspp_map_infoboxdescriptionfieldname: string | null;
		mspp_map_infoboxoffsetx: number | null;
		mspp_map_infoboxoffsety: number | null;
		mspp_map_infoboxtitlefieldname: string | null;
		mspp_map_latitude: number | null;
		mspp_map_latitudefieldname: string | null;
		mspp_map_longitude: number | null;
		mspp_map_longitudefieldname: string | null;
		mspp_map_pushpinheight: number | null;
		mspp_map_pushpinurl: string | null;
		mspp_map_pushpinwidth: number | null;
		mspp_map_resturl: string | null;
		mspp_map_type: OptionSet.mspp_entitylist.mspp_map_type | null;
		mspp_map_zoom: number | null;
		/** Shows who last updated the record. */
		mspp_modifiedby: string | null;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date | null;
		/** The name of the custom entity. */
		mspp_name: string | null;
		mspp_odata_enabled: boolean | null;
		mspp_odata_entitysetname: string | null;
		mspp_odata_entitytypename: string | null;
		/** The entity view that defines the columns that will be mapped to properties of the entity exposed in the OData feed. */
		mspp_odata_view: string | null;
		mspp_pagesize: number | null;
		mspp_primarykeyname: string | null;
		mspp_provisionedlanguages: number | null;
		/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
		mspp_registerstartupscript: string | null;
		mspp_searchenabled: boolean | null;
		mspp_searchplaceholdertext: string | null;
		mspp_searchtooltiptext: string | null;
		mspp_settings: string | null;
		/** Deprecated */
		mspp_view: string | null;
		mspp_views: string | null;
		/** Unique identifier for Web Page associated with Entity List. */
		mspp_webpageforcreate: string | null;
		/** Unique identifier for Web Page associated with Entity List. */
		mspp_webpagefordetailsview: string | null;
		/** Unique identifier for Website entity associated with this record */
		mspp_websiteid: string | null;
		/** Status of the List */
		statecode: OptionSet.mspp_entitylist.statecode | null;
		/** Reason for the status of the List */
		statuscode: OptionSet.mspp_entitylist.statuscode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Day = 756150003*/
			Day = 756150003,
			/** Month = 756150001*/
			Month = 756150001,
			/** Week = 756150002*/
			Week = 756150002,
			/** Year = 756150000*/
			Year = 756150000
		}
		enum mspp_calendar_style {
			/** Event_list = 756150001*/
			Event_list = 756150001,
			/** Full_calendar = 756150000*/
			Full_calendar = 756150000
		}
		enum mspp_calendar_timezonemode {
			/** Specific_Time_Zone = 756150001*/
			Specific_Time_Zone = 756150001,
			/** User_Local_Time_Zone = 756150000*/
			User_Local_Time_Zone = 756150000
		}
		enum mspp_filter_orientation {
			/** Horizontal = 756150000*/
			Horizontal = 756150000,
			/** Vertical = 756150001*/
			Vertical = 756150001
		}
		enum mspp_map_distanceunits {
			/** Km = 756150000*/
			Km = 756150000,
			/** miles = 756150001*/
			miles = 756150001
		}
		enum mspp_map_type {
			/** Bing = 756150000*/
			Bing = 756150000,
			/** Esri = 756150002*/
			Esri = 756150002,
			/** Google = 756150001*/
			Google = 756150001
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}