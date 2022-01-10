'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.cascadegrantrevokeaccessrecordstrackerApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
        function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
            var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
            var property = {};
            var getFormattedValue = function () {
                if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
                    return EMPTY_STRING;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName + f];
                    }
                    return EMPTY_STRING;
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
                    value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
                    upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
                } else {
                    upsertEntity[logicalName] = value;
                }
                entity[logicalName] = value;
            };
            Object.defineProperty(property, 'FormattedValue', {
                get: getFormattedValue
            });
            if (readOnly) {
                Object.defineProperty(property, 'Value', {
                    get: getValue
                });
            }
            else {
                Object.defineProperty(property, 'Value', {
                    get: getValue,
                    set: setValue
                });
            }
            return property;
        }
		var cascadegrantrevokeaccessrecordstracker = {
			cascadegrantrevokeaccessrecordstrackerId: { a: 'cascadegrantrevokeaccessrecordstrackerid' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: '', d: '', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: '', d: '', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: '', d: '', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: '', d: '', r: true },
			name: { a: 'name' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			ProcessedRecords: { a: 'processedrecords' },
			RecordsAttachment_Name: { a: 'recordsattachment_name', r: true },
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
		for (var field in cascadegrantrevokeaccessrecordstracker) {
			var a = cascadegrantrevokeaccessrecordstracker[field].a;
			var b = cascadegrantrevokeaccessrecordstracker[field].b;
			var c = cascadegrantrevokeaccessrecordstracker[field].c;
			var d = cascadegrantrevokeaccessrecordstracker[field].d;
			var g = cascadegrantrevokeaccessrecordstracker[field].g;
			var r = cascadegrantrevokeaccessrecordstracker[field].r;
			cascadegrantrevokeaccessrecordstracker[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		cascadegrantrevokeaccessrecordstracker.Entity = u;
		cascadegrantrevokeaccessrecordstracker.EntityName = 'cascadegrantrevokeaccessrecordstracker';
		cascadegrantrevokeaccessrecordstracker.EntityCollectionName = 'cascadegrantrevokeaccessrecordstrackers';
		cascadegrantrevokeaccessrecordstracker['@odata.etag'] = e['@odata.etag'];
		cascadegrantrevokeaccessrecordstracker.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		cascadegrantrevokeaccessrecordstracker.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
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