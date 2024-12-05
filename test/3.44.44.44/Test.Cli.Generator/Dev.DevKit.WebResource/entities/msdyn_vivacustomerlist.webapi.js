'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_vivacustomerlistApi = function (e) {
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
		var _msdyn_vivacustomerlist = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_backingview: { a: 'msdyn_backingview' },
			msdyn_listtype: { a: 'msdyn_listtype' },
			msdyn_Name: { a: 'msdyn_name' },
			msdyn_orderindex: { a: 'msdyn_orderindex' },
			msdyn_producttype: { a: 'msdyn_producttype' },
			msdyn_sortexpression: { a: 'msdyn_sortexpression' },
			msdyn_timerangequalifier: { a: 'msdyn_timerangequalifier' },
			msdyn_timerangetype: { a: 'msdyn_timerangetype' },
			msdyn_userid: { a: 'msdyn_userid' },
			msdyn_vivacustomerlistId: { a: 'msdyn_vivacustomerlistid' },
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
		var msdyn_vivacustomerlist = {};
		msdyn_vivacustomerlist.ODataEntity = e;
		msdyn_vivacustomerlist.FormattedValue = {};
		for (var field in _msdyn_vivacustomerlist) {
			var a = _msdyn_vivacustomerlist[field].a;
			var b = _msdyn_vivacustomerlist[field].b;
			var c = _msdyn_vivacustomerlist[field].c;
			var d = _msdyn_vivacustomerlist[field].d;
			var g = _msdyn_vivacustomerlist[field].g;
			var r = _msdyn_vivacustomerlist[field].r;
			webApiField(msdyn_vivacustomerlist, field, e, a, b, c, d, r, u, g);
		}
		msdyn_vivacustomerlist.Entity = u;
		msdyn_vivacustomerlist.EntityName = 'msdyn_vivacustomerlist';
		msdyn_vivacustomerlist.EntityCollectionName = 'msdyn_vivacustomerlists';
		msdyn_vivacustomerlist['@odata.etag'] = e['@odata.etag'];
		msdyn_vivacustomerlist.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_vivacustomerlist.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_vivacustomerlist;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_vivacustomerlist = {
		msdyn_listtype : {
			Contacts_to_reconnect_with: 192350005,
			Contacts_with_upcoming_meetings: 192350002,
			CRM_list: 192350000,
			Frequently_contacted: 192350007,
			Opportunities_with_follow_up_items_due_soon: 192350003,
			Opportunities_with_overdue_items: 192350004,
			Opportunities_with_upcoming_meetings: 192350001,
			Recently_contacted: 192350006
		},
		msdyn_producttype : {
			Copilot_for_Sales: 10000,
			Copilot_for_Service: 10001,
			Shared: 11000
		},
		msdyn_timerangetype : {
			Last_month: 192350006,
			Last_week: 192350004,
			Last_X_days_192350005: 192350005,
			Last_X_days_192350007: 192350007,
			Last_X_months: 192350008,
			Last_year: 192350009,
			Next_X_days: 192350002,
			This_week: 192350001,
			Today: 192350000,
			Yesterday: 192350003
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