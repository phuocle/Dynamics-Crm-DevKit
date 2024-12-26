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
		var _msdyn_salesroutingrun = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_assignmentruleid: { b: 'msdyn_assignmentruleid', a: '_msdyn_assignmentruleid_value', c: 'msdyn_assignmentrules', d: 'msdyn_assignmentrule' },
			msdyn_connectedsequenceids: { a: 'msdyn_connectedsequenceids' },
			msdyn_connectsequencestatus: { a: 'msdyn_connectsequencestatus' },
			msdyn_errormessage: { a: 'msdyn_errormessage' },
			msdyn_isrecordassigned: { a: 'msdyn_isrecordassigned' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_ownerassigned_queue: { b: 'msdyn_ownerassigned_queue', a: '_msdyn_ownerassigned_value', c: 'queues', d: 'queue' },
			msdyn_ownerassigned_systemuser: { b: 'msdyn_ownerassigned_systemuser', a: '_msdyn_ownerassigned_value', c: 'systemusers', d: 'systemuser' },
			msdyn_ownerassigned_team: { b: 'msdyn_ownerassigned_team', a: '_msdyn_ownerassigned_value', c: 'teams', d: 'team' },
			msdyn_previousowner_queue: { b: 'msdyn_previousowner_queue', a: '_msdyn_previousowner_value', c: 'queues', d: 'queue' },
			msdyn_previousowner_systemuser: { b: 'msdyn_previousowner_systemuser', a: '_msdyn_previousowner_value', c: 'systemusers', d: 'systemuser' },
			msdyn_previousowner_team: { b: 'msdyn_previousowner_team', a: '_msdyn_previousowner_value', c: 'teams', d: 'team' },
			msdyn_previoussegmentid: { b: 'msdyn_previoussegmentid', a: '_msdyn_previoussegmentid_value', c: 'msdyn_segments', d: 'msdyn_segment' },
			msdyn_routingrequestsource: { a: 'msdyn_routingrequestsource' },
			msdyn_routingstatus: { a: 'msdyn_routingstatus' },
			msdyn_salesroutingrunId: { a: 'msdyn_salesroutingrunid' },
			msdyn_saruninstanceid: { b: 'msdyn_saruninstanceid', a: '_msdyn_saruninstanceid_value', c: 'msdyn_saruninstances', d: 'msdyn_saruninstance' },
			msdyn_segmentationstatus: { a: 'msdyn_segmentationstatus' },
			msdyn_segmentid: { b: 'msdyn_segmentid', a: '_msdyn_segmentid_value', c: 'msdyn_segments', d: 'msdyn_segment' },
			msdyn_targetobject_account: { b: 'msdyn_targetobject_account', a: '_msdyn_targetobject_value', c: 'accounts', d: 'account' },
			msdyn_targetobject_contact: { b: 'msdyn_targetobject_contact', a: '_msdyn_targetobject_value', c: 'contacts', d: 'contact' },
			msdyn_targetobject_lead: { b: 'msdyn_targetobject_lead', a: '_msdyn_targetobject_value', c: 'leads', d: 'lead' },
			msdyn_targetobject_msdyn_salessuggestion: { b: 'msdyn_targetobject_msdyn_salessuggestion', a: '_msdyn_targetobject_value', c: 'msdyn_salessuggestions', d: 'msdyn_salessuggestion' },
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
				return '';
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
		msdyn_connectsequencestatus : {
			D365WorkAssignment_app_user_doesnt_have_the_necessary_permissions: 8,
			In_progress: 0,
			No_sequence_connected_to_this_segment: 4,
			Seller_needs_additional_access: 6,
			Sequence_is_either_deleted_or_inactive: 7,
			Sequence_unchanged: 5,
			Skipped_as_segmentation_failed: 3,
			Something_went_wrong: 2,
			Successfully_connected_to_a_sequence: 1
		},
		msdyn_ownerassignedIdType : {
		},
		msdyn_previousownerIdType : {
		},
		msdyn_routingrequestsource : {
			Force_routed_manually: 5,
			Manually_reassigned: 2,
			Manually_resegmented: 4,
			New_record: 0,
			Reassignment_scheduled: 3,
			Record_updated: 1
		},
		msdyn_routingstatus : {
			Couldnt_find_eligible_queue: 15,
			Couldnt_find_eligible_team: 13,
			D365WorkAssignment_app_user_doesnt_have_the_necessary_permissions: 18,
			Eligible_sellers_dont_have_availability: 6,
			Eligible_sellers_dont_have_capacity: 7,
			Found_multiple_eligible_queues: 14,
			Found_multiple_eligible_teams: 12,
			No_assignment_rule_for_this_records_segment: 8,
			No_sellers_meet_the_conditions: 5,
			Owner_assigned_manually: 9,
			Owner_assigned_successfully: 2,
			Record_doesnt_meet_any_conditions: 4,
			Record_unassigned_as_seller_lacks_security_role_privileges: 10,
			Rules_wont_run_for_this_segment: 17,
			Run_is_in_progress: 1,
			Seller_not_assigned_as_record_is_older_than_the_set_timeframe: 11,
			Skipped_as_segmentation_failed: 16,
			There_was_an_issue_with_the_server: 3
		},
		msdyn_segmentationstatus : {
			D365WorkAssignment_app_user_doesnt_have_the_necessary_permissions: 6,
			In_Progress: 0,
			Matched_with_previous_segment: 4,
			No_matching_segments: 3,
			No_segmentation_required: 5,
			Segmentation_successful: 1,
			Something_went_wrong: 2
		},
		msdyn_targetobjectIdType : {
		},
		statecode : {
			Failed: 2,
			Inprogress: 0,
			Succeeded: 1
		},
		statuscode : {
			Couldnt_find_eligible_queue: 15,
			Couldnt_find_eligible_team: 13,
			D365WorkAssignment_app_user_doesnt_have_the_necessary_permissions: 18,
			Eligible_sellers_dont_have_availability: 6,
			Eligible_sellers_dont_have_capacity: 7,
			Found_multiple_eligible_queues: 14,
			Found_multiple_eligible_teams: 12,
			No_assignment_rule_for_this_records_segment: 8,
			No_sellers_meet_the_conditions: 5,
			Owner_assigned_manually: 9,
			Owner_assigned_successfully: 2,
			Record_doesnt_meet_any_conditions: 4,
			Record_unassigned_as_seller_lacks_security_role_privileges: 10,
			Rules_wont_run_for_this_segment: 17,
			Run_is_in_progress: 1,
			Seller_not_assigned_as_record_is_older_than_the_set_timeframe: 11,
			Skipped_as_segmentation_failed: 16,
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