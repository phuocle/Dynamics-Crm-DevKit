﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ResourceGroupExpansionApi = function (e) {
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
		var _resourcegroupexpansion = {
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ItemId: { a: 'itemid' },
			MethodCode: { a: 'methodcode' },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon' },
			Name: { a: 'name' },
			ObjectId: { a: 'objectid' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			ResourceGroupExpansionId: { a: 'resourcegroupexpansionid' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var resourcegroupexpansion = {};
		resourcegroupexpansion.ODataEntity = e;
		resourcegroupexpansion.FormattedValue = {};
		for (var field in _resourcegroupexpansion) {
			var a = _resourcegroupexpansion[field].a;
			var b = _resourcegroupexpansion[field].b;
			var c = _resourcegroupexpansion[field].c;
			var d = _resourcegroupexpansion[field].d;
			var g = _resourcegroupexpansion[field].g;
			var r = _resourcegroupexpansion[field].r;
			webApiField(resourcegroupexpansion, field, e, a, b, c, d, r, u, g);
		}
		resourcegroupexpansion.Entity = u;
		resourcegroupexpansion.EntityName = 'resourcegroupexpansion';
		resourcegroupexpansion.EntityCollectionName = 'resourcegroupexpansions';
		resourcegroupexpansion['@odata.etag'] = e['@odata.etag'];
		resourcegroupexpansion.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		resourcegroupexpansion.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return resourcegroupexpansion;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ResourceGroupExpansion = {
		MethodCode : {
			All_Resources: 5,
			All_Subgroups: 8,
			None: 0,
			Parent_Groups: 7,
			Participating_Resources: 1,
			Resources: 4,
			Schedulable_Resources: 2,
			Subgroups: 6,
			Supported_Services: 3
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