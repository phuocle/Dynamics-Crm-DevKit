'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.bot_environmentvariabledefinitionApi = function (e) {
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
		var _bot_environmentvariabledefinition = {
			bot_environmentvariabledefinitionId: { a: 'bot_environmentvariabledefinitionid', r: true },
			botid: { a: 'botid', r: true },
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			environmentvariabledefinitionid: { a: 'environmentvariabledefinitionid', r: true },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var bot_environmentvariabledefinition = {};
		bot_environmentvariabledefinition.ODataEntity = e;
		bot_environmentvariabledefinition.FormattedValue = {};
		for (var field in _bot_environmentvariabledefinition) {
			var a = _bot_environmentvariabledefinition[field].a;
			var b = _bot_environmentvariabledefinition[field].b;
			var c = _bot_environmentvariabledefinition[field].c;
			var d = _bot_environmentvariabledefinition[field].d;
			var g = _bot_environmentvariabledefinition[field].g;
			var r = _bot_environmentvariabledefinition[field].r;
			webApiField(bot_environmentvariabledefinition, field, e, a, b, c, d, r, u, g);
		}
		bot_environmentvariabledefinition.Entity = u;
		bot_environmentvariabledefinition.EntityName = 'bot_environmentvariabledefinition';
		bot_environmentvariabledefinition.EntityCollectionName = '';
		bot_environmentvariabledefinition['@odata.etag'] = e['@odata.etag'];
		bot_environmentvariabledefinition.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		bot_environmentvariabledefinition.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return bot_environmentvariabledefinition;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.bot_environmentvariabledefinition = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
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