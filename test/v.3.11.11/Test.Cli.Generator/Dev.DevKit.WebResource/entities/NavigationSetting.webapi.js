'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.NavigationSettingApi = function (e) {
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
		var _navigationsetting = {
			AdvancedSettingOrder: { a: 'advancedsettingorder' },
			AppConfigId: { b: 'appconfigid', a: '_appconfigid_value', c: 'appmodules', d: 'appmodule' },
			AppConfigIdUnique: { a: 'appconfigidunique' },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			GroupName: { a: 'groupname' },
			IconResourceId: { a: 'iconresourceid' },
			ImportSequenceNumber: { a: 'importsequencenumber', r: true },
			IntroducedVersion: { a: 'introducedversion' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			NavigationSettingId: { a: 'navigationsettingid' },
			NavigationSettingIdUnique: { a: 'navigationsettingidunique' },
			ObjectTypeCode: { a: 'objecttypecode' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			PageUrl: { a: 'pageurl' },
			ParentNavigationSettingId: { a: 'parentnavigationsettingid' },
			Privileges: { a: 'privileges' },
			ProgressState: { a: 'progressstate' },
			QuickSettingOrder: { a: 'quicksettingorder' },
			ResourceId: { a: 'resourceid' },
			SettingType: { a: 'settingtype' },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var navigationsetting = {};
		navigationsetting.ODataEntity = e;
		navigationsetting.FormattedValue = {};
		for (var field in _navigationsetting) {
			var a = _navigationsetting[field].a;
			var b = _navigationsetting[field].b;
			var c = _navigationsetting[field].c;
			var d = _navigationsetting[field].d;
			var g = _navigationsetting[field].g;
			var r = _navigationsetting[field].r;
			webApiField(navigationsetting, field, e, a, b, c, d, r, u, g);
		}
		navigationsetting.Entity = u;
		navigationsetting.EntityName = 'navigationsetting';
		navigationsetting.EntityCollectionName = 'navigationsettings';
		navigationsetting['@odata.etag'] = e['@odata.etag'];
		navigationsetting.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		navigationsetting.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return navigationsetting;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.NavigationSetting = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		SettingType : {
			Advanced_Setup: 0,
			Advanced_Setup_Summary: 2,
			Basic_Setup: 1,
			Basic_Setup_Summary: 3
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