'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.PluginTraceLogApi = function (e) {
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return '';
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
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(obj.FormattedValue, field, {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(obj, field, {
					get: getValue
				});
			}
			else {
				Object.defineProperty(obj, field, {
					get: getValue,
					set: setValue
				});
			}
		}
		var _plugintracelog = {
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
		var plugintracelog = {};
		plugintracelog.ODataEntity = e;
		plugintracelog.FormattedValue = {};
		for (var field in _plugintracelog) {
			var a = _plugintracelog[field].a;
			var b = _plugintracelog[field].b;
			var c = _plugintracelog[field].c;
			var d = _plugintracelog[field].d;
			var g = _plugintracelog[field].g;
			var r = _plugintracelog[field].r;
			webApiField(plugintracelog, field, e, a, b, c, d, r, u, g);
		}
		plugintracelog.Entity = u;
		plugintracelog.EntityName = 'plugintracelog';
		plugintracelog.EntityCollectionName = 'plugintracelogs';
		plugintracelog['@odata.etag'] = e['@odata.etag'];
		plugintracelog.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		plugintracelog.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
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
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.PluginTraceLog = {
		Mode : {
			Asynchronous: 1,
			Synchronous: 0
		},
		OperationType : {
			Plug_in: 1,
			Unknown: 0,
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