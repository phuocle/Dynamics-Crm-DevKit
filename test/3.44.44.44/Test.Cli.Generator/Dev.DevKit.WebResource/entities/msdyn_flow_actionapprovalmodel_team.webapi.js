﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_flow_actionapprovalmodel_teamApi = function (e) {
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
		var _msdyn_flow_actionapprovalmodel_team = {
			msdyn_flow_actionapprovalmodel_teamId: { a: 'msdyn_flow_actionapprovalmodel_teamid', r: true },
			msdyn_flow_actionapprovalmodelid: { a: 'msdyn_flow_actionapprovalmodelid', r: true },
			teamid: { a: 'teamid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_flow_actionapprovalmodel_team = {};
		msdyn_flow_actionapprovalmodel_team.ODataEntity = e;
		msdyn_flow_actionapprovalmodel_team.FormattedValue = {};
		for (var field in _msdyn_flow_actionapprovalmodel_team) {
			var a = _msdyn_flow_actionapprovalmodel_team[field].a;
			var b = _msdyn_flow_actionapprovalmodel_team[field].b;
			var c = _msdyn_flow_actionapprovalmodel_team[field].c;
			var d = _msdyn_flow_actionapprovalmodel_team[field].d;
			var g = _msdyn_flow_actionapprovalmodel_team[field].g;
			var r = _msdyn_flow_actionapprovalmodel_team[field].r;
			webApiField(msdyn_flow_actionapprovalmodel_team, field, e, a, b, c, d, r, u, g);
		}
		msdyn_flow_actionapprovalmodel_team.Entity = u;
		msdyn_flow_actionapprovalmodel_team.EntityName = 'msdyn_flow_actionapprovalmodel_team';
		msdyn_flow_actionapprovalmodel_team.EntityCollectionName = '';
		msdyn_flow_actionapprovalmodel_team['@odata.etag'] = e['@odata.etag'];
		msdyn_flow_actionapprovalmodel_team.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_flow_actionapprovalmodel_team.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_flow_actionapprovalmodel_team;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_flow_actionapprovalmodel_team = {
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