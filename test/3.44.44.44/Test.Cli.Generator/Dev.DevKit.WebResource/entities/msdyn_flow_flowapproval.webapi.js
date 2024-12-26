'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_flow_flowapprovalApi = function (e) {
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
		var _msdyn_flow_flowapproval = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_flow_flowapproval_approval: { b: 'msdyn_flow_flowapproval_approval', a: '_msdyn_flow_flowapproval_approval_value', c: 'msdyn_flow_approvals', d: 'msdyn_flow_approval' },
			msdyn_flow_flowapproval_flowculture: { a: 'msdyn_flow_flowapproval_flowculture' },
			msdyn_flow_flowapproval_flowid: { a: 'msdyn_flow_flowapproval_flowid' },
			msdyn_flow_flowapproval_flowname: { a: 'msdyn_flow_flowapproval_flowname' },
			msdyn_flow_flowapproval_flownotificationuri: { a: 'msdyn_flow_flowapproval_flownotificationuri' },
			msdyn_flow_flowapproval_flowrunsequenceid: { a: 'msdyn_flow_flowapproval_flowrunsequenceid' },
			msdyn_flow_flowapproval_name: { a: 'msdyn_flow_flowapproval_name' },
			msdyn_flow_flowapproval_sendflowemail: { a: 'msdyn_flow_flowapproval_sendflowemail' },
			msdyn_flow_flowapproval_sendflowpush: { a: 'msdyn_flow_flowapproval_sendflowpush' },
			msdyn_flow_flowapprovalId: { a: 'msdyn_flow_flowapprovalid' },
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
		var msdyn_flow_flowapproval = {};
		msdyn_flow_flowapproval.ODataEntity = e;
		msdyn_flow_flowapproval.FormattedValue = {};
		for (var field in _msdyn_flow_flowapproval) {
			var a = _msdyn_flow_flowapproval[field].a;
			var b = _msdyn_flow_flowapproval[field].b;
			var c = _msdyn_flow_flowapproval[field].c;
			var d = _msdyn_flow_flowapproval[field].d;
			var g = _msdyn_flow_flowapproval[field].g;
			var r = _msdyn_flow_flowapproval[field].r;
			webApiField(msdyn_flow_flowapproval, field, e, a, b, c, d, r, u, g);
		}
		msdyn_flow_flowapproval.Entity = u;
		msdyn_flow_flowapproval.EntityName = 'msdyn_flow_flowapproval';
		msdyn_flow_flowapproval.EntityCollectionName = 'msdyn_flow_flowapprovals';
		msdyn_flow_flowapproval['@odata.etag'] = e['@odata.etag'];
		msdyn_flow_flowapproval.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_flow_flowapproval.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_flow_flowapproval;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_flow_flowapproval = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Completed: 192350003,
			Created: 192350000,
			NotifyingFlow: 192350002,
			WaitingForApproval: 192350001
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