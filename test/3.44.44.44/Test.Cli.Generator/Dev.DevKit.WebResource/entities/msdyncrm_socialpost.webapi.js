'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_socialpostApi = function (e) {
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
		var _msdyncrm_socialpost = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_accountlink: { a: 'msdyncrm_accountlink' },
			msdyncrm_Attachemnts: { b: 'msdyncrm_Attachemnts', a: '_msdyncrm_attachemnts_value', c: 'msdyncrm_socialposts', d: 'msdyncrm_socialpost' },
			msdyncrm_attachmentname: { a: 'msdyncrm_attachmentname' },
			msdyncrm_CalendarDisplayOptions: { a: 'msdyncrm_calendardisplayoptions' },
			msdyncrm_commentcount: { a: 'msdyncrm_commentcount' },
			msdyncrm_golivetime: { a: 'msdyncrm_golivetime' },
			msdyncrm_impressioncount: { a: 'msdyncrm_impressioncount' },
			msdyncrm_likecount: { a: 'msdyncrm_likecount' },
			msdyncrm_linkedInvisibility: { a: 'msdyncrm_linkedinvisibility' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_networkId: { a: 'msdyncrm_networkId' },
			msdyncrm_networkpages: { b: 'msdyncrm_networkpages', a: '_msdyncrm_networkpages_value', c: 'msdyncrm_networkpages', d: 'msdyncrm_networkpage' },
			msdyncrm_postas: { a: 'msdyncrm_postas' },
			msdyncrm_postattachment: { a: 'msdyncrm_postattachment' },
			msdyncrm_postingfrom: { a: 'msdyncrm_postingfrom' },
			msdyncrm_PostingPeriod: { a: 'msdyncrm_postingperiod' },
			msdyncrm_postinguser: { a: 'msdyncrm_postinguser' },
			msdyncrm_postinguserid: { a: 'msdyncrm_postinguserid' },
			msdyncrm_poststate: { a: 'msdyncrm_poststate' },
			msdyncrm_PostText: { a: 'msdyncrm_posttext' },
			msdyncrm_postUrl: { a: 'msdyncrm_postUrl' },
			msdyncrm_sentiment: { a: 'msdyncrm_sentiment' },
			msdyncrm_sentimentscore: { a: 'msdyncrm_sentimentscore' },
			msdyncrm_socialchannel: { a: 'msdyncrm_socialchannel' },
			msdyncrm_socialconfiguration: { b: 'msdyncrm_socialconfiguration', a: '_msdyncrm_socialconfiguration_value', c: 'msdyncrm_socialpostingconfigurations', d: 'msdyncrm_socialpostingconfiguration' },
			msdyncrm_socialpostId: { a: 'msdyncrm_socialpostid' },
			msdyncrm_StartDate_UtcDateAndTime: { a: 'msdyncrm_startdate' },
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
		var msdyncrm_socialpost = {};
		msdyncrm_socialpost.ODataEntity = e;
		msdyncrm_socialpost.FormattedValue = {};
		for (var field in _msdyncrm_socialpost) {
			var a = _msdyncrm_socialpost[field].a;
			var b = _msdyncrm_socialpost[field].b;
			var c = _msdyncrm_socialpost[field].c;
			var d = _msdyncrm_socialpost[field].d;
			var g = _msdyncrm_socialpost[field].g;
			var r = _msdyncrm_socialpost[field].r;
			webApiField(msdyncrm_socialpost, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_socialpost.Entity = u;
		msdyncrm_socialpost.EntityName = 'msdyncrm_socialpost';
		msdyncrm_socialpost.EntityCollectionName = 'msdyncrm_socialposts';
		msdyncrm_socialpost['@odata.etag'] = e['@odata.etag'];
		msdyncrm_socialpost.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_socialpost.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_socialpost;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_socialpost = {
		msdyncrm_linkedInvisibility : {
			Connections: 270100000,
			Public: 270100001
		},
		msdyncrm_postas : {
			Company: 270100001,
			User: 270100000
		},
		msdyncrm_postingfrom : {
			User_0: 270100000,
			User_1: 270100001,
			User_10: 270100010,
			User_2: 270100002,
			User_3: 270100003,
			User_4: 270100004,
			User_5: 270100005,
			User_6: 270100006,
			User_7: 270100007,
			User_8: 270100008,
			User_9: 270100009
		},
		msdyncrm_PostingPeriod : {
			On_demand: 270100003,
			Post_now: 270100000,
			Schedule: 270100002,
			Schedule_later: 270100001
		},
		msdyncrm_poststate : {
			Disconnected: 270100006,
			Draft: 270100000,
			Failed: 270100004,
			Going_live: 270100005,
			Live: 270100002,
			New: 270100003,
			Scheduled: 270100001
		},
		msdyncrm_socialchannel : {
			Facebook: 270100001,
			Instagram: 270100003,
			LinkedIn: 270100002,
			Twitter: 270100000
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 2,
			New: 1,
			Published: 3
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