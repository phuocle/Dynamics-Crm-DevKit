﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_productinventory_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_Bin: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Product/Service associated with Product Inventory. */
			msdyn_Product: DevKit.Controls.Lookup;
			msdyn_QtyAllocated: DevKit.Controls.Double;
			msdyn_QtyAvailable: DevKit.Controls.Double;
			msdyn_QtyOnHand: DevKit.Controls.Double;
			msdyn_QtyOnOrder: DevKit.Controls.Double;
			msdyn_ReorderPoint: DevKit.Controls.Double;
			msdyn_Row: DevKit.Controls.String;
			/** Unique identifier for Unit associated with Product Inventory. */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Unique identifier for Warehouse associated with Product Inventory. */
			msdyn_Warehouse: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Product Inventory */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_productinventory_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_productinventory_Information */
		Body: DevKit.Formmsdyn_productinventory_Information.Body;
		/** The Footer section of form msdyn_productinventory_Information */
		Footer: DevKit.Formmsdyn_productinventory_Information.Footer;
		/** The Navigation of form msdyn_productinventory_Information */
		Navigation: DevKit.Formmsdyn_productinventory_Information.Navigation;
		/** The Process of form msdyn_productinventory_Information */
		Process: DevKit.Formmsdyn_productinventory_Information.Process;
		/** The SidePanes of form msdyn_productinventory_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_productinventoryApi {
		/**
		* DynamicsCrm.DevKit msdyn_productinventoryApi
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
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_Bin: string;
		/** For internal use only. */
		msdyn_InternalFlags: string;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for Product/Service associated with Product Inventory. */
		msdyn_Product: string;
		/** Shows the entity instances. */
		msdyn_productinventoryId: string;
		msdyn_QtyAllocated: number;
		msdyn_QtyAvailable: number;
		msdyn_QtyOnHand: number;
		msdyn_QtyOnOrder: number;
		msdyn_ReorderPoint: number;
		msdyn_Row: string;
		/** Unique identifier for Unit associated with Product Inventory. */
		msdyn_Unit: string;
		/** Unique identifier for Warehouse associated with Product Inventory. */
		msdyn_Warehouse: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Product Inventory */
		statecode: OptionSet.msdyn_productinventory.statecode;
		/** Reason for the status of the Product Inventory */
		statuscode: OptionSet.msdyn_productinventory.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_productinventory {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}