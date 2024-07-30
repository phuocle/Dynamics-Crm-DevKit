'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.RibbonContextGroupApi = function (e) {
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
		var _ribboncontextgroup = {
			ComponentState: { a: 'componentstate', r: true },
			ContextGroupId: { a: 'contextgroupid' },
			ContextGroupXml: { a: 'contextgroupxml' },
			Entity2: { a: 'entity' },
			IsManaged: { a: 'ismanaged', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			RibbonContextGroupId: { a: 'ribboncontextgroupid' },
			RibbonContextGroupUniqueId: { a: 'ribboncontextgroupuniqueid', r: true },
			RibbonCustomizationId: { b: 'ribboncustomizationid', a: '_ribboncustomizationid_value', c: 'ribboncustomizations', d: 'ribboncustomization' },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var ribboncontextgroup = {};
		ribboncontextgroup.ODataEntity = e;
		ribboncontextgroup.FormattedValue = {};
		for (var field in _ribboncontextgroup) {
			var a = _ribboncontextgroup[field].a;
			var b = _ribboncontextgroup[field].b;
			var c = _ribboncontextgroup[field].c;
			var d = _ribboncontextgroup[field].d;
			var g = _ribboncontextgroup[field].g;
			var r = _ribboncontextgroup[field].r;
			webApiField(ribboncontextgroup, field, e, a, b, c, d, r, u, g);
		}
		ribboncontextgroup.Entity = u;
		ribboncontextgroup.EntityName = 'ribboncontextgroup';
		ribboncontextgroup.EntityCollectionName = 'ribboncontextgroups';
		ribboncontextgroup['@odata.etag'] = e['@odata.etag'];
		ribboncontextgroup.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		ribboncontextgroup.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return ribboncontextgroup;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RibbonContextGroup = {
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