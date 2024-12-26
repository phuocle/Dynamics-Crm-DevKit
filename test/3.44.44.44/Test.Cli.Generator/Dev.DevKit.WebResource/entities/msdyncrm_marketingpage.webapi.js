'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_marketingpageApi = function (e) {
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
		var _msdyncrm_marketingpage = {
			adx_pagetemplateid: { a: 'adx_pagetemplateid' },
			adx_parentwebpageid: { a: 'adx_parentwebpageid' },
			adx_webpageid: { a: 'adx_webpageid' },
			adx_websiteid: { a: 'adx_websiteid' },
			adx_websitelanguageid: { a: 'adx_websitelanguageid' },
			adx_webtemplateid: { a: 'adx_webtemplateid' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_alloweddomains: { a: 'msdyncrm_alloweddomains' },
			msdyncrm_Content: { a: 'msdyncrm_content' },
			msdyncrm_contenttype: { a: 'msdyncrm_contenttype' },
			msdyncrm_forceportalless: { a: 'msdyncrm_forceportalless' },
			msdyncrm_formpagemapping: { a: 'msdyncrm_formpagemapping' },
			msdyncrm_formtosave: { a: 'msdyncrm_formtosave', r: true },
			msdyncrm_full_page_url: { a: 'msdyncrm_full_page_url' },
			msdyncrm_full_page_urls: { a: 'msdyncrm_full_page_urls' },
			msdyncrm_iamlive: { a: 'msdyncrm_iamlive' },
			msdyncrm_insights_placeholder: { a: 'msdyncrm_insights_placeholder' },
			msdyncrm_lastgoinglivedate_UtcDateAndTime: { a: 'msdyncrm_lastgoinglivedate' },
			msdyncrm_lastpublisheddate_UtcDateAndTime: { a: 'msdyncrm_lastpublisheddate' },
			msdyncrm_lastpublishstate: { a: 'msdyncrm_lastpublishstate' },
			msdyncrm_lastunpublisheddate_UtcDateAndTime: { a: 'msdyncrm_lastunpublisheddate' },
			msdyncrm_marketingpageId: { a: 'msdyncrm_marketingpageid' },
			msdyncrm_marketingpagetemplate: { b: 'msdyncrm_marketingpagetemplate', a: '_msdyncrm_marketingpagetemplate_value', c: 'msdyncrm_marketingpagetemplates', d: 'msdyncrm_marketingpagetemplate' },
			msdyncrm_marketingprovided: { a: 'msdyncrm_marketingprovided' },
			msdyncrm_marketingwebsite: { b: 'msdyncrm_marketingwebsite', a: '_msdyncrm_marketingwebsite_value', c: 'msdyncrm_websites', d: 'msdyncrm_website' },
			msdyncrm_markettype: { a: 'msdyncrm_markettype' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_optimizedfor: { a: 'msdyncrm_optimizedfor' },
			msdyncrm_partialurl: { a: 'msdyncrm_partialurl' },
			msdyncrm_purpose: { a: 'msdyncrm_purpose' },
			msdyncrm_remote_websiteid: { a: 'msdyncrm_remote_websiteid' },
			msdyncrm_type: { a: 'msdyncrm_type' },
			msdyncrm_visualstyle: { a: 'msdyncrm_visualstyle' },
			msdyncrm_websitefilter_placeholder: { a: 'msdyncrm_websitefilter_placeholder' },
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
		var msdyncrm_marketingpage = {};
		msdyncrm_marketingpage.ODataEntity = e;
		msdyncrm_marketingpage.FormattedValue = {};
		for (var field in _msdyncrm_marketingpage) {
			var a = _msdyncrm_marketingpage[field].a;
			var b = _msdyncrm_marketingpage[field].b;
			var c = _msdyncrm_marketingpage[field].c;
			var d = _msdyncrm_marketingpage[field].d;
			var g = _msdyncrm_marketingpage[field].g;
			var r = _msdyncrm_marketingpage[field].r;
			webApiField(msdyncrm_marketingpage, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_marketingpage.Entity = u;
		msdyncrm_marketingpage.EntityName = 'msdyncrm_marketingpage';
		msdyncrm_marketingpage.EntityCollectionName = 'msdyncrm_marketingpages';
		msdyncrm_marketingpage['@odata.etag'] = e['@odata.etag'];
		msdyncrm_marketingpage.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_marketingpage.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_marketingpage;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_marketingpage = {
		msdyncrm_contenttype : {
			Company_background: 3,
			Confirmation_request: 6,
			Event_information: 4,
			Offers_and_discounts: 5,
			Product_information: 2,
			Product_launch: 1,
			Structural: 0
		},
		msdyncrm_lastpublishstate : {
			Error: 0,
			Success: 1
		},
		msdyncrm_markettype : {
			All: 2,
			Consumer: 1,
			Enterprise: 0
		},
		msdyncrm_optimizedfor : {
			Desktop: 0,
			Mobile: 2,
			Tablet: 1
		},
		msdyncrm_purpose : {
			Collateral_download: 3,
			Contact_capture: 0,
			Double_Opt_In_Email_based_confirmation: 7,
			Event_feedback: 5,
			Event_registration: 4,
			Lead_generation: 2,
			Newsletter_subscription: 1,
			Structural: 6
		},
		msdyncrm_type : {
			Event_registration: 3,
			Forward_to_a_friend: 2,
			Landing_page: 0,
			Subscription_center: 1
		},
		msdyncrm_visualstyle : {
			Colorful: 2,
			Dark: 1,
			Light: 0,
			Other: 3
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 192350000,
			Error: 192350005,
			Expired: 192350004,
			Going_live: 192350006,
			Live: 192350001,
			Live_editable: 192350003,
			Stopped: 192350002,
			Stopping: 192350007
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