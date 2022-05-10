//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ReportCategoryApi {
		/**
		* DynamicsCrm.DevKit ReportCategoryApi
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
		/** Category of the report. */
		CategoryCode: OptionSet.ReportCategory.CategoryCode;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ReportCategory.ComponentState;
		/** Unique identifier of the user who created the report category. */
		readonly CreatedBy: string;
		/** Date and time when the report category record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the report category. */
		readonly CreatedOnBehalfBy: string;
		/** Exchange rate for the currency associated with the report category with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who last modified the report category. */
		readonly ModifiedBy: string;
		/** Date and time when the report category was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the report category. */
		readonly ModifiedOnBehalfBy: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Unique identifier of the business unit that owns the report category. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the user who owns the report category. */
		readonly OwningUser: string;
		/** Unique identifier of the report category. */
		ReportCategoryId: string;
		/** For internal use only. */
		readonly ReportCategoryIdUnique: string;
		/** Unique identifier of the report. */
		ReportId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the Report category. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the report category. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Category of the report. */
			readonly CategoryCode: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the report category. */
			readonly CreatedBy: string;
			/** Date and time when the report category record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the report category. */
			readonly CreatedOnBehalfBy: string;
			/** Exchange rate for the currency associated with the report category with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who last modified the report category. */
			readonly ModifiedBy: string;
			/** Date and time when the report category was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the report category. */
			readonly ModifiedOnBehalfBy: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the report category. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the user who owns the report category. */
			readonly OwningUser: string;
			/** Unique identifier of the report category. */
			readonly ReportCategoryId: string;
			/** For internal use only. */
			readonly ReportCategoryIdUnique: string;
			/** Unique identifier of the report. */
			readonly ReportId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the Report category. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the report category. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ReportCategory {
		enum CategoryCode {
			/** 4 */
			Administrative_Reports,
			/** 3 */
			Marketing_Reports,
			/** 1 */
			Sales_Reports,
			/** 2 */
			Service_Reports
		}
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum OwnerIdType {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}