'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_purposeApi = function (e) {
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
		var _msdynmkt_purpose = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_customenforcementmodel: { a: 'msdynmkt_customenforcementmodel' },
			msdynmkt_description: { a: 'msdynmkt_description' },
			msdynmkt_enforcementmodel: { a: 'msdynmkt_enforcementmodel' },
			msdynmkt_extendedentityId: { b: 'msdynmkt_extendedentityId', a: '_msdynmkt_extendedentityid_value', c: 'msdynmkt_consentproviderdefaultpurposes', d: 'msdynmkt_consentproviderdefaultpurpose' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_purposeId: { a: 'msdynmkt_purposeid' },
			msdynmkt_smsenforcementmodel: { a: 'msdynmkt_smsenforcementmodel' },
			msdynmkt_topiccount: { a: 'msdynmkt_topiccount' },
			msdynmkt_type: { a: 'msdynmkt_type' },
			msdynmkt_uionlycomplianceprofilelookup: { b: 'msdynmkt_uionlycomplianceprofilelookup', a: '_msdynmkt_uionlycomplianceprofilelookup_value', c: 'msdynmkt_compliancesettings4s', d: 'msdynmkt_compliancesettings4' },
			msdynmkt_uionlypurposelookup: { b: 'msdynmkt_uionlypurposelookup', a: '_msdynmkt_uionlypurposelookup_value', c: 'msdynmkt_purposes', d: 'msdynmkt_purpose' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_purpose = {};
		msdynmkt_purpose.ODataEntity = e;
		msdynmkt_purpose.FormattedValue = {};
		for (var field in _msdynmkt_purpose) {
			var a = _msdynmkt_purpose[field].a;
			var b = _msdynmkt_purpose[field].b;
			var c = _msdynmkt_purpose[field].c;
			var d = _msdynmkt_purpose[field].d;
			var g = _msdynmkt_purpose[field].g;
			var r = _msdynmkt_purpose[field].r;
			webApiField(msdynmkt_purpose, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_purpose.Entity = u;
		msdynmkt_purpose.EntityName = 'msdynmkt_purpose';
		msdynmkt_purpose.EntityCollectionName = 'msdynmkt_purposes';
		msdynmkt_purpose['@odata.etag'] = e['@odata.etag'];
		msdynmkt_purpose.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_purpose.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_purpose;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_purpose = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdynmkt_customenforcementmodel : {
			Disabled: 534120002,
			Non_Restrictive: 534120001,
			Restrictive: 534120000
		},
		msdynmkt_enforcementmodel : {
			Disabled: 534120002,
			Non_Restrictive: 534120001,
			Restrictive: 534120000
		},
		msdynmkt_extendedentityIdType : {
		},
		msdynmkt_smsenforcementmodel : {
			Disabled: 534120002,
			Non_Restrictive: 534120001,
			Restrictive: 534120000
		},
		msdynmkt_type : {
			Commercial_Communication: 534120000,
			Tracking: 534120002,
			Transactional_Communication: 534120001
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