//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocsmschannelsetting_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_ocsmschannelsetting_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocsmschannelsetting_Information */
		Body: DevKit.Formmsdyn_ocsmschannelsetting_Information.Body;
		/** The Process of form msdyn_ocsmschannelsetting_Information */
		Process: DevKit.Formmsdyn_ocsmschannelsetting_Information.Process;
		/** The SidePanes of form msdyn_ocsmschannelsetting_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocsmschannelsettingApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocsmschannelsettingApi
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
		/** Enable file attachments for agents */
		msdyn_enablefileattachmentforagents: boolean;
		/** Enable file attachments for customers */
		msdyn_enablefileattachmentforcustomers: boolean;
		/** URL for Inbound link */
		msdyn_inboundurl: string;
		/** The language setting for the SMS number */
		msdyn_language: string;
		/** Unique identifier for Work Stream associated with SMS Number */
		msdyn_liveworkstreamid: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_ocsmschannelsettingId: string;
		/** Used to denote operating hours for the sms numbers record */
		msdyn_operatinghourid: string;
		/** Phone Number */
		msdyn_PhoneNumberId: string;
		/** Lookup to Dynamics 365 Customer Voice survey field */
		msdyn_postconversationsurvey: string;
		/** Enable or disable bot survey */
		msdyn_postconversationsurveybotsurvey: boolean;
		/** Prefix text for survey link message that will be sent to the user. */
		msdyn_postconversationsurveybotsurveymessagetext: string;
		/** Mode of the survey to be sent */
		msdyn_postconversationsurveybotsurveymode: OptionSet.msdyn_ocsmschannelsetting.msdyn_postconversationsurveybotsurveymode;
		/** To enable or disable post conversation survey */
		msdyn_postconversationsurveyenable: boolean;
		/** Prefix text for survey link message that will be sent to the user. */
		msdyn_postconversationsurveymessagetext: string;
		/** Mode of the survey to be sent */
		msdyn_postconversationsurveymode: OptionSet.msdyn_ocsmschannelsetting.msdyn_postconversationsurveymode;
		/** Lookup to Dynamics 365 Customer Voice survey field */
		msdyn_postconversationsurveyseparatebotsurvey: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the ocsmschannelsetting */
		statecode: OptionSet.msdyn_ocsmschannelsetting.statecode;
		/** Reason for the status of the ocsmschannelsetting */
		statuscode: OptionSet.msdyn_ocsmschannelsetting.statuscode;
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
			/** Enable file attachments for agents */
			readonly msdyn_enablefileattachmentforagents: string;
			/** Enable file attachments for customers */
			readonly msdyn_enablefileattachmentforcustomers: string;
			/** URL for Inbound link */
			readonly msdyn_inboundurl: string;
			/** The language setting for the SMS number */
			readonly msdyn_language: string;
			/** Unique identifier for Work Stream associated with SMS Number */
			readonly msdyn_liveworkstreamid: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_ocsmschannelsettingId: string;
			/** Used to denote operating hours for the sms numbers record */
			readonly msdyn_operatinghourid: string;
			/** Phone Number */
			readonly msdyn_PhoneNumberId: string;
			/** Lookup to Dynamics 365 Customer Voice survey field */
			readonly msdyn_postconversationsurvey: string;
			/** Enable or disable bot survey */
			readonly msdyn_postconversationsurveybotsurvey: string;
			/** Prefix text for survey link message that will be sent to the user. */
			readonly msdyn_postconversationsurveybotsurveymessagetext: string;
			/** Mode of the survey to be sent */
			readonly msdyn_postconversationsurveybotsurveymode: string;
			/** To enable or disable post conversation survey */
			readonly msdyn_postconversationsurveyenable: string;
			/** Prefix text for survey link message that will be sent to the user. */
			readonly msdyn_postconversationsurveymessagetext: string;
			/** Mode of the survey to be sent */
			readonly msdyn_postconversationsurveymode: string;
			/** Lookup to Dynamics 365 Customer Voice survey field */
			readonly msdyn_postconversationsurveyseparatebotsurvey: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the ocsmschannelsetting */
			readonly statecode: string;
			/** Reason for the status of the ocsmschannelsetting */
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
	namespace msdyn_ocsmschannelsetting {
		enum msdyn_postconversationsurveybotsurveymode {
			/** 192350000 */
			Insert_survey_in_conversation,
			/** 192350001 */
			Send_survey_link_to_conversation
		}
		enum msdyn_postconversationsurveymode {
			/** 192350000 */
			Insert_survey_in_conversation,
			/** 192350001 */
			Send_survey_link_to_conversation
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