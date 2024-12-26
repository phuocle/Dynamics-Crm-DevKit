'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msevtmgt_session_msevtmgt_attendeepassApi = function (e) {
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
		var _msevtmgt_session_msevtmgt_attendeepass = {
			msevtmgt_attendeepassid: { a: 'msevtmgt_attendeepassid', r: true },
			msevtmgt_session_msevtmgt_attendeepassId: { a: 'msevtmgt_session_msevtmgt_attendeepassid', r: true },
			msevtmgt_sessionid: { a: 'msevtmgt_sessionid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msevtmgt_session_msevtmgt_attendeepass = {};
		msevtmgt_session_msevtmgt_attendeepass.ODataEntity = e;
		msevtmgt_session_msevtmgt_attendeepass.FormattedValue = {};
		for (var field in _msevtmgt_session_msevtmgt_attendeepass) {
			var a = _msevtmgt_session_msevtmgt_attendeepass[field].a;
			var b = _msevtmgt_session_msevtmgt_attendeepass[field].b;
			var c = _msevtmgt_session_msevtmgt_attendeepass[field].c;
			var d = _msevtmgt_session_msevtmgt_attendeepass[field].d;
			var g = _msevtmgt_session_msevtmgt_attendeepass[field].g;
			var r = _msevtmgt_session_msevtmgt_attendeepass[field].r;
			webApiField(msevtmgt_session_msevtmgt_attendeepass, field, e, a, b, c, d, r, u, g);
		}
		msevtmgt_session_msevtmgt_attendeepass.Entity = u;
		msevtmgt_session_msevtmgt_attendeepass.EntityName = 'msevtmgt_session_msevtmgt_attendeepass';
		msevtmgt_session_msevtmgt_attendeepass.EntityCollectionName = '';
		msevtmgt_session_msevtmgt_attendeepass['@odata.etag'] = e['@odata.etag'];
		msevtmgt_session_msevtmgt_attendeepass.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msevtmgt_session_msevtmgt_attendeepass.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msevtmgt_session_msevtmgt_attendeepass;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_session_msevtmgt_attendeepass = {
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