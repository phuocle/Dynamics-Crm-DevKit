'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_experimentv2Api = function (e) {
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
		var _msdynmkt_experimentv2 = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_associatejobId: { a: 'msdynmkt_associatejobid' },
			msdynmkt_callbackaction: { a: 'msdynmkt_callbackaction' },
			msdynmkt_endTime_UtcDateAndTime: { a: 'msdynmkt_endtime' },
			msdynmkt_experimentactionId: { a: 'msdynmkt_experimentactionid' },
			msdynmkt_experimentrecordid: { a: 'msdynmkt_experimentrecordid' },
			msdynmkt_experimentv2Id: { a: 'msdynmkt_experimentv2id' },
			msdynmkt_experimentversionnumber: { a: 'msdynmkt_experimentversionnumber' },
			msdynmkt_experimentversionrecordid: { a: 'msdynmkt_experimentversionrecordid' },
			msdynmkt_expiryTime_UtcDateAndTime: { a: 'msdynmkt_expirytime' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_productname: { a: 'msdynmkt_productname' },
			msdynmkt_startTime_UtcDateAndTime: { a: 'msdynmkt_starttime' },
			msdynmkt_status: { a: 'msdynmkt_status' },
			msdynmkt_testdetails: { a: 'msdynmkt_testdetails' },
			msdynmkt_winnerOrDefault: { a: 'msdynmkt_winnerordefault' },
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
		var msdynmkt_experimentv2 = {};
		msdynmkt_experimentv2.ODataEntity = e;
		msdynmkt_experimentv2.FormattedValue = {};
		for (var field in _msdynmkt_experimentv2) {
			var a = _msdynmkt_experimentv2[field].a;
			var b = _msdynmkt_experimentv2[field].b;
			var c = _msdynmkt_experimentv2[field].c;
			var d = _msdynmkt_experimentv2[field].d;
			var g = _msdynmkt_experimentv2[field].g;
			var r = _msdynmkt_experimentv2[field].r;
			webApiField(msdynmkt_experimentv2, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_experimentv2.Entity = u;
		msdynmkt_experimentv2.EntityName = 'msdynmkt_experimentv2';
		msdynmkt_experimentv2.EntityCollectionName = 'msdynmkt_experimentv2s';
		msdynmkt_experimentv2['@odata.etag'] = e['@odata.etag'];
		msdynmkt_experimentv2.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_experimentv2.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_experimentv2;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_experimentv2 = {
		msdynmkt_status : {
			CompletedConclusive: 534120002,
			CompletedInconclusive: 534120001,
			Failed: 534120003,
			InProgress: 534120000,
			None: 534120005,
			Stopped: 534120004
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