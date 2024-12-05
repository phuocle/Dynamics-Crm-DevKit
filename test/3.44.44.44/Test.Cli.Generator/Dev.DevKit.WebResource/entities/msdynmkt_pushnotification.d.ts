//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormForm {
		interface Tabs {
		}
		interface Body {
			msdynmkt_consentcompliancegroupcontrol: DevKit.Controls.ActionCards;
			msdynmkt_imageid: DevKit.Controls.ActionCards;
			msdynmkt_link: DevKit.Controls.ActionCards;
			msdynmkt_message: DevKit.Controls.ActionCards;
			msdynmkt_onclickbehavior: DevKit.Controls.OptionSet;
			msdynmkt_subtitle: DevKit.Controls.ActionCards;
			msdynmkt_survey: DevKit.Controls.ActionCards;
			msdynmkt_title: DevKit.Controls.ActionCards;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Reason for the status of the push notification */
			statuscode: DevKit.Controls.OptionSet;
			textnoconsentcontrol: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdynmkt_journeydependency_dependency_msdynmkt_pushnotification: DevKit.Controls.NavigationItem
		}
	}
	class FormForm extends DevKit.IForm {
		/**
		* Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Form */
		Body: DevKit.FormForm.Body;
		/** The Navigation of form Form */
		Navigation: DevKit.FormForm.Navigation;
		/** The SidePanes of form Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdynmkt_pushnotification_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_placeholders: DevKit.Controls.String;
		}
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			msdynmkt_appname: DevKit.Controls.String;
			msdynmkt_compliance: DevKit.Controls.Lookup;
			msdynmkt_consentcompliancegroupcontrol: DevKit.Controls.ActionCards;
			msdynmkt_imageid: DevKit.Controls.String;
			msdynmkt_link: DevKit.Controls.String;
			msdynmkt_message: DevKit.Controls.String;
			msdynmkt_onclickbehavior: DevKit.Controls.OptionSet;
			msdynmkt_purpose: DevKit.Controls.Lookup;
			/** Unique identifier for entity instances */
			msdynmkt_pushnotificationId: DevKit.Controls.String;
			msdynmkt_subtitle: DevKit.Controls.String;
			msdynmkt_title: DevKit.Controls.String;
			msdynmkt_topic: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			PushNotificationtHostControl: DevKit.Controls.ActionCards;
			/** Reason for the status of the push notification */
			statuscode: DevKit.Controls.OptionSet;
			textnoconsentcontrol: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdynmkt_journeydependency_dependency_msdynmkt_pushnotification: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdynmkt_pushnotification_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_pushnotification_Information */
		Body: DevKit.Formmsdynmkt_pushnotification_Information.Body;
		/** The Header section of form msdynmkt_pushnotification_Information */
		Header: DevKit.Formmsdynmkt_pushnotification_Information.Header;
		/** The Navigation of form msdynmkt_pushnotification_Information */
		Navigation: DevKit.Formmsdynmkt_pushnotification_Information.Navigation;
		/** The SidePanes of form msdynmkt_pushnotification_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_pushnotificationApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_pushnotificationApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdynmkt_pushnotification.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		msdynmkt_appname: string;
		msdynmkt_compliance: string;
		msdynmkt_description: string;
		msdynmkt_imageid: string;
		msdynmkt_link: string;
		msdynmkt_message: string;
		msdynmkt_messagedesignation: OptionSet.msdynmkt_pushnotification.msdynmkt_messagedesignation;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		msdynmkt_onclickbehavior: OptionSet.msdynmkt_pushnotification.msdynmkt_onclickbehavior;
		msdynmkt_placeholders: string;
		msdynmkt_purpose: string;
		/** Unique identifier for entity instances */
		msdynmkt_pushnotificationId: string;
		msdynmkt_recipient: string;
		msdynmkt_subtitle: string;
		msdynmkt_title: string;
		msdynmkt_topic: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the push notification */
		statecode: OptionSet.msdynmkt_pushnotification.statecode;
		/** Reason for the status of the push notification */
		statuscode: OptionSet.msdynmkt_pushnotification.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdynmkt_appname: string;
			readonly msdynmkt_compliance: string;
			readonly msdynmkt_description: string;
			readonly msdynmkt_imageid: string;
			readonly msdynmkt_link: string;
			readonly msdynmkt_message: string;
			readonly msdynmkt_messagedesignation: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			readonly msdynmkt_onclickbehavior: string;
			readonly msdynmkt_placeholders: string;
			readonly msdynmkt_purpose: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_pushnotificationId: string;
			readonly msdynmkt_recipient: string;
			readonly msdynmkt_subtitle: string;
			readonly msdynmkt_title: string;
			readonly msdynmkt_topic: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the push notification */
			readonly statecode: string;
			/** Reason for the status of the push notification */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
	namespace msdynmkt_pushnotification {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdynmkt_messagedesignation {
			/** 534120000 */
			Commercial,
			/** 534120001 */
			Transactional
		}
		enum msdynmkt_onclickbehavior {
			/** 534120002 */
			Open_Customer_Voice_survey,
			/** 534120001 */
			Open_in_browser,
			/** 534120000 */
			Open_the_app
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Draft,
			/** 100 */
			Inactive,
			/** 2 */
			Ready_to_send,
			/** 3 */
			Ready_to_send_editing
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