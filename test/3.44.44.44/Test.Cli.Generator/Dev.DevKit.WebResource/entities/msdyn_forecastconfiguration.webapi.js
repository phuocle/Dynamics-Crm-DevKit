'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_forecastconfigurationApi = function (e) {
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
		var _msdyn_forecastconfiguration = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_addedWeekIndex: { a: 'msdyn_addedweekindex' },
			msdyn_additionalfilter: { a: 'msdyn_additionalfilter' },
			msdyn_advancedsettings: { a: 'msdyn_advancedsettings' },
			msdyn_CalendarTemplate: { a: 'msdyn_calendartemplate' },
			msdyn_columns: { a: 'msdyn_columns' },
			msdyn_enddate_UtcDateOnly: { a: 'msdyn_enddate' },
			msdyn_entitymetadata: { a: 'msdyn_entitymetadata' },
			msdyn_errormessage: { a: 'msdyn_errormessage' },
			msdyn_FiscalYearStartDate_UtcDateOnly: { a: 'msdyn_fiscalyearstartdate' },
			msdyn_forecastcategoryattribute: { a: 'msdyn_forecastcategoryattribute' },
			msdyn_forecastconfigurationId: { a: 'msdyn_forecastconfigurationid' },
			msdyn_hierarchyentity: { a: 'msdyn_hierarchyentity' },
			msdyn_hierarchyfilter: { a: 'msdyn_hierarchyfilter' },
			msdyn_hierarchyrelationship: { a: 'msdyn_hierarchyrelationship' },
			msdyn_isdefault: { a: 'msdyn_isdefault' },
			msdyn_issnapshotscheduled: { a: 'msdyn_issnapshotscheduled' },
			msdyn_moneyattrcache: { a: 'msdyn_moneyattrcache' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_numberofrecurrences: { a: 'msdyn_numberofrecurrences' },
			msdyn_periodtype: { a: 'msdyn_periodtype' },
			msdyn_permissionsdata: { a: 'msdyn_permissionsdata' },
			msdyn_pivots: { a: 'msdyn_pivots' },
			msdyn_previewFlags: { a: 'msdyn_previewflags' },
			msdyn_publisheddatetime_UtcDateOnly: { a: 'msdyn_publisheddatetime' },
			msdyn_relatedentities: { a: 'msdyn_relatedentities' },
			msdyn_rollupdefaultviewid: { a: 'msdyn_rollupdefaultviewid' },
			msdyn_rollupentity: { a: 'msdyn_rollupentity' },
			msdyn_rootentityrecordid: { a: 'msdyn_rootentityrecordid' },
			msdyn_snapshotschedule: { a: 'msdyn_snapshotschedule' },
			msdyn_snapshottimezone: { a: 'msdyn_forecasttimezone' },
			msdyn_startdate_UtcDateOnly: { a: 'msdyn_startdate' },
			msdyn_startingfiscalmonth: { a: 'msdyn_startingfiscalmonth' },
			msdyn_startingfiscalquarter: { a: 'msdyn_startingfiscalquarter' },
			msdyn_startingfiscalyear: { a: 'msdyn_startingfiscalyear' },
			msdyn_templatetype: { a: 'msdyn_templatetype' },
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
		var msdyn_forecastconfiguration = {};
		msdyn_forecastconfiguration.ODataEntity = e;
		msdyn_forecastconfiguration.FormattedValue = {};
		for (var field in _msdyn_forecastconfiguration) {
			var a = _msdyn_forecastconfiguration[field].a;
			var b = _msdyn_forecastconfiguration[field].b;
			var c = _msdyn_forecastconfiguration[field].c;
			var d = _msdyn_forecastconfiguration[field].d;
			var g = _msdyn_forecastconfiguration[field].g;
			var r = _msdyn_forecastconfiguration[field].r;
			webApiField(msdyn_forecastconfiguration, field, e, a, b, c, d, r, u, g);
		}
		msdyn_forecastconfiguration.Entity = u;
		msdyn_forecastconfiguration.EntityName = 'msdyn_forecastconfiguration';
		msdyn_forecastconfiguration.EntityCollectionName = 'msdyn_forecastconfigurations';
		msdyn_forecastconfiguration['@odata.etag'] = e['@odata.etag'];
		msdyn_forecastconfiguration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_forecastconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_forecastconfiguration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_forecastconfiguration = {
		msdyn_CalendarTemplate : {
			_3_3_3_4: 100000005,
			_3_3_4_3: 100000006,
			_3_4_3_3: 100000007,
			_4_3_3_3: 100000008,
			_4_4_5: 100000000,
			_4_5_4: 100000001,
			_5_4_4: 100000002,
			Broadcast_Calendar: 100000004,
			Gregorian: 100000003
		},
		msdyn_periodtype : {
			Annually: 3,
			Monthly: 0,
			Quarterly: 1,
			Weekly: 2
		},
		msdyn_startingfiscalmonth : {
			April: 3,
			August: 7,
			December: 11,
			February: 1,
			January: 0,
			July: 6,
			June: 5,
			March: 2,
			May: 4,
			November: 10,
			October: 9,
			September: 8
		},
		msdyn_startingfiscalquarter : {
			Q1: 0,
			Q2: 1,
			Q3: 2,
			Q4: 3
		},
		msdyn_startingfiscalyear : {
			FY2018: 0,
			FY2019: 1,
			FY2020: 2,
			FY2021: 3,
			FY2022: 4,
			FY2023: 5,
			FY2024: 6,
			FY2025: 7,
			FY2026: 8,
			FY2027: 9,
			FY2028: 10
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 3,
			Archived: 6,
			Draft: 1,
			Failed: 4,
			In_progress: 2,
			Inactive: 5,
			Invalidated: 7,
			Reactivation_in_progress: 8
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