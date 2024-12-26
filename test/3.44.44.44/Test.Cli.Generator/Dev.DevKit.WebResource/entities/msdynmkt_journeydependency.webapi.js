'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_journeydependencyApi = function (e) {
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
		var _msdynmkt_journeydependency = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_actionid: { a: 'msdynmkt_actionid' },
			msdynmkt_actiontype: { a: 'msdynmkt_actiontype' },
			msdynmkt_dependency_customapi: { b: 'msdynmkt_dependency_customapi', a: '_msdynmkt_dependency_value', c: 'customapis', d: 'customapi' },
			msdynmkt_dependency_msdynmkt_customchannelmessage: { b: 'msdynmkt_dependency_msdynmkt_customchannelmessage', a: '_msdynmkt_dependency_value', c: 'msdynmkt_customchannelmessages', d: 'msdynmkt_customchannelmessage' },
			msdynmkt_dependency_msdynmkt_email: { b: 'msdynmkt_dependency_msdynmkt_email', a: '_msdynmkt_dependency_value', c: 'msdynmkt_emails', d: 'msdynmkt_email' },
			msdynmkt_dependency_msdynmkt_mobileapp: { b: 'msdynmkt_dependency_msdynmkt_mobileapp', a: '_msdynmkt_dependency_value', c: 'msdynmkt_mobileapps', d: 'msdynmkt_mobileapp' },
			msdynmkt_dependency_msdynmkt_mobileapplication: { b: 'msdynmkt_dependency_msdynmkt_mobileapplication', a: '_msdynmkt_dependency_value', c: 'msdynmkt_mobileapplications', d: 'msdynmkt_mobileapplication' },
			msdynmkt_dependency_msdynmkt_pushnotification: { b: 'msdynmkt_dependency_msdynmkt_pushnotification', a: '_msdynmkt_dependency_value', c: 'msdynmkt_pushnotifications', d: 'msdynmkt_pushnotification' },
			msdynmkt_dependency_msdynmkt_sms: { b: 'msdynmkt_dependency_msdynmkt_sms', a: '_msdynmkt_dependency_value', c: 'msdynmkt_smses', d: 'msdynmkt_sms' },
			msdynmkt_details: { a: 'msdynmkt_details' },
			msdynmkt_journey: { b: 'msdynmkt_journey', a: '_msdynmkt_journey_value', c: 'msdynmkt_journeies', d: 'msdynmkt_journey' },
			msdynmkt_journeydependencyId: { a: 'msdynmkt_journeydependencyid' },
			msdynmkt_Name: { a: 'msdynmkt_name' },
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
		var msdynmkt_journeydependency = {};
		msdynmkt_journeydependency.ODataEntity = e;
		msdynmkt_journeydependency.FormattedValue = {};
		for (var field in _msdynmkt_journeydependency) {
			var a = _msdynmkt_journeydependency[field].a;
			var b = _msdynmkt_journeydependency[field].b;
			var c = _msdynmkt_journeydependency[field].c;
			var d = _msdynmkt_journeydependency[field].d;
			var g = _msdynmkt_journeydependency[field].g;
			var r = _msdynmkt_journeydependency[field].r;
			webApiField(msdynmkt_journeydependency, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_journeydependency.Entity = u;
		msdynmkt_journeydependency.EntityName = 'msdynmkt_journeydependency';
		msdynmkt_journeydependency.EntityCollectionName = 'msdynmkt_journeydependencies';
		msdynmkt_journeydependency['@odata.etag'] = e['@odata.etag'];
		msdynmkt_journeydependency.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_journeydependency.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_journeydependency;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_journeydependency = {
		msdynmkt_dependencyIdType : {
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