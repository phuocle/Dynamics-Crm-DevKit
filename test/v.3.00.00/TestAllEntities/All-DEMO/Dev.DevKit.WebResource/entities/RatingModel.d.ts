//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRatingModel_Information {
		interface tab__EB7E3846_44DC_4541_AB63_5C9FB594F107_Sections {
			_EB7E3846_44DC_4541_AB63_5C9FB594F107_SECTION_3: DevKit.Controls.Section;
			_FC24DD79_F2FF_4942_BB88_C5EF718132F1: DevKit.Controls.Section;
		}
		interface tab__EB7E3846_44DC_4541_AB63_5C9FB594F107 extends DevKit.Controls.ITab {
			Section: tab__EB7E3846_44DC_4541_AB63_5C9FB594F107_Sections;
		}
		interface Tabs {
			_EB7E3846_44DC_4541_AB63_5C9FB594F107: tab__EB7E3846_44DC_4541_AB63_5C9FB594F107;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the maximum rating value. */
			MaxRatingValue: DevKit.Controls.Integer;
			/** Enter the minimum rating value. */
			MinRatingValue: DevKit.Controls.Integer;
			/** Shows whether the entity can use the rating model. */
			msdyn_RatableEntity: DevKit.Controls.OptionSet;
			/** Type the name of the rating model. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navRatings: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			RatingValues: DevKit.Controls.Grid;
		}
	}
	class FormRatingModel_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form RatingModel_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form RatingModel_Information */
		Body: DevKit.FormRatingModel_Information.Body;
		/** The Navigation of form RatingModel_Information */
		Navigation: DevKit.FormRatingModel_Information.Navigation;
		/** The Process of form RatingModel_Information */
		Process: DevKit.FormRatingModel_Information.Process;
		/** The Grid of form RatingModel_Information */
		Grid: DevKit.FormRatingModel_Information.Grid;
		/** The SidePanes of form RatingModel_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormRatingModel_Omnichannel_Information {
		interface tab__EB7E3846_44DC_4541_AB63_5C9FB594F107_Sections {
			_EB7E3846_44DC_4541_AB63_5C9FB594F107_SECTION_3: DevKit.Controls.Section;
			_FC24DD79_F2FF_4942_BB88_C5EF718132F1: DevKit.Controls.Section;
		}
		interface tab__EB7E3846_44DC_4541_AB63_5C9FB594F107 extends DevKit.Controls.ITab {
			Section: tab__EB7E3846_44DC_4541_AB63_5C9FB594F107_Sections;
		}
		interface Tabs {
			_EB7E3846_44DC_4541_AB63_5C9FB594F107: tab__EB7E3846_44DC_4541_AB63_5C9FB594F107;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the maximum rating value. */
			MaxRatingValue: DevKit.Controls.Integer;
			/** Enter the minimum rating value. */
			MinRatingValue: DevKit.Controls.Integer;
			/** Type the name of the rating model. */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navRatings: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			RatingValues: DevKit.Controls.Grid;
		}
	}
	class FormRatingModel_Omnichannel_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form RatingModel_Omnichannel_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form RatingModel_Omnichannel_Information */
		Body: DevKit.FormRatingModel_Omnichannel_Information.Body;
		/** The Navigation of form RatingModel_Omnichannel_Information */
		Navigation: DevKit.FormRatingModel_Omnichannel_Information.Navigation;
		/** The Process of form RatingModel_Omnichannel_Information */
		Process: DevKit.FormRatingModel_Omnichannel_Information.Process;
		/** The Grid of form RatingModel_Omnichannel_Information */
		Grid: DevKit.FormRatingModel_Omnichannel_Information.Grid;
		/** The SidePanes of form RatingModel_Omnichannel_Information */
		SidePanes: DevKit.SidePanes;
	}
	class RatingModelApi {
		/**
		* DynamicsCrm.DevKit RatingModelApi
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
		/** Exchange rate for the currency associated with the ratingmodel with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Enter the maximum rating value. */
		MaxRatingValue: DevKit.WebApi.IntegerValue;
		/** Enter the minimum rating value. */
		MinRatingValue: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows whether the entity can use the rating model. */
		msdyn_RatableEntity: DevKit.WebApi.OptionSetValue;
		/** Type the name of the rating model. */
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
		/** Unique identifier of the rating model. */
		RatingModelId: DevKit.WebApi.GuidValue;
		/** Status of the Rating Model */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Rating Model */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Exchange rate for the currency associated with the RatingModel with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace RatingModel {
		enum msdyn_RatableEntity {
			/** 192350000 */
			None,
			/** 192350001 */
			Skill
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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