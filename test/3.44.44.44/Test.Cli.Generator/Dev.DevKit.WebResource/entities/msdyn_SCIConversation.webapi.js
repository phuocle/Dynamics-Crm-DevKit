'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_SCIConversationApi = function (e) {
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
		var _msdyn_sciconversation = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_ChatId: { a: 'msdyn_chatid' },
			msdyn_ClientFileName: { a: 'msdyn_clientfilename' },
			msdyn_CommunicationType: { a: 'msdyn_communicationtype' },
			msdyn_ConsentModeId: { a: 'msdyn_consentmodeid' },
			msdyn_ConversationAggregatedInsights: { b: 'msdyn_ConversationAggregatedInsights', a: '_msdyn_conversationaggregatedinsights_value', c: 'msdyn_conversationaggregatedinsightses', d: 'msdyn_conversationaggregatedinsights' },
			msdyn_ConversationId: { a: 'msdyn_conversationid' },
			msdyn_ConversationScope: { a: 'msdyn_conversationscope' },
			msdyn_ConversationStartTime_UtcDateAndTime: { a: 'msdyn_conversationstarttime' },
			msdyn_Direction: { a: 'msdyn_direction' },
			msdyn_Name: { a: 'msdyn_name' },
			msdyn_OCRecording: { b: 'msdyn_OCRecording', a: '_msdyn_ocrecording_value', c: 'msdyn_ocrecordings', d: 'msdyn_ocrecording' },
			msdyn_relatedactivity_appointment: { b: 'msdyn_relatedactivity_appointment', a: '_msdyn_relatedactivity_value', c: 'appointments', d: 'appointment' },
			msdyn_relatedactivity_phonecall: { b: 'msdyn_relatedactivity_phonecall', a: '_msdyn_relatedactivity_value', c: 'phonecalls', d: 'phonecall' },
			msdyn_SCIConversationId: { a: 'msdyn_sciconversationid' },
			msdyn_Transcript: { b: 'msdyn_Transcript', a: '_msdyn_transcript_value', c: 'msdyn_transcripts', d: 'msdyn_transcript' },
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
		var msdyn_sciconversation = {};
		msdyn_sciconversation.ODataEntity = e;
		msdyn_sciconversation.FormattedValue = {};
		for (var field in _msdyn_sciconversation) {
			var a = _msdyn_sciconversation[field].a;
			var b = _msdyn_sciconversation[field].b;
			var c = _msdyn_sciconversation[field].c;
			var d = _msdyn_sciconversation[field].d;
			var g = _msdyn_sciconversation[field].g;
			var r = _msdyn_sciconversation[field].r;
			webApiField(msdyn_sciconversation, field, e, a, b, c, d, r, u, g);
		}
		msdyn_sciconversation.Entity = u;
		msdyn_sciconversation.EntityName = 'msdyn_sciconversation';
		msdyn_sciconversation.EntityCollectionName = 'msdyn_sciconversations';
		msdyn_sciconversation['@odata.etag'] = e['@odata.etag'];
		msdyn_sciconversation.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_sciconversation.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_sciconversation;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_SCIConversation = {
		msdyn_CommunicationType : {
			Meeting: 1,
			Phonecall: 0
		},
		msdyn_ConsentModeId : {
			AgentsOnly: 2,
			All: 1,
			CurrentUserOnly: 3
		},
		msdyn_ConversationScope : {
			External: 1,
			Internal: 0
		},
		msdyn_Direction : {
			Incoming: 1,
			Outgoing: 0
		},
		msdyn_RelatedActivityIdType : {
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