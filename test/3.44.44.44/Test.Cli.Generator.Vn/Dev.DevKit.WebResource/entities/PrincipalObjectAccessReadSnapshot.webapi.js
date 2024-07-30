'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.PrincipalObjectAccessReadSnapshotApi = function (e) {
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
		var _principalobjectaccessreadsnapshot = {
			ChildUserPrincipalsCount: { a: 'childuserprincipalscount', r: true },
			Count: { a: 'count', r: true },
			CountPercentOfTotalRows: { a: 'countpercentoftotalrows', r: true },
			ObjectTypeCode: { a: 'objecttypecode', r: true },
			PrincipalId: { a: 'principalid', r: true },
			PrincipalObjectAccessReadSnapshotId: { a: 'principalobjectaccessreadsnapshotid', r: true },
			PrincipalTypeCode: { a: 'principaltypecode', r: true },
			RecordCountForOwnerID: { a: 'recordcountforownerid', r: true },
			RecordCountForOwnerIDPercentOfTotalRows: { a: 'recordcountforowneridpercentoftotalrows', r: true },
			RecordCountForOwningBU: { a: 'recordcountforowningbu', r: true },
			RecordCountForOwningBUPercentOfTotalRows: { a: 'recordcountforowningbupercentoftotalrows', r: true },
			TeamPrincipalsCount: { a: 'teamprincipalscount', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var principalobjectaccessreadsnapshot = {};
		principalobjectaccessreadsnapshot.ODataEntity = e;
		principalobjectaccessreadsnapshot.FormattedValue = {};
		for (var field in _principalobjectaccessreadsnapshot) {
			var a = _principalobjectaccessreadsnapshot[field].a;
			var b = _principalobjectaccessreadsnapshot[field].b;
			var c = _principalobjectaccessreadsnapshot[field].c;
			var d = _principalobjectaccessreadsnapshot[field].d;
			var g = _principalobjectaccessreadsnapshot[field].g;
			var r = _principalobjectaccessreadsnapshot[field].r;
			webApiField(principalobjectaccessreadsnapshot, field, e, a, b, c, d, r, u, g);
		}
		principalobjectaccessreadsnapshot.Entity = u;
		principalobjectaccessreadsnapshot.EntityName = 'principalobjectaccessreadsnapshot';
		principalobjectaccessreadsnapshot.EntityCollectionName = 'principalobjectaccessreadsnapshots';
		principalobjectaccessreadsnapshot['@odata.etag'] = e['@odata.etag'];
		principalobjectaccessreadsnapshot.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		principalobjectaccessreadsnapshot.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return principalobjectaccessreadsnapshot;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.PrincipalObjectAccessReadSnapshot = {
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