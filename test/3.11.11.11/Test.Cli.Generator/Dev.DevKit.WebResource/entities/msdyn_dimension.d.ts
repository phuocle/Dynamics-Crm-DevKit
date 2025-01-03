﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_dimension_Information {
		interface Tabs {
		}
		interface Body {
			/** Determines if this pricing dimension is applicable for Cost price. */
			msdyn_ApplicableToCost: DevKit.Controls.Boolean;
			/** Determines if this pricing dimension is applicable for Purchase price. */
			msdyn_ApplicableToPurchase: DevKit.Controls.Boolean;
			/** Determines if this pricing dimension is applicable for Sales price. */
			msdyn_ApplicableToSales: DevKit.Controls.Boolean;
			/** Determines priority of the pricing dimension when resolving for Cost price. */
			msdyn_CostPriority: DevKit.Controls.Integer;
			/** Name of the Dimension to be used in pricing calculations. */
			msdyn_name: DevKit.Controls.String;
			/** Determines priority of the pricing dimension when resolving for Purchase price. */
			msdyn_PurchasePriority: DevKit.Controls.Integer;
			/** Determines priority of the pricing dimension when resolving for Sales price. */
			msdyn_SalesPriority: DevKit.Controls.Integer;
			/** Type determines if the dimension is to be used for retrieving the final per unit price or to retrieve a markup that is to be applied on a base price. */
			msdyn_Type: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_dimension_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_dimension_Information */
		Body: DevKit.Formmsdyn_dimension_Information.Body;
		/** The Process of form msdyn_dimension_Information */
		Process: DevKit.Formmsdyn_dimension_Information.Process;
		/** The SidePanes of form msdyn_dimension_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_dimension_New_Form {
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
			/** Determines if this pricing dimension is applicable for Cost price. */
			msdyn_ApplicableToCost: DevKit.Controls.Boolean;
			/** Determines if this pricing dimension is applicable for Purchase price. */
			msdyn_ApplicableToPurchase: DevKit.Controls.Boolean;
			/** Determines if this pricing dimension is applicable for Sales price. */
			msdyn_ApplicableToSales: DevKit.Controls.Boolean;
			/** Determines priority of the pricing dimension when resolving for Cost price. */
			msdyn_CostPriority: DevKit.Controls.Integer;
			/** Name of the Dimension to be used in pricing calculations. */
			msdyn_name: DevKit.Controls.String;
			/** Determines priority of the pricing dimension when resolving for Purchase price. */
			msdyn_PurchasePriority: DevKit.Controls.Integer;
			/** Determines priority of the pricing dimension when resolving for Sales price. */
			msdyn_SalesPriority: DevKit.Controls.Integer;
			/** Type determines if the dimension is to be used for retrieving the final per unit price or to retrieve a markup that is to be applied on a base price. */
			msdyn_Type: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_dimension_New_Form extends DevKit.IForm {
		/**
		* New Form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_dimension_New_Form */
		Body: DevKit.Formmsdyn_dimension_New_Form.Body;
	}
	class msdyn_dimensionApi {
		/**
		* DynamicsCrm.DevKit msdyn_dimensionApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Determines if this pricing dimension is applicable for Cost price. */
		msdyn_ApplicableToCost: boolean;
		/** Determines if this pricing dimension is applicable for Purchase price. */
		msdyn_ApplicableToPurchase: boolean;
		/** Determines if this pricing dimension is applicable for Sales price. */
		msdyn_ApplicableToSales: boolean;
		/** Determines priority of the pricing dimension when resolving for Cost price. */
		msdyn_CostPriority: number;
		/** Unique identifier for entity instances */
		msdyn_dimensionId: string;
		/** Name of the Dimension to be used in pricing calculations. */
		msdyn_name: string;
		/** Determines priority of the pricing dimension when resolving for Purchase price. */
		msdyn_PurchasePriority: number;
		/** Determines priority of the pricing dimension when resolving for Sales price. */
		msdyn_SalesPriority: number;
		/** Type determines if the dimension is to be used for retrieving the final per unit price or to retrieve a markup that is to be applied on a base price. */
		msdyn_Type: OptionSet.msdyn_dimension.msdyn_Type;
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
		/** Status of the Pricing Dimension */
		statecode: OptionSet.msdyn_dimension.statecode;
		/** Reason for the status of the Pricing Dimension */
		statuscode: OptionSet.msdyn_dimension.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Determines if this pricing dimension is applicable for Cost price. */
			readonly msdyn_ApplicableToCost: string;
			/** Determines if this pricing dimension is applicable for Purchase price. */
			readonly msdyn_ApplicableToPurchase: string;
			/** Determines if this pricing dimension is applicable for Sales price. */
			readonly msdyn_ApplicableToSales: string;
			/** Determines priority of the pricing dimension when resolving for Cost price. */
			readonly msdyn_CostPriority: string;
			/** Unique identifier for entity instances */
			readonly msdyn_dimensionId: string;
			/** Name of the Dimension to be used in pricing calculations. */
			readonly msdyn_name: string;
			/** Determines priority of the pricing dimension when resolving for Purchase price. */
			readonly msdyn_PurchasePriority: string;
			/** Determines priority of the pricing dimension when resolving for Sales price. */
			readonly msdyn_SalesPriority: string;
			/** Type determines if the dimension is to be used for retrieving the final per unit price or to retrieve a markup that is to be applied on a base price. */
			readonly msdyn_Type: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
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
			/** Status of the Pricing Dimension */
			readonly statecode: string;
			/** Reason for the status of the Pricing Dimension */
			readonly statuscode: string;
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
	namespace msdyn_dimension {
		enum msdyn_Type {
			/** 192350000 */
			Amount_based,
			/** 192350001 */
			Markup_based
		}
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}