'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.MultiSelectAttributeOptionValuesApi = function (e) {
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
		var _multiselectattributeoptionvalues = {
			MultiSelectFullTextIdKey: { a: 'multiselectfulltextidkey', r: true },
			ObjectColumnNumber: { a: 'objectcolumnnumber', r: true },
			SelectedOptionValues: { a: 'selectedoptionvalues' }
		};
		if (e === undefined) e = {};
		var u = {};
		var multiselectattributeoptionvalues = {};
		multiselectattributeoptionvalues.ODataEntity = e;
		multiselectattributeoptionvalues.FormattedValue = {};
		for (var field in _multiselectattributeoptionvalues) {
			var a = _multiselectattributeoptionvalues[field].a;
			var b = _multiselectattributeoptionvalues[field].b;
			var c = _multiselectattributeoptionvalues[field].c;
			var d = _multiselectattributeoptionvalues[field].d;
			var g = _multiselectattributeoptionvalues[field].g;
			var r = _multiselectattributeoptionvalues[field].r;
			webApiField(multiselectattributeoptionvalues, field, e, a, b, c, d, r, u, g);
		}
		multiselectattributeoptionvalues.Entity = u;
		multiselectattributeoptionvalues.EntityName = 'multiselectattributeoptionvalues';
		multiselectattributeoptionvalues.EntityCollectionName = 'multiselectattributeoptionvaluescollection';
		multiselectattributeoptionvalues['@odata.etag'] = e['@odata.etag'];
		multiselectattributeoptionvalues.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		multiselectattributeoptionvalues.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return multiselectattributeoptionvalues;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.MultiSelectAttributeOptionValues = {
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