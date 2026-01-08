//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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