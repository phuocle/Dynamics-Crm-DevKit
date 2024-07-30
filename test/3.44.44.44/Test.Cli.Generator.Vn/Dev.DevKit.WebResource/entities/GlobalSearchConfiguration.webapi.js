'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.GlobalSearchConfigurationApi = function (e) {
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
		var _globalsearchconfiguration = {
			ComponentState: { a: 'componentstate', r: true },
			GlobalSearchConfigurationId: { a: 'globalsearchconfigurationid' },
			GlobalSearchConfigurationidUnique: { a: 'globalsearchconfigurationidunique', r: true },
			IsEnabled: { a: 'isenabled' },
			IsLocalized: { a: 'islocalized' },
			IsManaged: { a: 'ismanaged', r: true },
			IsSearchBoxVisible: { a: 'issearchboxvisible' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			SearchProviderName: { a: 'searchprovidername' },
			SearchProviderResultsPage: { a: 'searchproviderresultspage' },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var globalsearchconfiguration = {};
		globalsearchconfiguration.ODataEntity = e;
		globalsearchconfiguration.FormattedValue = {};
		for (var field in _globalsearchconfiguration) {
			var a = _globalsearchconfiguration[field].a;
			var b = _globalsearchconfiguration[field].b;
			var c = _globalsearchconfiguration[field].c;
			var d = _globalsearchconfiguration[field].d;
			var g = _globalsearchconfiguration[field].g;
			var r = _globalsearchconfiguration[field].r;
			webApiField(globalsearchconfiguration, field, e, a, b, c, d, r, u, g);
		}
		globalsearchconfiguration.Entity = u;
		globalsearchconfiguration.EntityName = 'globalsearchconfiguration';
		globalsearchconfiguration.EntityCollectionName = 'globalsearchconfigurations';
		globalsearchconfiguration['@odata.etag'] = e['@odata.etag'];
		globalsearchconfiguration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		globalsearchconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return globalsearchconfiguration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.GlobalSearchConfiguration = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
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