//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formadobe_recipient_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for Agreement associated with Recipient. */
			adobe_AgreementId: DevKit.Form.Controls.ControlLookup;
			adobe_datesigned: DevKit.Form.Controls.ControlDate;
			adobe_emailaddress: DevKit.Form.Controls.ControlString;
			adobe_fullname: DevKit.Form.Controls.ControlString;
			adobe_hassigned: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			adobe_name: DevKit.Form.Controls.ControlString;
			adobe_parentagreementstatus: DevKit.Form.Controls.ControlString;
			adobe_recipientorderbackup: DevKit.Form.Controls.ControlInteger;
			adobe_signingurl: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formadobe_recipient_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form adobe_recipient_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form adobe_recipient_Information */
		Body: LuckyMokey.Formadobe_recipient_Information.Body;
	}
	namespace Formadobe_recipient_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			adobe_countrycode: DevKit.Form.Controls.ControlString;
			adobe_emailaddress: DevKit.Form.Controls.ControlString;
			adobe_fullname: DevKit.Form.Controls.ControlString;
			adobe_identityverification: DevKit.Form.Controls.ControlOptionSet;
			adobe_overridedefaultverification: DevKit.Form.Controls.ControlBoolean;
			adobe_password: DevKit.Form.Controls.ControlString;
			adobe_phone: DevKit.Form.Controls.ControlString;
			adobe_recipientcrmtype: DevKit.Form.Controls.ControlOptionSet;
			adobe_recipientrole: DevKit.Form.Controls.ControlOptionSet;
			adobe_relatedcontact: DevKit.Form.Controls.ControlLookup;
			adobe_relatedlead: DevKit.Form.Controls.ControlLookup;
			adobe_relateduser: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formadobe_recipient_Quick_Create extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form adobe_recipient_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form adobe_recipient_Quick_Create */
		Body: LuckyMokey.Formadobe_recipient_Quick_Create.Body;
	}
	class adobe_recipientApi {
		/**
		* DynamicsCrm.DevKit adobe_recipientApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier for Agreement associated with Recipient. */
		adobe_AgreementId: DevKit.WebApi.LookupValue;
		adobe_countrycode: DevKit.WebApi.StringValue;
		adobe_datesigned_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		adobe_displayedorder: DevKit.WebApi.StringValue;
		adobe_emailaddress: DevKit.WebApi.StringValue;
		adobe_fullname: DevKit.WebApi.StringValue;
		adobe_hassigned: DevKit.WebApi.StringValue;
		adobe_identityverification: DevKit.WebApi.OptionSetValue;
		/** The name of the custom entity. */
		adobe_name: DevKit.WebApi.StringValue;
		adobe_overridedefaultverification: DevKit.WebApi.BooleanValue;
		adobe_parentagreementstatus: DevKit.WebApi.StringValue;
		adobe_participantid: DevKit.WebApi.StringValue;
		adobe_password: DevKit.WebApi.StringValue;
		adobe_phone: DevKit.WebApi.StringValue;
		adobe_recipientcrmtype: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for entity instances */
		adobe_recipientId: DevKit.WebApi.GuidValue;
		adobe_recipientlookuptype: DevKit.WebApi.OptionSetValue;
		adobe_recipientorderbackup: DevKit.WebApi.IntegerValue;
		adobe_recipientorderint: DevKit.WebApi.IntegerValue;
		adobe_recipientrole: DevKit.WebApi.OptionSetValue;
		adobe_relatedcontact: DevKit.WebApi.LookupValue;
		adobe_relatedlead: DevKit.WebApi.LookupValue;
		adobe_relateduser: DevKit.WebApi.LookupValue;
		adobe_signingurl: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Contains the id of the process associated with the entity. */
		processid: DevKit.WebApi.GuidValue;
		/** Contains the id of the stage where the entity is located. */
		stageid: DevKit.WebApi.GuidValue;
		/** Status of the Recipient */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Recipient */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace adobe_recipient {
		enum adobe_identityverification {
			/** 648770003 */
			EMAIL,
			/** 648770004 */
			PHONE,
			/** 648770000 */
			PASSWORD,
			/** 648770001 */
			KNOWLEDGE_BASE,
			/** 648770002 */
			WEB_IDENTITY
		}
		enum adobe_recipientcrmtype {
			/** 648770000 */
			New,
			/** 648770001 */
			Contact,
			/** 648770002 */
			Lead,
			/** 648770003 */
			User
		}
		enum adobe_recipientlookuptype {
			/** 648770000 */
			Lead,
			/** 648770001 */
			Contact,
			/** 648770002 */
			User
		}
		enum adobe_recipientrole {
			/** 648770000 */
			SIGNER,
			/** 648770001 */
			APPROVER,
			/** 648770002 */
			CC
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
//{'JsForm':['Information','Quick Create'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}