﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_opportunitylinetransactionclassificatio_Information {
		interface tab__0F5B7EFE_11D1_4FA3_AE3A_1A5C1126822D_Sections {
			_0F5B7EFE_11D1_4FA3_AE3A_1A5C1126822D_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_ResourceCategoriesTab_Sections {
			ResourceCategoriesSection: DevKit.Controls.Section;
		}
		interface tab_TransactionCategoriesTab_Sections {
			TransactionCategoriesSection: DevKit.Controls.Section;
		}
		interface tab__0F5B7EFE_11D1_4FA3_AE3A_1A5C1126822D extends DevKit.Controls.ITab {
			Section: tab__0F5B7EFE_11D1_4FA3_AE3A_1A5C1126822D_Sections;
		}
		interface tab_ResourceCategoriesTab extends DevKit.Controls.ITab {
			Section: tab_ResourceCategoriesTab_Sections;
		}
		interface tab_TransactionCategoriesTab extends DevKit.Controls.ITab {
			Section: tab_TransactionCategoriesTab_Sections;
		}
		interface Tabs {
			_0F5B7EFE_11D1_4FA3_AE3A_1A5C1126822D: tab__0F5B7EFE_11D1_4FA3_AE3A_1A5C1126822D;
			ResourceCategoriesTab: tab_ResourceCategoriesTab;
			TransactionCategoriesTab: tab_TransactionCategoriesTab;
		}
		interface Body {
			Tab: Tabs;
			/** Select whether the transaction classification identified on the opportunity line will be charged to the customer or not. Valid values are Chargeable, Non-chargeable and Complimentary.   */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** Select whether the transaction classification identified on the opportunity line will be used to map costs in the classification to the opportunity line to affect the gross margin calculation. */
			msdyn_Include: DevKit.Controls.Boolean;
			/** Select the transaction classifications that apply to the opportunity line. Select the transaction classifications are broadly 4 types: Select the time, Expense, Material and Fee */
			msdyn_TransactionClassification: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			RolesGrid: DevKit.Controls.Grid;
			TransactionCategoriesGrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_opportunitylinetransactionclassificatio_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_opportunitylinetransactionclassificatio_Information */
		Body: DevKit.Formmsdyn_opportunitylinetransactionclassificatio_Information.Body;
		/** The Process of form msdyn_opportunitylinetransactionclassificatio_Information */
		Process: DevKit.Formmsdyn_opportunitylinetransactionclassificatio_Information.Process;
		/** The Grid of form msdyn_opportunitylinetransactionclassificatio_Information */
		Grid: DevKit.Formmsdyn_opportunitylinetransactionclassificatio_Information.Grid;
		/** The SidePanes of form msdyn_opportunitylinetransactionclassificatio_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_opportunitylinetransactionclassificatioApi {
		/**
		* DynamicsCrm.DevKit msdyn_opportunitylinetransactionclassificatioApi
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
		/** Select whether the transaction classification identified on the opportunity line will be charged to the customer or not. Valid values are Chargeable, Non-chargeable and Complimentary.   */
		msdyn_BillingType: OptionSet.msdyn_opportunitylinetransactionclassificatio.msdyn_BillingType;
		/** Type the name of the custom entity. */
		msdyn_description: string;
		/** Select whether the transaction classification identified on the opportunity line will be used to map costs in the classification to the opportunity line to affect the gross margin calculation. */
		msdyn_Include: boolean;
		/** Type the opportunity line that this transaction classification applies to. */
		msdyn_OpportunityLine: string;
		/** Unique identifier for entity instances */
		msdyn_opportunitylinetransactionclassificatioId: string;
		/** Select the transaction classifications that apply to the opportunity line. Select the transaction classifications are broadly 4 types: Select the time, Expense, Material and Fee */
		msdyn_TransactionClassification: OptionSet.msdyn_opportunitylinetransactionclassificatio.msdyn_TransactionClassification;
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
		/** Status of the Opportunity Line Transaction Classification */
		statecode: OptionSet.msdyn_opportunitylinetransactionclassificatio.statecode;
		/** Reason for the status of the Opportunity Line Transaction Classification */
		statuscode: OptionSet.msdyn_opportunitylinetransactionclassificatio.statuscode;
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
			/** Select whether the transaction classification identified on the opportunity line will be charged to the customer or not. Valid values are Chargeable, Non-chargeable and Complimentary.   */
			readonly msdyn_BillingType: string;
			/** Type the name of the custom entity. */
			readonly msdyn_description: string;
			/** Select whether the transaction classification identified on the opportunity line will be used to map costs in the classification to the opportunity line to affect the gross margin calculation. */
			readonly msdyn_Include: string;
			/** Type the opportunity line that this transaction classification applies to. */
			readonly msdyn_OpportunityLine: string;
			/** Unique identifier for entity instances */
			readonly msdyn_opportunitylinetransactionclassificatioId: string;
			/** Select the transaction classifications that apply to the opportunity line. Select the transaction classifications are broadly 4 types: Select the time, Expense, Material and Fee */
			readonly msdyn_TransactionClassification: string;
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
			/** Status of the Opportunity Line Transaction Classification */
			readonly statecode: string;
			/** Reason for the status of the Opportunity Line Transaction Classification */
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
	namespace msdyn_opportunitylinetransactionclassificatio {
		enum msdyn_BillingType {
			/** 192350001 */
			Chargeable,
			/** 192350002 */
			Complimentary,
			/** 192350000 */
			Non_Chargeable,
			/** 192350003 */
			Not_Available
		}
		enum msdyn_TransactionClassification {
			/** 690970001 */
			Additional,
			/** 690970000 */
			Commission,
			/** 192350001 */
			Expense,
			/** 192350004 */
			Fee,
			/** 192350002 */
			Material,
			/** 192350003 */
			Milestone,
			/** 690970002 */
			Tax,
			/** 192350000 */
			Time
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