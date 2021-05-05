'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.d365vn_azureaccountApi = function (e) {
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
		var d365vn_azureaccount = {
			d365vn_AccountId: { b: 'd365vn_AccountId', a: '_d365vn_accountid_value', c: 'accounts', d: 'account' },
			d365vn_azureaccountId: { a: 'd365vn_azureaccountid' },
			d365vn_CategoryCode: { a: 'd365vn_categorycode' },
			d365vn_City: { a: 'd365vn_city' },
			d365vn_CreatedOn_UtcDateAndTime: { a: 'd365vn_createdon' },
			d365vn_ModifiedOn_UtcDateAndTime: { a: 'd365vn_modifiedon' },
			d365vn_name: { a: 'd365vn_name' },
			d365vn_Price: { a: 'd365vn_price' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in d365vn_azureaccount) {
			var a = d365vn_azureaccount[field].a;
			var b = d365vn_azureaccount[field].b;
			var c = d365vn_azureaccount[field].c;
			var d = d365vn_azureaccount[field].d;
			var g = d365vn_azureaccount[field].g;
			var r = d365vn_azureaccount[field].r;
			d365vn_azureaccount[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		d365vn_azureaccount.Entity = u;
		d365vn_azureaccount.EntityName = 'd365vn_azureaccount';
		d365vn_azureaccount.EntityCollectionName = 'd365vn_azureaccounts';
		d365vn_azureaccount['@odata.etag'] = e['@odata.etag'];
		d365vn_azureaccount.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		d365vn_azureaccount.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return d365vn_azureaccount;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.d365vn_azureaccount = {
		d365vn_CategoryCode : {
			Organization: 1,
			Owner: 2
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