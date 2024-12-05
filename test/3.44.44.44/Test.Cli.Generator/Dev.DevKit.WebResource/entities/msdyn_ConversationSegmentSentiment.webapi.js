'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ConversationSegmentSentimentApi = function (e) {
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
		var _msdyn_conversationsegmentsentiment = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_Confidence: { a: 'msdyn_confidence' },
			msdyn_ConversationParticipantInsights: { b: 'msdyn_ConversationParticipantInsights', a: '_msdyn_conversationparticipantinsights_value', c: 'msdyn_conversationparticipantinsightses', d: 'msdyn_conversationparticipantinsights' },
			msdyn_ConversationSegmentSentimentId: { a: 'msdyn_conversationsegmentsentimentid' },
			msdyn_DurationInMS: { a: 'msdyn_durationinms' },
			msdyn_FragmentEnd: { a: 'msdyn_fragmentend' },
			msdyn_FragmentStart: { a: 'msdyn_fragmentstart' },
			msdyn_Name: { a: 'msdyn_name' },
			msdyn_OffsetInMS: { a: 'msdyn_offsetinms' },
			msdyn_SentimentTarget: { b: 'msdyn_SentimentTarget', a: '_msdyn_sentimenttarget_value', c: 'msdyn_conversationsignals', d: 'msdyn_conversationsignal' },
			msdyn_SentimentType: { a: 'msdyn_sentimenttype' },
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
		var msdyn_conversationsegmentsentiment = {};
		msdyn_conversationsegmentsentiment.ODataEntity = e;
		msdyn_conversationsegmentsentiment.FormattedValue = {};
		for (var field in _msdyn_conversationsegmentsentiment) {
			var a = _msdyn_conversationsegmentsentiment[field].a;
			var b = _msdyn_conversationsegmentsentiment[field].b;
			var c = _msdyn_conversationsegmentsentiment[field].c;
			var d = _msdyn_conversationsegmentsentiment[field].d;
			var g = _msdyn_conversationsegmentsentiment[field].g;
			var r = _msdyn_conversationsegmentsentiment[field].r;
			webApiField(msdyn_conversationsegmentsentiment, field, e, a, b, c, d, r, u, g);
		}
		msdyn_conversationsegmentsentiment.Entity = u;
		msdyn_conversationsegmentsentiment.EntityName = 'msdyn_conversationsegmentsentiment';
		msdyn_conversationsegmentsentiment.EntityCollectionName = 'msdyn_conversationsegmentsentiments';
		msdyn_conversationsegmentsentiment['@odata.etag'] = e['@odata.etag'];
		msdyn_conversationsegmentsentiment.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_conversationsegmentsentiment.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_conversationsegmentsentiment;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ConversationSegmentSentiment = {
		msdyn_SentimentTargetIdType : {
		},
		msdyn_SentimentType : {
			Negative: 1,
			Neutral: 2,
			Positive: 0
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