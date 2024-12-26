'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msevtmgt_HotelRoomAllocationApi = function (e) {
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
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
					}
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
		var _msevtmgt_hotelroomallocation = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msevtmgt_AdditionalDetails: { a: 'msevtmgt_additionaldetails' },
			msevtmgt_Event: { b: 'msevtmgt_Event', a: '_msevtmgt_event_value', c: 'msevtmgt_events', d: 'msevtmgt_event' },
			msevtmgt_HotelProperty: { b: 'msevtmgt_HotelProperty', a: '_msevtmgt_hotelproperty_value', c: 'msevtmgt_hotels', d: 'msevtmgt_hotel' },
			msevtmgt_HotelRoomAllocationId: { a: 'msevtmgt_hotelroomallocationid' },
			msevtmgt_Name: { a: 'msevtmgt_name' },
			msevtmgt_NumberOfRoomsAllocated: { a: 'msevtmgt_numberofroomsallocated' },
			msevtmgt_NumberOfRoomsLeft: { a: 'msevtmgt_numberofroomsleft', r: true },
			msevtmgt_NumberofRoomsReserved: { a: 'msevtmgt_numberofroomsreserved', r: true },
			msevtmgt_NumberofRoomsReserved_Date_UtcDateAndTime: { a: 'msevtmgt_numberofroomsreserved_date', r: true },
			msevtmgt_NumberofRoomsReserved_State: { a: 'msevtmgt_numberofroomsreserved_state', r: true },
			msevtmgt_PricePerRoom: { a: 'msevtmgt_priceperroom' },
			msevtmgt_priceperroom_Base: { a: 'msevtmgt_priceperroom_base', r: true },
			msevtmgt_PrimaryContact: { b: 'msevtmgt_PrimaryContact', a: '_msevtmgt_primarycontact_value', c: 'contacts', d: 'contact' },
			msevtmgt_RoomType: { a: 'msevtmgt_roomtype' },
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
		var msevtmgt_hotelroomallocation = {};
		msevtmgt_hotelroomallocation.ODataEntity = e;
		msevtmgt_hotelroomallocation.FormattedValue = {};
		for (var field in _msevtmgt_hotelroomallocation) {
			var a = _msevtmgt_hotelroomallocation[field].a;
			var b = _msevtmgt_hotelroomallocation[field].b;
			var c = _msevtmgt_hotelroomallocation[field].c;
			var d = _msevtmgt_hotelroomallocation[field].d;
			var g = _msevtmgt_hotelroomallocation[field].g;
			var r = _msevtmgt_hotelroomallocation[field].r;
			webApiField(msevtmgt_hotelroomallocation, field, e, a, b, c, d, r, u, g);
		}
		msevtmgt_hotelroomallocation.Entity = u;
		msevtmgt_hotelroomallocation.EntityName = 'msevtmgt_hotelroomallocation';
		msevtmgt_hotelroomallocation.EntityCollectionName = 'msevtmgt_hotelroomallocations';
		msevtmgt_hotelroomallocation['@odata.etag'] = e['@odata.etag'];
		msevtmgt_hotelroomallocation.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msevtmgt_hotelroomallocation.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msevtmgt_hotelroomallocation;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_HotelRoomAllocation = {
		msevtmgt_RoomType : {
			Double_room: 100000001,
			Executive_suite: 100000003,
			Junior_suite: 100000002,
			Luxury_suite: 100000004,
			Single_room: 100000000
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