'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.msdyn_forecastinstanceApi = function (e) {
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
		var msdyn_forecastinstance = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_actualamount: { a: 'msdyn_actualamount' },
			msdyn_actualamount_Base: { a: 'msdyn_actualamount_base', r: true },
			msdyn_bestcaseamount: { a: 'msdyn_bestcaseamount' },
			msdyn_bestcaseamount_Base: { a: 'msdyn_bestcaseamount_base', r: true },
			msdyn_committedamount: { a: 'msdyn_committedamount' },
			msdyn_committedamount_Base: { a: 'msdyn_committedamount_base', r: true },
			msdyn_forecastdefinitionid: { b: 'msdyn_forecastdefinitionid', a: '_msdyn_forecastdefinitionid_value', c: 'msdyn_forecastdefinitions', d: 'msdyn_forecastdefinition' },
			msdyn_forecastinstanceId: { a: 'msdyn_forecastinstanceid' },
			msdyn_forecastinstancetype: { a: 'msdyn_forecastinstancetype' },
			msdyn_forecastname: { a: 'msdyn_forecastname' },
			msdyn_forecastparentid: { b: 'msdyn_forecastparentid', a: '_msdyn_forecastparentid_value', c: 'msdyn_forecastinstances', d: 'msdyn_forecastinstance' },
			msdyn_forecastrecurrenceid: { b: 'msdyn_forecastrecurrenceid', a: '_msdyn_forecastrecurrenceid_value', c: 'msdyn_forecastrecurrences', d: 'msdyn_forecastrecurrence' },
			msdyn_ismanualbestcase: { a: 'msdyn_ismanualbestcase' },
			msdyn_ismanualcommitted: { a: 'msdyn_ismanualcommitted' },
			msdyn_ismanualpipeline: { a: 'msdyn_ismanualpipeline' },
			msdyn_isquotasourcemanual: { a: 'msdyn_isquotasourcemanual' },
			msdyn_level: { a: 'msdyn_level' },
			msdyn_manualbestcaseamount: { a: 'msdyn_manualbestcaseamount' },
			msdyn_manualbestcaseamount_Base: { a: 'msdyn_manualbestcaseamount_base', r: true },
			msdyn_manualcommittedamount: { a: 'msdyn_manualcommittedamount' },
			msdyn_manualcommittedamount_Base: { a: 'msdyn_manualcommittedamount_base', r: true },
			msdyn_manualpipelineamount: { a: 'msdyn_manualpipelineamount' },
			msdyn_manualpipelineamount_Base: { a: 'msdyn_manualpipelineamount_base', r: true },
			msdyn_matchinggoalid: { b: 'msdyn_matchinggoalid', a: '_msdyn_matchinggoalid_value', c: 'goals', d: 'goal' },
			msdyn_percentageachieved: { a: 'msdyn_percentageachieved', r: true },
			msdyn_pipelineamount: { a: 'msdyn_pipelineamount' },
			msdyn_pipelineamount_Base: { a: 'msdyn_pipelineamount_base', r: true },
			msdyn_recurrenceindex: { a: 'msdyn_recurrenceindex' },
			msdyn_targetamount: { a: 'msdyn_targetamount' },
			msdyn_targetamount_Base: { a: 'msdyn_targetamount_base', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_forecastinstance) {
			var a = msdyn_forecastinstance[field].a;
			var b = msdyn_forecastinstance[field].b;
			var c = msdyn_forecastinstance[field].c;
			var d = msdyn_forecastinstance[field].d;
			var g = msdyn_forecastinstance[field].g;
			var r = msdyn_forecastinstance[field].r;
			msdyn_forecastinstance[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_forecastinstance.Entity = u;
		msdyn_forecastinstance.EntityName = 'msdyn_forecastinstance';
		msdyn_forecastinstance.EntityCollectionName = 'msdyn_forecastinstances';
		msdyn_forecastinstance['@odata.etag'] = e['@odata.etag'];
		msdyn_forecastinstance.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_forecastinstance.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_forecastinstance;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_forecastinstance = {
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