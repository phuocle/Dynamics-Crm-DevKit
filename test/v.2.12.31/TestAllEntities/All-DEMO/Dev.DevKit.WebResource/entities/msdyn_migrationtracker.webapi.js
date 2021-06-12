'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_migrationtrackerApi = function (e) {
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
		var msdyn_migrationtracker = {
			CorrelationId: { a: 'correlationid' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_CorrelationId: { a: 'msdyn_correlationid' },
			msdyn_IsMigrationComplete: { a: 'msdyn_IsMigrationComplete' },
			msdyn_LegacyConvertRuleId: { b: 'msdyn_legacyconvertruleid', a: '_msdyn_legacyconvertruleid_value', c: 'convertrules', d: 'convertrule' },
			msdyn_LegacyConvertRuleItemId: { b: 'msdyn_legacyconvertruleitemid', a: '_msdyn_legacyconvertruleitemid_value', c: 'convertruleitems', d: 'convertruleitem' },
			msdyn_LegacyRuleIdName: { a: 'msdyn_legacyruleidname', r: true },
			msdyn_LegacyRuleItemIdName: { a: 'msdyn_legacyruleitemidname', r: true },
			msdyn_LegacySLAId: { b: 'msdyn_legacyslaid', a: '_msdyn_legacyslaid_value', c: 'slas', d: 'sla' },
			msdyn_LegacySLAItemId: { b: 'msdyn_legacyslaitemid', a: '_msdyn_legacyslaitemid_value', c: 'slaitems', d: 'slaitem' },
			msdyn_MigrationStatus: { a: 'msdyn_migrationstatus' },
			msdyn_MigrationStatusException: { a: 'msdyn_migrationstatusexception' },
			msdyn_MigrationStatusReason: { a: 'msdyn_migrationstatusreason' },
			msdyn_migrationtrackerId: { a: 'msdyn_migrationtrackerid' },
			msdyn_MigrationType: { a: 'msdyn_migrationtype' },
			msdyn_ModernConvertRuleId: { b: 'msdyn_modernconvertruleid', a: '_msdyn_modernconvertruleid_value', c: 'convertrules', d: 'convertrule' },
			msdyn_ModernConvertRuleItemId: { b: 'msdyn_modernconvertruleitemid', a: '_msdyn_modernconvertruleitemid_value', c: 'convertruleitems', d: 'convertruleitem' },
			msdyn_ModernRuleIdName: { a: 'msdyn_modernruleidname', r: true },
			msdyn_ModernRuleItemIdName: { a: 'msdyn_modernruleitemidname', r: true },
			msdyn_ModernSLAId: { b: 'msdyn_modernslaid', a: '_msdyn_modernslaid_value', c: 'slas', d: 'sla' },
			msdyn_ModernSLAItemId: { b: 'msdyn_modernslaitemid', a: '_msdyn_modernslaitemid_value', c: 'slaitems', d: 'slaitem' },
			msdyn_Name: { a: 'msdyn_name' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_migrationtracker) {
			var a = msdyn_migrationtracker[field].a;
			var b = msdyn_migrationtracker[field].b;
			var c = msdyn_migrationtracker[field].c;
			var d = msdyn_migrationtracker[field].d;
			var g = msdyn_migrationtracker[field].g;
			var r = msdyn_migrationtracker[field].r;
			msdyn_migrationtracker[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_migrationtracker.Entity = u;
		msdyn_migrationtracker.EntityName = 'msdyn_migrationtracker';
		msdyn_migrationtracker.EntityCollectionName = 'msdyn_migrationtrackers';
		msdyn_migrationtracker['@odata.etag'] = e['@odata.etag'];
		msdyn_migrationtracker.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_migrationtracker.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_migrationtracker;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_migrationtracker = {
		msdyn_MigrationStatus : {
			In_Progress: 0,
			Incomplete: 2,
			Migrated: 1
		},
		msdyn_MigrationType : {
			Migration: 0,
			PreValidation: 1
		},
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