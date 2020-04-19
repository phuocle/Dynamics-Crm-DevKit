//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormMain_form {
		interface tab__92E59EE7_820A_42FC_907F_F86D2C4677C2_Sections {
			_92E59EE7_820A_42FC_907F_F86D2C4677C2_SECTION_1: DevKit.Form.Controls.ControlSection;
			_92E59EE7_820A_42FC_907F_F86D2C4677C2_SECTION_2: DevKit.Form.Controls.ControlSection;
			Content: DevKit.Form.Controls.ControlSection;
		}
		interface tab__92E59EE7_820A_42FC_907F_F86D2C4677C2 extends DevKit.Form.Controls.IControlTab {
			Section: tab__92E59EE7_820A_42FC_907F_F86D2C4677C2_Sections;
		}
		interface Tabs {
			_92E59EE7_820A_42FC_907F_F86D2C4677C2: tab__92E59EE7_820A_42FC_907F_F86D2C4677C2;
		}
		interface Body {
			Tab: Tabs;
			msdyn_content: DevKit.Form.Controls.ControlActionCards;
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Shows whether this article is only visible internally. */
			msdyn_isinternal: DevKit.Form.Controls.ControlBoolean;
			msdyn_keywords: DevKit.Form.Controls.ControlString;
			msdyn_languagelocaleid: DevKit.Form.Controls.ControlString;
			msdyn_LanguageLocaleIdName: DevKit.Form.Controls.ControlString;
			/** Type a name for the Knowledge Article Template */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			msdyn_subjectid: DevKit.Form.Controls.ControlLookup;
			/** Type a title for the Knowledge Article Template */
			msdyn_title: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormMain_form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Main_form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Main_form */
		Body: LuckyStar.FormMain_form.Body;
	}
	class msdyn_knowledgearticletemplateApi {
		/**
		* DynamicsCrm.DevKit msdyn_knowledgearticletemplateApi
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
		/** Shows the body of the article stored in HTML format. */
		msdyn_Content: DevKit.WebApi.StringValue;
		msdyn_Description: DevKit.WebApi.StringValue;
		/** Shows whether this article is only visible internally. */
		msdyn_isinternal: DevKit.WebApi.BooleanValue;
		msdyn_keywords: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_knowledgearticletemplateId: DevKit.WebApi.GuidValue;
		msdyn_languagelocaleid: DevKit.WebApi.StringValue;
		msdyn_LanguageLocaleIdName: DevKit.WebApi.StringValue;
		/** Type a name for the Knowledge Article Template */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
		msdyn_subjectid: DevKit.WebApi.LookupValue;
		/** Type a title for the Knowledge Article Template */
		msdyn_title: DevKit.WebApi.StringValue;
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
		/** Status of the Knowledge Article Template */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Knowledge Article Template */
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
	namespace msdyn_knowledgearticletemplate {
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
//{'JsForm':['Main form'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}