//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormPersonalization_settings {
		interface tab__A6FFD69E_DCD2_4E37_A53F_572FA360DBE6_Sections {
			_B0FD43B0_F1AD_46FF_8736_361B7567CB4B: DevKit.Controls.Section;
		}
		interface tab_tab_sound_settings_Sections {
			tab_sound_settings_section_1: DevKit.Controls.Section;
		}
		interface tab__A6FFD69E_DCD2_4E37_A53F_572FA360DBE6 extends DevKit.Controls.ITab {
			Section: tab__A6FFD69E_DCD2_4E37_A53F_572FA360DBE6_Sections;
		}
		interface tab_tab_sound_settings extends DevKit.Controls.ITab {
			Section: tab_tab_sound_settings_Sections;
		}
		interface Tabs {
			_A6FFD69E_DCD2_4E37_A53F_572FA360DBE6: tab__A6FFD69E_DCD2_4E37_A53F_572FA360DBE6;
			tab_sound_settings: tab_tab_sound_settings;
		}
		interface Body {
			Tab: Tabs;
			msdyn_personalmessageenabled: DevKit.Controls.ActionCards;
			/** Field to host the sound form custom control */
			msdyn_SoundFormControl: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			personalquickreplies: DevKit.Controls.Grid;
		}
	}
	class FormPersonalization_settings extends DevKit.IForm {
		/**
		* Personalization settings [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Personalization_settings */
		Body: DevKit.FormPersonalization_settings.Body;
		/** The Process of form Personalization_settings */
		Process: DevKit.FormPersonalization_settings.Process;
		/** The Grid of form Personalization_settings */
		Grid: DevKit.FormPersonalization_settings.Grid;
		/** The SidePanes of form Personalization_settings */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_usersettingApi {
		/**
		* DynamicsCrm.DevKit msdyn_usersettingApi
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
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_personalsoundenabled: DevKit.WebApi.BooleanValue;
		/** Field to host the sound form custom control */
		msdyn_SoundFormControl: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_usersettingId: DevKit.WebApi.GuidValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the User setting */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the User setting */
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
	namespace msdyn_usersetting {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}