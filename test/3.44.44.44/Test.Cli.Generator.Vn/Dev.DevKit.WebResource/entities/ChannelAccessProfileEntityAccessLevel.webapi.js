'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ChannelAccessProfileEntityAccessLevelApi = function (e) {
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
		var _channelaccessprofileentityaccesslevel = {
			ChannelAccessProfileEntityAccessLevelId: { a: 'channelaccessprofileentityaccesslevelid' },
			ChannelAccessProfileEntityAccessLevelIdUnique: { a: 'channelaccessprofileentityaccesslevelidunique', r: true },
			ChannelAccessProfileId: { a: 'channelaccessprofileid', r: true },
			ComponentState: { a: 'componentstate', r: true },
			EntityAccessLevelDepthMask: { a: 'entityaccessleveldepthmask' },
			EntityAccessLevelId: { a: 'entityaccesslevelid', r: true },
			IsManaged: { a: 'ismanaged', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var channelaccessprofileentityaccesslevel = {};
		channelaccessprofileentityaccesslevel.ODataEntity = e;
		channelaccessprofileentityaccesslevel.FormattedValue = {};
		for (var field in _channelaccessprofileentityaccesslevel) {
			var a = _channelaccessprofileentityaccesslevel[field].a;
			var b = _channelaccessprofileentityaccesslevel[field].b;
			var c = _channelaccessprofileentityaccesslevel[field].c;
			var d = _channelaccessprofileentityaccesslevel[field].d;
			var g = _channelaccessprofileentityaccesslevel[field].g;
			var r = _channelaccessprofileentityaccesslevel[field].r;
			webApiField(channelaccessprofileentityaccesslevel, field, e, a, b, c, d, r, u, g);
		}
		channelaccessprofileentityaccesslevel.Entity = u;
		channelaccessprofileentityaccesslevel.EntityName = 'channelaccessprofileentityaccesslevel';
		channelaccessprofileentityaccesslevel.EntityCollectionName = '';
		channelaccessprofileentityaccesslevel['@odata.etag'] = e['@odata.etag'];
		channelaccessprofileentityaccesslevel.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		channelaccessprofileentityaccesslevel.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return channelaccessprofileentityaccesslevel;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ChannelAccessProfileEntityAccessLevel = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
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