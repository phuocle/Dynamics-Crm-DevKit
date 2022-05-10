'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.cascadegrantrevokeaccessrecordstrackerApi = function (e) {
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
		var _cascadegrantrevokeaccessrecordstracker = {
			cascadegrantrevokeaccessrecordstrackerId: { a: 'cascadegrantrevokeaccessrecordstrackerid' },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			name: { a: 'name' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			ProcessedRecords: { a: 'processedrecords' },
			RecordsAttachment: { a: 'recordsattachment', r: true },
			RecordsJson: { a: 'recordsjson' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SyncTrackerId: { b: 'synctrackerid', a: '_synctrackerid_value', c: 'cascadegrantrevokeaccessversiontrackers', d: 'cascadegrantrevokeaccessversiontracker' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TotalRecords: { a: 'totalrecords' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var cascadegrantrevokeaccessrecordstracker = {};
		cascadegrantrevokeaccessrecordstracker.ODataEntity = e;
		cascadegrantrevokeaccessrecordstracker.FormattedValue = {};
		for (var field in _cascadegrantrevokeaccessrecordstracker) {
			var a = _cascadegrantrevokeaccessrecordstracker[field].a;
			var b = _cascadegrantrevokeaccessrecordstracker[field].b;
			var c = _cascadegrantrevokeaccessrecordstracker[field].c;
			var d = _cascadegrantrevokeaccessrecordstracker[field].d;
			var g = _cascadegrantrevokeaccessrecordstracker[field].g;
			var r = _cascadegrantrevokeaccessrecordstracker[field].r;
			webApiField(cascadegrantrevokeaccessrecordstracker, field, e, a, b, c, d, r, u, g);
		}
		cascadegrantrevokeaccessrecordstracker.Entity = u;
		cascadegrantrevokeaccessrecordstracker.EntityName = 'cascadegrantrevokeaccessrecordstracker';
		cascadegrantrevokeaccessrecordstracker.EntityCollectionName = 'cascadegrantrevokeaccessrecordstrackers';
		cascadegrantrevokeaccessrecordstracker['@odata.etag'] = e['@odata.etag'];
		cascadegrantrevokeaccessrecordstracker.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		cascadegrantrevokeaccessrecordstracker.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return cascadegrantrevokeaccessrecordstracker;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.cascadegrantrevokeaccessrecordstracker = {
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