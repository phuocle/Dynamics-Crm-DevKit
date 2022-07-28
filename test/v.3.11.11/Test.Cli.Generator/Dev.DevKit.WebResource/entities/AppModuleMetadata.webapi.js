'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.AppModuleMetadataApi = function (e) {
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
		var _appmodulemetadata = {
			AppModuleId: { a: 'appmoduleid' },
			AppModuleMetadataId: { a: 'appmodulemetadataid' },
			ComponentId: { a: 'componentid' },
			ComponentIsDefault: { a: 'componentisdefault' },
			ComponentIsQuickFindQuery: { a: 'componentisquickfindquery' },
			ComponentIsTabletEnabled: { a: 'componentistabletenabled' },
			ComponentIsUserChart: { a: 'componentisuserchart' },
			ComponentIsUserForm: { a: 'componentisuserform' },
			ComponentIsUserView: { a: 'componentisuserview' },
			ComponentStateCode: { a: 'componentstatecode' },
			ComponentSubType: { a: 'componentsubtype' },
			ComponentType: { a: 'componenttype' },
			ComponentVersion: { a: 'componentversion' },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ParentComponentId: { a: 'parentcomponentid' },
			State: { a: 'state' }
		};
		if (e === undefined) e = {};
		var u = {};
		var appmodulemetadata = {};
		appmodulemetadata.ODataEntity = e;
		appmodulemetadata.FormattedValue = {};
		for (var field in _appmodulemetadata) {
			var a = _appmodulemetadata[field].a;
			var b = _appmodulemetadata[field].b;
			var c = _appmodulemetadata[field].c;
			var d = _appmodulemetadata[field].d;
			var g = _appmodulemetadata[field].g;
			var r = _appmodulemetadata[field].r;
			webApiField(appmodulemetadata, field, e, a, b, c, d, r, u, g);
		}
		appmodulemetadata.Entity = u;
		appmodulemetadata.EntityName = 'appmodulemetadata';
		appmodulemetadata.EntityCollectionName = 'appmodulemetadatacollection';
		appmodulemetadata['@odata.etag'] = e['@odata.etag'];
		appmodulemetadata.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		appmodulemetadata.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return appmodulemetadata;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.AppModuleMetadata = {
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