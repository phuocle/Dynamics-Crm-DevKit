'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_surveyconfigApi = function (e) {
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
		var _msdyn_surveyconfig = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_agentsurveyid: { b: 'msdyn_agentsurveyid', a: '_msdyn_agentsurveyid_value', c: 'msdyn_customerfeedbacksurveies', d: 'msdyn_customerfeedbacksurvey' },
			msdyn_botsurveyid: { b: 'msdyn_botsurveyid', a: '_msdyn_botsurveyid_value', c: 'msdyn_customerfeedbacksurveies', d: 'msdyn_customerfeedbacksurvey' },
			msdyn_surveyconfigId: { a: 'msdyn_surveyconfigid' },
			msdyn_surveyconfigname: { a: 'msdyn_surveyconfigname' },
			msdyn_targetchannelid_msdyn_livechatconfig: { b: 'msdyn_targetchannelid_msdyn_livechatconfig', a: '_msdyn_targetchannelid_value', c: 'msdyn_livechatconfigs', d: 'msdyn_livechatconfig' },
			msdyn_targetchannelid_msdyn_ocfbpage: { b: 'msdyn_targetchannelid_msdyn_ocfbpage', a: '_msdyn_targetchannelid_value', c: 'msdyn_ocfbpages', d: 'msdyn_ocfbpage' },
			msdyn_targetchannelid_msdyn_oclinechannelconfig: { b: 'msdyn_targetchannelid_msdyn_oclinechannelconfig', a: '_msdyn_targetchannelid_value', c: 'msdyn_oclinechannelconfigs', d: 'msdyn_oclinechannelconfig' },
			msdyn_targetchannelid_msdyn_ocsmschannelsetting: { b: 'msdyn_targetchannelid_msdyn_ocsmschannelsetting', a: '_msdyn_targetchannelid_value', c: 'msdyn_ocsmschannelsettings', d: 'msdyn_ocsmschannelsetting' },
			msdyn_targetchannelid_msdyn_octeamschannelconfig: { b: 'msdyn_targetchannelid_msdyn_octeamschannelconfig', a: '_msdyn_targetchannelid_value', c: 'msdyn_octeamschannelconfigs', d: 'msdyn_octeamschannelconfig' },
			msdyn_targetchannelid_msdyn_ocvoicechannelsetting: { b: 'msdyn_targetchannelid_msdyn_ocvoicechannelsetting', a: '_msdyn_targetchannelid_value', c: 'msdyn_ocvoicechannelsettings', d: 'msdyn_ocvoicechannelsetting' },
			msdyn_targetchannelid_msdyn_ocwhatsappchannelnumber: { b: 'msdyn_targetchannelid_msdyn_ocwhatsappchannelnumber', a: '_msdyn_targetchannelid_value', c: 'msdyn_ocwhatsappchannelnumbers', d: 'msdyn_ocwhatsappchannelnumber' },
			msdyn_targetchannellogicalname: { a: 'msdyn_targetchannellogicalname' },
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
		var msdyn_surveyconfig = {};
		msdyn_surveyconfig.ODataEntity = e;
		msdyn_surveyconfig.FormattedValue = {};
		for (var field in _msdyn_surveyconfig) {
			var a = _msdyn_surveyconfig[field].a;
			var b = _msdyn_surveyconfig[field].b;
			var c = _msdyn_surveyconfig[field].c;
			var d = _msdyn_surveyconfig[field].d;
			var g = _msdyn_surveyconfig[field].g;
			var r = _msdyn_surveyconfig[field].r;
			webApiField(msdyn_surveyconfig, field, e, a, b, c, d, r, u, g);
		}
		msdyn_surveyconfig.Entity = u;
		msdyn_surveyconfig.EntityName = 'msdyn_surveyconfig';
		msdyn_surveyconfig.EntityCollectionName = 'msdyn_surveyconfigs';
		msdyn_surveyconfig['@odata.etag'] = e['@odata.etag'];
		msdyn_surveyconfig.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_surveyconfig.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_surveyconfig;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_surveyconfig = {
		msdyn_targetchannelidIdType : {
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