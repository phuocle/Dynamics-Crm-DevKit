'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msevtmgt_HotelRoomReservationApi = function (e) {
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
		var _msevtmgt_hotelroomreservation = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msevtmgt_Attendee: { b: 'msevtmgt_Attendee', a: '_msevtmgt_attendee_value', c: 'msevtmgt_eventregistrations', d: 'msevtmgt_eventregistration' },
			msevtmgt_EventTeamMemberId: { b: 'msevtmgt_EventTeamMemberId', a: '_msevtmgt_eventteammemberid_value', c: 'msevtmgt_eventteammembers', d: 'msevtmgt_eventteammember' },
			msevtmgt_Guesttype: { a: 'msevtmgt_guesttype' },
			msevtmgt_HotelRoomAllocation: { b: 'msevtmgt_HotelRoomAllocation', a: '_msevtmgt_hotelroomallocation_value', c: 'msevtmgt_hotelroomallocations', d: 'msevtmgt_hotelroomallocation' },
			msevtmgt_HotelRoomReservationId: { a: 'msevtmgt_hotelroomreservationid' },
			msevtmgt_Name: { a: 'msevtmgt_name' },
			msevtmgt_RewardsProgramNumber: { a: 'msevtmgt_rewardsprogramnumber' },
			msevtmgt_SpeakerId: { b: 'msevtmgt_SpeakerId', a: '_msevtmgt_speakerid_value', c: 'msevtmgt_speakers', d: 'msevtmgt_speaker' },
			msevtmgt_SpecialRequests: { a: 'msevtmgt_specialrequests' },
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
		var msevtmgt_hotelroomreservation = {};
		msevtmgt_hotelroomreservation.ODataEntity = e;
		msevtmgt_hotelroomreservation.FormattedValue = {};
		for (var field in _msevtmgt_hotelroomreservation) {
			var a = _msevtmgt_hotelroomreservation[field].a;
			var b = _msevtmgt_hotelroomreservation[field].b;
			var c = _msevtmgt_hotelroomreservation[field].c;
			var d = _msevtmgt_hotelroomreservation[field].d;
			var g = _msevtmgt_hotelroomreservation[field].g;
			var r = _msevtmgt_hotelroomreservation[field].r;
			webApiField(msevtmgt_hotelroomreservation, field, e, a, b, c, d, r, u, g);
		}
		msevtmgt_hotelroomreservation.Entity = u;
		msevtmgt_hotelroomreservation.EntityName = 'msevtmgt_hotelroomreservation';
		msevtmgt_hotelroomreservation.EntityCollectionName = 'msevtmgt_hotelroomreservations';
		msevtmgt_hotelroomreservation['@odata.etag'] = e['@odata.etag'];
		msevtmgt_hotelroomreservation.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msevtmgt_hotelroomreservation.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msevtmgt_hotelroomreservation;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_HotelRoomReservation = {
		msevtmgt_Guesttype : {
			Attendee: 100000000,
			Event_team_member: 100000002,
			Speaker: 100000001
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