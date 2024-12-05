'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msevtmgt_session_msevtmgt_speakerApi = function (e) {
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
		var _msevtmgt_session_msevtmgt_speaker = {
			msevtmgt_session_msevtmgt_speakerId: { a: 'msevtmgt_session_msevtmgt_speakerid', r: true },
			msevtmgt_sessionid: { a: 'msevtmgt_sessionid', r: true },
			msevtmgt_speakerid: { a: 'msevtmgt_speakerid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msevtmgt_session_msevtmgt_speaker = {};
		msevtmgt_session_msevtmgt_speaker.ODataEntity = e;
		msevtmgt_session_msevtmgt_speaker.FormattedValue = {};
		for (var field in _msevtmgt_session_msevtmgt_speaker) {
			var a = _msevtmgt_session_msevtmgt_speaker[field].a;
			var b = _msevtmgt_session_msevtmgt_speaker[field].b;
			var c = _msevtmgt_session_msevtmgt_speaker[field].c;
			var d = _msevtmgt_session_msevtmgt_speaker[field].d;
			var g = _msevtmgt_session_msevtmgt_speaker[field].g;
			var r = _msevtmgt_session_msevtmgt_speaker[field].r;
			webApiField(msevtmgt_session_msevtmgt_speaker, field, e, a, b, c, d, r, u, g);
		}
		msevtmgt_session_msevtmgt_speaker.Entity = u;
		msevtmgt_session_msevtmgt_speaker.EntityName = 'msevtmgt_session_msevtmgt_speaker';
		msevtmgt_session_msevtmgt_speaker.EntityCollectionName = '';
		msevtmgt_session_msevtmgt_speaker['@odata.etag'] = e['@odata.etag'];
		msevtmgt_session_msevtmgt_speaker.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msevtmgt_session_msevtmgt_speaker.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msevtmgt_session_msevtmgt_speaker;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_session_msevtmgt_speaker = {
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