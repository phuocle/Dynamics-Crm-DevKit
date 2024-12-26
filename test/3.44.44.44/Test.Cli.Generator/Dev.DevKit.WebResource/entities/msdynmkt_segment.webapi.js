'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_segmentApi = function (e) {
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
		var _msdynmkt_segment = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_baseentitylogicalname: { a: 'msdynmkt_baseentitylogicalname' },
			msdynmkt_cdmmanifestrelativepath: { a: 'msdynmkt_cdmmanifestrelativepath' },
			msdynmkt_cdmpartitionprimarykeycolumn: { a: 'msdynmkt_cdmpartitionprimarykeycolumn' },
			msdynmkt_datalakefolderid: { b: 'msdynmkt_datalakefolderid', a: '_msdynmkt_datalakefolderid_value', c: 'datalakefolders', d: 'datalakefolder' },
			msdynmkt_description: { a: 'msdynmkt_description' },
			msdynmkt_displayname: { a: 'msdynmkt_displayname' },
			msdynmkt_lastevaluated_UtcDateAndTime: { a: 'msdynmkt_lastevaluated' },
			msdynmkt_lastexportedat_UtcDateAndTime: { a: 'msdynmkt_lastexportedat' },
			msdynmkt_lastupdatedon_TimezoneDateAndTime: { a: 'msdynmkt_lastupdatedon' },
			msdynmkt_lastusedinjourney_UtcDateAndTime: { a: 'msdynmkt_lastusedinjourney' },
			msdynmkt_lastusedinjourneyby: { b: 'msdynmkt_lastusedinjourneyby', a: '_msdynmkt_lastusedinjourneyby_value', c: 'systemusers', d: 'systemuser' },
			msdynmkt_membercount: { a: 'msdynmkt_membercount', r: true },
			msdynmkt_membercount_Date_UtcDateAndTime: { a: 'msdynmkt_membercount_date', r: true },
			msdynmkt_membercount_State: { a: 'msdynmkt_membercount_state', r: true },
			msdynmkt_publishedjourneycount: { a: 'msdynmkt_publishedjourneycount' },
			msdynmkt_scope: { a: 'msdynmkt_scope' },
			msdynmkt_segmentId: { a: 'msdynmkt_segmentid' },
			msdynmkt_source: { a: 'msdynmkt_source' },
			msdynmkt_sourcesegmentcreatedby: { a: 'msdynmkt_sourcesegmentcreatedby' },
			msdynmkt_sourcesegmentcreatedon_TimezoneDateAndTime: { a: 'msdynmkt_sourcesegmentcreatedon' },
			msdynmkt_sourcesegmentuid: { a: 'msdynmkt_sourcesegmentuid' },
			msdynmkt_sourcesegmenturi: { a: 'msdynmkt_sourcesegmenturi' },
			msdynmkt_timerequiredby_UtcDateAndTime: { a: 'msdynmkt_timerequiredby' },
			msdynmkt_timerequiredend_UtcDateAndTime: { a: 'msdynmkt_timerequiredend' },
			msdynmkt_type: { a: 'msdynmkt_type' },
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
		var msdynmkt_segment = {};
		msdynmkt_segment.ODataEntity = e;
		msdynmkt_segment.FormattedValue = {};
		for (var field in _msdynmkt_segment) {
			var a = _msdynmkt_segment[field].a;
			var b = _msdynmkt_segment[field].b;
			var c = _msdynmkt_segment[field].c;
			var d = _msdynmkt_segment[field].d;
			var g = _msdynmkt_segment[field].g;
			var r = _msdynmkt_segment[field].r;
			webApiField(msdynmkt_segment, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_segment.Entity = u;
		msdynmkt_segment.EntityName = 'msdynmkt_segment';
		msdynmkt_segment.EntityCollectionName = 'msdynmkt_segments';
		msdynmkt_segment['@odata.etag'] = e['@odata.etag'];
		msdynmkt_segment.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_segment.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_segment;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_segment = {
		msdynmkt_scope : {
			Business_unit: 270100001,
			Organization: 270100000
		},
		msdynmkt_source : {
			Customer_Insights: 11,
			Marketing: 10,
			Real_time_Journeys: 12
		},
		msdynmkt_type : {
			Dynamic: 11,
			Expansion: 12,
			Static: 10
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			ComputedWithWarnings: 7,
			Computing: 6,
			Deleted: 4,
			Error: 3,
			Exporting: 5,
			Inactive: 2,
			Stopped: 9,
			Stopping: 8
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