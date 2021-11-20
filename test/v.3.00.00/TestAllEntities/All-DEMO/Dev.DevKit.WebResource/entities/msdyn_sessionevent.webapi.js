'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_sessioneventApi = function (e) {
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
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
		OptionSet.msdyn_sessionevent = {
			msdyn_eventinfo : {
				Default: 192350000
			},
			msdyn_eventreason : {
				Accepted: 192350019,
				AgentDisconnected: 192350010,
				AgentEndConversation: 192350030,
				AgentInviteRejected: 192350008,
				AgentInviteTimeout: 192350009,
				AgentTimeout: 192350011,
				AgentTransfer: 192350001,
				AgentTransferred: 192350012,
				AssignToAgentBySupervisor: 192350026,
				AssignToQueueBySupervisor: 192350027,
				AutoAccept: 192350006,
				AutoAccepted: 192350020,
				BotEndConversation: 192350025,
				BotTransferSession: 192350024,
				Closed: 192350007,
				CustomerDisconnect: 192350014,
				CustomerEndConversation: 192350029,
				CustomerRejoin: 192350028,
				CustomerTimeout: 192350013,
				Default: 192350000,
				Disconnect: 192350021,
				End: 192350023,
				Escalated: 192350016,
				PostchatSurvey: 192350004,
				PreChatSurvey: 192350003,
				QueueTransfer: 192350002,
				Rejected: 192350017,
				SessionTimeout: 192350015,
				SupervisorTransferToAgent: 192350031,
				TimedOut: 192350018,
				Timeout: 192350022,
				UserAccept: 192350005
			},
			msdyn_eventtype : {
				AgentAccepted: 192350003,
				AgentAssigned: 192350002,
				AgentDisconnected: 192350014,
				AgentEndConversation: 192350026,
				AgentInviteRejected: 192350004,
				AgentInviteTimeout: 192350007,
				AgentTimeout: 192350015,
				AssignToAgentBySupervisor: 192350023,
				AssignToQueueBySupervisor: 192350024,
				BotEndConversation: 192350022,
				BotTransferSession: 192350021,
				CustomerDisconnected: 192350017,
				CustomerEndConversation: 192350025,
				CustomerTimeout: 192350016,
				Default: 192350000,
				Escalated: 192350008,
				ParticipantEnd: 192350013,
				ParticipantInviteAccepted: 192350011,
				ParticipantInvited: 192350009,
				ParticipantInviteRejected: 192350010,
				ParticipantInviteTimeout: 192350012,
				ParticipantLeft: 192350020,
				QueueAssigned: 192350001,
				SessionCreated: 192350006,
				SessionEnd: 192350005,
				TransferedToAgent: 192350018,
				TransferedToQueue: 192350019
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