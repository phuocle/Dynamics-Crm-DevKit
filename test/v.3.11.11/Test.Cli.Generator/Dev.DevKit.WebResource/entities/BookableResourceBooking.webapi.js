'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.BookableResourceBookingApi = function (e) {
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
		var _bookableresourcebooking = {
			BookableResourceBookingId: { a: 'bookableresourcebookingid' },
			BookingStatus: { b: 'bookingstatus', a: '_bookingstatus_value', c: 'bookingstatuses', d: 'bookingstatus' },
			BookingType: { a: 'bookingtype' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Duration: { a: 'duration' },
			EndTime_UtcDateAndTime: { a: 'endtime' },
			ExchangeRate: { a: 'exchangerate', r: true },
			Header: { b: 'header', a: '_header_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AcceptCascadeCrewChanges: { a: 'msdyn_acceptcascadecrewchanges' },
			msdyn_ActualArrivalTime_UtcDateAndTime: { a: 'msdyn_actualarrivaltime' },
			msdyn_ActualTravelDuration: { a: 'msdyn_actualtravelduration' },
			msdyn_AgreementBookingDate: { b: 'msdyn_AgreementBookingDate', a: '_msdyn_agreementbookingdate_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			msdyn_AllowOverlapping: { a: 'msdyn_allowoverlapping' },
			msdyn_AppointmentBookingId: { b: 'msdyn_AppointmentBookingId', a: '_msdyn_appointmentbookingid_value', c: 'appointments', d: 'appointment' },
			msdyn_BaseTravelDuration: { a: 'msdyn_basetravelduration' },
			msdyn_BookingMethod: { a: 'msdyn_bookingmethod' },
			msdyn_BookingSetupMetadataId: { b: 'msdyn_BookingSetupMetadataId', a: '_msdyn_bookingsetupmetadataid_value', c: 'msdyn_bookingsetupmetadatas', d: 'msdyn_bookingsetupmetadata' },
			msdyn_CascadeCrewChanges: { a: 'msdyn_cascadecrewchanges' },
			msdyn_Crew: { b: 'msdyn_Crew', a: '_msdyn_crew_value', c: 'bookableresources', d: 'bookableresource' },
			msdyn_CrewMemberType: { a: 'msdyn_crewmembertype' },
			msdyn_effort: { a: 'msdyn_effort' },
			msdyn_EstimatedArrivalTime_UtcDateAndTime: { a: 'msdyn_estimatedarrivaltime' },
			msdyn_EstimatedTravelDuration: { a: 'msdyn_estimatedtravelduration' },
			msdyn_InternalFlags: { a: 'msdyn_internalflags' },
			msdyn_Latitude: { a: 'msdyn_latitude' },
			msdyn_Longitude: { a: 'msdyn_longitude' },
			msdyn_MilesTraveled: { a: 'msdyn_milestraveled' },
			msdyn_OfflineTimestamp_UtcDateAndTime: { a: 'msdyn_offlinetimestamp' },
			msdyn_PreventTimestampCreation: { a: 'msdyn_preventtimestampcreation' },
			msdyn_projectid: { b: 'msdyn_projectid', a: '_msdyn_projectid_value', c: 'msdyn_projects', d: 'msdyn_project' },
			msdyn_projectteamid: { b: 'msdyn_projectteamid', a: '_msdyn_projectteamid_value', c: 'msdyn_projectteams', d: 'msdyn_projectteam' },
			msdyn_quickNoteAction: { a: 'msdyn_quickNoteAction' },
			msdyn_requirementgroupid: { b: 'msdyn_requirementgroupid', a: '_msdyn_requirementgroupid_value', c: 'msdyn_requirementgroups', d: 'msdyn_requirementgroup' },
			msdyn_requirementgroupset: { a: 'msdyn_requirementgroupset' },
			msdyn_resourcecategoryid: { b: 'msdyn_resourcecategoryid', a: '_msdyn_resourcecategoryid_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			msdyn_ResourceGroup: { b: 'msdyn_ResourceGroup', a: '_msdyn_resourcegroup_value', c: 'bookableresources', d: 'bookableresource' },
			msdyn_ResourceRequirement: { b: 'msdyn_ResourceRequirement', a: '_msdyn_resourcerequirement_value', c: 'msdyn_resourcerequirements', d: 'msdyn_resourcerequirement' },
			msdyn_serviceappointment: { b: 'msdyn_serviceappointment', a: '_msdyn_serviceappointment_value', c: 'serviceappointments', d: 'serviceappointment' },
			msdyn_Signature: { a: 'msdyn_signature' },
			msdyn_SlotText: { a: 'msdyn_slottext' },
			msdyn_TimeGroupDetailSelected: { b: 'msdyn_TimeGroupDetailSelected', a: '_msdyn_timegroupdetailselected_value', c: 'msdyn_timegroupdetails', d: 'msdyn_timegroupdetail' },
			msdyn_TotalBillableDuration: { a: 'msdyn_totalbillableduration' },
			msdyn_TotalBreakDuration: { a: 'msdyn_totalbreakduration' },
			msdyn_TotalCost: { a: 'msdyn_totalcost' },
			msdyn_totalcost_Base: { a: 'msdyn_totalcost_base', r: true },
			msdyn_TotalDurationInProgress: { a: 'msdyn_totaldurationinprogress' },
			msdyn_TravelTimeCalculationType: { a: 'msdyn_traveltimecalculationtype' },
			msdyn_TravelTimeRescheduling: { a: 'msdyn_traveltimerescheduling' },
			msdyn_URSInternalFlags: { a: 'msdyn_ursinternalflags' },
			msdyn_WorkLocation: { a: 'msdyn_worklocation' },
			msdyn_WorkOrder: { b: 'msdyn_WorkOrder', a: '_msdyn_workorder_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			Name: { a: 'name' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ProcessId: { a: 'processid' },
			Resource: { b: 'resource', a: '_resource_value', c: 'bookableresources', d: 'bookableresource' },
			StageId: { a: 'stageid' },
			StartTime_UtcDateAndTime: { a: 'starttime' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var bookableresourcebooking = {};
		bookableresourcebooking.ODataEntity = e;
		bookableresourcebooking.FormattedValue = {};
		for (var field in _bookableresourcebooking) {
			var a = _bookableresourcebooking[field].a;
			var b = _bookableresourcebooking[field].b;
			var c = _bookableresourcebooking[field].c;
			var d = _bookableresourcebooking[field].d;
			var g = _bookableresourcebooking[field].g;
			var r = _bookableresourcebooking[field].r;
			webApiField(bookableresourcebooking, field, e, a, b, c, d, r, u, g);
		}
		bookableresourcebooking.Entity = u;
		bookableresourcebooking.EntityName = 'bookableresourcebooking';
		bookableresourcebooking.EntityCollectionName = 'bookableresourcebookings';
		bookableresourcebooking['@odata.etag'] = e['@odata.etag'];
		bookableresourcebooking.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		bookableresourcebooking.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return bookableresourcebooking;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.BookableResourceBooking = {
		BookingType : {
			Liquid: 2,
			Solid: 1
		},
		msdyn_BookingMethod : {
			Manual: 690970003,
			Mobile: 690970002,
			Resource_Scheduling_Optimization: 192350000,
			Schedule_Assistant: 690970004,
			Schedule_Board: 690970001,
			System_Agreement_Schedule: 690970005
		},
		msdyn_CrewMemberType : {
			Leader: 192350000,
			Member: 192350001,
			None: 192350002
		},
		msdyn_quickNoteAction : {
			audio: 100000004,
			file: 100000005,
			none: 100000000,
			photo: 100000002,
			text: 100000001,
			video: 100000003
		},
		msdyn_TravelTimeCalculationType : {
			Approximate: 192350003,
			Bing_Maps_with_historical_traffic: 192350001,
			Bing_Maps_without_historical_traffic: 192350000,
			Custom_Map_Provider: 192350002
		},
		msdyn_WorkLocation : {
			Facility: 690970001,
			Location_Agnostic: 690970002,
			Onsite: 690970000
		},
		OwnerIdType : {
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
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