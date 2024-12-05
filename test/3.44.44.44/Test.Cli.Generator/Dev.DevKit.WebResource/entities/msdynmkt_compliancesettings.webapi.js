'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_compliancesettingsApi = function (e) {
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
		var _msdynmkt_compliancesettings = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_compliancesettingsId: { a: 'msdynmkt_compliancesettingsid' },
			msdynmkt_consentlink: { a: 'msdynmkt_consentlink' },
			msdynmkt_consentlinktype: { a: 'msdynmkt_consentlinktype' },
			msdynmkt_consentmodel: { a: 'msdynmkt_consentmodel' },
			msdynmkt_defaulttracking: { a: 'msdynmkt_defaulttracking' },
			msdynmkt_gettrackingconsents: { a: 'msdynmkt_gettrackingconsents' },
			msdynmkt_jurisdiction: { a: 'msdynmkt_jurisdiction' },
			msdynmkt_legaladdress: { a: 'msdynmkt_legaladdress' },
			msdynmkt_marketinglogconsentchangesswitch: { a: 'msdynmkt_marketinglogconsentchangesswitch' },
			msdynmkt_marketingrespectconsentswitch: { a: 'msdynmkt_marketingrespectconsentswitch' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_ssc_allowemaildescription: { a: 'msdynmkt_ssc_allowemaildescription' },
			msdynmkt_ssc_allowsmsdescription: { a: 'msdynmkt_ssc_allowsmsdescription' },
			msdynmkt_ssc_allowtrackingdescription: { a: 'msdynmkt_ssc_allowtrackingdescription' },
			msdynmkt_ssc_consentchangereason: { a: 'msdynmkt_ssc_consentchangereason' },
			msdynmkt_ssc_description: { a: 'msdynmkt_ssc_description' },
			msdynmkt_ssc_emaildescription: { a: 'msdynmkt_ssc_emaildescription' },
			msdynmkt_ssc_emailtitle: { a: 'msdynmkt_ssc_emailtitle' },
			msdynmkt_ssc_errorpagetext: { a: 'msdynmkt_ssc_errorpagetext' },
			msdynmkt_ssc_legaltext: { a: 'msdynmkt_ssc_legaltext' },
			msdynmkt_ssc_smsdescription: { a: 'msdynmkt_ssc_smsdescription' },
			msdynmkt_ssc_smstitle: { a: 'msdynmkt_ssc_smstitle' },
			msdynmkt_ssc_submitbuttonlabel: { a: 'msdynmkt_ssc_submitbuttonlabel' },
			msdynmkt_ssc_thankyoupagetext: { a: 'msdynmkt_ssc_thankyoupagetext' },
			msdynmkt_ssc_title: { a: 'msdynmkt_ssc_title' },
			msdynmkt_ssc_trackingdescription: { a: 'msdynmkt_ssc_trackingdescription' },
			msdynmkt_ssc_trackingtitle: { a: 'msdynmkt_ssc_trackingtitle' },
			msdynmkt_subscriptioncenter: { a: 'msdynmkt_subscriptioncenter' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_compliancesettings = {};
		msdynmkt_compliancesettings.ODataEntity = e;
		msdynmkt_compliancesettings.FormattedValue = {};
		for (var field in _msdynmkt_compliancesettings) {
			var a = _msdynmkt_compliancesettings[field].a;
			var b = _msdynmkt_compliancesettings[field].b;
			var c = _msdynmkt_compliancesettings[field].c;
			var d = _msdynmkt_compliancesettings[field].d;
			var g = _msdynmkt_compliancesettings[field].g;
			var r = _msdynmkt_compliancesettings[field].r;
			webApiField(msdynmkt_compliancesettings, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_compliancesettings.Entity = u;
		msdynmkt_compliancesettings.EntityName = 'msdynmkt_compliancesettings';
		msdynmkt_compliancesettings.EntityCollectionName = 'msdynmkt_compliancesettingses';
		msdynmkt_compliancesettings['@odata.etag'] = e['@odata.etag'];
		msdynmkt_compliancesettings.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_compliancesettings.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_compliancesettings;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_compliancesettings = {
		msdynmkt_consentlinktype : {
			External_link: 534120002,
			Preference_center: 534120003,
			Preference_page: 534120000,
			Subscription_center: 534120001
		},
		msdynmkt_consentmodel : {
			Non_Restrictive: 534120001,
			Restrictive: 534120000
		},
		msdynmkt_jurisdiction : {
			GDPRCCPA: 534120000,
			Other: 534120001
		},
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