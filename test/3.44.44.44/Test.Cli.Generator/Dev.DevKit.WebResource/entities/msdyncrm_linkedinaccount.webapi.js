'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_linkedinaccountApi = function (e) {
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
		var _msdyncrm_linkedinaccount = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_campaignsyncstatus: { a: 'msdyncrm_campaignsyncstatus' },
			msdyncrm_defaultleadowner: { b: 'msdyncrm_defaultleadowner', a: '_msdyncrm_defaultleadowner_value', c: 'systemusers', d: 'systemuser' },
			msdyncrm_enabledforsync: { a: 'msdyncrm_enabledforsync' },
			msdyncrm_lastcampaignsyncdate_UtcDateAndTime: { a: 'msdyncrm_lastcampaignsyncdate' },
			msdyncrm_lastsyncdate_UtcDateAndTime: { a: 'msdyncrm_lastsyncdate' },
			msdyncrm_lastsynctimestamprollup_UtcDateAndTime: { a: 'msdyncrm_lastsynctimestamprollup', r: true },
			msdyncrm_lastsynctimestamprollup_Date_UtcDateAndTime: { a: 'msdyncrm_lastsynctimestamprollup_date', r: true },
			msdyncrm_lastsynctimestamprollup_State: { a: 'msdyncrm_lastsynctimestamprollup_state', r: true },
			msdyncrm_linkedinaccountId: { a: 'msdyncrm_linkedinaccountid' },
			msdyncrm_linkedinaccounttextid: { a: 'msdyncrm_linkedinaccounttextid' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_statusdetails: { a: 'msdyncrm_statusdetails' },
			msdyncrm_syncstatus: { a: 'msdyncrm_syncstatus' },
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
		var msdyncrm_linkedinaccount = {};
		msdyncrm_linkedinaccount.ODataEntity = e;
		msdyncrm_linkedinaccount.FormattedValue = {};
		for (var field in _msdyncrm_linkedinaccount) {
			var a = _msdyncrm_linkedinaccount[field].a;
			var b = _msdyncrm_linkedinaccount[field].b;
			var c = _msdyncrm_linkedinaccount[field].c;
			var d = _msdyncrm_linkedinaccount[field].d;
			var g = _msdyncrm_linkedinaccount[field].g;
			var r = _msdyncrm_linkedinaccount[field].r;
			webApiField(msdyncrm_linkedinaccount, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_linkedinaccount.Entity = u;
		msdyncrm_linkedinaccount.EntityName = 'msdyncrm_linkedinaccount';
		msdyncrm_linkedinaccount.EntityCollectionName = 'msdyncrm_linkedinaccounts';
		msdyncrm_linkedinaccount['@odata.etag'] = e['@odata.etag'];
		msdyncrm_linkedinaccount.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_linkedinaccount.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_linkedinaccount;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_linkedinaccount = {
		msdyncrm_campaignsyncstatus : {
			Active: 192350001,
			Forbidden: 192350003,
			No_Active_Campaigns_Available: 192350002,
			Pending_Synchronization: 192350000
		},
		msdyncrm_syncstatus : {
			Active: 192350001,
			Forbidden: 192350004,
			No_Forms_Available: 192350003,
			Not_Syncing: 192350002,
			Pending_Synchronization: 192350000
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