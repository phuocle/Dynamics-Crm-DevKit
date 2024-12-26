'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_teamsengagementApi = function (e) {
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
		var _msdynmkt_teamsengagement = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_audiencechoice: { a: 'msdynmkt_audiencechoice' },
			msdynmkt_audienceparameters: { a: 'msdynmkt_audienceparameters' },
			msdynmkt_audiencesegment: { b: 'msdynmkt_audiencesegment', a: '_msdynmkt_audiencesegment_value', c: 'msdynmkt_segments', d: 'msdynmkt_segment' },
			msdynmkt_audiencetype: { a: 'msdynmkt_audiencetype' },
			msdynmkt_deliverytime: { a: 'msdynmkt_deliverytime' },
			msdynmkt_Email: { b: 'msdynmkt_Email', a: '_msdynmkt_email_value', c: 'msdynmkt_emails', d: 'msdynmkt_email' },
			msdynmkt_engagementjourney: { b: 'msdynmkt_engagementjourney', a: '_msdynmkt_engagementjourney_value', c: 'msdynmkt_journeies', d: 'msdynmkt_journey' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_sourcetemplateid: { a: 'msdynmkt_sourcetemplateid' },
			msdynmkt_state: { a: 'msdynmkt_state' },
			msdynmkt_teamsengagementId: { a: 'msdynmkt_teamsengagementid' },
			msdynmkt_timingchoice: { a: 'msdynmkt_timingchoice' },
			msdynmkt_timingparameters: { a: 'msdynmkt_timingparameters' },
			msdynmkt_virtualeventid: { a: 'msdynmkt_virtualeventid' },
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
		var msdynmkt_teamsengagement = {};
		msdynmkt_teamsengagement.ODataEntity = e;
		msdynmkt_teamsengagement.FormattedValue = {};
		for (var field in _msdynmkt_teamsengagement) {
			var a = _msdynmkt_teamsengagement[field].a;
			var b = _msdynmkt_teamsengagement[field].b;
			var c = _msdynmkt_teamsengagement[field].c;
			var d = _msdynmkt_teamsengagement[field].d;
			var g = _msdynmkt_teamsengagement[field].g;
			var r = _msdynmkt_teamsengagement[field].r;
			webApiField(msdynmkt_teamsengagement, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_teamsengagement.Entity = u;
		msdynmkt_teamsengagement.EntityName = 'msdynmkt_teamsengagement';
		msdynmkt_teamsengagement.EntityCollectionName = 'msdynmkt_teamsengagements';
		msdynmkt_teamsengagement['@odata.etag'] = e['@odata.etag'];
		msdynmkt_teamsengagement.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_teamsengagement.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_teamsengagement;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_teamsengagement = {
		msdynmkt_state : {
			Audience: 534120002,
			Email: 534120001,
			Review: 534120004,
			Template: 534120000,
			Time: 534120003
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