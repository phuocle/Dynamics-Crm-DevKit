'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_unifiedroutingsetuptrackerApi = function (e) {
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
		var msdyn_unifiedroutingsetuptracker = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_enableunifiedrouting: { a: 'msdyn_enableunifiedrouting' },
			msdyn_errorcode: { a: 'msdyn_errorcode' },
			msdyn_errormessage: { a: 'msdyn_errormessage' },
			msdyn_executionstatus: { a: 'msdyn_executionstatus' },
			msdyn_issuccessnotificationdisplayed: { a: 'msdyn_issuccessnotificationdisplayed' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_servicerequestid: { a: 'msdyn_servicerequestid' },
			msdyn_token: { a: 'msdyn_token' },
			msdyn_transactionid: { a: 'msdyn_transactionid' },
			msdyn_unifiedroutingsetuptrackerId: { a: 'msdyn_unifiedroutingsetuptrackerid' },
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
		for (var field in msdyn_unifiedroutingsetuptracker) {
			var a = msdyn_unifiedroutingsetuptracker[field].a;
			var b = msdyn_unifiedroutingsetuptracker[field].b;
			var c = msdyn_unifiedroutingsetuptracker[field].c;
			var d = msdyn_unifiedroutingsetuptracker[field].d;
			var g = msdyn_unifiedroutingsetuptracker[field].g;
			var r = msdyn_unifiedroutingsetuptracker[field].r;
			msdyn_unifiedroutingsetuptracker[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_unifiedroutingsetuptracker.Entity = u;
		msdyn_unifiedroutingsetuptracker.EntityName = 'msdyn_unifiedroutingsetuptracker';
		msdyn_unifiedroutingsetuptracker.EntityCollectionName = 'msdyn_unifiedroutingsetuptrackers';
		msdyn_unifiedroutingsetuptracker['@odata.etag'] = e['@odata.etag'];
		msdyn_unifiedroutingsetuptracker.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_unifiedroutingsetuptracker.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_unifiedroutingsetuptracker;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_unifiedroutingsetuptracker = {
		msdyn_executionstatus : {
			Completed: 1,
			Deprovisioning_Completed: 5,
			Deprovisioning_Started: 4,
			Failed: 8,
			Provisioning_Completed: 3,
			Provisioning_Started: 2,
			Record_Created: 7,
			Started: 0,
			Toggled: 6
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