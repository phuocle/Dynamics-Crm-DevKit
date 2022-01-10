'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_scheduleboardsettingApi = function (e) {
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
		var msdyn_scheduleboardsetting = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_BookBasedOn: { a: 'msdyn_bookbasedon' },
			msdyn_CustomTabName: { a: 'msdyn_customtabname' },
			msdyn_CustomTabWebResource: { a: 'msdyn_customtabwebresource' },
			msdyn_FilterLayout: { b: 'msdyn_FilterLayout', a: '_msdyn_filterlayout_value', c: 'msdyn_configurations', d: 'msdyn_configuration' },
			msdyn_FilterValues: { a: 'msdyn_filtervalues' },
			msdyn_FullyBookedColor: { a: 'msdyn_fullybookedcolor' },
			msdyn_HideCancelled: { a: 'msdyn_hidecancelled' },
			msdyn_IsPublic: { a: 'msdyn_ispublic' },
			msdyn_IsSynchronizeResources: { a: 'msdyn_issynchronizeresources' },
			msdyn_MapViewTabPlacement: { a: 'msdyn_mapviewtabplacement' },
			msdyn_NotBookedColor: { a: 'msdyn_notbookedcolor' },
			msdyn_OrderNumber: { a: 'msdyn_ordernumber' },
			msdyn_OrganizationalUnitTooltipsViewId: { a: 'msdyn_organizationalunittooltipsviewid' },
			msdyn_OrganizationalUnitViewId: { a: 'msdyn_organizationalunitviewid' },
			msdyn_OverbookedColor: { a: 'msdyn_overbookedcolor' },
			msdyn_PartiallyBookedColor: { a: 'msdyn_partiallybookedcolor' },
			msdyn_ResourceCellTemplate: { b: 'msdyn_ResourceCellTemplate', a: '_msdyn_resourcecelltemplate_value', c: 'msdyn_configurations', d: 'msdyn_configuration' },
			msdyn_RetrieveResourcesQuery: { b: 'msdyn_RetrieveResourcesQuery', a: '_msdyn_retrieveresourcesquery_value', c: 'msdyn_configurations', d: 'msdyn_configuration' },
			msdyn_SAAvailableColor: { a: 'msdyn_saavailablecolor' },
			msdyn_SAAvailableIcon: { a: 'msdyn_saavailableicon' },
			msdyn_SAAvailableIconDefault: { a: 'msdyn_saavailableicondefault' },
			msdyn_SAPartiallyAvailableColor: { a: 'msdyn_sapartiallyavailablecolor' },
			msdyn_SAPartiallyAvailableIcon: { a: 'msdyn_sapartiallyavailableicon' },
			msdyn_SAPartiallyAvailableIconDefault: { a: 'msdyn_sapartiallyavailableicondefault' },
			msdyn_SAUnavailableColor: { a: 'msdyn_saunavailablecolor' },
			msdyn_SAUnavailableIcon: { a: 'msdyn_saunavailableicon' },
			msdyn_SAUnavailableIconDefault: { a: 'msdyn_saunavailableicondefault' },
			msdyn_scheduleboardsettingId: { a: 'msdyn_scheduleboardsettingid' },
			msdyn_SchedulerAlertsView: { a: 'msdyn_scheduleralertsview' },
			msdyn_SchedulerBusinessUnitDetailsView: { a: 'msdyn_schedulerbusinessunitdetailsview' },
			msdyn_SchedulerBusinessUnitTooltipView: { a: 'msdyn_schedulerbusinessunittooltipview' },
			msdyn_SchedulerCoreDetailsView: { a: 'msdyn_schedulercoredetailsview' },
			msdyn_SchedulerCoreSlotTextTemplate: { a: 'msdyn_schedulercoreslottexttemplate' },
			msdyn_SchedulerCoreTooltipView: { a: 'msdyn_schedulercoretooltipview' },
			msdyn_SchedulerFieldServiceDetailsView: { a: 'msdyn_schedulerfieldservicedetailsview' },
			msdyn_SchedulerFieldServiceSlotTextTemplate: { a: 'msdyn_schedulerfieldserviceslottexttemplate' },
			msdyn_SchedulerFieldServiceTooltipView: { a: 'msdyn_schedulerfieldservicetooltipview' },
			msdyn_SchedulerResourceDetailsView: { a: 'msdyn_schedulerresourcedetailsview' },
			msdyn_SchedulerResourceTooltipView: { a: 'msdyn_schedulerresourcetooltipview' },
			msdyn_Settings: { a: 'msdyn_settings' },
			msdyn_ShareType: { a: 'msdyn_sharetype' },
			msdyn_TabName: { a: 'msdyn_tabname' },
			msdyn_UnscheduledRequirementsViewId: { a: 'msdyn_unscheduledrequirementsviewid' },
			msdyn_UnscheduledViewId: { a: 'msdyn_unscheduledviewid' },
			msdyn_UnscheduledWOPageRecCount: { a: 'msdyn_unscheduledwopagereccount' },
			msdyn_UnscheduledWOTooltipsViewId: { a: 'msdyn_unscheduledwotooltipsviewid' },
			msdyn_WorkingHoursColor: { a: 'msdyn_workinghourscolor' },
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
		for (var field in msdyn_scheduleboardsetting) {
			var a = msdyn_scheduleboardsetting[field].a;
			var b = msdyn_scheduleboardsetting[field].b;
			var c = msdyn_scheduleboardsetting[field].c;
			var d = msdyn_scheduleboardsetting[field].d;
			var g = msdyn_scheduleboardsetting[field].g;
			var r = msdyn_scheduleboardsetting[field].r;
			msdyn_scheduleboardsetting[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_scheduleboardsetting.Entity = u;
		msdyn_scheduleboardsetting.EntityName = 'msdyn_scheduleboardsetting';
		msdyn_scheduleboardsetting.EntityCollectionName = 'msdyn_scheduleboardsettings';
		msdyn_scheduleboardsetting['@odata.etag'] = e['@odata.etag'];
		msdyn_scheduleboardsetting.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_scheduleboardsetting.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_scheduleboardsetting;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_scheduleboardsetting = {
		msdyn_ShareType : {
			Everyone: 192350000,
			Just_me: 192350001,
			Specific_people: 192350002,
			System: 192350003
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