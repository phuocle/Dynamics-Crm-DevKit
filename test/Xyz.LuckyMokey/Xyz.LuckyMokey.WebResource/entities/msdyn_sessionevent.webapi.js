'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.msdyn_sessioneventApi = function (e) {
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
		var msdyn_sessionevent = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_eventinfo: { a: 'msdyn_eventinfo' },
			msdyn_eventreason: { a: 'msdyn_eventreason' },
			msdyn_eventtime_UtcDateOnly: { a: 'msdyn_eventtime' },
			msdyn_eventtype: { a: 'msdyn_eventtype' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_omnichannelsession: { b: 'msdyn_omnichannelsession', a: '_msdyn_omnichannelsession_value', c: 'msdyn_ocsessions', d: 'msdyn_ocsession' },
			msdyn_sessioneventId: { a: 'msdyn_sessioneventid' },
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
		for (var field in msdyn_sessionevent) {
			var a = msdyn_sessionevent[field].a;
			var b = msdyn_sessionevent[field].b;
			var c = msdyn_sessionevent[field].c;
			var d = msdyn_sessionevent[field].d;
			var g = msdyn_sessionevent[field].g;
			var r = msdyn_sessionevent[field].r;
			msdyn_sessionevent[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_sessionevent.Entity = u;
		msdyn_sessionevent.EntityName = 'msdyn_sessionevent';
		msdyn_sessionevent.EntityCollectionName = 'msdyn_sessionevents';
		msdyn_sessionevent['@odata.etag'] = e['@odata.etag'];
		msdyn_sessionevent.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_sessionevent.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_sessionevent;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_sessionevent = {
		msdyn_eventinfo : {
			Default: 192350000
		},
		msdyn_eventreason : {
			AgentTransfer: 192350001,
			QueueTransfer: 192350002,
			PreChatSurvey: 192350003,
			PostchatSurvey: 192350004,
			UserAccept: 192350005,
			AutoAccept: 192350006,
			Closed: 192350007,
			AgentInviteRejected: 192350008,
			AgentInviteTimeout: 192350009,
			AgentDisconnected: 192350010,
			AgentTimeout: 192350011,
			AgentTransferred: 192350012,
			CustomerTimeout: 192350013,
			CustomerDisconnect: 192350014,
			SessionTimeout: 192350015,
			Escalated: 192350016,
			Rejected: 192350017,
			TimedOut: 192350018,
			Accepted: 192350019,
			AutoAccepted: 192350020,
			Item: 192350021,
			Disconnect: 192350022,
			Timeout: 192350023,
			End: 192350024,
			Default: 192350000
		},
		msdyn_eventtype : {
			Default: 192350000,
			QueueAssigned: 192350001,
			AgentAssigned: 192350002,
			AgentAccepted: 192350003,
			AgentInviteRejected: 192350004,
			SessionEnd: 192350005,
			SessionCreated: 192350006,
			AgentInviteTimeout: 192350007,
			Escalated: 192350008,
			ParticipantInvited: 192350009,
			ParticipantInviteRejected: 192350010,
			ParticipantInviteAccepted: 192350011,
			ParticipantInviteTimeout: 192350012,
			ParticipantEnd: 192350013,
			AgentDisconnected: 192350014,
			AgentTimeout: 192350015,
			CustomerTimeout: 192350016,
			CustomerDisconnected: 192350017,
			TransferedToAgent: 192350018,
			TransferedToQueue: 192350019,
			ParticipantLeft: 192350020
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