﻿//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormEmail_Signature {
		interface tab_general_Sections {
			Details: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Language of the email signature. */
			LanguageCode: DevKit.Form.Controls.ControlInteger;
			/** Unique identifier of the user or team who owns the email signature for the email activity. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Title of the email signature. */
			Title: DevKit.Form.Controls.ControlString;
		}
	}
	class FormEmail_Signature extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Email_Signature
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Email_Signature */
		Body: LuckyStar.FormEmail_Signature.Body;
	}
	class EmailSignatureApi {
		/**
		* DynamicsCrm.DevKit EmailSignatureApi
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
		/** Body text of the email signature. */
		Body: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the email signature. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		CreatedByDsc: DevKit.WebApi.IntegerValueReadonly;
		/** Date and time when the email signature was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the email signature. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		CreatedOnBehalfByDsc: DevKit.WebApi.IntegerValueReadonly;
		/** Description of the email signature. */
		Description: DevKit.WebApi.StringValue;
		/** Unique identifier of the email signature. */
		EmailSignatureId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		GenerationTypeCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Information that specifies whether the email signature is default to the user. */
		IsDefault: DevKit.WebApi.BooleanValue;
		/** Information about whether the email signature is personal or is available to all users. */
		IsPersonal: DevKit.WebApi.BooleanValue;
		/** Language of the email signature. */
		LanguageCode: DevKit.WebApi.IntegerValue;
		/** MIME type of the email signature. */
		MimeType: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the email signature. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		ModifiedByDsc: DevKit.WebApi.IntegerValueReadonly;
		/** Date and time when the email signature was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the email signature. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		ModifiedOnBehalfByDsc: DevKit.WebApi.IntegerValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		OwnerIdDsc: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the business unit that owns the email signature. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the email signature. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the email signature. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** XML data for the body of the email signature. */
		PresentationXml: DevKit.WebApi.StringValue;
		/** Title of the email signature. */
		Title: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace EmailSignature {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
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
//{'JsForm':['Email Signature'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}