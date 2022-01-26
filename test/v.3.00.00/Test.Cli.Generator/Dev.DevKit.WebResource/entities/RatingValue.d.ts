//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRatingValue_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_IsDefault: DevKit.Controls.Boolean;
			/** Type a name that represents a rating value such as familiar, good, proficient etc. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the model that this rating value is associated with. */
			RatingModel: DevKit.Controls.Lookup;
			/** Type a rating value which is unique to the rating model it is associated with and lies within the range specified on the model. */
			Value: DevKit.Controls.Integer;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormRatingValue_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form RatingValue_Information */
		Body: DevKit.FormRatingValue_Information.Body;
		/** The Process of form RatingValue_Information */
		Process: DevKit.FormRatingValue_Information.Process;
		/** The SidePanes of form RatingValue_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormRatingValue_Omnichannel_Information {
		interface tab__23CA68C0_BDE9_4D73_884B_419A7610B5C6_Sections {
		}
		interface tab__23CA68C0_BDE9_4D73_884B_419A7610B5C6 extends DevKit.Controls.ITab {
			Section: tab__23CA68C0_BDE9_4D73_884B_419A7610B5C6_Sections;
		}
		interface Tabs {
			_23CA68C0_BDE9_4D73_884B_419A7610B5C6: tab__23CA68C0_BDE9_4D73_884B_419A7610B5C6;
		}
		interface Body {
			Tab: Tabs;
			/** Type a name that represents a rating value such as familiar, good, proficient etc. */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the model that this rating value is associated with. */
			RatingModel: DevKit.Controls.Lookup;
			/** Type a rating value which is unique to the rating model it is associated with and lies within the range specified on the model. */
			Value: DevKit.Controls.Integer;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormRatingValue_Omnichannel_Information extends DevKit.IForm {
		/**
		* Omnichannel Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form RatingValue_Omnichannel_Information */
		Body: DevKit.FormRatingValue_Omnichannel_Information.Body;
		/** The Process of form RatingValue_Omnichannel_Information */
		Process: DevKit.FormRatingValue_Omnichannel_Information.Process;
		/** The SidePanes of form RatingValue_Omnichannel_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormRatingValue_Omnichannel_Information2 {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Type a name that represents a rating value such as familiar, good, proficient etc. */
			Name: DevKit.Controls.String;
			/** Select the model that this rating value is associated with. */
			RatingModel: DevKit.Controls.Lookup;
			/** Type a rating value which is unique to the rating model it is associated with and lies within the range specified on the model. */
			Value: DevKit.Controls.Integer;
		}
	}
	class FormRatingValue_Omnichannel_Information2 extends DevKit.IForm {
		/**
		* Omnichannel Information [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form RatingValue_Omnichannel_Information2 */
		Body: DevKit.FormRatingValue_Omnichannel_Information2.Body;
	}
	class RatingValueApi {
		/**
		* DynamicsCrm.DevKit RatingValueApi
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
		/** Exchange rate for the currency associated with the ratingvalue with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_IsDefault: DevKit.WebApi.BooleanValue;
		/** Type a name that represents a rating value such as familiar, good, proficient etc. */
		Name: DevKit.WebApi.StringValue;
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
		/** Select the model that this rating value is associated with. */
		RatingModel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the rating value. */
		RatingValueId: DevKit.WebApi.GuidValue;
		/** Status of the Rating Value */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Rating Value */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Exchange rate for the currency associated with the RatingValue with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Type a rating value which is unique to the rating model it is associated with and lies within the range specified on the model. */
		Value: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace RatingValue {
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 192350000 */
			Disabled_By_Generation_Process,
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