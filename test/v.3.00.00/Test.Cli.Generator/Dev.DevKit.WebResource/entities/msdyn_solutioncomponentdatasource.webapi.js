﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_solutioncomponentdatasourceApi = function (e) {
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
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
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
		var _msdyn_solutioncomponentdatasource = {
			msdyn_name: { a: 'msdyn_name' },
			msdyn_solutioncomponentdatasourceId: { a: 'msdyn_solutioncomponentdatasourceid' },
			OrganizationId: { a: 'organizationid', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_solutioncomponentdatasource = {};
		msdyn_solutioncomponentdatasource.ODataEntity = e;
		msdyn_solutioncomponentdatasource.FormattedValue = {};
		for (var field in _msdyn_solutioncomponentdatasource) {
			var a = _msdyn_solutioncomponentdatasource[field].a;
			var b = _msdyn_solutioncomponentdatasource[field].b;
			var c = _msdyn_solutioncomponentdatasource[field].c;
			var d = _msdyn_solutioncomponentdatasource[field].d;
			var g = _msdyn_solutioncomponentdatasource[field].g;
			var r = _msdyn_solutioncomponentdatasource[field].r;
			webApiField(msdyn_solutioncomponentdatasource, field, e, a, b, c, d, r, u, g);
		}
		msdyn_solutioncomponentdatasource.Entity = u;
		msdyn_solutioncomponentdatasource.EntityName = 'msdyn_solutioncomponentdatasource';
		msdyn_solutioncomponentdatasource.EntityCollectionName = 'msdyn_solutioncomponentdatasources';
		msdyn_solutioncomponentdatasource['@odata.etag'] = e['@odata.etag'];
		msdyn_solutioncomponentdatasource.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_solutioncomponentdatasource.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_solutioncomponentdatasource;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_solutioncomponentdatasource = {
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