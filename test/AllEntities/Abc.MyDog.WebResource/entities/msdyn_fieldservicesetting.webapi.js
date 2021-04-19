'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.msdyn_fieldservicesettingApi = function (e) {
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
		var msdyn_fieldservicesetting = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AdvancedSettings: { a: 'msdyn_advancedsettings' },
			msdyn_AgreementPrefix: { a: 'msdyn_agreementprefix' },
			msdyn_AgreementRecordGeneration_UtcDateAndTime: { a: 'msdyn_agreementrecordgeneration' },
			msdyn_AgreementStartingNumber: { a: 'msdyn_agreementstartingnumber' },
			msdyn_AnalyticsIngestDataInXDays: { a: 'msdyn_analyticsingestdatainxdays' },
			msdyn_AnalyticsPostponeIngestionUntil_UtcDateAndTime: { a: 'msdyn_analyticspostponeingestionuntil' },
			msdyn_AnalyticsSpreadOutPostponeIngestionUntil_UtcDateAndTime: { a: 'msdyn_analyticsspreadoutpostponeingestionuntil' },
			msdyn_AutoAllocateEstimatedProducts: { a: 'msdyn_autoallocateestimatedproducts' },
			msdyn_AutoGenerateWOforAgreementBookings: { a: 'msdyn_autogeneratewoforagreementbooking' },
			msdyn_AutoGeoCodeAddresses: { a: 'msdyn_autogeocodeaddresses' },
			msdyn_AutoNumberingOptIn: { a: 'msdyn_autonumberingoptin' },
			msdyn_BookingAlertTemplate: { a: 'msdyn_bookingalerttemplate' },
			msdyn_BreakPayType: { b: 'msdyn_BreakPayType', a: '_msdyn_breakpaytype_value', c: 'msdyn_resourcepaytypes', d: 'msdyn_resourcepaytype' },
			msdyn_BusinessClosurePayType: { b: 'msdyn_BusinessClosurePayType', a: '_msdyn_businessclosurepaytype_value', c: 'msdyn_resourcepaytypes', d: 'msdyn_resourcepaytype' },
			msdyn_CancelCurrentSlotsWhenMoving: { a: 'msdyn_cancelcurrentslotswhenmoving' },
			msdyn_CustomGPSData: { a: 'msdyn_customgpsdata' },
			msdyn_CustomGPSLatitudefield: { a: 'msdyn_customgpslatitudefield' },
			msdyn_CustomGPSLocationentity: { a: 'msdyn_customgpslocationentity' },
			msdyn_CustomGPSLongitudefield: { a: 'msdyn_customgpslongitudefield' },
			msdyn_CustomGPSResourcefield: { a: 'msdyn_customgpsresourcefield' },
			msdyn_CustomGPSTimestampfield: { a: 'msdyn_customgpstimestampfield' },
			msdyn_DatabaseVersion: { a: 'msdyn_databaseversion' },
			msdyn_DeactivateBookingWhenCanceled: { a: 'msdyn_deactivatebookingwhencanceled' },
			msdyn_DeactivateBookingWhenCompleted: { a: 'msdyn_deactivatebookingwhencompleted' },
			msdyn_DeactivateWorkOrderWhenCanceled: { a: 'msdyn_deactivateworkorderwhencanceled' },
			msdyn_DeactivateWorkOrderWhenPosted: { a: 'msdyn_deactivateworkorderwhenposted' },
			msdyn_DefaultBookingDuration: { a: 'msdyn_defaultbookingduration' },
			msdyn_DefaultCanceledBookingStatus: { b: 'msdyn_DefaultCanceledBookingStatus', a: '_msdyn_defaultcanceledbookingstatus_value', c: 'bookingstatuses', d: 'bookingstatus' },
			msdyn_DefaultCrewStrategy: { a: 'msdyn_defaultcrewstrategy' },
			msdyn_DefaultRadiusUnit: { a: 'msdyn_defaultradiusunit' },
			msdyn_DefaultRadiusValue: { a: 'msdyn_defaultradiusvalue' },
			msdyn_DefaultScheduledBookingStatus: { b: 'msdyn_DefaultScheduledBookingStatus', a: '_msdyn_defaultscheduledbookingstatus_value', c: 'bookingstatuses', d: 'bookingstatus' },
			msdyn_DefaultWarehouse: { b: 'msdyn_DefaultWarehouse', a: '_msdyn_defaultwarehouse_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			msdyn_DefaultWorkOrderCompletedStatus: { a: 'msdyn_defaultworkordercompletedstatus' },
			msdyn_disablecustomerassetvalidation: { a: 'msdyn_disablecustomerassetvalidation' },
			msdyn_DisableRemoteAssistBookingStatusChanges: { a: 'msdyn_disableremoteassistbookingstatuschanges' },
			msdyn_EnableAddressSuggestions: { a: 'msdyn_enableaddresssuggestions' },
			msdyn_EnableIncidentTypeRecommendation: { a: 'msdyn_enableincidenttyperecommendation' },
			msdyn_EnableLegacyScheduleAssistant: { a: 'msdyn_enablelegacyscheduleassistant' },
			msdyn_EnableMainFormDialogForSubgrids: { a: 'msdyn_enablemainformdialogforsubgrids' },
			msdyn_EnableSuggestedDuration: { a: 'msdyn_enablesuggestedduration' },
			msdyn_EnhancedBackgroundProcessing: { a: 'msdyn_enhancedbackgroundprocessing' },
			msdyn_EntityNumberLength: { a: 'msdyn_entitynumberlength' },
			msdyn_fieldservicesettingId: { a: 'msdyn_fieldservicesettingid' },
			msdyn_GenerateAgreementInvoicesXDaysInAdvance: { a: 'msdyn_generateagreementinvoicesxdaysinadvance' },
			msdyn_GenerateAgreementWOXDaysInAdvance: { a: 'msdyn_generateagreementwoxdaysinadvance' },
			msdyn_GenerateBookingDatesXMonthsInAdvance: { a: 'msdyn_generatebookingdatesxmonthsinadvance' },
			msdyn_GenerateInvoiceDatesXMonthsInAdvance: { a: 'msdyn_generateinvoicedatesxmonthsinadvance' },
			msdyn_GPSLocationExpiresAfterXMinutes: { a: 'msdyn_gpslocationexpiresafterxminutes' },
			msdyn_HistoricalDataFilter: { a: 'msdyn_historicaldatafilter' },
			msdyn_InspectionAnalyticsEnabled: { a: 'msdyn_inspectionanalyticsenabled' },
			msdyn_InspectionAnalyticsEnabledOn_UtcDateAndTime: { a: 'msdyn_inspectionanalyticsenabledon' },
			msdyn_InspectionAnalyticsFrequency: { a: 'msdyn_inspectionanalyticsfrequency' },
			msdyn_InspectionAnalyticsRecommendedTime_UtcDateAndTime: { a: 'msdyn_inspectionanalyticsrecommendedtime' },
			msdyn_InventoryAdjustmentPrefix: { a: 'msdyn_inventoryadjustmentprefix' },
			msdyn_InventoryAdjustmentStartingNumber: { a: 'msdyn_inventoryadjustmentstartingnumber' },
			msdyn_InventoryTransferPrefix: { a: 'msdyn_inventorytransferprefix' },
			msdyn_InventoryTransferStartingNumber: { a: 'msdyn_inventorytransferstartingnumber' },
			msdyn_LastRunOfIncidentTypeRecommendation_UtcDateAndTime: { a: 'msdyn_lastrunofincidenttyperecommendation' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_NotificationTimeout: { a: 'msdyn_notificationtimeout' },
			msdyn_OvertimePayType: { b: 'msdyn_OvertimePayType', a: '_msdyn_overtimepaytype_value', c: 'msdyn_resourcepaytypes', d: 'msdyn_resourcepaytype' },
			msdyn_PostponeNumberCleanupUntil_TimezoneDateAndTime: { a: 'msdyn_postponenumbercleanupuntil' },
			msdyn_ProductCostOrder: { a: 'msdyn_productcostorder' },
			msdyn_PurchaseOrderApprovalRequired: { a: 'msdyn_purchaseorderapprovalrequired' },
			msdyn_PurchaseOrderPrefix: { a: 'msdyn_purchaseorderprefix' },
			msdyn_PurchaseOrderStartingNumber: { a: 'msdyn_purchaseorderstartingnumber' },
			msdyn_ResourcesSynchronizationTimeout: { a: 'msdyn_resourcessynchronizationtimeout' },
			msdyn_ReturnTopXRecommendations: { a: 'msdyn_returntopxrecommendations' },
			msdyn_RMAPrefix: { a: 'msdyn_rmaprefix' },
			msdyn_RMAStartingNumber: { a: 'msdyn_rmastartingnumber' },
			msdyn_RTVPrefix: { a: 'msdyn_rtvprefix' },
			msdyn_RTVStartingNumber: { a: 'msdyn_rtvstartingnumber' },
			msdyn_RunFrequencyOfIncidentTypeRecommendation: { a: 'msdyn_runfrequencyofincidenttyperecommendation' },
			msdyn_SAAutoFilterServiceTerritory: { a: 'msdyn_saautofilterserviceterritory' },
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
			msdyn_SchedulerUnscheduledView: { a: 'msdyn_schedulerunscheduledview' },
			msdyn_sdkapimapkey: { a: 'msdyn_sdkapimapkey' },
			msdyn_suggestreparentingcustomerassets: { a: 'msdyn_suggestreparentingcustomerassets' },
			msdyn_TimeCostActualsSource: { a: 'msdyn_timecostactualssource' },
			msdyn_TimeEntryGenerationStrategy: { a: 'msdyn_timeentrygenerationstrategy' },
			msdyn_TimestampFrequency: { a: 'msdyn_timestampfrequency' },
			msdyn_TravelChargeItemId: { b: 'msdyn_TravelChargeItemId', a: '_msdyn_travelchargeitemid_value', c: 'products', d: 'product' },
			msdyn_TravelPayType: { b: 'msdyn_TravelPayType', a: '_msdyn_travelpaytype_value', c: 'msdyn_resourcepaytypes', d: 'msdyn_resourcepaytype' },
			msdyn_TravelTimeRescheduling: { a: 'msdyn_traveltimerescheduling' },
			msdyn_UndefinedBookingLocation: { a: 'msdyn_undefinedbookinglocation' },
			msdyn_UnscheduledWOTooltipsViewId: { a: 'msdyn_unscheduledwotooltipsviewid' },
			msdyn_UseofProductsOutofStock: { a: 'msdyn_useofproductsoutofstock' },
			msdyn_WorkOrderInvoiceCreation: { a: 'msdyn_workorderinvoicecreation' },
			msdyn_WorkOrderPrefix: { a: 'msdyn_workorderprefix' },
			msdyn_WorkOrderStartingNumber: { a: 'msdyn_workorderstartingnumber' },
			msdyn_WorkPayType: { b: 'msdyn_WorkPayType', a: '_msdyn_workpaytype_value', c: 'msdyn_resourcepaytypes', d: 'msdyn_resourcepaytype' },
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
		for (var field in msdyn_fieldservicesetting) {
			var a = msdyn_fieldservicesetting[field].a;
			var b = msdyn_fieldservicesetting[field].b;
			var c = msdyn_fieldservicesetting[field].c;
			var d = msdyn_fieldservicesetting[field].d;
			var g = msdyn_fieldservicesetting[field].g;
			var r = msdyn_fieldservicesetting[field].r;
			msdyn_fieldservicesetting[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_fieldservicesetting.Entity = u;
		msdyn_fieldservicesetting.EntityName = 'msdyn_fieldservicesetting';
		msdyn_fieldservicesetting.EntityCollectionName = 'msdyn_fieldservicesettings';
		msdyn_fieldservicesetting['@odata.etag'] = e['@odata.etag'];
		msdyn_fieldservicesetting.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_fieldservicesetting.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_fieldservicesetting;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_fieldservicesetting = {
		msdyn_DefaultCrewStrategy : {
			Cascade_and_Accept_Cascade_Completely: 192350000,
			Crew_Leader_Management: 192350001,
			Crew_Member_Self_Management: 192350002
		},
		msdyn_DefaultWorkOrderCompletedStatus : {
			Closed_Canceled: 690970005,
			Closed_Posted: 690970004,
			Open_Completed: 690970003,
			Open_In_Progress: 690970002,
			Open_Scheduled: 690970001,
			Open_Unscheduled: 690970000
		},
		msdyn_HistoricalDataFilter : {
			All: 100000003,
			Last_12_Months: 100000002,
			Last_3_Months: 100000000,
			Last_6_Months: 100000001
		},
		msdyn_InspectionAnalyticsFrequency : {
			Custom: 100000002,
			Daily: 100000000,
			Immediately: 100000001
		},
		msdyn_ProductCostOrder : {
			CurrentStandard: 690970001,
			StandardCurrent: 690970000
		},
		msdyn_RunFrequencyOfIncidentTypeRecommendation : {
			Once_a_Week: 192350000
		},
		msdyn_TimeCostActualsSource : {
			Booking_Journals_on_Post_of_Work_Order: 192354000,
			Work_Order_Time_Entry_Approval: 192354001
		},
		msdyn_TimeEntryGenerationStrategy : {
			Auto_Generate_from_Booking_Timestamps: 192355201,
			Manual: 192355200
		},
		msdyn_TimestampFrequency : {
			Per_Booking_Status_Change: 192350000,
			Per_Field_Service_Status_Change: 192350001
		},
		msdyn_UndefinedBookingLocation : {
			Ignore_Location: 690970001,
			Previous_Known_Location: 690970000
		},
		msdyn_UseofProductsOutofStock : {
			Confirm: 690970000,
			Restrict: 690970001
		},
		msdyn_WorkOrderInvoiceCreation : {
			Never: 690970000,
			On_Work_Order_Posted: 690970001
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