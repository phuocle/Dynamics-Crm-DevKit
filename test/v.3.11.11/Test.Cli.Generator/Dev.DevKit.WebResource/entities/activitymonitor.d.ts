//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormActivity_monitor_main_form {
		interface Header extends DevKit.Controls.IHeader {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
		}
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for ARC rule item associated with activity monitor. */
			ConditionId: DevKit.Controls.Lookup;
			/** Status of contact creation for an unknown sender during ARC runtime. */
			ContactCreatedByRule: DevKit.Controls.Boolean;
			/** ARC early exit status. */
			CurrentState: DevKit.Controls.OptionSet;
			/** Status of entitlement check during arc runtime. */
			EntitlementCheck: DevKit.Controls.Boolean;
			/** Monitored activity item record. */
			MonitoredActivityItemId: DevKit.Controls.Lookup;
			/** ARC early exit reason */
			Reason: DevKit.Controls.OptionSet;
			/** Unique identifier for ARC rule associated with activity monitor. */
			RuleId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormActivity_monitor_main_form extends DevKit.IForm {
		/**
		* Activity monitor main form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Activity_monitor_main_form */
		Body: DevKit.FormActivity_monitor_main_form.Body;
		/** The Header section of form Activity_monitor_main_form */
		Header: DevKit.FormActivity_monitor_main_form.Header;
		/** The Process of form Activity_monitor_main_form */
		Process: DevKit.FormActivity_monitor_main_form.Process;
		/** The SidePanes of form Activity_monitor_main_form */
		SidePanes: DevKit.SidePanes;
	}
	class activitymonitorApi {
		/**
		* DynamicsCrm.DevKit activitymonitorApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier for activity monitor. */
		activitymonitorId: string;
		/** Json string containing advanced setting flags for the matched rule. */
		AdvancedSettings: string;
		/** Unique identifier for ARC rule item associated with activity monitor. */
		ConditionId: string;
		/** Status of contact creation for an unknown sender during ARC runtime. */
		ContactCreatedByRule: boolean;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** ARC early exit status. */
		CurrentState: OptionSet.activitymonitor.CurrentState;
		/** Status of entitlement check during arc runtime. */
		EntitlementCheck: boolean;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Monitored activity item record. */
		monitoredactivityitemid_email: string;
		/** Monitored activity item record. */
		monitoredactivityitemid_task: string;
		/** The name of the activity monitor. */
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** ARC early exit reason */
		Reason: OptionSet.activitymonitor.Reason;
		/** Unique identifier for ARC rule associated with activity monitor. */
		RuleId: string;
		/** Status of the Activity monitor */
		statecode: OptionSet.activitymonitor.statecode;
		/** Reason for the status of the Activity monitor */
		statuscode: OptionSet.activitymonitor.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier for activity monitor. */
			readonly activitymonitorId: string;
			/** Json string containing advanced setting flags for the matched rule. */
			readonly AdvancedSettings: string;
			/** Unique identifier for ARC rule item associated with activity monitor. */
			readonly ConditionId: string;
			/** Status of contact creation for an unknown sender during ARC runtime. */
			readonly ContactCreatedByRule: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** ARC early exit status. */
			readonly CurrentState: string;
			/** Status of entitlement check during arc runtime. */
			readonly EntitlementCheck: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Monitored activity item record. */
			readonly monitoredactivityitemid_email: string;
			/** Monitored activity item record. */
			readonly monitoredactivityitemid_task: string;
			/** The name of the activity monitor. */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** ARC early exit reason */
			readonly Reason: string;
			/** Unique identifier for ARC rule associated with activity monitor. */
			readonly RuleId: string;
			/** Status of the Activity monitor */
			readonly statecode: string;
			/** Reason for the status of the Activity monitor */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace activitymonitor {
		enum CurrentState {
			/** 2 */
			Failed,
			/** 1 */
			Ready_for_Power_Automate,
			/** 0 */
			Ready_for_workflow,
			/** 3 */
			Skipped
		}
		enum MonitoredActivityItemIdType {
		}
		enum OwnerIdType {
		}
		enum Reason {
			/** 0 */
			__0,
			/** 12 */
			__12,
			/** 8 */
			__8,
			/** 9 */
			A_contact_was_not_created_for_this_sender_This_can_be_that_the_rule_owner_doesnt_have_permission_to_create_contacts,
			/** 4 */
			A_resolved_case_is_already_connected_with_this_record,
			/** 3 */
			An_active_case_is_already_connected_with_this_record,
			/** 2 */
			An_existing_entity_is_already_connected_with_this_record,
			/** 7 */
			Email_is_coming_from_an_unknown_sender,
			/** 6 */
			No_email_sender_is_found,
			/** 11 */
			No_valid_entitlement_for_this_email_sender,
			/** 10 */
			No_valid_entitlement_for_this_email_sender_The_rule_continued_with_any_additional_action_selected_but_skipped_the_primary_action_for_this_email_sender,
			/** 13 */
			The_rule_doesnt_have_any_conditions_applicable_to_the_record,
			/** 14 */
			The_rule_is_disconnected_from_the_Power_Automate_flow_To_reconnect_please_deactivate_and_reactivate_the_rule,
			/** 15 */
			The_rule_is_disconnected_from_the_workflow_To_reconnect_please_deactivate_and_reactivate_the_rule,
			/** 5 */
			The_rule_requires_a_connected_case_to_be_resolved_for_a_specific_amount_of_time_before_creating_a_new_one_This_connected_case_has_been_resolved_for_less_than_the_amount_of_time_selected,
			/** 1 */
			Unable_to_find_the_source_data_for_this_email
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}