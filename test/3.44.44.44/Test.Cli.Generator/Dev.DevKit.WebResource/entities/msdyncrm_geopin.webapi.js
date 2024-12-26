'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_geopinApi = function (e) {
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return '';
				}
				if (isMultiOptionSet) {
					return entity[logicalName + f].toString().split(';').map(function (item) { return item.trim(); });
				}
				return entity[logicalName + f];
			};
			var getValue = function () {
				if (entity[logicalName] === undefined || entity[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === undefined || entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName];
					}
					return null;
				}
				if (isMultiOptionSet) {
					return entity[logicalName].toString().split(',').map(function (item) { return parseInt(item, 10); });
				}
				return entity[logicalName];
			};
			var setValue = function (value) {
				if (isMultiOptionSet) value = value.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
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
		var _msdyncrm_geopin = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_CenterLatitude: { a: 'msdyncrm_centerlatitude' },
			msdyncrm_CenterLongitude: { a: 'msdyncrm_centerlongitude' },
			msdyncrm_City: { a: 'msdyncrm_city' },
			msdyncrm_ContactGeoPinsId: { b: 'msdyncrm_ContactGeoPinsId', a: '_msdyncrm_contactgeopinsid_value', c: 'contacts', d: 'contact' },
			msdyncrm_Country: { a: 'msdyncrm_country' },
			msdyncrm_customerjourney: { b: 'msdyncrm_customerjourney', a: '_msdyncrm_customerjourney_value', c: 'msdyncrm_customerjourneies', d: 'msdyncrm_customerjourney' },
			msdyncrm_geopinId: { a: 'msdyncrm_geopinid' },
			msdyncrm_kpi_email_clicked_count: { a: 'msdyncrm_kpi_email_clicked_count' },
			msdyncrm_kpi_email_opened_count: { a: 'msdyncrm_kpi_email_opened_count' },
			msdyncrm_kpi_form_submitted_count: { a: 'msdyncrm_kpi_form_submitted_count' },
			msdyncrm_kpi_redirect_link_clicked_count: { a: 'msdyncrm_kpi_redirect_link_clicked_count' },
			msdyncrm_kpi_website_clicked_count: { a: 'msdyncrm_kpi_website_clicked_count' },
			msdyncrm_kpi_website_visited_count: { a: 'msdyncrm_kpi_website_visited_count' },
			msdyncrm_LeadGeoPinsId: { b: 'msdyncrm_LeadGeoPinsId', a: '_msdyncrm_leadgeopinsid_value', c: 'leads', d: 'lead' },
			msdyncrm_MarketingEmailGeoPinsId: { b: 'msdyncrm_MarketingEmailGeoPinsId', a: '_msdyncrm_marketingemailgeopinsid_value', c: 'msdyncrm_marketingemails', d: 'msdyncrm_marketingemail' },
			msdyncrm_marketingformGeoPinsId: { b: 'msdyncrm_marketingformGeoPinsId', a: '_msdyncrm_marketingformgeopinsid_value', c: 'msdyncrm_marketingforms', d: 'msdyncrm_marketingform' },
			msdyncrm_MarketingPageGeoPinsId: { b: 'msdyncrm_MarketingPageGeoPinsId', a: '_msdyncrm_marketingpagegeopinsid_value', c: 'msdyncrm_marketingpages', d: 'msdyncrm_marketingpage' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_NorthwestLatitude: { a: 'msdyncrm_northwestlatitude' },
			msdyncrm_NorthwestLongitude: { a: 'msdyncrm_northwestlongitude' },
			msdyncrm_PostalCode: { a: 'msdyncrm_postalcode' },
			msdyncrm_RedirectURLGeoPinsId: { b: 'msdyncrm_RedirectURLGeoPinsId', a: '_msdyncrm_redirecturlgeopinsid_value', c: 'msdyncrm_redirecturls', d: 'msdyncrm_redirecturl' },
			msdyncrm_requestbuilderservice_mktgeopins: { a: 'msdyncrm_requestbuilderservice_mktgeopins' },
			msdyncrm_resultparserservice_mktgeopins: { a: 'msdyncrm_resultparserservice_mktgeopins' },
			msdyncrm_serverId_marketing: { a: 'msdyncrm_serverid_marketing' },
			msdyncrm_SoutheastLatitude: { a: 'msdyncrm_southeastlatitude' },
			msdyncrm_SoutheastLongitude: { a: 'msdyncrm_southeastlongitude' },
			msdyncrm_State: { a: 'msdyncrm_state' },
			msdyncrm_WebsiteGeoPinsId: { b: 'msdyncrm_WebsiteGeoPinsId', a: '_msdyncrm_websitegeopinsid_value', c: 'msdyncrm_websites', d: 'msdyncrm_website' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyncrm_geopin = {};
		msdyncrm_geopin.ODataEntity = e;
		msdyncrm_geopin.FormattedValue = {};
		for (var field in _msdyncrm_geopin) {
			var a = _msdyncrm_geopin[field].a;
			var b = _msdyncrm_geopin[field].b;
			var c = _msdyncrm_geopin[field].c;
			var d = _msdyncrm_geopin[field].d;
			var g = _msdyncrm_geopin[field].g;
			var r = _msdyncrm_geopin[field].r;
			webApiField(msdyncrm_geopin, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_geopin.Entity = u;
		msdyncrm_geopin.EntityName = 'msdyncrm_geopin';
		msdyncrm_geopin.EntityCollectionName = 'msdyncrm_geopins';
		msdyncrm_geopin['@odata.etag'] = e['@odata.etag'];
		msdyncrm_geopin.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_geopin.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_geopin;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_geopin = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));