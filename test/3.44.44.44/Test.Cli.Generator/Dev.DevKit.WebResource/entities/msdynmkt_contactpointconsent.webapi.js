'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_contactpointconsentApi = function (e) {
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
		var _msdynmkt_contactpointconsent = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_consentstatus: { a: 'msdynmkt_consentstatus' },
			msdynmkt_consenttype: { a: 'msdynmkt_consenttype' },
			msdynmkt_contactpoint: { a: 'msdynmkt_contactpoint' },
			msdynmkt_contactpointconsentId: { a: 'msdynmkt_contactpointconsentid' },
			msdynmkt_reason: { a: 'msdynmkt_reason' },
			msdynmkt_source: { a: 'msdynmkt_source' },
			msdynmkt_trackingstatus: { a: 'msdynmkt_trackingstatus' },
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
		var msdynmkt_contactpointconsent = {};
		msdynmkt_contactpointconsent.ODataEntity = e;
		msdynmkt_contactpointconsent.FormattedValue = {};
		for (var field in _msdynmkt_contactpointconsent) {
			var a = _msdynmkt_contactpointconsent[field].a;
			var b = _msdynmkt_contactpointconsent[field].b;
			var c = _msdynmkt_contactpointconsent[field].c;
			var d = _msdynmkt_contactpointconsent[field].d;
			var g = _msdynmkt_contactpointconsent[field].g;
			var r = _msdynmkt_contactpointconsent[field].r;
			webApiField(msdynmkt_contactpointconsent, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_contactpointconsent.Entity = u;
		msdynmkt_contactpointconsent.EntityName = 'msdynmkt_contactpointconsent';
		msdynmkt_contactpointconsent.EntityCollectionName = 'msdynmkt_contactpointconsents';
		msdynmkt_contactpointconsent['@odata.etag'] = e['@odata.etag'];
		msdynmkt_contactpointconsent.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_contactpointconsent.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_contactpointconsent;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_contactpointconsent = {
		msdynmkt_consentstatus : {
			Opted_in: 534120000,
			Opted_out: 534120001
		},
		msdynmkt_consenttype : {
			Custom: 534120002,
			Email: 534120000,
			Text_Message: 534120001
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
		msdynmkt_source : {
			Internal: 534120000,
			Preference_page: 534120001,
			Text_message: 534120002
		},
		msdynmkt_trackingstatus : {
			Opted_in: 534120000,
			Opted_out: 534120001
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