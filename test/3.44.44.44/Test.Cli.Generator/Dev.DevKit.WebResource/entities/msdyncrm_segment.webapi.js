'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_segmentApi = function (e) {
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
		var _msdyncrm_segment = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_description: { a: 'msdyncrm_description' },
			msdyncrm_externalsegmenturl: { a: 'msdyncrm_externalsegmenturl' },
			msdyncrm_externalsource: { a: 'msdyncrm_externalsource' },
			msdyncrm_islive: { a: 'msdyncrm_islive' },
			msdyncrm_lastevaluationtime_UtcDateAndTime: { a: 'msdyncrm_lastevaluationtime' },
			msdyncrm_lastupdatedtime_UtcDateAndTime: { a: 'msdyncrm_lastupdatedtime' },
			msdyncrm_nextevaluation_UtcDateAndTime: { a: 'msdyncrm_nextevaluation' },
			msdyncrm_querytype: { a: 'msdyncrm_querytype' },
			msdyncrm_scope: { a: 'msdyncrm_scope' },
			msdyncrm_segmentactivationstatus: { a: 'msdyncrm_segmentactivationstatus' },
			msdyncrm_segmentevaluationdurationinminutes: { a: 'msdyncrm_segmentevaluationdurationinminutes' },
			msdyncrm_segmentevaluationstate: { a: 'msdyncrm_segmentevaluationstate' },
			msdyncrm_segmentevaluationtype: { a: 'msdyncrm_segmentevaluationtype' },
			msdyncrm_segmentfilterquery: { a: 'msdyncrm_segmentfilterquery' },
			msdyncrm_segmentId: { a: 'msdyncrm_segmentid' },
			msdyncrm_segmentmemberids: { a: 'msdyncrm_segmentmemberids' },
			msdyncrm_segmentname: { a: 'msdyncrm_segmentname' },
			msdyncrm_segmentnameview: { a: 'msdyncrm_segmentnameview', r: true },
			msdyncrm_segmentprovisioningstate: { a: 'msdyncrm_segmentprovisioningstate' },
			msdyncrm_segmentquery: { a: 'msdyncrm_segmentquery' },
			msdyncrm_segmentqueryname: { a: 'msdyncrm_segmentqueryname' },
			msdyncrm_segmentrefreshrateintervalminutes: { a: 'msdyncrm_segmentrefreshrateintervalminutes' },
			msdyncrm_segmentsize: { a: 'msdyncrm_segmentsize' },
			msdyncrm_segmenttargetprofiletypename: { a: 'msdyncrm_segmenttargetprofiletypename' },
			msdyncrm_SegmentTemplate: { b: 'msdyncrm_SegmentTemplate', a: '_msdyncrm_segmenttemplate_value', c: 'msdyncrm_segmenttemplates', d: 'msdyncrm_segmenttemplate' },
			msdyncrm_segmenttimezone: { a: 'msdyncrm_segmenttimezone' },
			msdyncrm_segmenttype: { a: 'msdyncrm_segmenttype' },
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
		var msdyncrm_segment = {};
		msdyncrm_segment.ODataEntity = e;
		msdyncrm_segment.FormattedValue = {};
		for (var field in _msdyncrm_segment) {
			var a = _msdyncrm_segment[field].a;
			var b = _msdyncrm_segment[field].b;
			var c = _msdyncrm_segment[field].c;
			var d = _msdyncrm_segment[field].d;
			var g = _msdyncrm_segment[field].g;
			var r = _msdyncrm_segment[field].r;
			webApiField(msdyncrm_segment, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_segment.Entity = u;
		msdyncrm_segment.EntityName = 'msdyncrm_segment';
		msdyncrm_segment.EntityCollectionName = 'msdyncrm_segments';
		msdyncrm_segment['@odata.etag'] = e['@odata.etag'];
		msdyncrm_segment.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_segment.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_segment;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_segment = {
		msdyncrm_externalsource : {
			Customer_Insight: 192350000
		},
		msdyncrm_querytype : {
			Interaction_based: 192350000,
			Profile_based: 192350001
		},
		msdyncrm_scope : {
			Business_unit: 270100001,
			Organization: 270100000
		},
		msdyncrm_segmentactivationstatus : {
			Active: 192350000,
			Disabled: 192350001
		},
		msdyncrm_segmenttype : {
			Compound_segment: 192350002,
			Dynamic_segment: 192350000,
			Static_segment: 192350001
		},
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