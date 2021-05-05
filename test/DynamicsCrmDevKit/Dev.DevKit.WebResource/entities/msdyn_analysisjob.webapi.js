'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_analysisjobApi = function (e) {
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
		var msdyn_analysisjob = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_analysisjobId: { a: 'msdyn_analysisjobid' },
			msdyn_CustomDetails: { a: 'msdyn_customdetails' },
			msdyn_DisplayStatus: { a: 'msdyn_displaystatus' },
			msdyn_EndTime_UtcDateAndTime: { a: 'msdyn_endtime' },
			msdyn_ErrorCount: { a: 'msdyn_errorcount' },
			msdyn_Exception: { a: 'msdyn_exception' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_RuleFailCount: { a: 'msdyn_rulefailcount' },
			msdyn_RulePassCount: { a: 'msdyn_rulepasscount' },
			msdyn_RuleRunCount: { a: 'msdyn_ruleruncount' },
			msdyn_RunCorrelationId: { a: 'msdyn_runcorrelationid' },
			msdyn_sevcriticalcount: { a: 'msdyn_sevcriticalcount' },
			msdyn_sevhighcount: { a: 'msdyn_sevhighcount' },
			msdyn_sevlowcount: { a: 'msdyn_sevlowcount' },
			msdyn_sevmediumcount: { a: 'msdyn_sevmediumcount' },
			msdyn_StartTime_UtcDateAndTime: { a: 'msdyn_starttime' },
			msdyn_SuggestionCount: { a: 'msdyn_suggestioncount' },
			msdyn_TenantId: { a: 'msdyn_tenantid' },
			msdyn_TriggerType: { a: 'msdyn_triggertype' },
			msdyn_WarningCount: { a: 'msdyn_warningcount' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_analysisjob) {
			var a = msdyn_analysisjob[field].a;
			var b = msdyn_analysisjob[field].b;
			var c = msdyn_analysisjob[field].c;
			var d = msdyn_analysisjob[field].d;
			var g = msdyn_analysisjob[field].g;
			var r = msdyn_analysisjob[field].r;
			msdyn_analysisjob[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_analysisjob.Entity = u;
		msdyn_analysisjob.EntityName = 'msdyn_analysisjob';
		msdyn_analysisjob.EntityCollectionName = 'msdyn_analysisjobs';
		msdyn_analysisjob['@odata.etag'] = e['@odata.etag'];
		msdyn_analysisjob.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_analysisjob.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_analysisjob;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_analysisjob = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Canceled: 2,
			Complete: 192350001,
			Completed_With_Exceptions: 192350003,
			Exception: 192350002,
			Pending: 1,
			Running: 192350000
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