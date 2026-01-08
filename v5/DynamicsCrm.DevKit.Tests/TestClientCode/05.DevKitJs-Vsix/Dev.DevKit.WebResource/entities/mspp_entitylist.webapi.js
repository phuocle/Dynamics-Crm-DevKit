'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.mspp_entitylistApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
					}
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(obj.FormattedValue, field, {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(obj, field, {
					get: getValue
				});
			}
			else {
				Object.defineProperty(obj, field, {
					get: getValue,
					set: setValue
				});
			}
		}
		const _mspp_entitylist = {
			mspp_calendar_alldayfieldname: { a: 'mspp_calendar_alldayfieldname' },
			mspp_calendar_descriptionfieldname: { a: 'mspp_calendar_descriptionfieldname' },
			mspp_calendar_enabled: { a: 'mspp_calendar_enabled', g: 'Boolean' },
			mspp_calendar_enddatefieldname: { a: 'mspp_calendar_enddatefieldname' },
			mspp_calendar_initialdate_UtcDateOnly: { a: 'mspp_calendar_initialdate', g: 'DateTime' },
			mspp_calendar_initialview: { a: 'mspp_calendar_initialview', g: 'Integer' },
			mspp_calendar_locationfieldname: { a: 'mspp_calendar_locationfieldname' },
			mspp_calendar_organizerfieldname: { a: 'mspp_calendar_organizerfieldname' },
			mspp_calendar_startdatefieldname: { a: 'mspp_calendar_startdatefieldname' },
			mspp_calendar_style: { a: 'mspp_calendar_style', g: 'Integer' },
			mspp_calendar_summaryfieldname: { a: 'mspp_calendar_summaryfieldname' },
			mspp_calendar_timezone: { a: 'mspp_calendar_timezone', g: 'Integer' },
			mspp_calendar_timezonemode: { a: 'mspp_calendar_timezonemode', g: 'Integer' },
			mspp_createbuttonlabel: { a: 'mspp_createbuttonlabel' },
			mspp_createdby: { b: 'mspp_createdby', a: '_mspp_createdby_value', c: 'systemusers', d: 'systemuser' },
			mspp_createdon_UtcDateAndTime: { a: 'mspp_createdon', g: 'DateTime' },
			mspp_detailsbuttonlabel: { a: 'mspp_detailsbuttonlabel' },
			mspp_emptylisttext: { a: 'mspp_emptylisttext' },
			mspp_entitylistId: { a: 'mspp_entitylistid' },
			mspp_entityname: { a: 'mspp_entityname' },
			mspp_entitypermissionsenabled: { a: 'mspp_entitypermissionsenabled', g: 'Boolean' },
			mspp_filter_applybuttonlabel: { a: 'mspp_filter_applybuttonlabel' },
			mspp_filter_definition: { a: 'mspp_filter_definition' },
			mspp_filter_enabled: { a: 'mspp_filter_enabled', g: 'Boolean' },
			mspp_filter_orientation: { a: 'mspp_filter_orientation', g: 'Integer' },
			mspp_filteraccount: { a: 'mspp_filteraccount' },
			mspp_filterportaluser: { a: 'mspp_filterportaluser' },
			mspp_filterwebsite: { a: 'mspp_filterwebsite' },
			mspp_idquerystringparametername: { a: 'mspp_idquerystringparametername' },
			mspp_iscodecomponent: { a: 'mspp_iscodecomponent', g: 'Boolean' },
			mspp_key: { a: 'mspp_key' },
			mspp_map_credentials: { a: 'mspp_map_credentials' },
			mspp_map_distanceunits: { a: 'mspp_map_distanceunits', g: 'Integer' },
			mspp_map_distancevalues: { a: 'mspp_map_distancevalues' },
			mspp_map_enabled: { a: 'mspp_map_enabled', g: 'Boolean' },
			mspp_map_infoboxdescriptionfieldname: { a: 'mspp_map_infoboxdescriptionfieldname' },
			mspp_map_infoboxoffsetx: { a: 'mspp_map_infoboxoffsetx', g: 'Integer' },
			mspp_map_infoboxoffsety: { a: 'mspp_map_infoboxoffsety', g: 'Integer' },
			mspp_map_infoboxtitlefieldname: { a: 'mspp_map_infoboxtitlefieldname' },
			mspp_map_latitude: { a: 'mspp_map_latitude', g: 'Number' },
			mspp_map_latitudefieldname: { a: 'mspp_map_latitudefieldname' },
			mspp_map_longitude: { a: 'mspp_map_longitude', g: 'Number' },
			mspp_map_longitudefieldname: { a: 'mspp_map_longitudefieldname' },
			mspp_map_pushpinheight: { a: 'mspp_map_pushpinheight', g: 'Integer' },
			mspp_map_pushpinurl: { a: 'mspp_map_pushpinurl' },
			mspp_map_pushpinwidth: { a: 'mspp_map_pushpinwidth', g: 'Integer' },
			mspp_map_resturl: { a: 'mspp_map_resturl' },
			mspp_map_type: { a: 'mspp_map_type', g: 'Integer' },
			mspp_map_zoom: { a: 'mspp_map_zoom', g: 'Integer' },
			mspp_modifiedby: { b: 'mspp_modifiedby', a: '_mspp_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			mspp_modifiedon_UtcDateAndTime: { a: 'mspp_modifiedon', g: 'DateTime' },
			mspp_name: { a: 'mspp_name' },
			mspp_odata_enabled: { a: 'mspp_odata_enabled', g: 'Boolean' },
			mspp_odata_entitysetname: { a: 'mspp_odata_entitysetname' },
			mspp_odata_entitytypename: { a: 'mspp_odata_entitytypename' },
			mspp_odata_view: { a: 'mspp_odata_view' },
			mspp_pagesize: { a: 'mspp_pagesize', g: 'Integer' },
			mspp_primarykeyname: { a: 'mspp_primarykeyname' },
			mspp_provisionedlanguages: { a: 'mspp_provisionedlanguages', g: 'Integer' },
			mspp_registerstartupscript: { a: 'mspp_registerstartupscript' },
			mspp_searchenabled: { a: 'mspp_searchenabled', g: 'Boolean' },
			mspp_searchplaceholdertext: { a: 'mspp_searchplaceholdertext' },
			mspp_searchtooltiptext: { a: 'mspp_searchtooltiptext' },
			mspp_settings: { a: 'mspp_settings' },
			mspp_view: { a: 'mspp_view' },
			mspp_views: { a: 'mspp_views' },
			mspp_webpageforcreate: { b: 'mspp_webpageforcreate', a: '_mspp_webpageforcreate_value', c: 'mspp_webpages', d: 'mspp_webpage' },
			mspp_webpagefordetailsview: { b: 'mspp_webpagefordetailsview', a: '_mspp_webpagefordetailsview_value', c: 'mspp_webpages', d: 'mspp_webpage' },
			mspp_websiteid: { b: 'mspp_websiteid', a: '_mspp_websiteid_value', c: 'mspp_websites', d: 'mspp_website' },
			statecode: { a: 'statecode', g: 'Integer' },
			statuscode: { a: 'statuscode', g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const mspp_entitylist = {};
		mspp_entitylist.ODataEntity = e;
		mspp_entitylist.FormattedValue = {};
		for (const field in _mspp_entitylist) {
			const fieldConfig = _mspp_entitylist[field];
			webApiField(mspp_entitylist, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		mspp_entitylist.Entity = u;
		mspp_entitylist.EntityName = 'mspp_entitylist';
		mspp_entitylist.EntityCollectionName = 'mspp_entitylists';
		mspp_entitylist['@odata.etag'] = e?.['@odata.etag'];
		mspp_entitylist.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		mspp_entitylist.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return mspp_entitylist;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
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
})(OptionSet || (OptionSet = {}));