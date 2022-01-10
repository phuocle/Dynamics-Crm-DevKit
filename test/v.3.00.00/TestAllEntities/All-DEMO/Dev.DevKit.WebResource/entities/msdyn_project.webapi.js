'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_projectApi = function (e) {
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
		var msdyn_project = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_actualdurationminutes: { a: 'msdyn_actualdurationminutes' },
			msdyn_actualend_UtcDateOnly: { a: 'msdyn_actualend' },
			msdyn_actualexpensecost: { a: 'msdyn_actualexpensecost' },
			msdyn_actualexpensecost_Base: { a: 'msdyn_actualexpensecost_base', r: true },
			msdyn_ActualExpenseSales: { a: 'msdyn_actualexpensesales' },
			msdyn_actualexpensesales_Base: { a: 'msdyn_actualexpensesales_base', r: true },
			msdyn_actualhours: { a: 'msdyn_actualhours' },
			msdyn_actuallaborcost: { a: 'msdyn_actuallaborcost' },
			msdyn_actuallaborcost_Base: { a: 'msdyn_actuallaborcost_base', r: true },
			msdyn_ActualSales: { a: 'msdyn_actualsales' },
			msdyn_actualsales_Base: { a: 'msdyn_actualsales_base', r: true },
			msdyn_actualstart_UtcDateOnly: { a: 'msdyn_actualstart' },
			msdyn_BulkGenerationStatus: { a: 'msdyn_bulkgenerationstatus' },
			msdyn_calendarid: { a: 'msdyn_calendarid' },
			msdyn_comments: { a: 'msdyn_comments' },
			msdyn_ContractOrganizationalUnitId: { b: 'msdyn_ContractOrganizationalUnitId', a: '_msdyn_contractorganizationalunitid_value', c: 'msdyn_organizationalunits', d: 'msdyn_organizationalunit' },
			msdyn_CostConsumption: { a: 'msdyn_costconsumption', r: true },
			msdyn_CostEstimateAtComplete: { a: 'msdyn_costestimateatcomplete', r: true },
			msdyn_costestimateatcomplete_Base: { a: 'msdyn_costestimateatcomplete_base', r: true },
			msdyn_CostPerformence: { a: 'msdyn_costperformence', r: true },
			msdyn_CostVariance: { a: 'msdyn_costvariance', r: true },
			msdyn_costvariance_Base: { a: 'msdyn_costvariance_base', r: true },
			msdyn_customer: { b: 'msdyn_customer', a: '_msdyn_customer_value', c: 'accounts', d: 'account' },
			msdyn_description: { a: 'msdyn_description' },
			msdyn_disablecreateofteammemberformanager: { a: 'msdyn_disablecreateofteammemberformanager' },
			msdyn_EffortestimateatcompleteEAC: { a: 'msdyn_effortestimateatcompleteeac' },
			msdyn_exchangerate: { a: 'msdyn_exchangerate' },
			msdyn_IsLinkedToMSProjectClient: { a: 'msdyn_islinkedtomsprojectclient' },
			msdyn_istemplate: { a: 'msdyn_istemplate' },
			msdyn_linkeddocumenturl: { a: 'msdyn_linkeddocumenturl' },
			msdyn_overallprojectstatus: { a: 'msdyn_overallprojectstatus' },
			msdyn_plannedexpensecost: { a: 'msdyn_plannedexpensecost' },
			msdyn_plannedexpensecost_Base: { a: 'msdyn_plannedexpensecost_base', r: true },
			msdyn_PlannedExpenseSales: { a: 'msdyn_plannedexpensesales' },
			msdyn_plannedexpensesales_Base: { a: 'msdyn_plannedexpensesales_base', r: true },
			msdyn_plannedhours: { a: 'msdyn_plannedhours' },
			msdyn_plannedlaborcost: { a: 'msdyn_plannedlaborcost' },
			msdyn_plannedlaborcost_Base: { a: 'msdyn_plannedlaborcost_base', r: true },
			msdyn_PlannedSales: { a: 'msdyn_plannedsales' },
			msdyn_plannedsales_Base: { a: 'msdyn_plannedsales_base', r: true },
			msdyn_Progress: { a: 'msdyn_progress' },
			msdyn_projectId: { a: 'msdyn_projectid' },
			msdyn_projectmanager: { b: 'msdyn_projectmanager', a: '_msdyn_projectmanager_value', c: 'systemusers', d: 'systemuser' },
			msdyn_projectresourcerequirementsvisibletore: { a: 'msdyn_projectresourcerequirementsvisibletore' },
			msdyn_projectteamid: { b: 'msdyn_projectteamid', a: '_msdyn_projectteamid_value', c: 'teams', d: 'team' },
			msdyn_ProjectTemplate: { b: 'msdyn_ProjectTemplate', a: '_msdyn_projecttemplate_value', c: 'msdyn_projects', d: 'msdyn_project' },
			msdyn_RemainingCost: { a: 'msdyn_remainingcost' },
			msdyn_remainingcost_Base: { a: 'msdyn_remainingcost_base', r: true },
			msdyn_RemainingHours: { a: 'msdyn_remaininghours' },
			msdyn_RemainingSales: { a: 'msdyn_remainingsales' },
			msdyn_remainingsales_Base: { a: 'msdyn_remainingsales_base', r: true },
			msdyn_SalesConsumption: { a: 'msdyn_salesconsumption', r: true },
			msdyn_SalesEstimateAtCompleteEAC: { a: 'msdyn_salesestimateatcompleteeac', r: true },
			msdyn_salesestimateatcompleteeac_Base: { a: 'msdyn_salesestimateatcompleteeac_base', r: true },
			msdyn_salesorderid: { b: 'msdyn_salesorderid', a: '_msdyn_salesorderid_value', c: 'salesorders', d: 'salesorder' },
			msdyn_SalesVariance: { a: 'msdyn_salesvariance', r: true },
			msdyn_salesvariance_Base: { a: 'msdyn_salesvariance_base', r: true },
			msdyn_scheduleddurationminutes: { a: 'msdyn_scheduleddurationminutes' },
			msdyn_scheduledend_UtcDateOnly: { a: 'msdyn_scheduledend' },
			msdyn_scheduledstart_UtcDateOnly: { a: 'msdyn_scheduledstart' },
			msdyn_scheduleperformance: { a: 'msdyn_scheduleperformance' },
			msdyn_ScheduleVariance: { a: 'msdyn_schedulevariance' },
			msdyn_StageName: { a: 'msdyn_stagename' },
			msdyn_statusupdatedon_UtcDateAndTime: { a: 'msdyn_statusupdatedon' },
			msdyn_subject: { a: 'msdyn_subject' },
			msdyn_teamsize: { a: 'msdyn_teamsize', r: true },
			msdyn_teamsize_Date_UtcDateAndTime: { a: 'msdyn_teamsize_date', r: true },
			msdyn_teamsize_State: { a: 'msdyn_teamsize_state', r: true },
			msdyn_TotalActualCost: { a: 'msdyn_totalactualcost' },
			msdyn_totalactualcost_Base: { a: 'msdyn_totalactualcost_base', r: true },
			msdyn_TotalActualSales: { a: 'msdyn_totalactualsales' },
			msdyn_totalactualsales_Base: { a: 'msdyn_totalactualsales_base', r: true },
			msdyn_TotalPlannedCost: { a: 'msdyn_totalplannedcost' },
			msdyn_totalplannedcost_Base: { a: 'msdyn_totalplannedcost_base', r: true },
			msdyn_TotalPlannedSales: { a: 'msdyn_totalplannedsales' },
			msdyn_totalplannedsales_Base: { a: 'msdyn_totalplannedsales_base', r: true },
			msdyn_wbsduration: { a: 'msdyn_wbsduration' },
			msdyn_workhourtemplate: { b: 'msdyn_workhourtemplate', a: '_msdyn_workhourtemplate_value', c: 'msdyn_workhourtemplates', d: 'msdyn_workhourtemplate' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			processid: { a: 'processid' },
			stageid: { a: 'stageid' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			traversedpath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_project) {
			var a = msdyn_project[field].a;
			var b = msdyn_project[field].b;
			var c = msdyn_project[field].c;
			var d = msdyn_project[field].d;
			var g = msdyn_project[field].g;
			var r = msdyn_project[field].r;
			msdyn_project[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_project.Entity = u;
		msdyn_project.EntityName = 'msdyn_project';
		msdyn_project.EntityCollectionName = 'msdyn_projects';
		msdyn_project['@odata.etag'] = e['@odata.etag'];
		msdyn_project.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_project.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_project;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_project = {
		msdyn_BulkGenerationStatus : {
			Failed: 192350001,
			Processing: 192350000
		},
		msdyn_CostPerformence : {
			On_Budget: 192350000,
			Over_Budget: 192350001,
			Under_Budget: 192350002
		},
		msdyn_overallprojectstatus : {
			Green: 1,
			Red: 3,
			Yellow: 2
		},
		msdyn_scheduleperformance : {
			Ahead: 192350001,
			Behind: 192350002,
			On_Time: 192350000
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Closed_Sets_project_to_read_only_and_cancels_future_bookings: 192350000,
			Inactive_Sets_project_to_read_only: 2
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