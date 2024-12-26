//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_inventoryadjustment_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for Resource associated with Inventory Adjustment. */
			msdyn_AdjustedByResource: DevKit.Controls.Lookup;
			msdyn_AdjustmentTime: DevKit.Controls.DateTime;
			msdyn_Description: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Resource associated with Inventory Adjustment. */
			msdyn_RequestedByResource: DevKit.Controls.Lookup;
			/** Unique identifier for Warehouse associated with Inventory Adjustment. */
			msdyn_Warehouse: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_inventoryadjustment_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_inventoryadjustment_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_inventoryadjustment_Appointments: DevKit.Controls.NavigationItem,
			msdyn_inventoryadjustment_Emails: DevKit.Controls.NavigationItem,
			msdyn_inventoryadjustment_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_inventoryadjustment_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_inventoryadjustment_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_inventoryadjustment_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_inventoryadjustment_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_inventoryadjustment_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_inventoryadjustment_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_inventoryadjustment_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_inventoryadjustment_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_inventoryadjustment_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_inventoryadjustment_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_inventoryadjustment_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_inventoryadjustment_Tasks: DevKit.Controls.NavigationItem,
			msdyn_msdyn_inventoryadjustment_msdyn_inventoryadjustmentproduct_InventoryAdjustment: DevKit.Controls.NavigationItem
		}
		interface Grid {
			inventoryadjustmentproductssubgrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_inventoryadjustment_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_inventoryadjustment_Information */
		Body: DevKit.Formmsdyn_inventoryadjustment_Information.Body;
		/** The Navigation of form msdyn_inventoryadjustment_Information */
		Navigation: DevKit.Formmsdyn_inventoryadjustment_Information.Navigation;
		/** The Grid of form msdyn_inventoryadjustment_Information */
		Grid: DevKit.Formmsdyn_inventoryadjustment_Information.Grid;
		/** The SidePanes of form msdyn_inventoryadjustment_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_inventoryadjustmentApi {
		/**
		* DynamicsCrm.DevKit msdyn_inventoryadjustmentApi
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
		/** Unique identifier for Resource associated with Inventory Adjustment. */
		msdyn_AdjustedByResource: string;
		msdyn_AdjustmentTime_UtcDateAndTime: Date;
		/** Internal field used to generate the next name upon entity creation. It is optionally copied to the msdyn_name field. */
		msdyn_AutoNumbering: string;
		msdyn_Description: string;
		/** Shows the entity instances. */
		msdyn_inventoryadjustmentId: string;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for Resource associated with Inventory Adjustment. */
		msdyn_RequestedByResource: string;
		/** Unique identifier for Warehouse associated with Inventory Adjustment. */
		msdyn_Warehouse: string;
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
		/** Status of the Inventory Adjustment */
		statecode: OptionSet.msdyn_inventoryadjustment.statecode;
		/** Reason for the status of the Inventory Adjustment */
		statuscode: OptionSet.msdyn_inventoryadjustment.statuscode;
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
			/** Unique identifier for Resource associated with Inventory Adjustment. */
			readonly msdyn_AdjustedByResource: string;
			readonly msdyn_AdjustmentTime_UtcDateAndTime: string;
			/** Internal field used to generate the next name upon entity creation. It is optionally copied to the msdyn_name field. */
			readonly msdyn_AutoNumbering: string;
			readonly msdyn_Description: string;
			/** Shows the entity instances. */
			readonly msdyn_inventoryadjustmentId: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for Resource associated with Inventory Adjustment. */
			readonly msdyn_RequestedByResource: string;
			/** Unique identifier for Warehouse associated with Inventory Adjustment. */
			readonly msdyn_Warehouse: string;
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
			/** Status of the Inventory Adjustment */
			readonly statecode: string;
			/** Reason for the status of the Inventory Adjustment */
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
	namespace msdyn_inventoryadjustment {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}