//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormBookableResourceCategory_Information {
		interface tab__35EF8C40_AFF6_447D_A927_D6E2F3D859BB_Sections {
			_43AB3D2C_EC2C_437E_A161_563C8AA60436: DevKit.Controls.Section;
			SkillsSection: DevKit.Controls.Section;
			_2E7FD731_54AD_4197_AB2C_5CDD58651954: DevKit.Controls.Section;
		}
		interface tab_Resource_Category_Associations_Sections {
			Resource_Category_Associations_Section: DevKit.Controls.Section;
		}
		interface tab__35EF8C40_AFF6_447D_A927_D6E2F3D859BB extends DevKit.Controls.ITab {
			Section: tab__35EF8C40_AFF6_447D_A927_D6E2F3D859BB_Sections;
		}
		interface tab_Resource_Category_Associations extends DevKit.Controls.ITab {
			Section: tab_Resource_Category_Associations_Sections;
		}
		interface Tabs {
			_35EF8C40_AFF6_447D_A927_D6E2F3D859BB: tab__35EF8C40_AFF6_447D_A927_D6E2F3D859BB;
			Resource_Category_Associations: tab_Resource_Category_Associations;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** Type a detailed description of what the categorization is about. */
			Description: DevKit.Controls.String;
			/** Select the billing type for this resource role. */
			msdyn_billingtype: DevKit.Controls.OptionSet;
			/** Enter the target usage rate for this resource role. */
			msdyn_targetutilization: DevKit.Controls.Integer;
			/** Type the name of the resource category. */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Grid {
			RoleCompetencyRequirement: DevKit.Controls.Grid;
			ResourceCategoryAssociations: DevKit.Controls.Grid;
		}
	}
	class FormBookableResourceCategory_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form BookableResourceCategory_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form BookableResourceCategory_Information */
		Body: MyDog.FormBookableResourceCategory_Information.Body;
		/** The Grid of form BookableResourceCategory_Information */
		Grid: MyDog.FormBookableResourceCategory_Information.Grid;
	}
	class BookableResourceCategoryApi {
		/**
		* DynamicsCrm.DevKit BookableResourceCategoryApi
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
		/** Unique identifier of the resource category. */
		BookableResourceCategoryId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a detailed description of what the categorization is about. */
		Description: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the bookableresourcecategory with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Select the billing type for this resource role. */
		msdyn_billingtype: DevKit.WebApi.OptionSetValue;
		/** Enter the target usage rate for this resource role. */
		msdyn_targetutilization: DevKit.WebApi.IntegerValue;
		/** Enter the default transaction category for this resource role. */
		msdyn_TransactionCategory: DevKit.WebApi.LookupValue;
		/** Type the name of the resource category. */
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
		/** Status of the Resource Category */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Resource Category */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Exchange rate for the currency associated with the BookableResourceCategory with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace BookableResourceCategory {
		enum msdyn_billingtype {
			/** 192350001 */
			Chargeable,
			/** 192350002 */
			Complimentary,
			/** 192350000 */
			Non_Chargeable,
			/** 192350003 */
			Not_Available
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}