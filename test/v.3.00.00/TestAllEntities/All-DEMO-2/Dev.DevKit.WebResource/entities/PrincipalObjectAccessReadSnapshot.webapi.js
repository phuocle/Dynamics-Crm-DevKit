'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.PrincipalObjectAccessReadSnapshotApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
        function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
            var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
            var property = {};
            var getFormattedValue = function () {
                if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
                    return EMPTY_STRING;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName + f];
                    }
                    return EMPTY_STRING;
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
                    value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
                    upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
                } else {
                    upsertEntity[logicalName] = value;
                }
                entity[logicalName] = value;
            };
            Object.defineProperty(property, 'FormattedValue', {
                get: getFormattedValue
            });
            if (readOnly) {
                Object.defineProperty(property, 'Value', {
                    get: getValue
                });
            }
            else {
                Object.defineProperty(property, 'Value', {
                    get: getValue,
                    set: setValue
                });
            }
            return property;
        }
		var principalobjectaccessreadsnapshot = {
			ChildUserPrincipalsCount: { a: 'childuserprincipalscount', r: true },
			Count: { a: 'count', r: true },
			CountPercentOfTotalRows: { a: 'countpercentoftotalrows', r: true },
			ObjectTypeCode: { a: 'objecttypecode', r: true },
			PrincipalId: { a: 'principalid', r: true },
			PrincipalObjectAccessReadSnapshotId: { a: 'principalobjectaccessreadsnapshotid', r: true },
			RecordCountForOwnerID: { a: 'recordcountforownerid', r: true },
			RecordCountForOwnerIDPercentOfTotalRows: { a: 'recordcountforowneridpercentoftotalrows', r: true },
			RecordCountForOwningBU: { a: 'recordcountforowningbu', r: true },
			RecordCountForOwningBUPercentOfTotalRows: { a: 'recordcountforowningbupercentoftotalrows', r: true },
			TeamPrincipalsCount: { a: 'teamprincipalscount', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in principalobjectaccessreadsnapshot) {
			var a = principalobjectaccessreadsnapshot[field].a;
			var b = principalobjectaccessreadsnapshot[field].b;
			var c = principalobjectaccessreadsnapshot[field].c;
			var d = principalobjectaccessreadsnapshot[field].d;
			var g = principalobjectaccessreadsnapshot[field].g;
			var r = principalobjectaccessreadsnapshot[field].r;
			principalobjectaccessreadsnapshot[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		principalobjectaccessreadsnapshot.Entity = u;
		principalobjectaccessreadsnapshot.EntityName = 'principalobjectaccessreadsnapshot';
		principalobjectaccessreadsnapshot.EntityCollectionName = 'principalobjectaccessreadsnapshots';
		principalobjectaccessreadsnapshot['@odata.etag'] = e['@odata.etag'];
		principalobjectaccessreadsnapshot.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		principalobjectaccessreadsnapshot.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
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