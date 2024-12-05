'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msevtmgt_CheckInApi = function (e) {
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
		var _msevtmgt_checkin = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_attendancepercentage: { a: 'msdynmkt_attendancepercentage' },
			msevtmgt_AudienceType: { a: 'msevtmgt_audiencetype' },
			msevtmgt_CheckInId: { a: 'msevtmgt_checkinid' },
			msevtmgt_Checkintime_UtcDateAndTime: { a: 'msevtmgt_checkintime' },
			msevtmgt_CheckInType: { a: 'msevtmgt_checkintype' },
			msevtmgt_CheckOutTime_UtcDateAndTime: { a: 'msevtmgt_checkouttime' },
			msevtmgt_Contact: { b: 'msevtmgt_Contact', a: '_msevtmgt_contact_value', c: 'contacts', d: 'contact' },
			msevtmgt_Event: { b: 'msevtmgt_Event', a: '_msevtmgt_event_value', c: 'msevtmgt_events', d: 'msevtmgt_event' },
			msevtmgt_Name: { a: 'msevtmgt_name' },
			msevtmgt_NumberOfQuestionsAsked: { a: 'msevtmgt_numberofquestionsasked' },
			msevtmgt_PurchasedPassesId: { b: 'msevtmgt_PurchasedPassesId', a: '_msevtmgt_purchasedpassesid_value', c: 'msevtmgt_attendeepasses', d: 'msevtmgt_attendeepass' },
			msevtmgt_RegistrationId: { b: 'msevtmgt_RegistrationId', a: '_msevtmgt_registrationid_value', c: 'msevtmgt_eventregistrations', d: 'msevtmgt_eventregistration' },
			msevtmgt_registrationidfromqr: { a: 'msevtmgt_registrationidfromqr' },
			msevtmgt_SessionAttended: { b: 'msevtmgt_SessionAttended', a: '_msevtmgt_sessionattended_value', c: 'msevtmgt_sessions', d: 'msevtmgt_session' },
			msevtmgt_SessionCode: { a: 'msevtmgt_sessioncode' },
			msevtmgt_SessionRegistration: { b: 'msevtmgt_SessionRegistration', a: '_msevtmgt_sessionregistration_value', c: 'msevtmgt_sessionregistrations', d: 'msevtmgt_sessionregistration' },
			msevtmgt_SessionType: { a: 'msevtmgt_sessiontype' },
			msevtmgt_TransactionCurrencyId: { b: 'msevtmgt_TransactionCurrencyId', a: '_msevtmgt_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			msevtmgt_ViewingDurationInMins: { a: 'msevtmgt_viewingdurationinmins' },
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
		var msevtmgt_checkin = {};
		msevtmgt_checkin.ODataEntity = e;
		msevtmgt_checkin.FormattedValue = {};
		for (var field in _msevtmgt_checkin) {
			var a = _msevtmgt_checkin[field].a;
			var b = _msevtmgt_checkin[field].b;
			var c = _msevtmgt_checkin[field].c;
			var d = _msevtmgt_checkin[field].d;
			var g = _msevtmgt_checkin[field].g;
			var r = _msevtmgt_checkin[field].r;
			webApiField(msevtmgt_checkin, field, e, a, b, c, d, r, u, g);
		}
		msevtmgt_checkin.Entity = u;
		msevtmgt_checkin.EntityName = 'msevtmgt_checkin';
		msevtmgt_checkin.EntityCollectionName = 'msevtmgt_checkins';
		msevtmgt_checkin['@odata.etag'] = e['@odata.etag'];
		msevtmgt_checkin.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msevtmgt_checkin.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msevtmgt_checkin;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_CheckIn = {
		msevtmgt_AudienceType : {
			Advanced: 100000003,
			General: 100000000,
			Intermediate: 100000002,
			Introductory: 100000001
		},
		msevtmgt_CheckInType : {
			Event_check_in: 100000001,
			Session_check_in: 100000000
		},
		msevtmgt_SessionType : {
			Brainstorming: 100000003,
			Breakout: 100000004,
			General: 100000002,
			Hands_onlab: 100000000,
			Keynote: 100000001,
			Training: 100000005
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