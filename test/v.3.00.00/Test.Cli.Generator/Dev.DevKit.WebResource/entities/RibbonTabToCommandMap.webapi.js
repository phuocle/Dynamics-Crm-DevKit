'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.RibbonTabToCommandMapApi = function (e) {
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
		var _ribbontabtocommandmap = {
			Command: { a: 'command' },
			ComponentState: { a: 'componentstate', r: true },
			ControlId: { a: 'controlid' },
			Entity1: { a: 'entity' },
			IsManaged: { a: 'ismanaged', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			RibbonDiffId: { b: 'ribbondiffid', a: '_ribbondiffid_value', c: 'ribbondiffs', d: 'ribbondiff' },
			RibbonTabToCommandMapId: { a: 'ribbontabtocommandmapid' },
			RibbonTabToCommandMapUniqueId: { a: 'ribbontabtocommandmapuniqueid', r: true },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TabId: { a: 'tabid' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var ribbontabtocommandmap = {};
		ribbontabtocommandmap.ODataEntity = e;
		ribbontabtocommandmap.FormattedValue = {};
		for (var field in _ribbontabtocommandmap) {
			var a = _ribbontabtocommandmap[field].a;
			var b = _ribbontabtocommandmap[field].b;
			var c = _ribbontabtocommandmap[field].c;
			var d = _ribbontabtocommandmap[field].d;
			var g = _ribbontabtocommandmap[field].g;
			var r = _ribbontabtocommandmap[field].r;
			webApiField(ribbontabtocommandmap, field, e, a, b, c, d, r, u, g);
		}
		ribbontabtocommandmap.Entity = u;
		ribbontabtocommandmap.EntityName = 'ribbontabtocommandmap';
		ribbontabtocommandmap.EntityCollectionName = 'ribbontabtocommandmaps';
		ribbontabtocommandmap['@odata.etag'] = e['@odata.etag'];
		ribbontabtocommandmap.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		ribbontabtocommandmap.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return ribbontabtocommandmap;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RibbonTabToCommandMap = {
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