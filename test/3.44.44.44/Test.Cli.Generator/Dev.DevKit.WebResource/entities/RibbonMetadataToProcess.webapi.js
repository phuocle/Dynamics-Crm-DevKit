'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.RibbonMetadataToProcessApi = function (e) {
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
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
					}
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
		var _ribbonmetadatatoprocess = {
			CompletedOn_UtcDateAndTime: { a: 'completedon', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			EntityName2: { a: 'entityname' },
			ExceptionMessage: { a: 'exceptionmessage' },
			IsDbUpdate: { a: 'isdbupdate' },
			ProcessedOn_UtcDateAndTime: { a: 'processedon', r: true },
			RetryCount: { a: 'retrycount' },
			RibbonMetadataRowId: { a: 'ribbonmetadatarowid' },
			SolutionId: { a: 'solutionid' },
			SolutionName: { a: 'solutionname' },
			Status: { a: 'status' }
		};
		if (e === undefined) e = {};
		var u = {};
		var ribbonmetadatatoprocess = {};
		ribbonmetadatatoprocess.ODataEntity = e;
		ribbonmetadatatoprocess.FormattedValue = {};
		for (var field in _ribbonmetadatatoprocess) {
			var a = _ribbonmetadatatoprocess[field].a;
			var b = _ribbonmetadatatoprocess[field].b;
			var c = _ribbonmetadatatoprocess[field].c;
			var d = _ribbonmetadatatoprocess[field].d;
			var g = _ribbonmetadatatoprocess[field].g;
			var r = _ribbonmetadatatoprocess[field].r;
			webApiField(ribbonmetadatatoprocess, field, e, a, b, c, d, r, u, g);
		}
		ribbonmetadatatoprocess.Entity = u;
		ribbonmetadatatoprocess.EntityName = 'ribbonmetadatatoprocess';
		ribbonmetadatatoprocess.EntityCollectionName = 'ribbonmetadatatoprocesses';
		ribbonmetadatatoprocess['@odata.etag'] = e['@odata.etag'];
		ribbonmetadatatoprocess.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		ribbonmetadatatoprocess.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return ribbonmetadatatoprocess;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RibbonMetadataToProcess = {
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