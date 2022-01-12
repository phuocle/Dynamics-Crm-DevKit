'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_resourcerequirementApi = function (e) {
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
		var msdyn_resourcerequirement = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_allocationmethod: { a: 'msdyn_allocationmethod' },
			msdyn_AppointmentRequirementId: { b: 'msdyn_AppointmentRequirementId', a: '_msdyn_appointmentrequirementid_value', c: 'appointments', d: 'appointment' },
			msdyn_BookingSetupMetadataId: { b: 'msdyn_BookingSetupMetadataId', a: '_msdyn_bookingsetupmetadataid_value', c: 'msdyn_bookingsetupmetadatas', d: 'msdyn_bookingsetupmetadata' },
			msdyn_CalendarId: { a: 'msdyn_calendarid' },
			msdyn_city: { a: 'msdyn_city' },
			msdyn_costprice: { a: 'msdyn_costprice' },
			msdyn_costprice_Base: { a: 'msdyn_costprice_base', r: true },
			msdyn_country: { a: 'msdyn_country' },
			msdyn_duration: { a: 'msdyn_duration' },
			msdyn_effort: { a: 'msdyn_effort' },
			msdyn_fromdate_UtcDateOnly: { a: 'msdyn_fromdate' },
			msdyn_FulfilledDuration: { a: 'msdyn_fulfilledduration' },
			msdyn_fulfilledhours: { a: 'msdyn_fulfilledhours' },
			msdyn_hours: { a: 'msdyn_hours' },
			msdyn_InternalFlags: { a: 'msdyn_internalflags' },
			msdyn_IsPrimary: { a: 'msdyn_isprimary' },
			msdyn_istemplate: { a: 'msdyn_istemplate' },
			msdyn_Latitude: { a: 'msdyn_latitude' },
			msdyn_Longitude: { a: 'msdyn_longitude' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_percentage: { a: 'msdyn_percentage' },
			msdyn_PoolType: { a: 'msdyn_pooltype', g: true },
			msdyn_Priority: { b: 'msdyn_Priority', a: '_msdyn_priority_value', c: 'msdyn_priorities', d: 'msdyn_priority' },
			msdyn_projectid: { b: 'msdyn_projectid', a: '_msdyn_projectid_value', c: 'msdyn_projects', d: 'msdyn_project' },
			msdyn_ProposedDuration: { a: 'msdyn_proposedduration' },
			msdyn_quantity: { a: 'msdyn_quantity' },
			msdyn_RemainingDuration: { a: 'msdyn_remainingduration' },
			msdyn_requeststatus: { a: 'msdyn_requeststatus' },
			msdyn_requirementgroupcontrolviewid: { a: 'msdyn_requirementgroupcontrolviewid' },
			msdyn_requirementgroupid: { b: 'msdyn_requirementgroupid', a: '_msdyn_requirementgroupid_value', c: 'msdyn_requirementgroups', d: 'msdyn_requirementgroup' },
			msdyn_requirementrelationshipid: { b: 'msdyn_requirementrelationshipid', a: '_msdyn_requirementrelationshipid_value', c: 'msdyn_requirementrelationships', d: 'msdyn_requirementrelationship' },
			msdyn_resourcerequirementId: { a: 'msdyn_resourcerequirementid' },
			msdyn_resourcetype: { a: 'msdyn_resourcetype', g: true },
			msdyn_roleid: { b: 'msdyn_roleid', a: '_msdyn_roleid_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			msdyn_serviceappointment: { b: 'msdyn_serviceappointment', a: '_msdyn_serviceappointment_value', c: 'serviceappointments', d: 'serviceappointment' },
			msdyn_sortoptions: { a: 'msdyn_sortoptions' },
			msdyn_stateorprovince: { a: 'msdyn_stateorprovince' },
			msdyn_Status: { b: 'msdyn_Status', a: '_msdyn_status_value', c: 'msdyn_requirementstatuses', d: 'msdyn_requirementstatus' },
			msdyn_templaterequirementid: { a: 'msdyn_templaterequirementid' },
			msdyn_Territory: { b: 'msdyn_Territory', a: '_msdyn_territory_value', c: 'territories', d: 'territory' },
			msdyn_TimeFromPromised_UtcDateAndTime: { a: 'msdyn_timefrompromised' },
			msdyn_TimeGroup: { b: 'msdyn_TimeGroup', a: '_msdyn_timegroup_value', c: 'msdyn_timegroups', d: 'msdyn_timegroup' },
			msdyn_TimeToPromised_UtcDateAndTime: { a: 'msdyn_timetopromised' },
			msdyn_TimeWindowEnd_UtcDateAndTime: { a: 'msdyn_timewindowend' },
			msdyn_TimeWindowStart_UtcDateAndTime: { a: 'msdyn_timewindowstart' },
			msdyn_timezonefortimewindow: { a: 'msdyn_timezonefortimewindow' },
			msdyn_todate_UtcDateOnly: { a: 'msdyn_todate' },
			msdyn_type: { a: 'msdyn_type' },
			msdyn_workhourtemplate: { b: 'msdyn_workhourtemplate', a: '_msdyn_workhourtemplate_value', c: 'msdyn_workhourtemplates', d: 'msdyn_workhourtemplate' },
			msdyn_WorkLocation: { a: 'msdyn_worklocation' },
			msdyn_WorkOrder: { b: 'msdyn_WorkOrder', a: '_msdyn_workorder_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_resourcerequirement) {
			var a = msdyn_resourcerequirement[field].a;
			var b = msdyn_resourcerequirement[field].b;
			var c = msdyn_resourcerequirement[field].c;
			var d = msdyn_resourcerequirement[field].d;
			var g = msdyn_resourcerequirement[field].g;
			var r = msdyn_resourcerequirement[field].r;
			msdyn_resourcerequirement[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_resourcerequirement.Entity = u;
		msdyn_resourcerequirement.EntityName = 'msdyn_resourcerequirement';
		msdyn_resourcerequirement.EntityCollectionName = 'msdyn_resourcerequirements';
		msdyn_resourcerequirement['@odata.etag'] = e['@odata.etag'];
		msdyn_resourcerequirement.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_resourcerequirement.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_resourcerequirement;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_resourcerequirement = {
		msdyn_allocationmethod : {
			Distribute_evenly: 192350003,
			Front_load: 192350005,
			Full_capacity: 192350001,
			None: 192350000,
			Percentage_capacity: 192350004
		},
		msdyn_PoolType : {
			Account: 192350000,
			Contact: 192350001,
			Equipment: 192350003,
			Facility: 192350004,
			User: 192350002
		},
		msdyn_resourcetype : {
			Account: 5,
			Contact: 2,
			Crew: 6,
			Equipment: 4,
			Facility: 7,
			Generic: 1,
			Pool: 8,
			User: 3
		},
		msdyn_type : {
			Extend: 192350001,
			New: 192350000
		},
		msdyn_WorkLocation : {
			Facility: 690970001,
			Location_Agnostic: 690970002,
			Onsite: 690970000
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