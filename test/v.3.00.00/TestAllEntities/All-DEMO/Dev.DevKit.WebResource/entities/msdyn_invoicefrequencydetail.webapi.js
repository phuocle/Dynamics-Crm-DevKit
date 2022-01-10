'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_invoicefrequencydetailApi = function (e) {
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
		var msdyn_invoicefrequencydetail = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_dayofmonth: { a: 'msdyn_dayofmonth' },
			msdyn_invoicefrequency: { b: 'msdyn_invoicefrequency', a: '_msdyn_invoicefrequency_value', c: 'msdyn_invoicefrequencies', d: 'msdyn_invoicefrequency' },
			msdyn_invoicefrequencydetailId: { a: 'msdyn_invoicefrequencydetailid' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_occurrenceofweekday: { a: 'msdyn_occurrenceofweekday' },
			msdyn_weekday: { a: 'msdyn_weekday' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_invoicefrequencydetail) {
			var a = msdyn_invoicefrequencydetail[field].a;
			var b = msdyn_invoicefrequencydetail[field].b;
			var c = msdyn_invoicefrequencydetail[field].c;
			var d = msdyn_invoicefrequencydetail[field].d;
			var g = msdyn_invoicefrequencydetail[field].g;
			var r = msdyn_invoicefrequencydetail[field].r;
			msdyn_invoicefrequencydetail[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_invoicefrequencydetail.Entity = u;
		msdyn_invoicefrequencydetail.EntityName = 'msdyn_invoicefrequencydetail';
		msdyn_invoicefrequencydetail.EntityCollectionName = 'msdyn_invoicefrequencydetails';
		msdyn_invoicefrequencydetail['@odata.etag'] = e['@odata.etag'];
		msdyn_invoicefrequencydetail.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_invoicefrequencydetail.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_invoicefrequencydetail;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_invoicefrequencydetail = {
		msdyn_dayofmonth : {
			_1: 192350001,
			_10: 192350010,
			_11: 192350011,
			_12: 192350012,
			_13: 192350013,
			_14: 192350014,
			_15: 192350015,
			_16: 192350016,
			_17: 192350017,
			_18: 192350018,
			_19: 192350019,
			_2: 192350002,
			_20: 192350020,
			_21: 192350021,
			_22: 192350022,
			_23: 192350023,
			_24: 192350024,
			_25: 192350025,
			_26: 192350026,
			_27: 192350027,
			_28: 192350028,
			_29: 192350029,
			_3: 192350003,
			_30: 192350030,
			_31: 192350031,
			_4: 192350004,
			_5: 192350005,
			_6: 192350006,
			_7: 192350007,
			_8: 192350008,
			_9: 192350009
		},
		msdyn_occurrenceofweekday : {
			First: 192350000,
			Fourth: 192350003,
			Last: 192350004,
			Second: 192350001,
			Third: 192350002
		},
		msdyn_weekday : {
			Friday: 192350005,
			Monday: 192350001,
			Saturday: 192350006,
			Sunday: 192350000,
			Thursday: 192350004,
			Tuesday: 192350002,
			Wednesday: 192350003
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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