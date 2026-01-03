//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormFax {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the fax activity is open, completed, or canceled. Completed and canceled fax activities are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_SUMMARY_TAB_Sections {
			general_information: DevKit.Controls.Section;
			Letter_description: DevKit.Controls.Section;
			Letter_details: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent creating and sending the fax. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type additional information to describe the fax, such as the primary message or the products and services featured. */
			Description: DevKit.Controls.String;
			/** Select the direction of the fax as incoming or outbound. */
			DirectionCode: DevKit.Controls.Boolean;
			/** Type the recipient's fax number. */
			FaxNumber: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user who sent the fax. */
			from: DevKit.Controls.Lookup;
			/** Choose the record that the fax relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the fax. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the fax. */
			to: DevKit.Controls.Lookup;
		}
	}
	export class FormFax extends DevKit.IForm {
		/**
		* Fax [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Fax */
		Body: DevKit.FormFax.Body;
		/** The Header section of form Fax */
		Header: DevKit.FormFax.Header;
	}
}
declare namespace OptionSet {
	namespace Fax {
		enum ActivityTypeCode {
			/** Appointment = 4201*/
			Appointment = 4201,
			/** Email = 4202*/
			Email = 4202,
			/** Fax = 4204*/
			Fax = 4204,
			/** Invite_Redemption = 10407*/
			Invite_Redemption = 10407,
			/** Letter = 4207*/
			Letter = 4207,
			/** Phone_Call = 4210*/
			Phone_Call = 4210,
			/** Portal_Comment = 10408*/
			Portal_Comment = 10408,
			/** Recurring_Appointment = 4251*/
			Recurring_Appointment = 4251,
			/** Task = 4212*/
			Task = 4212,
			/** Teams_chat = 10253*/
			Teams_chat = 10253
		}
		enum PriorityCode {
			/** High = 2*/
			High = 2,
			/** Low = 0*/
			Low = 0,
			/** Normal = 1*/
			Normal = 1
		}
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** Canceled = 2*/
			Canceled = 2,
			/** Completed = 1*/
			Completed = 1,
			/** Open = 0*/
			Open = 0
		}
		enum StatusCode {
			/** Canceled = 5*/
			Canceled = 5,
			/** Completed = 2*/
			Completed = 2,
			/** Open = 1*/
			Open = 1,
			/** Received = 4*/
			Received = 4,
			/** Sent = 3*/
			Sent = 3
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}