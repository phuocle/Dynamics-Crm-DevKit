'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_sessionparticipantApi = function (e) {
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
		var _msdyn_sessionparticipant = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_activechattime: { a: 'msdyn_activechattime' },
			msdyn_activedirectoryuserid: { a: 'msdyn_activedirectoryuserid' },
			msdyn_activetime: { a: 'msdyn_activetime' },
			msdyn_activewrapuptime: { a: 'msdyn_activewrapuptime' },
			msdyn_addedon_UtcDateOnly: { a: 'msdyn_addedon' },
			msdyn_agentid: { b: 'msdyn_agentid', a: '_msdyn_agentid_value', c: 'systemusers', d: 'systemuser' },
			msdyn_assignreason: { a: 'msdyn_assignreason' },
			msdyn_cdsqueueid: { b: 'msdyn_cdsqueueid', a: '_msdyn_cdsqueueid_value', c: 'queues', d: 'queue' },
			msdyn_consultmode: { a: 'msdyn_consultmode' },
			msdyn_conversationaccess: { a: 'msdyn_conversationaccess' },
			msdyn_externalparticipantchannel: { a: 'msdyn_externalparticipantchannel' },
			msdyn_externalparticipantchanneltype: { a: 'msdyn_externalparticipantchanneltype' },
			msdyn_holdtime: { a: 'msdyn_holdtime' },
			msdyn_idletime: { a: 'msdyn_idletime' },
			msdyn_inactivetime: { a: 'msdyn_inactivetime' },
			msdyn_joinedon_UtcDateAndTime: { a: 'msdyn_joinedon' },
			msdyn_lastupdatedon_UtcDateAndTime: { a: 'msdyn_lastupdatedon' },
			msdyn_lefton_UtcDateAndTime: { a: 'msdyn_lefton' },
			msdyn_leftonreason: { a: 'msdyn_leftonreason' },
			msdyn_mode: { a: 'msdyn_mode' },
			msdyn_modifiedon_UtcDateOnly: { a: 'msdyn_modifiedon' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_omnichannelsession: { b: 'msdyn_omnichannelsession', a: '_msdyn_omnichannelsession_value', c: 'msdyn_ocsessions', d: 'msdyn_ocsession' },
			msdyn_sessionparticipantId: { a: 'msdyn_sessionparticipantid' },
			msdyn_startactivetime_UtcDateAndTime: { a: 'msdyn_startactivetime' },
			msdyn_startactivewrapuptime_UtcDateAndTime: { a: 'msdyn_startactivewrapuptime' },
			msdyn_startholdtime_UtcDateAndTime: { a: 'msdyn_startholdtime' },
			msdyn_startidletime_UtcDateAndTime: { a: 'msdyn_startidletime' },
			msdyn_startinactivetime_UtcDateAndTime: { a: 'msdyn_startinactivetime' },
			msdyn_starttalktime_UtcDateAndTime: { a: 'msdyn_starttalktime' },
			msdyn_talktime: { a: 'msdyn_talktime' },
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
		var msdyn_sessionparticipant = {};
		msdyn_sessionparticipant.ODataEntity = e;
		msdyn_sessionparticipant.FormattedValue = {};
		for (var field in _msdyn_sessionparticipant) {
			var a = _msdyn_sessionparticipant[field].a;
			var b = _msdyn_sessionparticipant[field].b;
			var c = _msdyn_sessionparticipant[field].c;
			var d = _msdyn_sessionparticipant[field].d;
			var g = _msdyn_sessionparticipant[field].g;
			var r = _msdyn_sessionparticipant[field].r;
			webApiField(msdyn_sessionparticipant, field, e, a, b, c, d, r, u, g);
		}
		msdyn_sessionparticipant.Entity = u;
		msdyn_sessionparticipant.EntityName = 'msdyn_sessionparticipant';
		msdyn_sessionparticipant.EntityCollectionName = 'msdyn_sessionparticipants';
		msdyn_sessionparticipant['@odata.etag'] = e['@odata.etag'];
		msdyn_sessionparticipant.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_sessionparticipant.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_sessionparticipant;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_sessionparticipant = {
		msdyn_consultmode : {
			Chat: 0,
			Chat_And_Voice: 1,
			Voice: 2
		},
		msdyn_conversationaccess : {
			Default: 0,
			Private: 2,
			Public: 1
		},
		msdyn_externalparticipantchanneltype : {
			Microsoft_Teams: 426120001,
			Phone_Number: 426120000
		},
		msdyn_mode : {
			Consult: 192350003,
			Monitor: 192350004,
			Preview: 192350005,
			Primary: 192350002
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