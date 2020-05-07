'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.msdyn_schedulingparameterApi = function (e) {
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
		var msdyn_schedulingparameter = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AdvancedSettings: { a: 'msdyn_advancedsettings' },
			msdyn_AutoUpdateBookingTravel: { a: 'msdyn_autoupdatebookingtravel' },
			msdyn_BackgroundJobsConfiguration: { a: 'msdyn_backgroundjobsconfiguration' },
			msdyn_ConnectToMaps: { a: 'msdyn_connecttomaps' },
			msdyn_CustomGeoLatitudeField: { a: 'msdyn_customgeolatitudefield' },
			msdyn_CustomGeoLocationEntity: { a: 'msdyn_customgeolocationentity' },
			msdyn_CustomGeoLongitudeField: { a: 'msdyn_customgeolongitudefield' },
			msdyn_CustomGeoResourceField: { a: 'msdyn_customgeoresourcefield' },
			msdyn_CustomGeoTimestampField: { a: 'msdyn_customgeotimestampfield' },
			msdyn_DefaultRadiusUnit: { a: 'msdyn_defaultradiusunit' },
			msdyn_DefaultRadiusValue: { a: 'msdyn_defaultradiusvalue' },
			msdyn_DisableSanitizingHTMLTemplates: { a: 'msdyn_disablesanitizinghtmltemplates' },
			msdyn_EnableCustomGeoLocation: { a: 'msdyn_enablecustomgeolocation' },
			msdyn_enableOptimizer: { a: 'msdyn_enableoptimizer' },
			msdyn_GeoLocationExpiresAfterXMinutes: { a: 'msdyn_geolocationexpiresafterxminutes' },
			msdyn_GeoLocationRefreshIntervalSeconds: { a: 'msdyn_geolocationrefreshintervalseconds' },
			msdyn_MapApiKey: { a: 'msdyn_mapapikey' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_SAAutoFilterServiceTerritory: { a: 'msdyn_saautofilterserviceterritory' },
			msdyn_ScheduleBoardRefreshIntervalSeconds: { a: 'msdyn_scheduleboardrefreshintervalseconds' },
			msdyn_schedulingparameterId: { a: 'msdyn_schedulingparameterid' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_schedulingparameter) {
			var a = msdyn_schedulingparameter[field].a;
			var b = msdyn_schedulingparameter[field].b;
			var c = msdyn_schedulingparameter[field].c;
			var d = msdyn_schedulingparameter[field].d;
			var g = msdyn_schedulingparameter[field].g;
			var r = msdyn_schedulingparameter[field].r;
			msdyn_schedulingparameter[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_schedulingparameter.Entity = u;
		msdyn_schedulingparameter.EntityName = 'msdyn_schedulingparameter';
		msdyn_schedulingparameter.EntityCollectionName = 'msdyn_schedulingparameters';
		msdyn_schedulingparameter['@odata.etag'] = e['@odata.etag'];
		msdyn_schedulingparameter.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_schedulingparameter.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_schedulingparameter;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_schedulingparameter = {
		msdyn_AutoUpdateBookingTravel : {
			Disabled: 192350000,
			Enabled: 192350001
		},
		msdyn_DefaultRadiusUnit : {
			Miles: 192350000,
			KM: 192350001
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