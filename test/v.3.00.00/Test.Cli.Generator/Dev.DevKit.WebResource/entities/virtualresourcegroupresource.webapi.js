'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.virtualresourcegroupresourceApi = function (e) {
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
		var _virtualresourcegroupresource = {
			businessunit: { a: 'businessunit' },
			constraintbasedgroupid: { a: 'constraintbasedgroupid' },
			name: { a: 'name' },
			resourceentitylogicalname: { a: 'resourceentitylogicalname' },
			resourceentityname: { a: 'resourceentityname' },
			resourcegroupId: { b: 'resourcegroupid', a: '_resourcegroupid_value', c: 'constraintbasedgroups', d: 'constraintbasedgroup' },
			virtualresourcegroupresourceId: { a: 'virtualresourcegroupresourceid' }
		};
		if (e === undefined) e = {};
		var u = {};
		var virtualresourcegroupresource = {};
		virtualresourcegroupresource.ODataEntity = e;
		virtualresourcegroupresource.FormattedValue = {};
		for (var field in _virtualresourcegroupresource) {
			var a = _virtualresourcegroupresource[field].a;
			var b = _virtualresourcegroupresource[field].b;
			var c = _virtualresourcegroupresource[field].c;
			var d = _virtualresourcegroupresource[field].d;
			var g = _virtualresourcegroupresource[field].g;
			var r = _virtualresourcegroupresource[field].r;
			webApiField(virtualresourcegroupresource, field, e, a, b, c, d, r, u, g);
		}
		virtualresourcegroupresource.Entity = u;
		virtualresourcegroupresource.EntityName = 'virtualresourcegroupresource';
		virtualresourcegroupresource.EntityCollectionName = 'virtualresourcegroupresources';
		virtualresourcegroupresource['@odata.etag'] = e['@odata.etag'];
		virtualresourcegroupresource.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		virtualresourcegroupresource.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return virtualresourcegroupresource;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.virtualresourcegroupresource = {
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