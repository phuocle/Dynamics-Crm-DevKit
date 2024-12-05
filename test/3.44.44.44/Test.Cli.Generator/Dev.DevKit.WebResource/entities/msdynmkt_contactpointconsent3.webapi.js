'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_contactpointconsent3Api = function (e) {
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
		var _msdynmkt_contactpointconsent3 = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_consenttypevalue: { a: 'msdynmkt_consenttypevalue' },
			msdynmkt_contactpointconsent3Id: { a: 'msdynmkt_contactpointconsent3id' },
			msdynmkt_contactpointtype: { a: 'msdynmkt_contactpointtype' },
			msdynmkt_contactpointvalue: { a: 'msdynmkt_contactpointvalue' },
			msdynmkt_logicalreason: { a: 'msdynmkt_logicalreason' },
			msdynmkt_migrationtimestamp_TimezoneDateAndTime: { a: 'msdynmkt_migrationtimestamp' },
			msdynmkt_modifiedonbehalf: { a: 'msdynmkt_modifiedonbehalf' },
			msdynmkt_reason: { a: 'msdynmkt_reason' },
			msdynmkt_source: { a: 'msdynmkt_source' },
			msdynmkt_uionly_value_marketingmessage: { a: 'msdynmkt_uionly_value_marketingmessage' },
			msdynmkt_uionly_value_tracking: { a: 'msdynmkt_uionly_value_tracking' },
			msdynmkt_value: { a: 'msdynmkt_value' },
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
		var msdynmkt_contactpointconsent3 = {};
		msdynmkt_contactpointconsent3.ODataEntity = e;
		msdynmkt_contactpointconsent3.FormattedValue = {};
		for (var field in _msdynmkt_contactpointconsent3) {
			var a = _msdynmkt_contactpointconsent3[field].a;
			var b = _msdynmkt_contactpointconsent3[field].b;
			var c = _msdynmkt_contactpointconsent3[field].c;
			var d = _msdynmkt_contactpointconsent3[field].d;
			var g = _msdynmkt_contactpointconsent3[field].g;
			var r = _msdynmkt_contactpointconsent3[field].r;
			webApiField(msdynmkt_contactpointconsent3, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_contactpointconsent3.Entity = u;
		msdynmkt_contactpointconsent3.EntityName = 'msdynmkt_contactpointconsent3';
		msdynmkt_contactpointconsent3.EntityCollectionName = 'msdynmkt_contactpointconsent3s';
		msdynmkt_contactpointconsent3['@odata.etag'] = e['@odata.etag'];
		msdynmkt_contactpointconsent3.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_contactpointconsent3.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_contactpointconsent3;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_contactpointconsent3 = {
		msdynmkt_consenttypevalue : {
			Marketing_Communication: 534120000,
			Tracking: 534120001
		},
		msdynmkt_contactpointtype : {
			Custom: 534120002,
			Email: 534120000,
			Text_Message: 534120001,
			Voice: 534120003
		},
		msdynmkt_logicalreason : {
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
		msdynmkt_source : {
			Email_list_unsubscribe: 534120007,
			Internal: 534120000,
			Loaded: 534120003,
			Preference_Center: 534120004,
			Preference_page: 534120001,
			Realtime_Marketing_Form: 534120005,
			Subscription_Center: 534120006,
			Text_message: 534120002
		},
		msdynmkt_uionly_value_marketingmessage : {
			Not_Set: 534120000,
			Opted_In: 534120001,
			Opted_Out: 534120002
		},
		msdynmkt_uionly_value_tracking : {
			Not_Set: 534120000,
			Opted_In: 534120001,
			Opted_Out: 534120002
		},
		msdynmkt_value : {
			Not_Set: 534120000,
			Opted_In: 534120001,
			Opted_Out: 534120002
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