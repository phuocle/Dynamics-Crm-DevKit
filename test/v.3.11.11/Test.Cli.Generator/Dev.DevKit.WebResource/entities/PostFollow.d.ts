//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormPostFollow_Information {
		interface tab_general_Sections {
			Follow_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormPostFollow_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form PostFollow_Information */
		Body: DevKit.FormPostFollow_Information.Body;
		/** The Process of form PostFollow_Information */
		Process: DevKit.FormPostFollow_Information.Process;
		/** The SidePanes of form PostFollow_Information */
		SidePanes: DevKit.SidePanes;
	}
	class PostFollowApi {
		/**
		* DynamicsCrm.DevKit PostFollowApi
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
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the follow. */
		readonly OwningTeam: string;
		/** Unique identifier for the user who owns the record. */
		readonly OwningUser: string;
		/** Shows the ID of the post follow. */
		PostFollowId: string;
		/** Internal Use Only */
		readonly PostToYammer: boolean;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_account: string;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_appointment: string;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_competitor: string;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_contact: string;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_incident: string;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_knowledgearticle: string;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_lead: string;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_opportunity: string;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_phonecall: string;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_processsession: string;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_queue: string;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_recurringappointmentmaster: string;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_systemuser: string;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_task: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of post follow. */
		readonly VersionNumber: number;
		/** Internal Use Only */
		readonly YammerPostState: number;
		/** Internal Use Only */
		readonly YammerRetryCount: number;
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the follow. */
			readonly OwningTeam: string;
			/** Unique identifier for the user who owns the record. */
			readonly OwningUser: string;
			/** Shows the ID of the post follow. */
			readonly PostFollowId: string;
			/** Internal Use Only */
			readonly PostToYammer: string;
			/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
			readonly regardingobjectid_account: string;
			/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
			readonly regardingobjectid_appointment: string;
			/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
			readonly regardingobjectid_competitor: string;
			/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
			readonly regardingobjectid_contact: string;
			/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
			readonly regardingobjectid_incident: string;
			/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
			readonly regardingobjectid_knowledgearticle: string;
			/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
			readonly regardingobjectid_lead: string;
			/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
			readonly regardingobjectid_opportunity: string;
			/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
			readonly regardingobjectid_phonecall: string;
			/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
			readonly regardingobjectid_processsession: string;
			/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
			readonly regardingobjectid_queue: string;
			/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
			readonly regardingobjectid_recurringappointmentmaster: string;
			/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
			readonly regardingobjectid_systemuser: string;
			/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
			readonly regardingobjectid_task: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of post follow. */
			readonly VersionNumber: string;
			/** Internal Use Only */
			readonly YammerPostState: string;
			/** Internal Use Only */
			readonly YammerRetryCount: string;
		}
	}
}
declare namespace OptionSet {
	namespace PostFollow {
		enum OwnerIdType {
		}
		enum RegardingObjectTypeCode {
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