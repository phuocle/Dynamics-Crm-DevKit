//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocapplebusinessaccount_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_ocapplebusinessaccount_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocapplebusinessaccount_Information */
		Body: DevKit.Formmsdyn_ocapplebusinessaccount_Information.Body;
		/** The Process of form msdyn_ocapplebusinessaccount_Information */
		Process: DevKit.Formmsdyn_ocapplebusinessaccount_Information.Process;
		/** The SidePanes of form msdyn_ocapplebusinessaccount_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocapplebusinessaccountApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocapplebusinessaccountApi
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
		/** Unique identifier for Authentication settings associated with Channel instance. */
		msdyn_BusinessAuthsettingsId: string;
		/** Apple messages for business account business id */
		msdyn_BusinessId: string;
		/** Flag to enable Apple Pay */
		msdyn_enableapplepay: boolean;
		/** Enable file attachments for agents */
		msdyn_enablefileattachmentsforagents: boolean;
		/** Enable file attachments for customers */
		msdyn_enablefileattachmentsforcustomers: boolean;
		/** Flag to enable Apple OAuth */
		msdyn_enableoauth: boolean;
		/** Apple messages for business account live work stream */
		msdyn_liveworkstreamid: string;
		/** The name of the custom entity. */
		msdyn_Name: string;
		/** Unique identifier for entity instances */
		msdyn_ocapplebusinessaccountId: string;
		msdyn_ocpaymentprofileid: string;
		/** Apple messages for business account widget language */
		msdyn_OcWidgetLanguage: string;
		/** Lookup to Dynamics 365 Customer Voice survey field */
		msdyn_PostConversationSurvey: string;
		/** Apple messages for business account enable post conversation survey flag */
		msdyn_PostConversationSurveyEnable: boolean;
		/** Prefix text for survey link message that will be sent to the user. */
		msdyn_PostConversationSurveyMessageText: string;
		/** Mode of the survey to be sent */
		msdyn_PostConversationSurveyMode: OptionSet.msdyn_ocapplebusinessaccount.msdyn_PostConversationSurveyMode;
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
		/** Status of the Apple messages for business account */
		statecode: OptionSet.msdyn_ocapplebusinessaccount.statecode;
		/** Reason for the status of the Apple messages for business account */
		statuscode: OptionSet.msdyn_ocapplebusinessaccount.statuscode;
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
			/** Unique identifier for Authentication settings associated with Channel instance. */
			readonly msdyn_BusinessAuthsettingsId: string;
			/** Apple messages for business account business id */
			readonly msdyn_BusinessId: string;
			/** Flag to enable Apple Pay */
			readonly msdyn_enableapplepay: string;
			/** Enable file attachments for agents */
			readonly msdyn_enablefileattachmentsforagents: string;
			/** Enable file attachments for customers */
			readonly msdyn_enablefileattachmentsforcustomers: string;
			/** Flag to enable Apple OAuth */
			readonly msdyn_enableoauth: string;
			/** Apple messages for business account live work stream */
			readonly msdyn_liveworkstreamid: string;
			/** The name of the custom entity. */
			readonly msdyn_Name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_ocapplebusinessaccountId: string;
			readonly msdyn_ocpaymentprofileid: string;
			/** Apple messages for business account widget language */
			readonly msdyn_OcWidgetLanguage: string;
			/** Lookup to Dynamics 365 Customer Voice survey field */
			readonly msdyn_PostConversationSurvey: string;
			/** Apple messages for business account enable post conversation survey flag */
			readonly msdyn_PostConversationSurveyEnable: string;
			/** Prefix text for survey link message that will be sent to the user. */
			readonly msdyn_PostConversationSurveyMessageText: string;
			/** Mode of the survey to be sent */
			readonly msdyn_PostConversationSurveyMode: string;
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
			/** Status of the Apple messages for business account */
			readonly statecode: string;
			/** Reason for the status of the Apple messages for business account */
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
	namespace msdyn_ocapplebusinessaccount {
		enum msdyn_PostConversationSurveyMode {
			/** 192350000 */
			Insert_survey_in_conversation,
			/** 192350001 */
			Send_survey_link_to_conversation
		}
		enum OwnerIdType {
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