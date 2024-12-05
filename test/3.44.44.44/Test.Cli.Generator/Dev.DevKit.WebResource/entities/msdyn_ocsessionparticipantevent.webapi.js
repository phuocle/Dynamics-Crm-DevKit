﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ocsessionparticipanteventApi = function (e) {
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
		var _msdyn_ocsessionparticipantevent = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_eventduration: { a: 'msdyn_eventduration', r: true },
			msdyn_eventendtime_UtcDateAndTime: { a: 'msdyn_eventendtime' },
			msdyn_eventreason: { a: 'msdyn_eventreason' },
			msdyn_eventstarttime_UtcDateAndTime: { a: 'msdyn_eventstarttime' },
			msdyn_eventtype: { a: 'msdyn_eventtype' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_ocsessionparticipanteventId: { a: 'msdyn_ocsessionparticipanteventid' },
			msdyn_sessionid: { b: 'msdyn_sessionid', a: '_msdyn_sessionid_value', c: 'msdyn_ocsessions', d: 'msdyn_ocsession' },
			msdyn_sessionparticipantid: { b: 'msdyn_sessionparticipantid', a: '_msdyn_sessionparticipantid_value', c: 'msdyn_sessionparticipants', d: 'msdyn_sessionparticipant' },
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
		var msdyn_ocsessionparticipantevent = {};
		msdyn_ocsessionparticipantevent.ODataEntity = e;
		msdyn_ocsessionparticipantevent.FormattedValue = {};
		for (var field in _msdyn_ocsessionparticipantevent) {
			var a = _msdyn_ocsessionparticipantevent[field].a;
			var b = _msdyn_ocsessionparticipantevent[field].b;
			var c = _msdyn_ocsessionparticipantevent[field].c;
			var d = _msdyn_ocsessionparticipantevent[field].d;
			var g = _msdyn_ocsessionparticipantevent[field].g;
			var r = _msdyn_ocsessionparticipantevent[field].r;
			webApiField(msdyn_ocsessionparticipantevent, field, e, a, b, c, d, r, u, g);
		}
		msdyn_ocsessionparticipantevent.Entity = u;
		msdyn_ocsessionparticipantevent.EntityName = 'msdyn_ocsessionparticipantevent';
		msdyn_ocsessionparticipantevent.EntityCollectionName = 'msdyn_ocsessionparticipantevents';
		msdyn_ocsessionparticipantevent['@odata.etag'] = e['@odata.etag'];
		msdyn_ocsessionparticipantevent.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_ocsessionparticipantevent.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_ocsessionparticipantevent;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocsessionparticipantevent = {
		msdyn_eventreason : {
			Agent_Initiated: 192350000,
			Session_Transfer_Accepted: 192350002,
			Session_Transfer_In_Transit: 192350001
		},
		msdyn_eventtype : {
			Hold: 192350001,
			None: 192350000,
			Transcription: 192350002
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