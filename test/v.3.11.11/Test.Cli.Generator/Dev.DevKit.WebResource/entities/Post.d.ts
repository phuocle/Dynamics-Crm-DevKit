//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormPost_Information {
		interface tab_general_Sections {
			Post_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the parent record for the post to identify the customer, opportunity, case, or other record that the post most closely relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Select whether the post was created manually or automatically. */
			Source: DevKit.Controls.OptionSet;
			/** Shows the text of a post. If this is a manual post, it appears in plain text. If this is an auto post, it appears in XML. */
			Text: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormPost_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Post_Information */
		Body: DevKit.FormPost_Information.Body;
		/** The Process of form Post_Information */
		Process: DevKit.FormPost_Information.Process;
		/** The SidePanes of form Post_Information */
		SidePanes: DevKit.SidePanes;
	}
	class PostApi {
		/**
		* DynamicsCrm.DevKit PostApi
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
		/** Shows the text of a post. */
		LargeText: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization associated with the solution. */
		readonly OrganizationId: string;
		/** Unique identifier for entity instances */
		PostId: string;
		/** Unique identifier of the post regarding with which the post is associated. */
		readonly PostRegardingId: string;
		/** Internal use only. */
		readonly PostToYammer: boolean;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Unique identifier of the business unit that owns the regarding object. */
		readonly RegardingObjectOwningBusinessUnit: string;
		/** Select whether the post was created manually or automatically. */
		Source: OptionSet.Post.Source;
		/** Shows the text of a post. If this is a manual post, it appears in plain text. If this is an auto post, it appears in XML. */
		Text: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Select the post type. */
		Type: OptionSet.Post.Type;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Internal use only. */
		readonly YammerPostState: number;
		/** Internal use only. */
		readonly YammerRetryCount: number;
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the text of a post. */
			readonly LargeText: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the solution. */
			readonly OrganizationId: string;
			/** Unique identifier for entity instances */
			readonly PostId: string;
			/** Unique identifier of the post regarding with which the post is associated. */
			readonly PostRegardingId: string;
			/** Internal use only. */
			readonly PostToYammer: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the regarding object. */
			readonly RegardingObjectOwningBusinessUnit: string;
			/** Select whether the post was created manually or automatically. */
			readonly Source: string;
			/** Shows the text of a post. If this is a manual post, it appears in plain text. If this is an auto post, it appears in XML. */
			readonly Text: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Select the post type. */
			readonly Type: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Internal use only. */
			readonly YammerPostState: string;
			/** Internal use only. */
			readonly YammerRetryCount: string;
		}
	}
}
declare namespace OptionSet {
	namespace Post {
		enum RegardingObjectOwnerIdType {
		}
		enum RegardingObjectTypeCode {
		}
		enum Source {
			/** 3 */
			ActionHub_Post,
			/** 1 */
			Auto_Post,
			/** 2 */
			Manual_Post
		}
		enum Type {
			/** 1 */
			Check_in,
			/** 2 */
			Idea,
			/** 3 */
			News,
			/** 4 */
			Private_Message,
			/** 5 */
			Question,
			/** 6 */
			Re_post,
			/** 7 */
			Status
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