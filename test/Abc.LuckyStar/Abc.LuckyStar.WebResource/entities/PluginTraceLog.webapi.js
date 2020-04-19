'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.PluginTraceLogApi = function (e) {
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
		var plugintracelog = {
			Configuration: { a: 'configuration', r: true },
			CorrelationId: { a: 'correlationid', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Depth: { a: 'depth', r: true },
			ExceptionDetails: { a: 'exceptiondetails', r: true },
			IsSystemCreated: { a: 'issystemcreated', r: true },
			MessageBlock: { a: 'messageblock', r: true },
			MessageName: { a: 'messagename', r: true },
			Mode: { a: 'mode', r: true },
			OperationType: { a: 'operationtype', r: true },
			OrganizationId: { a: 'organizationid', r: true },
			PerformanceConstructorDuration: { a: 'performanceconstructorduration', r: true },
			PerformanceConstructorStartTime_UtcDateAndTime: { a: 'performanceconstructorstarttime', r: true },
			PerformanceExecutionDuration: { a: 'performanceexecutionduration', r: true },
			PerformanceExecutionStartTime_UtcDateAndTime: { a: 'performanceexecutionstarttime', r: true },
			PersistenceKey: { a: 'persistencekey', r: true },
			PluginStepId: { a: 'pluginstepid', r: true },
			PluginTraceLogId: { a: 'plugintracelogid', r: true },
			PrimaryEntity: { a: 'primaryentity', r: true },
			Profile: { a: 'profile', r: true },
			RequestId: { a: 'requestid', r: true },
			SecureConfiguration: { a: 'secureconfiguration', r: true },
			TypeName: { a: 'typename', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in plugintracelog) {
			var a = plugintracelog[field].a;
			var b = plugintracelog[field].b;
			var c = plugintracelog[field].c;
			var d = plugintracelog[field].d;
			var g = plugintracelog[field].g;
			var r = plugintracelog[field].r;
			plugintracelog[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		plugintracelog.Entity = u;
		plugintracelog.EntityName = 'plugintracelog';
		plugintracelog.EntityCollectionName = 'plugintracelogs';
		plugintracelog['@odata.etag'] = e['@odata.etag'];
		plugintracelog.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		plugintracelog.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return plugintracelog;
	};
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.PluginTraceLog = {
		Mode : {
			Synchronous: 0,
			Asynchronous: 1
		},
		OperationType : {
			Unknown: 0,
			Plug_in: 1,
			Workflow_Activity: 2
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