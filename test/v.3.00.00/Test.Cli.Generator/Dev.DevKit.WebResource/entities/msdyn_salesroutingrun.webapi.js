'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_salesroutingrunApi = function (e) {
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
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
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
		var _msdyn_salesroutingrun = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_assignmentruleid: { b: 'msdyn_assignmentruleid', a: '_msdyn_assignmentruleid_value', c: 'msdyn_assignmentrules', d: 'msdyn_assignmentrule' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_ownerassigned_systemuser: { b: 'msdyn_ownerassigned_systemuser', a: '_msdyn_ownerassigned_value', c: 'systemusers', d: 'systemuser' },
			msdyn_ownerassigned_team: { b: 'msdyn_ownerassigned_team', a: '_msdyn_ownerassigned_value', c: 'teams', d: 'team' },
			msdyn_salesroutingrunId: { a: 'msdyn_salesroutingrunid' },
			msdyn_segmentid: { b: 'msdyn_segmentid', a: '_msdyn_segmentid_value', c: 'msdyn_segments', d: 'msdyn_segment' },
			msdyn_targetobject_lead: { b: 'msdyn_targetobject_lead', a: '_msdyn_targetobject_value', c: 'leads', d: 'lead' },
			msdyn_targetobject_opportunity: { b: 'msdyn_targetobject_opportunity', a: '_msdyn_targetobject_value', c: 'opportunities', d: 'opportunity' },
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
		var msdyn_salesroutingrun = {};
		msdyn_salesroutingrun.ODataEntity = e;
		msdyn_salesroutingrun.FormattedValue = {};
		for (var field in _msdyn_salesroutingrun) {
			var a = _msdyn_salesroutingrun[field].a;
			var b = _msdyn_salesroutingrun[field].b;
			var c = _msdyn_salesroutingrun[field].c;
			var d = _msdyn_salesroutingrun[field].d;
			var g = _msdyn_salesroutingrun[field].g;
			var r = _msdyn_salesroutingrun[field].r;
			webApiField(msdyn_salesroutingrun, field, e, a, b, c, d, r, u, g);
		}
		msdyn_salesroutingrun.Entity = u;
		msdyn_salesroutingrun.EntityName = 'msdyn_salesroutingrun';
		msdyn_salesroutingrun.EntityCollectionName = 'msdyn_salesroutingruns';
		msdyn_salesroutingrun['@odata.etag'] = e['@odata.etag'];
		msdyn_salesroutingrun.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_salesroutingrun.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_salesroutingrun;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_salesroutingrun = {
		statecode : {
			Failed: 2,
			Inprogress: 0,
			Succeeded: 1
		},
		statuscode : {
			Eligible_sellers_dont_have_availability: 6,
			Eligible_sellers_dont_have_capacity: 7,
			No_assignment_rule_for_this_records_segment: 8,
			No_sellers_meet_the_conditions: 5,
			Owner_assigned_manually: 9,
			Owner_assigned_successfully: 2,
			Record_doesnt_meet_any_conditions: 4,
			Run_is_in_progress: 1,
			There_was_an_issue_with_the_server: 3
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