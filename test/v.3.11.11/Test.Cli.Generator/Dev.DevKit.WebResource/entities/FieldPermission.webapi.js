'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FieldPermissionApi = function (e) {
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
		var _fieldpermission = {
			AttributeLogicalName: { a: 'attributelogicalname' },
			CanCreate: { a: 'cancreate' },
			CanRead: { a: 'canread' },
			CanUpdate: { a: 'canupdate' },
			ComponentState: { a: 'componentstate', r: true },
			FieldPermissionId: { a: 'fieldpermissionid' },
			FieldPermissionIdUnique: { a: 'fieldpermissionidunique', r: true },
			FieldSecurityProfileId: { b: 'fieldsecurityprofileid', a: '_fieldsecurityprofileid_value', c: 'fieldsecurityprofiles', d: 'fieldsecurityprofile' },
			IsManaged: { a: 'ismanaged', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var fieldpermission = {};
		fieldpermission.ODataEntity = e;
		fieldpermission.FormattedValue = {};
		for (var field in _fieldpermission) {
			var a = _fieldpermission[field].a;
			var b = _fieldpermission[field].b;
			var c = _fieldpermission[field].c;
			var d = _fieldpermission[field].d;
			var g = _fieldpermission[field].g;
			var r = _fieldpermission[field].r;
			webApiField(fieldpermission, field, e, a, b, c, d, r, u, g);
		}
		fieldpermission.Entity = u;
		fieldpermission.EntityName = 'fieldpermission';
		fieldpermission.EntityCollectionName = 'fieldpermissions';
		fieldpermission['@odata.etag'] = e['@odata.etag'];
		fieldpermission.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		fieldpermission.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return fieldpermission;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.FieldPermission = {
		CanCreate : {
			Allowed: 4,
			Not_Allowed: 0
		},
		CanRead : {
			Allowed: 4,
			Not_Allowed: 0
		},
		CanUpdate : {
			Allowed: 4,
			Not_Allowed: 0
		},
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		EntityName : {
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