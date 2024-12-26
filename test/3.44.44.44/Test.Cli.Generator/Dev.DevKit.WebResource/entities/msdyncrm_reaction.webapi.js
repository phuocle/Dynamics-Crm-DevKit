'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_reactionApi = function (e) {
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
		var _msdyncrm_reaction = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_attachment01: { a: 'msdyncrm_attachment01' },
			msdyncrm_attachment02: { a: 'msdyncrm_attachment02' },
			msdyncrm_attachment03: { a: 'msdyncrm_attachment03' },
			msdyncrm_attachment04: { a: 'msdyncrm_attachment04' },
			msdyncrm_createdonnetwork_UtcDateAndTime: { a: 'msdyncrm_createdonnetwork' },
			msdyncrm_likecount: { a: 'msdyncrm_likecount' },
			msdyncrm_liketype: { a: 'msdyncrm_liketype' },
			msdyncrm_longmessage: { a: 'msdyncrm_longmessage' },
			msdyncrm_message: { a: 'msdyncrm_message' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_networkid: { a: 'msdyncrm_networkid' },
			msdyncrm_parentid: { a: 'msdyncrm_parentid' },
			msdyncrm_parenttype: { a: 'msdyncrm_parenttype' },
			msdyncrm_phrases: { a: 'msdyncrm_phrases' },
			msdyncrm_reactionId: { a: 'msdyncrm_reactionid' },
			msdyncrm_reactionurl: { a: 'msdyncrm_reactionurl' },
			msdyncrm_sentiment: { a: 'msdyncrm_sentiment' },
			msdyncrm_sentimentscore: { a: 'msdyncrm_sentimentscore' },
			msdyncrm_type: { a: 'msdyncrm_type' },
			msdyncrm_userid: { a: 'msdyncrm_userid' },
			msdyncrm_username: { a: 'msdyncrm_username' },
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
		var msdyncrm_reaction = {};
		msdyncrm_reaction.ODataEntity = e;
		msdyncrm_reaction.FormattedValue = {};
		for (var field in _msdyncrm_reaction) {
			var a = _msdyncrm_reaction[field].a;
			var b = _msdyncrm_reaction[field].b;
			var c = _msdyncrm_reaction[field].c;
			var d = _msdyncrm_reaction[field].d;
			var g = _msdyncrm_reaction[field].g;
			var r = _msdyncrm_reaction[field].r;
			webApiField(msdyncrm_reaction, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_reaction.Entity = u;
		msdyncrm_reaction.EntityName = 'msdyncrm_reaction';
		msdyncrm_reaction.EntityCollectionName = 'msdyncrm_reactions';
		msdyncrm_reaction['@odata.etag'] = e['@odata.etag'];
		msdyncrm_reaction.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_reaction.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_reaction;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_reaction = {
		msdyncrm_liketype : {
			Anger: 948320005,
			Care: 948320006,
			Haha: 948320001,
			Like: 948320000,
			Love: 948320002,
			Sad: 948320004,
			Wow: 948320003
		},
		msdyncrm_type : {
			Comment: 948320001,
			Like: 948320000
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