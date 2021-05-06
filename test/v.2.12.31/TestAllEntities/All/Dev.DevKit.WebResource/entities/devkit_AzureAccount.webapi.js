'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.devkit_AzureAccountApi = function (e) {
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
		var devkit_azureaccount = {
			devkit_AccountId: { b: 'devkit_AccountId', a: '_devkit_accountid_value', c: 'accounts', d: 'account' },
			devkit_AzureAccountId: { a: 'devkit_azureaccountid' },
			devkit_AzureAccountType: { a: 'devkit_azureaccounttype' },
			devkit_Category: { a: 'devkit_category' },
			devkit_City: { a: 'devkit_city' },
			devkit_ContactId: { b: 'devkit_ContactId', a: '_devkit_contactid_value', c: 'contacts', d: 'contact' },
			devkit_CreatedOn_UtcDateAndTime: { a: 'devkit_createdon' },
			devkit_ModifiedOn_UtcDateAndTime: { a: 'devkit_modifiedon' },
			devkit_name: { a: 'devkit_name' },
			devkit_Price: { a: 'devkit_price' },
			devkit_Surface: { a: 'devkit_surface' },
			EmailAddress: { a: 'emailaddress' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in devkit_azureaccount) {
			var a = devkit_azureaccount[field].a;
			var b = devkit_azureaccount[field].b;
			var c = devkit_azureaccount[field].c;
			var d = devkit_azureaccount[field].d;
			var g = devkit_azureaccount[field].g;
			var r = devkit_azureaccount[field].r;
			devkit_azureaccount[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		devkit_azureaccount.Entity = u;
		devkit_azureaccount.EntityName = 'devkit_azureaccount';
		devkit_azureaccount.EntityCollectionName = 'devkit_azureaccounts';
		devkit_azureaccount['@odata.etag'] = e['@odata.etag'];
		devkit_azureaccount.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		devkit_azureaccount.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return devkit_azureaccount;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.devkit_AzureAccount = {
		devkit_Category : {
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