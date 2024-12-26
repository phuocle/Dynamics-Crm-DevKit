'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_journeyApi = function (e) {
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
		var _msdynmkt_journey = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_baseversionjourneyid: { a: 'msdynmkt_baseversionjourneyid' },
			msdynmkt_DoubleOptInCompliance: { b: 'msdynmkt_DoubleOptInCompliance', a: '_msdynmkt_doubleoptincompliance_value', c: 'msdynmkt_compliancesettings4s', d: 'msdynmkt_compliancesettings4' },
			msdynmkt_errorDetails: { a: 'msdynmkt_errorDetails' },
			msdynmkt_flags: { a: 'msdynmkt_flags' },
			msdynmkt_frequencycaptype: { a: 'msdynmkt_frequencycaptype' },
			msdynmkt_issupersededbylaterversion: { a: 'msdynmkt_issupersededbylaterversion' },
			msdynmkt_journeyEndTime_TimezoneDateAndTime: { a: 'msdynmkt_journeyendtime' },
			msdynmkt_journeyfeatureversionnumber: { a: 'msdynmkt_journeyfeatureversionnumber' },
			msdynmkt_journeyId: { a: 'msdynmkt_journeyid' },
			msdynmkt_journeyinstancepartitionenabled: { a: 'msdynmkt_journeyinstancepartitionenabled' },
			msdynmkt_JourneyJSON: { a: 'msdynmkt_journeyjson' },
			msdynmkt_JourneyJSONBackup: { a: 'msdynmkt_journeyjsonbackup' },
			msdynmkt_journeyStartTime_TimezoneDateAndTime: { a: 'msdynmkt_journeystarttime' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_Purpose: { a: 'msdynmkt_purpose' },
			msdynmkt_readyToBeTriggeredBySegmentRefresh: { a: 'msdynmkt_readytobetriggeredbysegmentrefresh' },
			msdynmkt_templateid: { b: 'msdynmkt_templateid', a: '_msdynmkt_templateid_value', c: 'msdynmkt_journeytemplates', d: 'msdynmkt_journeytemplate' },
			msdynmkt_triggerType: { a: 'msdynmkt_triggertype' },
			msdynmkt_versiondescription: { a: 'msdynmkt_versiondescription' },
			msdynmkt_versionnumber: { a: 'msdynmkt_versionnumber' },
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
		var msdynmkt_journey = {};
		msdynmkt_journey.ODataEntity = e;
		msdynmkt_journey.FormattedValue = {};
		for (var field in _msdynmkt_journey) {
			var a = _msdynmkt_journey[field].a;
			var b = _msdynmkt_journey[field].b;
			var c = _msdynmkt_journey[field].c;
			var d = _msdynmkt_journey[field].d;
			var g = _msdynmkt_journey[field].g;
			var r = _msdynmkt_journey[field].r;
			webApiField(msdynmkt_journey, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_journey.Entity = u;
		msdynmkt_journey.EntityName = 'msdynmkt_journey';
		msdynmkt_journey.EntityCollectionName = 'msdynmkt_journeies';
		msdynmkt_journey['@odata.etag'] = e['@odata.etag'];
		msdynmkt_journey.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_journey.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_journey;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_journey = {
		msdynmkt_frequencycaptype : {
			Apply_frequency_cap_by_skipping_messages: 0,
			Ignore_frequency_cap: 1
		},
		msdynmkt_Purpose : {
			Double_Opt_In: 721460001,
			Marketing: 721460000
		},
		msdynmkt_triggerType : {
			Event: 3,
			OneTime: 2,
			Ongoing: 1,
			Recurring: 0
		},
		statecode : {
			Completed: 6,
			Completing: 5,
			Deleted: 4,
			Draft: 0,
			Live: 1,
			Publishing: 3,
			Stopped: 2,
			Stopping: 8
		},
		statuscode : {
			Completed: 8,
			Completing: 7,
			Deleted: 6,
			Draft: 1,
			Draining: 5,
			Live: 2,
			Publishing: 4,
			Stopped: 3,
			Stopping: 9
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