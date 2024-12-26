'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_salesroutingrun_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
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