'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_suggestedcontactApi = function (e) {
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
		var msdyn_suggestedcontact = {
			msdyn_accountid: { b: 'msdyn_accountid', a: '_msdyn_accountid_value', c: '', d: '' },
			msdyn_accountidname: { a: 'msdyn_accountidname' },
			msdyn_accountname: { a: 'msdyn_accountname' },
			msdyn_addresscity: { a: 'msdyn_addresscity' },
			msdyn_addressline1: { a: 'msdyn_addressline1' },
			msdyn_addressline2: { a: 'msdyn_addressline2' },
			msdyn_addresspostalcode: { a: 'msdyn_addresspostalcode' },
			msdyn_companyname: { a: 'msdyn_companyname' },
			msdyn_createdon_UtcDateAndTime: { a: 'msdyn_createdon' },
			msdyn_description: { a: 'msdyn_description' },
			msdyn_email: { a: 'msdyn_email' },
			msdyn_firstname: { a: 'msdyn_firstname' },
			msdyn_fullname: { a: 'msdyn_fullname' },
			msdyn_jobtitle: { a: 'msdyn_jobtitle' },
			msdyn_lastname: { a: 'msdyn_lastname' },
			msdyn_mobilephone: { a: 'msdyn_mobilephone' },
			msdyn_preferredcontactmethodcode: { a: 'msdyn_preferredcontactmethodcode' },
			msdyn_suggestedcontactId: { a: 'msdyn_suggestedcontactid' },
			msdyn_telephone: { a: 'msdyn_telephone' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_suggestedcontact) {
			var a = msdyn_suggestedcontact[field].a;
			var b = msdyn_suggestedcontact[field].b;
			var c = msdyn_suggestedcontact[field].c;
			var d = msdyn_suggestedcontact[field].d;
			var g = msdyn_suggestedcontact[field].g;
			var r = msdyn_suggestedcontact[field].r;
			msdyn_suggestedcontact[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_suggestedcontact.Entity = u;
		msdyn_suggestedcontact.EntityName = 'msdyn_suggestedcontact';
		msdyn_suggestedcontact.EntityCollectionName = 'msdyn_suggestedcontacts';
		msdyn_suggestedcontact['@odata.etag'] = e['@odata.etag'];
		msdyn_suggestedcontact.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_suggestedcontact.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_suggestedcontact;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_suggestedcontact = {
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