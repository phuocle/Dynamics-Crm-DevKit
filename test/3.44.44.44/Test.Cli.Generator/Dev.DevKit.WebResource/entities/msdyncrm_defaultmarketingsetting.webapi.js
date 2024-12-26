'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_defaultmarketingsettingApi = function (e) {
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
		var _msdyncrm_defaultmarketingsetting = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_bypassemaildeduplication: { a: 'msdyncrm_bypassemaildeduplication' },
			msdyncrm_consentconfirmationmessage: { b: 'msdyncrm_consentconfirmationmessage', a: '_msdyncrm_consentconfirmationmessage_value', c: 'msdyncrm_marketingemails', d: 'msdyncrm_marketingemail' },
			msdyncrm_Default: { a: 'msdyncrm_default' },
			msdyncrm_DefaultCntntSettings: { b: 'msdyncrm_DefaultCntntSettings', a: '_msdyncrm_defaultcntntsettings_value', c: 'msdyncrm_contentsettingses', d: 'msdyncrm_contentsettings' },
			msdyncrm_defaultemailfromemail: { a: 'msdyncrm_defaultemailfromemail' },
			msdyncrm_defaultemailfromname: { a: 'msdyncrm_defaultemailfromname' },
			msdyncrm_defaultmarketingsettingId: { a: 'msdyncrm_defaultmarketingsettingid' },
			msdyncrm_defaultmarketingthankyoupage: { b: 'msdyncrm_defaultmarketingthankyoupage', a: '_msdyncrm_defaultmarketingthankyoupage_value', c: 'msdyncrm_marketingpages', d: 'msdyncrm_marketingpage' },
			msdyncrm_defaultmarketingthankyoupagedoi: { b: 'msdyncrm_defaultmarketingthankyoupagedoi', a: '_msdyncrm_defaultmarketingthankyoupagedoi_value', c: 'msdyncrm_marketingpages', d: 'msdyncrm_marketingpage' },
			msdyncrm_defaultmarketingthankyouurl: { a: 'msdyncrm_defaultmarketingthankyouurl' },
			msdyncrm_defaultmarketingthankyouurldoi: { a: 'msdyncrm_defaultmarketingthankyouurldoi' },
			msdyncrm_DefaultSetupDomain: { b: 'msdyncrm_DefaultSetupDomain', a: '_msdyncrm_defaultsetupdomain_value', c: 'msdyncrm_setupdomains', d: 'msdyncrm_setupdomain' },
			msdyncrm_DefaultTestContact: { b: 'msdyncrm_DefaultTestContact', a: '_msdyncrm_defaulttestcontact_value', c: 'contacts', d: 'contact' },
			msdyncrm_defaulttimezone: { a: 'msdyncrm_defaulttimezone' },
			msdyncrm_doubleoptincontentsettings: { b: 'msdyncrm_doubleoptincontentsettings', a: '_msdyncrm_doubleoptincontentsettings_value', c: 'msdyncrm_contentsettingses', d: 'msdyncrm_contentsettings' },
			msdyncrm_enabledoubleoptin: { a: 'msdyncrm_enabledoubleoptin' },
			msdyncrm_EnableLitmusIntegration: { a: 'msdyncrm_enablelitmusintegration' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_subscriptionoptinmessage: { b: 'msdyncrm_subscriptionoptinmessage', a: '_msdyncrm_subscriptionoptinmessage_value', c: 'msdyncrm_marketingemails', d: 'msdyncrm_marketingemail' },
			msdyncrm_thankyoupagesource: { a: 'msdyncrm_thankyoupagesource' },
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
		var msdyncrm_defaultmarketingsetting = {};
		msdyncrm_defaultmarketingsetting.ODataEntity = e;
		msdyncrm_defaultmarketingsetting.FormattedValue = {};
		for (var field in _msdyncrm_defaultmarketingsetting) {
			var a = _msdyncrm_defaultmarketingsetting[field].a;
			var b = _msdyncrm_defaultmarketingsetting[field].b;
			var c = _msdyncrm_defaultmarketingsetting[field].c;
			var d = _msdyncrm_defaultmarketingsetting[field].d;
			var g = _msdyncrm_defaultmarketingsetting[field].g;
			var r = _msdyncrm_defaultmarketingsetting[field].r;
			webApiField(msdyncrm_defaultmarketingsetting, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_defaultmarketingsetting.Entity = u;
		msdyncrm_defaultmarketingsetting.EntityName = 'msdyncrm_defaultmarketingsetting';
		msdyncrm_defaultmarketingsetting.EntityCollectionName = 'msdyncrm_defaultmarketingsettings';
		msdyncrm_defaultmarketingsetting['@odata.etag'] = e['@odata.etag'];
		msdyncrm_defaultmarketingsetting.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_defaultmarketingsetting.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_defaultmarketingsetting;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_defaultmarketingsetting = {
		msdyncrm_thankyoupagesource : {
			No: 100000001,
			Yes: 100000000
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