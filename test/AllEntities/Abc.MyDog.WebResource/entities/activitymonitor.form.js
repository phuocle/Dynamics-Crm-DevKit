'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormActivity_monitor_main_form = function(executionContext, defaultWebResourceName) {
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
			ConditionId: {},
			ContactCreatedByRule: {},
			CurrentState: {},
			EntitlementCheck: {},
			MonitoredActivityItemId: {},
			Reason: {},
			RuleId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.activitymonitor = {
		CurrentState : {
			Failed: 2,
			Ready_for_Power_Automate: 1,
			Ready_for_workflow: 0,
			Skipped: 3
		},
		Reason : {
			__0: 0,
			__12: 12,
			__8: 8,
			A_contact_was_not_created_for_this_sender_This_can_be_that_the_rule_owner_doesnt_have_permission_to_create_contacts: 9,
			A_resolved_case_is_already_connected_with_this_record: 4,
			An_active_case_is_already_connected_with_this_record: 3,
			An_existing_entity_is_already_connected_with_this_record: 2,
			Email_is_coming_from_an_unknown_sender: 7,
			No_email_sender_is_found: 6,
			No_valid_entitlement_for_this_email_sender: 11,
			No_valid_entitlement_for_this_email_sender_The_rule_continued_with_any_additional_action_selected_but_skipped_the_primary_action_for_this_email_sender: 10,
			The_rule_doesn’t_have_any_conditions_applicable_to_the_record: 13,
			The_rule_requires_a_connected_case_to_be_resolved_for_a_specific_amount_of_time_before_creating_a_new_one_This_connected_case_has_been_resolved_for_less_than_the_amount_of_time_selected: 5,
			Unable_to_find_the_source_data_for_this_email: 1
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