'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_solutionhistoryApi = function (e) {
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
		var msdyn_solutionhistory = {
			msdyn_activityid: { a: 'msdyn_activityid' },
			msdyn_correlationid: { a: 'msdyn_correlationid' },
			msdyn_endtime_UtcDateAndTime: { a: 'msdyn_endtime' },
			msdyn_errorcode: { a: 'msdyn_errorcode' },
			msdyn_exceptionmessage: { a: 'msdyn_exceptionmessage' },
			msdyn_exceptionstack: { a: 'msdyn_exceptionstack' },
			msdyn_ismanaged: { a: 'msdyn_ismanaged' },
			msdyn_isoverwritecustomizations: { a: 'msdyn_isoverwritecustomizations' },
			msdyn_ispatch: { a: 'msdyn_ispatch' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_operation: { a: 'msdyn_operation' },
			msdyn_packagename: { a: 'msdyn_packagename' },
			msdyn_packageversion: { a: 'msdyn_packageversion' },
			msdyn_publisherid: { a: 'msdyn_publisherid' },
			msdyn_publishername: { a: 'msdyn_publishername' },
			msdyn_result: { a: 'msdyn_result' },
			msdyn_solutionhistoryId: { a: 'msdyn_solutionhistoryid' },
			msdyn_solutionid: { a: 'msdyn_solutionid' },
			msdyn_solutionversion: { a: 'msdyn_solutionversion' },
			msdyn_starttime_UtcDateAndTime: { a: 'msdyn_starttime' },
			msdyn_status: { a: 'msdyn_status' },
			msdyn_suboperation: { a: 'msdyn_suboperation' },
			msdyn_totaltime: { a: 'msdyn_totaltime' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_solutionhistory) {
			var a = msdyn_solutionhistory[field].a;
			var b = msdyn_solutionhistory[field].b;
			var c = msdyn_solutionhistory[field].c;
			var d = msdyn_solutionhistory[field].d;
			var g = msdyn_solutionhistory[field].g;
			var r = msdyn_solutionhistory[field].r;
			msdyn_solutionhistory[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_solutionhistory.Entity = u;
		msdyn_solutionhistory.EntityName = 'msdyn_solutionhistory';
		msdyn_solutionhistory.EntityCollectionName = 'msdyn_solutionhistories';
		msdyn_solutionhistory['@odata.etag'] = e['@odata.etag'];
		msdyn_solutionhistory.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_solutionhistory.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_solutionhistory;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_solutionhistory = {
		msdyn_operation : {
			Export: 2,
			Import: 0,
			ImportTranslation: 6,
			LanguageProvision: 5,
			None: 9,
			Publish: 3,
			PublishAll: 4,
			RibbonMetadataGeneration: 7,
			Uninstall: 1,
			WorkflowSetState: 8
		},
		msdyn_status : {
			Completed: 1,
			Started: 0
		},
		msdyn_suboperation : {
			Delete: 4,
			New: 1,
			None: 0,
			Update: 3,
			Upgrade: 2
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