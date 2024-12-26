'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msevtmgt_msevtmgt_event_msevtmgt_eventteammemberApi = function (e) {
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
		var _msevtmgt_msevtmgt_event_msevtmgt_eventteammember = {
			msevtmgt_eventid: { a: 'msevtmgt_eventid', r: true },
			msevtmgt_eventteammemberid: { a: 'msevtmgt_eventteammemberid', r: true },
			msevtmgt_msevtmgt_event_msevtmgt_eventteammemberId: { a: 'msevtmgt_msevtmgt_event_msevtmgt_eventteammemberid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msevtmgt_msevtmgt_event_msevtmgt_eventteammember = {};
		msevtmgt_msevtmgt_event_msevtmgt_eventteammember.ODataEntity = e;
		msevtmgt_msevtmgt_event_msevtmgt_eventteammember.FormattedValue = {};
		for (var field in _msevtmgt_msevtmgt_event_msevtmgt_eventteammember) {
			var a = _msevtmgt_msevtmgt_event_msevtmgt_eventteammember[field].a;
			var b = _msevtmgt_msevtmgt_event_msevtmgt_eventteammember[field].b;
			var c = _msevtmgt_msevtmgt_event_msevtmgt_eventteammember[field].c;
			var d = _msevtmgt_msevtmgt_event_msevtmgt_eventteammember[field].d;
			var g = _msevtmgt_msevtmgt_event_msevtmgt_eventteammember[field].g;
			var r = _msevtmgt_msevtmgt_event_msevtmgt_eventteammember[field].r;
			webApiField(msevtmgt_msevtmgt_event_msevtmgt_eventteammember, field, e, a, b, c, d, r, u, g);
		}
		msevtmgt_msevtmgt_event_msevtmgt_eventteammember.Entity = u;
		msevtmgt_msevtmgt_event_msevtmgt_eventteammember.EntityName = 'msevtmgt_msevtmgt_event_msevtmgt_eventteammember';
		msevtmgt_msevtmgt_event_msevtmgt_eventteammember.EntityCollectionName = '';
		msevtmgt_msevtmgt_event_msevtmgt_eventteammember['@odata.etag'] = e['@odata.etag'];
		msevtmgt_msevtmgt_event_msevtmgt_eventteammember.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msevtmgt_msevtmgt_event_msevtmgt_eventteammember.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msevtmgt_msevtmgt_event_msevtmgt_eventteammember;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_msevtmgt_event_msevtmgt_eventteammember = {
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