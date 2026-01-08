'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.Formmspp_entitylist_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["grid_webpages", "mspp_calendar_alldayfieldname", "mspp_calendar_descriptionfieldname", "mspp_calendar_enabled", "mspp_calendar_enddatefieldname", "mspp_calendar_initialdate", "mspp_calendar_initialview", "mspp_calendar_locationfieldname", "mspp_calendar_organizerfieldname", "mspp_calendar_startdatefieldname", "mspp_calendar_style", "mspp_calendar_summaryfieldname", "mspp_calendar_timezone", "mspp_calendar_timezonemode", "mspp_createbuttonlabel", "mspp_detailsbuttonlabel", "mspp_emptylisttext", "mspp_entityname", "mspp_entitypermissionsenabled", "mspp_filter_applybuttonlabel", "mspp_filter_definition", "mspp_filter_enabled", "mspp_filter_orientation", "mspp_filteraccount", "mspp_filterportaluser", "mspp_filterwebsite", "mspp_idquerystringparametername", "mspp_iscodecomponent", "mspp_key", "mspp_map_credentials", "mspp_map_distanceunits", "mspp_map_distancevalues", "mspp_map_enabled", "mspp_map_infoboxdescriptionfieldname", "mspp_map_infoboxoffsetx", "mspp_map_infoboxoffsety", "mspp_map_infoboxtitlefieldname", "mspp_map_latitude", "mspp_map_latitudefieldname", "mspp_map_longitude", "mspp_map_longitudefieldname", "mspp_map_pushpinheight", "mspp_map_pushpinurl", "mspp_map_pushpinwidth", "mspp_map_resturl", "mspp_map_zoom", "mspp_name", "mspp_odata_enabled", "mspp_odata_entitysetname", "mspp_odata_entitytypename", "mspp_odata_view", "mspp_pagesize", "mspp_primarykeyname", "mspp_provisionedlanguages", "mspp_registerstartupscript", "mspp_registerstartupscript1", "mspp_searchenabled", "mspp_searchplaceholdertext", "mspp_searchtooltiptext", "mspp_settings", "mspp_view", "mspp_views", "mspp_webpageforcreate", "mspp_webpagefordetailsview", "mspp_websiteid", "WebResource_filter_applybuttonlabel", "WebResource_filter_definition", "WebResource_grid_settings", "WebResource_localize_detailsbuttonlabel", "WebResource_localize_emptylisttext", "WebResource_localizecreatebuttonlabel", "WebResource_localizesearchplaceholdertext", "WebResource_localizesearchtooltiptext", "WebResource_mspp_calendar_alldayfieldname", "WebResource_mspp_calendar_descriptionfieldname", "WebResource_mspp_calendar_enddatefieldname", "WebResource_mspp_calendar_locationfieldname", "WebResource_mspp_calendar_organizerfieldname", "WebResource_mspp_calendar_startdatefieldname", "WebResource_mspp_calendar_summaryfieldname", "WebResource_mspp_entityname", "WebResource_mspp_filteraccount", "WebResource_mspp_filterportaluser", "WebResource_mspp_filterwebsite", "WebResource_mspp_map_infoboxdescriptionfieldname", "WebResource_mspp_map_infoboxtitlefieldname", "WebResource_mspp_map_latitudefieldname", "WebResource_mspp_map_longitudefieldname", "WebResource_views", "WebResource_viewselector_odataview"],
			bpf: [],
			dialog: [],
			grid: ["grid_webpages"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["tab_4___tab_4_section_1", "tab_4___tab_4_section_2", "tab_4___tab_4_section_3", "tab_map___tab_2_section_1", "tab_map___tab_map_section_2", "tab_map___tab_map_section_3", "tab_map___tab_map_section_4", "tab_odata___tab_5_section_1", "tab_odata___tab_odata_section_2", "tab_options___mspp_entitylist_registerstartupscript_MonacoEditor", "tab_options___tab_3_section_1", "tab_options___tab_configuration", "tab_webpages___tab_6_section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.mspp_entitylist = {
		mspp_calendar_initialview: { Day: 756150003, Month: 756150001, Week: 756150002, Year: 756150000 },
		mspp_calendar_style: { Event_list: 756150001, Full_calendar: 756150000 },
		mspp_calendar_timezonemode: { Specific_Time_Zone: 756150001, User_Local_Time_Zone: 756150000 },
		mspp_filter_orientation: { Horizontal: 756150000, Vertical: 756150001 },
		mspp_map_distanceunits: { Km: 756150000, miles: 756150001 },
		mspp_map_type: { Bing: 756150000, Esri: 756150002, Google: 756150001 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));