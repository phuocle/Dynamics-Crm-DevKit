'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_resourceassignmentApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var property = {};
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return EMPTY_STRING;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return EMPTY_STRING;
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
					value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(property, 'FormattedValue', {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(property, 'Value', {
					get: getValue
				});
			}
			else {
				Object.defineProperty(property, 'Value', {
					get: getValue,
					set: setValue
				});
			}
			return property;
		}
		var msdyn_resourceassignment = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_bookableresourceid: { b: 'msdyn_bookableresourceid', a: '_msdyn_bookableresourceid_value', c: 'bookableresources', d: 'bookableresource' },
			msdyn_bookingstatusid: { b: 'msdyn_bookingstatusid', a: '_msdyn_bookingstatusid_value', c: 'bookingstatuses', d: 'bookingstatus' },
			msdyn_CommitType: { a: 'msdyn_committype' },
			msdyn_fromdate_UtcDateOnly: { a: 'msdyn_fromdate' },
			msdyn_hours: { a: 'msdyn_hours' },
			msdyn_msprojectclientid: { a: 'msdyn_msprojectclientid' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_plannedcost: { a: 'msdyn_plannedcost' },
			msdyn_plannedcost_Base: { a: 'msdyn_plannedcost_base', r: true },
			msdyn_plannedcostcontour: { a: 'msdyn_plannedcostcontour' },
			msdyn_plannedsales: { a: 'msdyn_plannedsales' },
			msdyn_plannedsales_Base: { a: 'msdyn_plannedsales_base', r: true },
			msdyn_plannedsalescontour: { a: 'msdyn_plannedsalescontour' },
			msdyn_plannedwork: { a: 'msdyn_plannedwork' },
			msdyn_projectid: { b: 'msdyn_projectid', a: '_msdyn_projectid_value', c: 'msdyn_projects', d: 'msdyn_project' },
			msdyn_projectteamid: { b: 'msdyn_projectteamid', a: '_msdyn_projectteamid_value', c: 'msdyn_projectteams', d: 'msdyn_projectteam' },
			msdyn_resourceassignmentId: { a: 'msdyn_resourceassignmentid' },
			msdyn_taskid: { b: 'msdyn_taskid', a: '_msdyn_taskid_value', c: 'msdyn_projecttasks', d: 'msdyn_projecttask' },
			msdyn_todate_UtcDateOnly: { a: 'msdyn_todate' },
			msdyn_userresourceid: { b: 'msdyn_userresourceid', a: '_msdyn_userresourceid_value', c: 'systemusers', d: 'systemuser' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_resourceassignment) {
			var a = msdyn_resourceassignment[field].a;
			var b = msdyn_resourceassignment[field].b;
			var c = msdyn_resourceassignment[field].c;
			var d = msdyn_resourceassignment[field].d;
			var g = msdyn_resourceassignment[field].g;
			var r = msdyn_resourceassignment[field].r;
			msdyn_resourceassignment[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_resourceassignment.Entity = u;
		msdyn_resourceassignment.EntityName = 'msdyn_resourceassignment';
		msdyn_resourceassignment.EntityCollectionName = 'msdyn_resourceassignments';
		msdyn_resourceassignment['@odata.etag'] = e['@odata.etag'];
		msdyn_resourceassignment.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_resourceassignment.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_resourceassignment;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_resourceassignment = {
		msdyn_CommitType : {
			Canceled: 192350004,
			Hard_Book: 192350001,
			None: 192350000,
			Proposed: 192350003,
			Soft_Book: 192350002
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