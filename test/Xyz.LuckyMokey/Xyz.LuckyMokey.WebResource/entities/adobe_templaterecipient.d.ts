//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formadobe_templaterecipient_Information {
		interface Tabs {
		}
		interface Body {
			adobe_dynamicrecipient: DevKit.Form.Controls.ControlBoolean;
			adobe_emaildisplay: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			adobe_name: DevKit.Form.Controls.ControlString;
			adobe_primaryentity: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formadobe_templaterecipient_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form adobe_templaterecipient_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form adobe_templaterecipient_Information */
		Body: LuckyMokey.Formadobe_templaterecipient_Information.Body;
	}
	class adobe_templaterecipientApi {
		/**
		* DynamicsCrm.DevKit adobe_templaterecipientApi
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
		adobe_accountoptions: DevKit.WebApi.OptionSetValue;
		adobe_addrecipientmanually: DevKit.WebApi.BooleanValue;
		adobe_contactleadoptions: DevKit.WebApi.StringValue;
		adobe_countrycode: DevKit.WebApi.IntegerValue;
		adobe_customentityoptions: DevKit.WebApi.OptionSetValue;
		adobe_displayedorder: DevKit.WebApi.StringValue;
		adobe_dynamicrecipient: DevKit.WebApi.BooleanValue;
		adobe_email: DevKit.WebApi.StringValue;
		adobe_emaildisplay: DevKit.WebApi.StringValue;
		adobe_fullname: DevKit.WebApi.StringValue;
		adobe_identityverification: DevKit.WebApi.OptionSetValue;
		adobe_multiplerecipients: DevKit.WebApi.BooleanValue;
		/** The name of the custom entity. */
		adobe_name: DevKit.WebApi.StringValue;
		adobe_opportunityoptions: DevKit.WebApi.OptionSetValue;
		adobe_overridedefaultverification: DevKit.WebApi.BooleanValue;
		adobe_password: DevKit.WebApi.StringValue;
		adobe_phonenumber: DevKit.WebApi.StringValue;
		adobe_primarycontactonly: DevKit.WebApi.StringValue;
		adobe_primaryentity: DevKit.WebApi.StringValue;
		adobe_primaryentityschema: DevKit.WebApi.StringValue;
		adobe_recipientorderint: DevKit.WebApi.IntegerValue;
		adobe_recipientrole: DevKit.WebApi.OptionSetValue;
		adobe_recipienttype: DevKit.WebApi.OptionSetValue;
		adobe_relatedcontact: DevKit.WebApi.LookupValue;
		adobe_relatedentity: DevKit.WebApi.StringValue;
		adobe_relatedlead: DevKit.WebApi.LookupValue;
		adobe_relateduser: DevKit.WebApi.LookupValue;
		adobe_sequentialorder: DevKit.WebApi.BooleanValue;
		/** Unique identifier for Agreement Template associated with template recipient. */
		adobe_templateId: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		adobe_templaterecipientId: DevKit.WebApi.GuidValue;
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
		/** Status of the template recipient */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the template recipient */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace adobe_templaterecipient {
		enum adobe_accountoptions {
			/** 648770000 */
			Lead_Contact_Only,
			/** 648770001 */
			All_Contacts_associated_with_Account
		}
		enum adobe_customentityoptions {
			/** 648770000 */
			Lead_Contact_Only,
			/** 648770001 */
			All_Contacts_associated_with_Entity,
			/** 648770002 */
			Lead_Contact_from_associated_Account,
			/** 648770003 */
			All_Contacts_from_associated_Account
		}
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
		enum adobe_opportunityoptions {
			/** 648770000 */
			Lead_Contact_Only,
			/** 648770001 */
			All_Contacts_Associated_With_Opportunity
		}
		enum adobe_recipientrole {
			/** 648770000 */
			SIGNER,
			/** 648770001 */
			APPROVER,
			/** 648770002 */
			CC
		}
		enum adobe_recipienttype {
			/** 648770000 */
			New,
			/** 648770001 */
			Contact,
			/** 648770002 */
			Lead,
			/** 648770003 */
			User
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}