'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.BookableResourceApi = function (e) {
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
		var bookableresource = {
			AccountId: { b: 'accountid', a: '_accountid_value', c: 'accounts', d: 'account' },
			BookableResourceId: { a: 'bookableresourceid' },
			CalendarId: { b: 'calendarid', a: '_calendarid_value', c: 'calendars', d: 'calendar' },
			ContactId: { b: 'contactid', a: '_contactid_value', c: 'contacts', d: 'contact' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_BookingsToDrip: { a: 'msdyn_bookingstodrip' },
			msdyn_CrewStrategy: { a: 'msdyn_crewstrategy' },
			msdyn_DeriveCapacity: { a: 'msdyn_derivecapacity' },
			msdyn_DisplayOnScheduleAssistant: { a: 'msdyn_displayonscheduleassistant' },
			msdyn_DisplayOnScheduleBoard: { a: 'msdyn_displayonscheduleboard' },
			msdyn_EnableAppointments: { a: 'msdyn_enableappointments' },
			msdyn_EnabledForFieldServiceMobile: { a: 'msdyn_enabledforfieldservicemobile' },
			msdyn_EnableDripScheduling: { a: 'msdyn_enabledripscheduling' },
			msdyn_EnableOutlookSchedules: { a: 'msdyn_enableoutlookschedules' },
			msdyn_EndLocation: { a: 'msdyn_endlocation' },
			msdyn_facilityequipmentid: { b: 'msdyn_facilityequipmentid', a: '_msdyn_facilityequipmentid_value', c: 'equipments', d: 'equipment' },
			msdyn_GenericType: { a: 'msdyn_generictype' },
			msdyn_HourlyRate: { a: 'msdyn_hourlyrate' },
			msdyn_hourlyrate_Base: { a: 'msdyn_hourlyrate_base', r: true },
			msdyn_InternalFlags: { a: 'msdyn_internalflags' },
			msdyn_isgenericresourceprojectscoped: { a: 'msdyn_isgenericresourceprojectscoped' },
			msdyn_Latitude: { a: 'msdyn_latitude' },
			msdyn_locationtimestamp_UtcDateAndTime: { a: 'msdyn_locationtimestamp' },
			msdyn_Longitude: { a: 'msdyn_longitude' },
			msdyn_organizationalunit: { b: 'msdyn_organizationalunit', a: '_msdyn_organizationalunit_value', c: 'msdyn_organizationalunits', d: 'msdyn_organizationalunit' },
			msdyn_PoolType: { a: 'msdyn_pooltype', g: true },
			msdyn_PrimaryEMail: { a: 'msdyn_primaryemail' },
			msdyn_StartLocation: { a: 'msdyn_startlocation' },
			msdyn_targetutilization: { a: 'msdyn_targetutilization' },
			msdyn_TimeOffApprovalRequired: { a: 'msdyn_timeoffapprovalrequired' },
			msdyn_Warehouse: { b: 'msdyn_Warehouse', a: '_msdyn_warehouse_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			Name: { a: 'name' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ProcessId: { a: 'processid' },
			ResourceType: { a: 'resourcetype' },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			TimeZone: { a: 'timezone' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UserId: { b: 'userid', a: '_userid_value', c: 'systemusers', d: 'systemuser' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in bookableresource) {
			var a = bookableresource[field].a;
			var b = bookableresource[field].b;
			var c = bookableresource[field].c;
			var d = bookableresource[field].d;
			var g = bookableresource[field].g;
			var r = bookableresource[field].r;
			bookableresource[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		bookableresource.Entity = u;
		bookableresource.EntityName = 'bookableresource';
		bookableresource.EntityCollectionName = 'bookableresources';
		bookableresource['@odata.etag'] = e['@odata.etag'];
		bookableresource.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		bookableresource.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return bookableresource;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
		OptionSet.BookableResource = {
			msdyn_CrewStrategy : {
				Cascade_and_Accept_Cascade_Completely_Not_Recommended: 192350000,
				Crew_Leader_Management: 192350001,
				Crew_Member_Self_Management: 192350002
			},
			msdyn_EnableAppointments : {
				No: 192350000,
				Yes: 192350001
			},
			msdyn_EnableOutlookSchedules : {
				No: 192350000,
				Yes: 192350001
			},
			msdyn_EndLocation : {
				Location_Agnostic: 690970002,
				Organizational_Unit_Address: 690970001,
				Resource_Address: 690970000
			},
			msdyn_GenericType : {
				Service_Center: 690970000
			},
			msdyn_PoolType : {
				Account: 192350000,
				Contact: 192350001,
				Equipment: 192350003,
				Facility: 192350004,
				User: 192350002
			},
			msdyn_StartLocation : {
				Location_Agnostic: 690970002,
				Organizational_Unit_Address: 690970001,
				Resource_Address: 690970000
			},
			ResourceType : {
				Account: 5,
				Contact: 2,
				Crew: 6,
				Equipment: 4,
				Facility: 7,
				Generic: 1,
				Pool: 8,
				User: 3
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