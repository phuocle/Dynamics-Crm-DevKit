﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_opportunitylinetransactioncategory_Information {
		interface tab__478BCC40_409E_4E61_B1EB_D2DCB2A7144D_Sections {
			_478BCC40_409E_4E61_B1EB_D2DCB2A7144D_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__478BCC40_409E_4E61_B1EB_D2DCB2A7144D extends DevKit.Controls.ITab {
			Section: tab__478BCC40_409E_4E61_B1EB_D2DCB2A7144D_Sections;
		}
		interface Tabs {
			_478BCC40_409E_4E61_B1EB_D2DCB2A7144D: tab__478BCC40_409E_4E61_B1EB_D2DCB2A7144D;
		}
		interface Body {
			Tab: Tabs;
			/** Select where the transaction category's costs are charged to the customer. Valid values can Chargeable, Non-chargeable and Complimentary. Only chargeable transaction will add to the total of any invoice */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** Transaction category for the opportunity line. */
			msdyn_TransactionCategory: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_opportunitylinetransactioncategory_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_opportunitylinetransactioncategory_Information */
		Body: DevKit.Formmsdyn_opportunitylinetransactioncategory_Information.Body;
		/** The Process of form msdyn_opportunitylinetransactioncategory_Information */
		Process: DevKit.Formmsdyn_opportunitylinetransactioncategory_Information.Process;
		/** The SidePanes of form msdyn_opportunitylinetransactioncategory_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_opportunitylinetransactioncategoryApi {
		/**
		* DynamicsCrm.DevKit msdyn_opportunitylinetransactioncategoryApi
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
		/** Select where the transaction category's costs are charged to the customer. Valid values can Chargeable, Non-chargeable and Complimentary. Only chargeable transaction will add to the total of any invoice */
		msdyn_BillingType: OptionSet.msdyn_opportunitylinetransactioncategory.msdyn_BillingType;
		/** Type the name of the custom entity. */
		msdyn_description: string;
		/** Unique identifier for entity instances */
		msdyn_opportunitylinetransactioncategoryId: string;
		/** Select the transaction classification of the opportunity line. Select the transaction classifications are broadly of 4 types: Select the time, Expense, Material and Fee */
		msdyn_OpportunityLineTransactionClassification: string;
		/** Transaction category for the opportunity line. */
		msdyn_TransactionCategory: string;
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
		/** Status of the Opportunity Line Transaction Category */
		statecode: OptionSet.msdyn_opportunitylinetransactioncategory.statecode;
		/** Reason for the status of the Opportunity Line Transaction Category */
		statuscode: OptionSet.msdyn_opportunitylinetransactioncategory.statuscode;
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
			/** Select where the transaction category's costs are charged to the customer. Valid values can Chargeable, Non-chargeable and Complimentary. Only chargeable transaction will add to the total of any invoice */
			readonly msdyn_BillingType: string;
			/** Type the name of the custom entity. */
			readonly msdyn_description: string;
			/** Unique identifier for entity instances */
			readonly msdyn_opportunitylinetransactioncategoryId: string;
			/** Select the transaction classification of the opportunity line. Select the transaction classifications are broadly of 4 types: Select the time, Expense, Material and Fee */
			readonly msdyn_OpportunityLineTransactionClassification: string;
			/** Transaction category for the opportunity line. */
			readonly msdyn_TransactionCategory: string;
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
			/** Status of the Opportunity Line Transaction Category */
			readonly statecode: string;
			/** Reason for the status of the Opportunity Line Transaction Category */
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
	namespace msdyn_opportunitylinetransactioncategory {
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