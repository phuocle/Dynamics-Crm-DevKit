'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_projecttaskApi = function (e) {
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
		var msdyn_projecttask = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_Actualcost: { a: 'msdyn_actualcost' },
			msdyn_actualcost_Base: { a: 'msdyn_actualcost_base', r: true },
			msdyn_actualdurationminutes: { a: 'msdyn_actualdurationminutes' },
			msdyn_ActualEffort: { a: 'msdyn_actualeffort' },
			msdyn_actualend_UtcDateAndTime: { a: 'msdyn_actualend' },
			msdyn_ActualSales: { a: 'msdyn_actualsales' },
			msdyn_actualsales_Base: { a: 'msdyn_actualsales_base', r: true },
			msdyn_actualstart_UtcDateAndTime: { a: 'msdyn_actualstart' },
			msdyn_AggregationDirection: { a: 'msdyn_aggregationdirection' },
			msdyn_AssignedResources: { a: 'msdyn_assignedresources' },
			msdyn_AssignedTeamMembers: { b: 'msdyn_AssignedTeamMembers', a: '_msdyn_assignedteammembers_value', c: 'msdyn_projectteams', d: 'msdyn_projectteam' },
			msdyn_autoscheduling: { a: 'msdyn_autoscheduling' },
			msdyn_CostAtCompleteEstimate: { a: 'msdyn_costatcompleteestimate', r: true },
			msdyn_costatcompleteestimate_Base: { a: 'msdyn_costatcompleteestimate_base', r: true },
			msdyn_CostConsumptionPercentage: { a: 'msdyn_costconsumptionpercentage', r: true },
			msdyn_CostEstimateContour: { a: 'msdyn_costestimatecontour' },
			msdyn_description: { a: 'msdyn_description' },
			msdyn_duration: { a: 'msdyn_duration' },
			msdyn_Effort: { a: 'msdyn_effort' },
			msdyn_EffortContour: { a: 'msdyn_effortcontour' },
			msdyn_EffortEstimateAtComplete: { a: 'msdyn_effortestimateatcomplete' },
			msdyn_IsLineTask: { a: 'msdyn_islinetask' },
			msdyn_IsMilestone: { a: 'msdyn_ismilestone' },
			msdyn_MSProjectClientId: { a: 'msdyn_msprojectclientid' },
			msdyn_numberofresources: { a: 'msdyn_numberofresources' },
			msdyn_OrganizationalUnitPricingDimension: { b: 'msdyn_OrganizationalUnitPricingDimension', a: '_msdyn_organizationalunitpricingdimension_value', c: 'msdyn_organizationalunits', d: 'msdyn_organizationalunit' },
			msdyn_parenttask: { b: 'msdyn_parenttask', a: '_msdyn_parenttask_value', c: 'msdyn_projecttasks', d: 'msdyn_projecttask' },
			msdyn_plannedCost: { a: 'msdyn_plannedcost' },
			msdyn_plannedcost_Base: { a: 'msdyn_plannedcost_base', r: true },
			msdyn_PlannedSales: { a: 'msdyn_plannedsales' },
			msdyn_plannedsales_Base: { a: 'msdyn_plannedsales_base', r: true },
			msdyn_PluginProcessingData: { a: 'msdyn_pluginprocessingdata' },
			msdyn_Progress: { a: 'msdyn_progress' },
			msdyn_project: { b: 'msdyn_project', a: '_msdyn_project_value', c: 'msdyn_projects', d: 'msdyn_project' },
			msdyn_projecttaskId: { a: 'msdyn_projecttaskid' },
			msdyn_RemainingCost: { a: 'msdyn_remainingcost' },
			msdyn_remainingcost_Base: { a: 'msdyn_remainingcost_base', r: true },
			msdyn_RemainingHours: { a: 'msdyn_remaininghours' },
			msdyn_RemainingSales: { a: 'msdyn_remainingsales' },
			msdyn_remainingsales_Base: { a: 'msdyn_remainingsales_base', r: true },
			msdyn_RequestedHours: { a: 'msdyn_requestedhours' },
			msdyn_resourcecategory: { b: 'msdyn_resourcecategory', a: '_msdyn_resourcecategory_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			msdyn_ResourceCategoryPricingDimension: { b: 'msdyn_ResourceCategoryPricingDimension', a: '_msdyn_resourcecategorypricingdimension_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			msdyn_ResourceOrganizationalUnitId: { b: 'msdyn_ResourceOrganizationalUnitId', a: '_msdyn_resourceorganizationalunitid_value', c: 'msdyn_organizationalunits', d: 'msdyn_organizationalunit' },
			msdyn_ResourceUtilization: { a: 'msdyn_resourceutilization' },
			msdyn_SalesConsumptionPercentage: { a: 'msdyn_salesconsumptionpercentage', r: true },
			msdyn_SalesEstimateAtComplete: { a: 'msdyn_salesestimateatcomplete', r: true },
			msdyn_salesestimateatcomplete_Base: { a: 'msdyn_salesestimateatcomplete_base', r: true },
			msdyn_SalesEstimateContour: { a: 'msdyn_salesestimatecontour' },
			msdyn_SalesVariance: { a: 'msdyn_salesvariance', r: true },
			msdyn_salesvariance_Base: { a: 'msdyn_salesvariance_base', r: true },
			msdyn_scheduleddurationminutes: { a: 'msdyn_scheduleddurationminutes' },
			msdyn_scheduledend_UtcDateOnly: { a: 'msdyn_scheduledend' },
			msdyn_ScheduledHours: { a: 'msdyn_scheduledhours' },
			msdyn_scheduledstart_UtcDateOnly: { a: 'msdyn_scheduledstart' },
			msdyn_ScheduleVariance: { a: 'msdyn_schedulevariance' },
			msdyn_skipupdateestimateline: { a: 'msdyn_skipupdateestimateline' },
			msdyn_subject: { a: 'msdyn_subject' },
			msdyn_transactioncategory: { b: 'msdyn_transactioncategory', a: '_msdyn_transactioncategory_value', c: 'msdyn_transactioncategories', d: 'msdyn_transactioncategory' },
			msdyn_VarianceOfCost: { a: 'msdyn_varianceofcost', r: true },
			msdyn_varianceofcost_Base: { a: 'msdyn_varianceofcost_base', r: true },
			msdyn_WBSID: { a: 'msdyn_wbsid' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			processid: { a: 'processid' },
			StageId: { a: 'stageid' },
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
		for (var field in msdyn_projecttask) {
			var a = msdyn_projecttask[field].a;
			var b = msdyn_projecttask[field].b;
			var c = msdyn_projecttask[field].c;
			var d = msdyn_projecttask[field].d;
			var g = msdyn_projecttask[field].g;
			var r = msdyn_projecttask[field].r;
			msdyn_projecttask[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_projecttask.Entity = u;
		msdyn_projecttask.EntityName = 'msdyn_projecttask';
		msdyn_projecttask.EntityCollectionName = 'msdyn_projecttasks';
		msdyn_projecttask['@odata.etag'] = e['@odata.etag'];
		msdyn_projecttask.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_projecttask.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_projecttask;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
		OptionSet.msdyn_projecttask = {
			msdyn_AggregationDirection : {
				Both: 2,
				Downstream: 1,
				Upstream: 0
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