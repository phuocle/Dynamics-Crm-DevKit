'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_contentsettingsApi = function (e) {
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
		var _msdyncrm_contentsettings = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_AddressLine2: { a: 'msdyncrm_addressline2' },
			msdyncrm_AddressMain: { a: 'msdyncrm_addressmain' },
			msdyncrm_contentsettingsId: { a: 'msdyncrm_contentsettingsid' },
			msdyncrm_Default: { a: 'msdyncrm_default' },
			msdyncrm_FacebookUrl: { a: 'msdyncrm_facebookurl' },
			msdyncrm_ForwardToAFriend: { a: 'msdyncrm_forwardtoafriend' },
			msdyncrm_GooglePlusUrl: { a: 'msdyncrm_googleplusurl' },
			msdyncrm_InstagramUrl: { a: 'msdyncrm_instagramurl' },
			msdyncrm_isbusinessunitdefault: { a: 'msdyncrm_isbusinessunitdefault' },
			msdyncrm_LinkedInUrl: { a: 'msdyncrm_linkedinurl' },
			msdyncrm_MediumUrl: { a: 'msdyncrm_mediumurl' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_SkypeUrl: { a: 'msdyncrm_skypeurl' },
			msdyncrm_SubscriptionCenter: { a: 'msdyncrm_subscriptioncenter' },
			msdyncrm_TwitterUrl: { a: 'msdyncrm_twitterurl' },
			msdyncrm_YoutubeUrl: { a: 'msdyncrm_youtubeurl' },
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
		var msdyncrm_contentsettings = {};
		msdyncrm_contentsettings.ODataEntity = e;
		msdyncrm_contentsettings.FormattedValue = {};
		for (var field in _msdyncrm_contentsettings) {
			var a = _msdyncrm_contentsettings[field].a;
			var b = _msdyncrm_contentsettings[field].b;
			var c = _msdyncrm_contentsettings[field].c;
			var d = _msdyncrm_contentsettings[field].d;
			var g = _msdyncrm_contentsettings[field].g;
			var r = _msdyncrm_contentsettings[field].r;
			webApiField(msdyncrm_contentsettings, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_contentsettings.Entity = u;
		msdyncrm_contentsettings.EntityName = 'msdyncrm_contentsettings';
		msdyncrm_contentsettings.EntityCollectionName = 'msdyncrm_contentsettingses';
		msdyncrm_contentsettings['@odata.etag'] = e['@odata.etag'];
		msdyncrm_contentsettings.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_contentsettings.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_contentsettings;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_contentsettings = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 192350000,
			Error: 192350005,
			Expired: 192350004,
			Going_live: 192350006,
			Live: 192350001,
			Live_editable: 192350003,
			Stopped: 192350002,
			Stopping: 192350007
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