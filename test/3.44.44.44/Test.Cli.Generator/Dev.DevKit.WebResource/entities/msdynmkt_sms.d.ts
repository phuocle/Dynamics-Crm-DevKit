//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormForm {
		interface Tabs {
		}
		interface Body {
			msdynmkt_consentcompliancegroupcontrol: DevKit.Controls.ActionCards;
			msdynmkt_designertext: DevKit.Controls.String;
			msdynmkt_messagedesignation: DevKit.Controls.OptionSet;
			msdynmkt_placeholders: DevKit.Controls.String;
			msdynmkt_senderphonenumber: DevKit.Controls.ActionCards;
			msdynmkt_text: DevKit.Controls.ActionCards;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Status of the text message */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdynmkt_journeydependency_dependency_msdynmkt_sms: DevKit.Controls.NavigationItem
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
	namespace Formmsdynmkt_sms_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			msdynmkt_compliance: DevKit.Controls.Lookup;
			msdynmkt_consentcompliancegroupcontrol: DevKit.Controls.ActionCards;
			msdynmkt_designertext: DevKit.Controls.String;
			msdynmkt_messagedesignation: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_placeholders: DevKit.Controls.String;
			msdynmkt_purpose: DevKit.Controls.Lookup;
			msdynmkt_senderphonenumber: DevKit.Controls.ActionCards;
			/** Unique identifier for entity instances */
			msdynmkt_smsId: DevKit.Controls.String;
			msdynmkt_text: DevKit.Controls.ActionCards;
			msdynmkt_topic: DevKit.Controls.Lookup;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			SmsHostControl: DevKit.Controls.ActionCards;
			/** Status of the text message */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdynmkt_journeydependency_dependency_msdynmkt_sms: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdynmkt_sms_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_sms_Information */
		Body: DevKit.Formmsdynmkt_sms_Information.Body;
		/** The Header section of form msdynmkt_sms_Information */
		Header: DevKit.Formmsdynmkt_sms_Information.Header;
		/** The Navigation of form msdynmkt_sms_Information */
		Navigation: DevKit.Formmsdynmkt_sms_Information.Navigation;
		/** The SidePanes of form msdynmkt_sms_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_smsApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_smsApi
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
		readonly ComponentState: OptionSet.msdynmkt_sms.ComponentState;
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
		msdynmkt_compliance: string;
		msdynmkt_designertext: string;
		msdynmkt_messagedesignation: OptionSet.msdynmkt_sms.msdynmkt_messagedesignation;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		msdynmkt_placeholders: string;
		msdynmkt_purpose: string;
		msdynmkt_recipient: string;
		/** Text message sender */
		msdynmkt_senderphonenumber: string;
		/** Unique identifier for entity instances */
		msdynmkt_smsId: string;
		msdynmkt_text: string;
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
		/** Status of the text message */
		statecode: OptionSet.msdynmkt_sms.statecode;
		/** Status of the text message */
		statuscode: OptionSet.msdynmkt_sms.statuscode;
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
			readonly msdynmkt_compliance: string;
			readonly msdynmkt_designertext: string;
			readonly msdynmkt_messagedesignation: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			readonly msdynmkt_placeholders: string;
			readonly msdynmkt_purpose: string;
			readonly msdynmkt_recipient: string;
			/** Text message sender */
			readonly msdynmkt_senderphonenumber: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_smsId: string;
			readonly msdynmkt_text: string;
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
			/** Status of the text message */
			readonly statecode: string;
			/** Status of the text message */
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
	namespace msdynmkt_sms {
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