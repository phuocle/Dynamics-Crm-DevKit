//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_salescopilotinsight_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier of the activity for which insights are generated */
			msdyn_activityid: DevKit.Controls.Lookup;
			/** CTA Type of the Insight */
			msdyn_ctatype: DevKit.Controls.OptionSet;
			/** The due date of the insight */
			msdyn_duedate: DevKit.Controls.DateTime;
			/** Insight data of the referenced entity record */
			msdyn_insighttext: DevKit.Controls.String;
			/** The name of the record. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier of the referenced entity for which insights are generated. */
			msdyn_targetentityid: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_salescopilotinsight_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_salescopilotinsight_Information */
		Body: DevKit.Formmsdyn_salescopilotinsight_Information.Body;
		/** The Navigation of form msdyn_salescopilotinsight_Information */
		Navigation: DevKit.Formmsdyn_salescopilotinsight_Information.Navigation;
		/** The SidePanes of form msdyn_salescopilotinsight_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_salescopilotinsightApi {
		/**
		* DynamicsCrm.DevKit msdyn_salescopilotinsightApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the activity for which insights are generated */
		msdyn_activityid_appointment: string;
		/** Unique identifier of the activity for which insights are generated */
		msdyn_activityid_email: string;
		/** Unique identifier of the activity for which insights are generated */
		msdyn_activityid_phonecall: string;
		/** Unique identifier of the activity for which insights are generated */
		msdyn_activityid_task: string;
		/** CTA Type of the Insight */
		msdyn_ctatype: OptionSet.msdyn_salescopilotinsight.msdyn_ctatype;
		/** The due date of the insight */
		msdyn_duedate_UtcDateAndTime: Date;
		/** Insight data of the referenced entity record */
		msdyn_insighttext: string;
		/** The name of the record. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_salescopilotinsightId: string;
		/** Unique identifier of the referenced entity for which insights are generated. */
		msdyn_targetentityid_account: string;
		/** Unique identifier of the referenced entity for which insights are generated. */
		msdyn_targetentityid_contact: string;
		/** Unique identifier of the referenced entity for which insights are generated. */
		msdyn_targetentityid_lead: string;
		/** Unique identifier of the referenced entity for which insights are generated. */
		msdyn_targetentityid_opportunity: string;
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
		/** Status of the Sales Copilot Insight */
		statecode: OptionSet.msdyn_salescopilotinsight.statecode;
		/** Reason for the status of the Sales Copilot Insight */
		statuscode: OptionSet.msdyn_salescopilotinsight.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the activity for which insights are generated */
			readonly msdyn_activityid_appointment: string;
			/** Unique identifier of the activity for which insights are generated */
			readonly msdyn_activityid_email: string;
			/** Unique identifier of the activity for which insights are generated */
			readonly msdyn_activityid_phonecall: string;
			/** Unique identifier of the activity for which insights are generated */
			readonly msdyn_activityid_task: string;
			/** CTA Type of the Insight */
			readonly msdyn_ctatype: string;
			/** The due date of the insight */
			readonly msdyn_duedate_UtcDateAndTime: string;
			/** Insight data of the referenced entity record */
			readonly msdyn_insighttext: string;
			/** The name of the record. */
			readonly msdyn_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_salescopilotinsightId: string;
			/** Unique identifier of the referenced entity for which insights are generated. */
			readonly msdyn_targetentityid_account: string;
			/** Unique identifier of the referenced entity for which insights are generated. */
			readonly msdyn_targetentityid_contact: string;
			/** Unique identifier of the referenced entity for which insights are generated. */
			readonly msdyn_targetentityid_lead: string;
			/** Unique identifier of the referenced entity for which insights are generated. */
			readonly msdyn_targetentityid_opportunity: string;
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
			/** Status of the Sales Copilot Insight */
			readonly statecode: string;
			/** Reason for the status of the Sales Copilot Insight */
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
	namespace msdyn_salescopilotinsight {
		enum msdyn_activityidIdType {
		}
		enum msdyn_ctatype {
			/** 8 */
			Account_Catch_Up,
			/** 2 */
			Email_Follow_Up,
			/** 1 */
			Email_Reminder,
			/** 9 */
			Lead_Catch_Up,
			/** 6 */
			Meeting_Follow_Up,
			/** 5 */
			Meeting_Reminder,
			/** 7 */
			Opportunity_Catch_Up,
			/** 4 */
			Phone_Call_Follow_Up,
			/** 3 */
			Phone_Call_Reminder
		}
		enum msdyn_targetentityidIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}