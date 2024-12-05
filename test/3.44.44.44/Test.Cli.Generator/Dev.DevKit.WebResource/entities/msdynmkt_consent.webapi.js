'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_consentApi = function (e) {
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
		var _msdynmkt_consent = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_AllowEmail: { a: 'msdynmkt_allowemail' },
			msdynmkt_AllowSMS: { a: 'msdynmkt_allowsms' },
			msdynmkt_AllowTracking: { a: 'msdynmkt_allowtracking' },
			msdynmkt_changesource: { a: 'msdynmkt_changesource' },
			msdynmkt_consentId: { a: 'msdynmkt_consentid' },
			msdynmkt_profileId: { a: 'msdynmkt_profileid' },
			msdynmkt_reason: { a: 'msdynmkt_reason' },
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
		var msdynmkt_consent = {};
		msdynmkt_consent.ODataEntity = e;
		msdynmkt_consent.FormattedValue = {};
		for (var field in _msdynmkt_consent) {
			var a = _msdynmkt_consent[field].a;
			var b = _msdynmkt_consent[field].b;
			var c = _msdynmkt_consent[field].c;
			var d = _msdynmkt_consent[field].d;
			var g = _msdynmkt_consent[field].g;
			var r = _msdynmkt_consent[field].r;
			webApiField(msdynmkt_consent, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_consent.Entity = u;
		msdynmkt_consent.EntityName = 'msdynmkt_consent';
		msdynmkt_consent.EntityCollectionName = 'msdynmkt_consents';
		msdynmkt_consent['@odata.etag'] = e['@odata.etag'];
		msdynmkt_consent.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_consent.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_consent;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_consent = {
		msdynmkt_AllowEmail : {
			Opted_in: 534120000,
			Opted_out: 534120001
		},
		msdynmkt_AllowSMS : {
			Opted_in: 534120000,
			Opted_out: 534120001
		},
		msdynmkt_AllowTracking : {
			Opted_in: 534120000,
			Opted_out: 534120001
		},
		msdynmkt_changesource : {
			Internal: 534120000,
			Preference_page: 534120001,
			Text_message: 534120002
		},
		msdynmkt_reason : {
			No_reasons: 534119999,
			Opt_in_Advertisement: 534120000,
			Opt_in_Events: 534120002,
			Opt_in_Landing_page: 534120001,
			Opt_out_Content_was_irrelevant: 534120003,
			Opt_out_Didnt_recall_signing_up: 534120005,
			Opt_out_One_click_unsubscribe: 534120007,
			Opt_out_Privacy_concerns: 534120006,
			Opt_out_Received_too_frequently: 534120004
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