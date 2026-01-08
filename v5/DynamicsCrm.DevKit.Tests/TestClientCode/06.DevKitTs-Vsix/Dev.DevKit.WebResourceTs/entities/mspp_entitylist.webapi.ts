/**
 * mspp_entitylist.webapi.ts - mspp_entitylist WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_entitylist
 * All fields return string representation of their values
 */
export interface Imspp_entitylistFormattedValue {
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
	readonly mspp_createdby: string;
	readonly mspp_createdon_UtcDateAndTime: string;
	readonly mspp_detailsbuttonlabel: string;
	readonly mspp_emptylisttext: string;
	readonly mspp_entitylistId: string;
	readonly mspp_entityname: string;
	readonly mspp_entitypermissionsenabled: string;
	readonly mspp_filter_applybuttonlabel: string;
	readonly mspp_filter_definition: string;
	readonly mspp_filter_enabled: string;
	readonly mspp_filter_orientation: string;
	readonly mspp_filteraccount: string;
	readonly mspp_filterportaluser: string;
	readonly mspp_filterwebsite: string;
	readonly mspp_idquerystringparametername: string;
	readonly mspp_iscodecomponent: string;
	readonly mspp_key: string;
	readonly mspp_map_credentials: string;
	readonly mspp_map_distanceunits: string;
	readonly mspp_map_distancevalues: string;
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
	readonly mspp_modifiedby: string;
	readonly mspp_modifiedon_UtcDateAndTime: string;
	readonly mspp_name: string;
	readonly mspp_odata_enabled: string;
	readonly mspp_odata_entitysetname: string;
	readonly mspp_odata_entitytypename: string;
	readonly mspp_odata_view: string;
	readonly mspp_pagesize: string;
	readonly mspp_primarykeyname: string;
	readonly mspp_provisionedlanguages: string;
	readonly mspp_registerstartupscript: string;
	readonly mspp_searchenabled: string;
	readonly mspp_searchplaceholdertext: string;
	readonly mspp_searchtooltiptext: string;
	readonly mspp_settings: string;
	readonly mspp_view: string;
	readonly mspp_views: string;
	readonly mspp_webpageforcreate: string;
	readonly mspp_webpagefordetailsview: string;
	readonly mspp_websiteid: string;
	readonly statecode: string;
	readonly statuscode: string;
}

/**
 * mspp_entitylist WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_entitylistApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_entitylistFormattedValue;
	/** Is All Day Field Name */
	mspp_calendar_alldayfieldname: string | null;
	/** Description Field Name */
	mspp_calendar_descriptionfieldname: string | null;
	/** Calendar View Enabled */
	mspp_calendar_enabled: boolean | null;
	/** End Date Field Name */
	mspp_calendar_enddatefieldname: string | null;
	/** Calendar Initial Date */
	mspp_calendar_initialdate_UtcDateOnly: Date | null;
	/** Calendar Initial View */
	mspp_calendar_initialview: number | null;
	/** Location Field Name */
	mspp_calendar_locationfieldname: string | null;
	/** Organizer Field Name */
	mspp_calendar_organizerfieldname: string | null;
	/** Start Date Field Name */
	mspp_calendar_startdatefieldname: string | null;
	/** Calendar Style */
	mspp_calendar_style: number | null;
	/** Summary Field Name */
	mspp_calendar_summaryfieldname: string | null;
	/** Display Time Zone */
	mspp_calendar_timezone: number | null;
	/** Time Zone Display Mode */
	mspp_calendar_timezonemode: number | null;
	/** Create Button Label */
	mspp_createbuttonlabel: string | null;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Details Button Label */
	mspp_detailsbuttonlabel: string | null;
	/** Empty List Text */
	mspp_emptylisttext: string | null;
	/** Unique identifier for entity instances */
	mspp_entitylistId: DevKit.Guid | null;
	/** Table Name */
	mspp_entityname: string | null;
	/** Indicates whether or not the table permission provider will assert privileges on the entity type associated with this list. */
	mspp_entitypermissionsenabled: boolean | null;
	/** Apply Button Label */
	mspp_filter_applybuttonlabel: string | null;
	/** Filter Definition */
	mspp_filter_definition: string | null;
	/** Filter Enabled */
	mspp_filter_enabled: boolean | null;
	/** Filter Orientation */
	mspp_filter_orientation: number | null;
	/** Filter Account Attribute */
	mspp_filteraccount: string | null;
	/** Filter Portal User Attribute */
	mspp_filterportaluser: string | null;
	/** Filter Website Attribute */
	mspp_filterwebsite: string | null;
	/** The name of the parameter added to the Query String of the list item's URL that will contain the list item record's ID. */
	mspp_idquerystringparametername: string | null;
	/** Use a configured code component */
	mspp_iscodecomponent: boolean | null;
	/** A non-localizable string that can be used by queries to retrieve the record. */
	mspp_key: string | null;
	/** Credentials */
	mspp_map_credentials: string | null;
	/** Distance Units */
	mspp_map_distanceunits: number | null;
	/** Shows a comma-delimited list of integer values to be populated in the drop-down list  in the web portal for selecting the distance to search for a location on the map. */
	mspp_map_distancevalues: string | null;
	/** Indicates if a map view of the data is to be rendered. */
	mspp_map_enabled: boolean | null;
	/** Infobox Description Field Name */
	mspp_map_infoboxdescriptionfieldname: string | null;
	/** Infobox Offset x */
	mspp_map_infoboxoffsetx: number | null;
	/** Infobox Offset y */
	mspp_map_infoboxoffsety: number | null;
	/** Infobox Title Field Name */
	mspp_map_infoboxtitlefieldname: string | null;
	/** Latitude */
	mspp_map_latitude: number | null;
	/** Latitude Field Name */
	mspp_map_latitudefieldname: string | null;
	/** Longitude */
	mspp_map_longitude: number | null;
	/** Longitude Field Name */
	mspp_map_longitudefieldname: string | null;
	/** Pin Image Height */
	mspp_map_pushpinheight: number | null;
	/** Pin Image URL */
	mspp_map_pushpinurl: string | null;
	/** Pin Image Width */
	mspp_map_pushpinwidth: number | null;
	/** REST URL */
	mspp_map_resturl: string | null;
	/** Map Type */
	mspp_map_type: number | null;
	/** Zoom */
	mspp_map_zoom: number | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** OData Enabled */
	mspp_odata_enabled: boolean | null;
	/** OData Entity Set Name */
	mspp_odata_entitysetname: string | null;
	/** OData Entity Type Name */
	mspp_odata_entitytypename: string | null;
	/** The entity view that defines the columns that will be mapped to properties of the entity exposed in the OData feed. */
	mspp_odata_view: string | null;
	/** Page Size */
	mspp_pagesize: number | null;
	/** Primary Key Name */
	mspp_primarykeyname: string | null;
	/** Provisioned Languages */
	mspp_provisionedlanguages: number | null;
	/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
	mspp_registerstartupscript: string | null;
	/** Search Enabled */
	mspp_searchenabled: boolean | null;
	/** Search Placeholder Text */
	mspp_searchplaceholdertext: string | null;
	/** Search Tooltip Text */
	mspp_searchtooltiptext: string | null;
	/** Settings */
	mspp_settings: string | null;
	/** Deprecated */
	mspp_view: string | null;
	/** Views */
	mspp_views: string | null;
	/** Unique identifier for Web Page associated with Entity List. */
	mspp_webpageforcreate: DevKit.Guid | null;
	/** Unique identifier for Web Page associated with Entity List. */
	mspp_webpagefordetailsview: DevKit.Guid | null;
	/** Unique identifier for Website entity associated with this record */
	mspp_websiteid: DevKit.Guid | null;
	/** Status of the List */
	statecode: number | null;
	/** Reason for the status of the List */
	statuscode: number | null;
}

const mspp_entitylistFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_calendar_alldayfieldname: { logicalName: 'mspp_calendar_alldayfieldname' },
	mspp_calendar_descriptionfieldname: { logicalName: 'mspp_calendar_descriptionfieldname' },
	mspp_calendar_enabled: { logicalName: 'mspp_calendar_enabled', type: 'Boolean' },
	mspp_calendar_enddatefieldname: { logicalName: 'mspp_calendar_enddatefieldname' },
	mspp_calendar_initialdate_UtcDateOnly: { logicalName: 'mspp_calendar_initialdate', type: 'DateTime' },
	mspp_calendar_initialview: { logicalName: 'mspp_calendar_initialview', type: 'Integer' },
	mspp_calendar_locationfieldname: { logicalName: 'mspp_calendar_locationfieldname' },
	mspp_calendar_organizerfieldname: { logicalName: 'mspp_calendar_organizerfieldname' },
	mspp_calendar_startdatefieldname: { logicalName: 'mspp_calendar_startdatefieldname' },
	mspp_calendar_style: { logicalName: 'mspp_calendar_style', type: 'Integer' },
	mspp_calendar_summaryfieldname: { logicalName: 'mspp_calendar_summaryfieldname' },
	mspp_calendar_timezone: { logicalName: 'mspp_calendar_timezone', type: 'Integer' },
	mspp_calendar_timezonemode: { logicalName: 'mspp_calendar_timezonemode', type: 'Integer' },
	mspp_createbuttonlabel: { logicalName: 'mspp_createbuttonlabel' },
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_detailsbuttonlabel: { logicalName: 'mspp_detailsbuttonlabel' },
	mspp_emptylisttext: { logicalName: 'mspp_emptylisttext' },
	mspp_entitylistId: { logicalName: 'mspp_entitylistid' },
	mspp_entityname: { logicalName: 'mspp_entityname' },
	mspp_entitypermissionsenabled: { logicalName: 'mspp_entitypermissionsenabled', type: 'Boolean' },
	mspp_filter_applybuttonlabel: { logicalName: 'mspp_filter_applybuttonlabel' },
	mspp_filter_definition: { logicalName: 'mspp_filter_definition' },
	mspp_filter_enabled: { logicalName: 'mspp_filter_enabled', type: 'Boolean' },
	mspp_filter_orientation: { logicalName: 'mspp_filter_orientation', type: 'Integer' },
	mspp_filteraccount: { logicalName: 'mspp_filteraccount' },
	mspp_filterportaluser: { logicalName: 'mspp_filterportaluser' },
	mspp_filterwebsite: { logicalName: 'mspp_filterwebsite' },
	mspp_idquerystringparametername: { logicalName: 'mspp_idquerystringparametername' },
	mspp_iscodecomponent: { logicalName: 'mspp_iscodecomponent', type: 'Boolean' },
	mspp_key: { logicalName: 'mspp_key' },
	mspp_map_credentials: { logicalName: 'mspp_map_credentials' },
	mspp_map_distanceunits: { logicalName: 'mspp_map_distanceunits', type: 'Integer' },
	mspp_map_distancevalues: { logicalName: 'mspp_map_distancevalues' },
	mspp_map_enabled: { logicalName: 'mspp_map_enabled', type: 'Boolean' },
	mspp_map_infoboxdescriptionfieldname: { logicalName: 'mspp_map_infoboxdescriptionfieldname' },
	mspp_map_infoboxoffsetx: { logicalName: 'mspp_map_infoboxoffsetx', type: 'Integer' },
	mspp_map_infoboxoffsety: { logicalName: 'mspp_map_infoboxoffsety', type: 'Integer' },
	mspp_map_infoboxtitlefieldname: { logicalName: 'mspp_map_infoboxtitlefieldname' },
	mspp_map_latitude: { logicalName: 'mspp_map_latitude', type: 'Number' },
	mspp_map_latitudefieldname: { logicalName: 'mspp_map_latitudefieldname' },
	mspp_map_longitude: { logicalName: 'mspp_map_longitude', type: 'Number' },
	mspp_map_longitudefieldname: { logicalName: 'mspp_map_longitudefieldname' },
	mspp_map_pushpinheight: { logicalName: 'mspp_map_pushpinheight', type: 'Integer' },
	mspp_map_pushpinurl: { logicalName: 'mspp_map_pushpinurl' },
	mspp_map_pushpinwidth: { logicalName: 'mspp_map_pushpinwidth', type: 'Integer' },
	mspp_map_resturl: { logicalName: 'mspp_map_resturl' },
	mspp_map_type: { logicalName: 'mspp_map_type', type: 'Integer' },
	mspp_map_zoom: { logicalName: 'mspp_map_zoom', type: 'Integer' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_odata_enabled: { logicalName: 'mspp_odata_enabled', type: 'Boolean' },
	mspp_odata_entitysetname: { logicalName: 'mspp_odata_entitysetname' },
	mspp_odata_entitytypename: { logicalName: 'mspp_odata_entitytypename' },
	mspp_odata_view: { logicalName: 'mspp_odata_view' },
	mspp_pagesize: { logicalName: 'mspp_pagesize', type: 'Integer' },
	mspp_primarykeyname: { logicalName: 'mspp_primarykeyname' },
	mspp_provisionedlanguages: { logicalName: 'mspp_provisionedlanguages', type: 'Integer' },
	mspp_registerstartupscript: { logicalName: 'mspp_registerstartupscript' },
	mspp_searchenabled: { logicalName: 'mspp_searchenabled', type: 'Boolean' },
	mspp_searchplaceholdertext: { logicalName: 'mspp_searchplaceholdertext' },
	mspp_searchtooltiptext: { logicalName: 'mspp_searchtooltiptext' },
	mspp_settings: { logicalName: 'mspp_settings' },
	mspp_view: { logicalName: 'mspp_view' },
	mspp_views: { logicalName: 'mspp_views' },
	mspp_webpageforcreate: { schemaName: 'mspp_webpageforcreate', logicalName: '_mspp_webpageforcreate_value', entityCollectionName: 'mspp_webpages', entityLogicalName: 'mspp_webpage' },
	mspp_webpagefordetailsview: { schemaName: 'mspp_webpagefordetailsview', logicalName: '_mspp_webpagefordetailsview_value', entityCollectionName: 'mspp_webpages', entityLogicalName: 'mspp_webpage' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_entitylist WebApi class for early-bound style coding
 * Usage: const mspp_entitylist = new mspp_entitylistApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_entitylistApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_entitylistApi>(entity, 'mspp_entitylist', 'mspp_entitylists', mspp_entitylistFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_entitylistApi extends Imspp_entitylistApi { }
