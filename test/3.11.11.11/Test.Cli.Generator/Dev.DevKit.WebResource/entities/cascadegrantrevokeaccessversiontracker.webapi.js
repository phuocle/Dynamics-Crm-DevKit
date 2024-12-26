'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.cascadegrantrevokeaccessversiontrackerApi = function (e) {
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
		var _cascadegrantrevokeaccessversiontracker = {
			cascadegrantrevokeaccessversiontrackerId: { a: 'cascadegrantrevokeaccessversiontrackerid' },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			MessageName: { a: 'messagename' },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			name: { a: 'name' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			ParentEntityId: { a: 'parententityid' },
			ParentObjectTypeCode: { a: 'parentobjecttypecode' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var cascadegrantrevokeaccessversiontracker = {};
		cascadegrantrevokeaccessversiontracker.ODataEntity = e;
		cascadegrantrevokeaccessversiontracker.FormattedValue = {};
		for (var field in _cascadegrantrevokeaccessversiontracker) {
			var a = _cascadegrantrevokeaccessversiontracker[field].a;
			var b = _cascadegrantrevokeaccessversiontracker[field].b;
			var c = _cascadegrantrevokeaccessversiontracker[field].c;
			var d = _cascadegrantrevokeaccessversiontracker[field].d;
			var g = _cascadegrantrevokeaccessversiontracker[field].g;
			var r = _cascadegrantrevokeaccessversiontracker[field].r;
			webApiField(cascadegrantrevokeaccessversiontracker, field, e, a, b, c, d, r, u, g);
		}
		cascadegrantrevokeaccessversiontracker.Entity = u;
		cascadegrantrevokeaccessversiontracker.EntityName = 'cascadegrantrevokeaccessversiontracker';
		cascadegrantrevokeaccessversiontracker.EntityCollectionName = 'cascadegrantrevokeaccessversiontrackers';
		cascadegrantrevokeaccessversiontracker['@odata.etag'] = e['@odata.etag'];
		cascadegrantrevokeaccessversiontracker.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		cascadegrantrevokeaccessversiontracker.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return cascadegrantrevokeaccessversiontracker;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.cascadegrantrevokeaccessversiontracker = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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