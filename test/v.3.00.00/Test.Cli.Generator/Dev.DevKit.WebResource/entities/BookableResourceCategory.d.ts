﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBookableResourceCategory_Information {
		interface tab__35EF8C40_AFF6_447D_A927_D6E2F3D859BB_Sections {
			_2E7FD731_54AD_4197_AB2C_5CDD58651954: DevKit.Controls.Section;
			_43AB3D2C_EC2C_437E_A161_563C8AA60436: DevKit.Controls.Section;
			SkillsSection: DevKit.Controls.Section;
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
			/** Type a detailed description of what the categorization is about. */
			Description: DevKit.Controls.String;
			/** Select the billing type for this resource role. */
			msdyn_billingtype: DevKit.Controls.OptionSet;
			/** Enter the target usage rate for this resource role. */
			msdyn_targetutilization: DevKit.Controls.Integer;
			/** Type the name of the resource category. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_bookableresourcecategory_bookableresourcebooking_resourcecategoryid: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcecategory_bookableresourcebookingheader_resourcecategoryid: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcecategory_msdyn_projectapproval_ResourceCategory: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcecategory_msdyn_projectparameter_projectmanagerrole: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcecategory_msdyn_projectparameter_teammemberrole: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcecategory_msdyn_quotelineanalyticsbreakdown_ResourceCategory: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcecategory_msdyn_roleutilization_role: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcecategory_resourcerequirement: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navResourceCategories: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			ResourceCategoryAssociations: DevKit.Controls.Grid;
			RoleCompetencyRequirement: DevKit.Controls.Grid;
		}
	}
	class FormBookableResourceCategory_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form BookableResourceCategory_Information */
		Body: DevKit.FormBookableResourceCategory_Information.Body;
		/** The Navigation of form BookableResourceCategory_Information */
		Navigation: DevKit.FormBookableResourceCategory_Information.Navigation;
		/** The Process of form BookableResourceCategory_Information */
		Process: DevKit.FormBookableResourceCategory_Information.Process;
		/** The Grid of form BookableResourceCategory_Information */
		Grid: DevKit.FormBookableResourceCategory_Information.Grid;
		/** The SidePanes of form BookableResourceCategory_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Unique identifier of the resource category. */
		BookableResourceCategoryId: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Type a detailed description of what the categorization is about. */
		Description: string;
		/** Exchange rate for the currency associated with the bookableresourcecategory with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Select the billing type for this resource role. */
		msdyn_billingtype: OptionSet.BookableResourceCategory.msdyn_billingtype;
		/** Enter the target usage rate for this resource role. */
		msdyn_targetutilization: number;
		/** Enter the default transaction category for this resource role. */
		msdyn_TransactionCategory: string;
		/** Type the name of the resource category. */
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
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
		/** Status of the Resource Category */
		StateCode: OptionSet.BookableResourceCategory.StateCode;
		/** Reason for the status of the Resource Category */
		StatusCode: OptionSet.BookableResourceCategory.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Exchange rate for the currency associated with the BookableResourceCategory with respect to the base currency. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}