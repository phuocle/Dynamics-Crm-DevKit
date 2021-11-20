'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.AppModuleMetadataOperationLogApi = function (e) {
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
		var appmodulemetadataoperationlog = {
			AppModuleId: { a: 'appmoduleid' },
			AppModuleMetadataOperationLogId: { a: 'appmodulemetadataoperationlogid' },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			RetryCount: { a: 'retrycount' },
			StartedOn_UtcDateAndTime: { a: 'startedon' },
			State: { a: 'state' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in appmodulemetadataoperationlog) {
			var a = appmodulemetadataoperationlog[field].a;
			var b = appmodulemetadataoperationlog[field].b;
			var c = appmodulemetadataoperationlog[field].c;
			var d = appmodulemetadataoperationlog[field].d;
			var g = appmodulemetadataoperationlog[field].g;
			var r = appmodulemetadataoperationlog[field].r;
			appmodulemetadataoperationlog[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		appmodulemetadataoperationlog.Entity = u;
		appmodulemetadataoperationlog.EntityName = 'appmodulemetadataoperationlog';
		appmodulemetadataoperationlog.EntityCollectionName = 'appmodulemetadataoperationlogcollection';
		appmodulemetadataoperationlog['@odata.etag'] = e['@odata.etag'];
		appmodulemetadataoperationlog.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		appmodulemetadataoperationlog.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return appmodulemetadataoperationlog;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
		OptionSet.AppModuleMetadataOperationLog = {
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