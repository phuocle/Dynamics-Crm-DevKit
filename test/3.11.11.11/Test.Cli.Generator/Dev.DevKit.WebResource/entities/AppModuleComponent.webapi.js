'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.AppModuleComponentApi = function (e) {
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
		var _appmodulecomponent = {
			AppModuleComponentId: { a: 'appmodulecomponentid' },
			AppModuleComponentIdUnique: { a: 'appmodulecomponentidunique' },
			AppModuleIdUnique: { b: 'appmoduleidunique', a: '_appmoduleidunique_value', c: 'appmodules', d: 'appmodule' },
			ComponentType: { a: 'componenttype' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			IntroducedVersion: { a: 'introducedversion' },
			IsDefault: { a: 'isdefault' },
			IsMetadata: { a: 'ismetadata' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ObjectId: { a: 'objectid' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			RootAppModuleComponentId: { a: 'rootappmodulecomponentid' },
			RootComponentBehavior: { a: 'rootcomponentbehavior' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var appmodulecomponent = {};
		appmodulecomponent.ODataEntity = e;
		appmodulecomponent.FormattedValue = {};
		for (var field in _appmodulecomponent) {
			var a = _appmodulecomponent[field].a;
			var b = _appmodulecomponent[field].b;
			var c = _appmodulecomponent[field].c;
			var d = _appmodulecomponent[field].d;
			var g = _appmodulecomponent[field].g;
			var r = _appmodulecomponent[field].r;
			webApiField(appmodulecomponent, field, e, a, b, c, d, r, u, g);
		}
		appmodulecomponent.Entity = u;
		appmodulecomponent.EntityName = 'appmodulecomponent';
		appmodulecomponent.EntityCollectionName = 'appmodulecomponents';
		appmodulecomponent['@odata.etag'] = e['@odata.etag'];
		appmodulecomponent.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		appmodulecomponent.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return appmodulecomponent;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.AppModuleComponent = {
		ComponentType : {
			Business_Process_Flows: 29,
			Charts: 59,
			Command_Ribbon_for_Forms_Grids_sub_grids: 48,
			Entities: 1,
			Forms: 60,
			Sitemap: 62,
			Views: 26
		},
		RootComponentBehavior : {
			Do_not_include_subcomponents: 1,
			Include_As_Shell_Only: 2,
			Include_Subcomponents: 0
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