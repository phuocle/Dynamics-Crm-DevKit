'use strict';
var Rocket;
(function (Rocket) {
	'use strict';
	Rocket.devkit_WebApiApi = function (e) {
		var EMPTY_STRING = '';
        function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
            var f = '@OData.Community.Display.V1.FormattedValue';
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
		var devkit_webapi = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			devkit_DateOnlyDateOnly_DateOnly: { a: 'devkit_dateonlydateonly' },
			devkit_DateOnlyDateOnlyCalculated_DateOnly: { a: 'devkit_dateonlydateonlycalculated', r: true },
			devkit_LinkWebApiId: { b: 'devkit_LinkWebApiId', a: '_devkit_linkwebapiid_value', c: 'devkit_webapis', d: 'devkit_webapi' },
			devkit_MultiOptionSetCode: { a: 'devkit_multioptionsetcode', f: true },
			devkit_Name: { a: 'devkit_name' },
			devkit_ParentWebApiId: { b: 'devkit_ParentWebApiId', a: '_devkit_parentwebapiid_value', c: 'devkit_webapis', d: 'devkit_webapi' },
			devkit_SingleOptionSetCode: { a: 'devkit_singleoptionsetcode' },
			devkit_SingleOptionSetCodeCalculated: { a: 'devkit_singleoptionsetcodecalculated', r: true },
			devkit_TimeZoneDateAndTime_TimezoneDateAndTime: { a: 'devkit_timezonedateandtime' },
			devkit_TimeZoneDateAndTimeCalculated_TimezoneDateAndTime: { a: 'devkit_timezonedateandtimecalculated', r: true },
			devkit_TimeZoneDateOnly_TimezoneDateOnly: { a: 'devkit_timezonedateonly' },
			devkit_TimeZoneDateOnlyCalculated_TimezoneDateOnly: { a: 'devkit_timezonedateonlycalculated', r: true },
			devkit_UserLocalDateAndTime_UtcDateAndTime: { a: 'devkit_userlocaldateandtime' },
			devkit_UserLocalDateAndTimeCalculated_UtcDateAndTime: { a: 'devkit_userlocaldateandtimecalculated', r: true },
			devkit_UserLocalDateAndTimeRollup_UtcDateAndTime: { a: 'devkit_userlocaldateandtimerollup', r: true },
			devkit_UserLocalDateAndTimeRollup_Date_UtcDateAndTime: { a: 'devkit_userlocaldateandtimerollup_date', r: true },
			devkit_UserLocalDateAndTimeRollup_State: { a: 'devkit_userlocaldateandtimerollup_state', r: true },
			devkit_UserLocalDateOnly_UtcDateOnly: { a: 'devkit_userlocaldateonly' },
			devkit_UserLocalDateOnlyCalculated_UtcDateOnly: { a: 'devkit_userlocaldateonlycalculated', r: true },
			devkit_UserLocalDateOnlyRollup_UtcDateOnly: { a: 'devkit_userlocaldateonlyrollup', r: true },
			devkit_UserLocalDateOnlyRollup_Date_UtcDateAndTime: { a: 'devkit_userlocaldateonlyrollup_date', r: true },
			devkit_UserLocalDateOnlyRollup_State: { a: 'devkit_userlocaldateonlyrollup_state', r: true },
			devkit_WebApiId: { a: 'devkit_webapiid' },
			devkit_YesAndNo: { a: 'devkit_yesandno' },
			devkit_YesAndNoCalculated: { a: 'devkit_yesandnocalculated', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
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
		for (var field in devkit_webapi) {
			var a = devkit_webapi[field].a;
			var b = devkit_webapi[field].b;
			var c = devkit_webapi[field].c;
			var d = devkit_webapi[field].d;
			var f = devkit_webapi[field].f;
			var r = devkit_webapi[field].r;
			devkit_webapi[field] = webApiField(e, a, b, c, d, r, u, f);
		}
		devkit_webapi.Entity = u;
		devkit_webapi.EntityName = 'devkit_webapi';
		devkit_webapi.EntityCollectionName = 'devkit_webapis';
		devkit_webapi['@odata.etag'] = e['@odata.etag'];
		var optionSet = {
			devkit_SingleOptionSetCode : {
				Crm_4: 100000000,
				Crm_2011: 100000001,
				Crm_2013: 100000002,
				Crm_2015: 100000003,
				Crm_2016: 100000004,
				Dynamics_365: 100000005
			},
			devkit_SingleOptionSetCodeCalculated : {
				Crm_4: 100000000,
				Crm_2011: 100000001,
				Crm_2013: 100000002,
				Crm_2015: 100000003,
				Crm_2016: 100000004,
				Dynamics_365: 100000005
			},
			statecode : {
				Active: 0,
				Inactive: 1
			},
			statuscode : {
				Active: 1,
				Inactive: 2
			}
		};
		devkit_webapi.OptionSet = optionSet;
		devkit_webapi.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		devkit_webapi.getAliasedFormattedValue = function (alias) {
			return e[alias];
		}
		return devkit_webapi;
	};
})(Rocket || (Rocket = {}));