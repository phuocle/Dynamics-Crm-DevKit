'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_botsessionApi = function (e) {
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
		var _msdyn_botsession = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_botid: { b: 'msdyn_botid', a: '_msdyn_botid_value', c: 'bots', d: 'bot' },
			msdyn_botsessionId: { a: 'msdyn_botsessionid' },
			msdyn_csatscore: { a: 'msdyn_csatscore' },
			msdyn_endedon_TimezoneDateAndTime: { a: 'msdyn_endedon' },
			msdyn_isengaged: { a: 'msdyn_isengaged' },
			msdyn_Name: { a: 'msdyn_name' },
			msdyn_outcome: { a: 'msdyn_outcome' },
			msdyn_outcomereason: { a: 'msdyn_outcomereason' },
			msdyn_sessionid: { b: 'msdyn_sessionid', a: '_msdyn_sessionid_value', c: 'msdyn_ocsessions', d: 'msdyn_ocsession' },
			msdyn_sourcesessionid: { a: 'msdyn_sourcesessionid' },
			msdyn_startedon_TimezoneDateAndTime: { a: 'msdyn_startedon' },
			msdyn_topicid: { a: 'msdyn_topicid' },
			msdyn_topicname: { a: 'msdyn_topicname' },
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
		var msdyn_botsession = {};
		msdyn_botsession.ODataEntity = e;
		msdyn_botsession.FormattedValue = {};
		for (var field in _msdyn_botsession) {
			var a = _msdyn_botsession[field].a;
			var b = _msdyn_botsession[field].b;
			var c = _msdyn_botsession[field].c;
			var d = _msdyn_botsession[field].d;
			var g = _msdyn_botsession[field].g;
			var r = _msdyn_botsession[field].r;
			webApiField(msdyn_botsession, field, e, a, b, c, d, r, u, g);
		}
		msdyn_botsession.Entity = u;
		msdyn_botsession.EntityName = 'msdyn_botsession';
		msdyn_botsession.EntityCollectionName = 'msdyn_botsessions';
		msdyn_botsession['@odata.etag'] = e['@odata.etag'];
		msdyn_botsession.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_botsession.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_botsession;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_botsession = {
		msdyn_outcome : {
			abandoned: 419550003,
			escalated: 419550002,
			none: 419550000,
			resolved: 419550001
		},
		msdyn_outcomereason : {
			agentTransferConfiguredByAuthor: 419560007,
			agentTransferFromQuestionMaxAttempts: 419560008,
			agentTransferRequestedByUser: 419560005,
			agentTransferWithoutError: 419560004,
			noError: 419560000,
			resolved: 419560006,
			systemError: 419560002,
			userError: 419560001,
			userExit: 419560003
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