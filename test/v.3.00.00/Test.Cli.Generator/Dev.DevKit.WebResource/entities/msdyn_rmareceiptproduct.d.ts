//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_rmareceiptproduct_Information {
		interface Tabs {
		}
		interface Body {
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Enter the quantity received. */
			msdyn_Quantity: DevKit.Controls.Double;
			/** RMA this product relates to */
			msdyn_RMA: DevKit.Controls.Lookup;
			/** RMA Product this product relates to */
			msdyn_RMAProduct: DevKit.Controls.Lookup;
			/** RMA Receipt this product relates to */
			msdyn_RMAReceipt: DevKit.Controls.Lookup;
			/** RTV this product relates to (if Product Action is RTV) */
			msdyn_RTV: DevKit.Controls.Lookup;
			/** RTV Product this product relates to (if Product Action is RTV) */
			msdyn_RTVProduct: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the RMA Receipt Product */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_rmareceiptproduct_msdyn_inventoryjournal_RMAReceiptProduct: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_rmareceiptproduct_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_rmareceiptproduct_Information */
		Body: DevKit.Formmsdyn_rmareceiptproduct_Information.Body;
		/** The Footer section of form msdyn_rmareceiptproduct_Information */
		Footer: DevKit.Formmsdyn_rmareceiptproduct_Information.Footer;
		/** The Navigation of form msdyn_rmareceiptproduct_Information */
		Navigation: DevKit.Formmsdyn_rmareceiptproduct_Information.Navigation;
		/** The Process of form msdyn_rmareceiptproduct_Information */
		Process: DevKit.Formmsdyn_rmareceiptproduct_Information.Process;
		/** The SidePanes of form msdyn_rmareceiptproduct_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_rmareceiptproductApi {
		/**
		* DynamicsCrm.DevKit msdyn_rmareceiptproductApi
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
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Enter the quantity received. */
		msdyn_Quantity: number;
		/** RMA this product relates to */
		msdyn_RMA: string;
		/** RMA Product this product relates to */
		msdyn_RMAProduct: string;
		/** RMA Receipt this product relates to */
		msdyn_RMAReceipt: string;
		/** Shows the entity instances. */
		msdyn_rmareceiptproductId: string;
		/** RTV this product relates to (if Product Action is RTV) */
		msdyn_RTV: string;
		/** RTV Product this product relates to (if Product Action is RTV) */
		msdyn_RTVProduct: string;
		/** Shows the date and time that the record was migrated. */
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
		/** Status of the RMA Receipt Product */
		statecode: OptionSet.msdyn_rmareceiptproduct.statecode;
		/** Reason for the status of the RMA Receipt Product */
		statuscode: OptionSet.msdyn_rmareceiptproduct.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			/** Enter the quantity received. */
			readonly msdyn_Quantity: string;
			/** RMA this product relates to */
			readonly msdyn_RMA: string;
			/** RMA Product this product relates to */
			readonly msdyn_RMAProduct: string;
			/** RMA Receipt this product relates to */
			readonly msdyn_RMAReceipt: string;
			/** Shows the entity instances. */
			readonly msdyn_rmareceiptproductId: string;
			/** RTV this product relates to (if Product Action is RTV) */
			readonly msdyn_RTV: string;
			/** RTV Product this product relates to (if Product Action is RTV) */
			readonly msdyn_RTVProduct: string;
			/** Shows the date and time that the record was migrated. */
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
			/** Status of the RMA Receipt Product */
			readonly statecode: string;
			/** Reason for the status of the RMA Receipt Product */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_rmareceiptproduct {
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