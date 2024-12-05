//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_vivacustomerlist_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_vivacustomerlist_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_vivacustomerlist_Information */
		Body: DevKit.Formmsdyn_vivacustomerlist_Information.Body;
		/** The Navigation of form msdyn_vivacustomerlist_Information */
		Navigation: DevKit.Formmsdyn_vivacustomerlist_Information.Navigation;
		/** The SidePanes of form msdyn_vivacustomerlist_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_vivacustomerlistApi {
		/**
		* DynamicsCrm.DevKit msdyn_vivacustomerlistApi
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
		/** Id of the view (saved query) backing this Copilot for Sales customer list. Only used for lists of the "CRM list" type. */
		msdyn_backingview: string;
		/** Type of the Copilot for Sales customer list. */
		msdyn_listtype: OptionSet.msdyn_vivacustomerlist.msdyn_listtype;
		msdyn_Name: string;
		/** Ordering index of this list. Used to declare orders of all lists for a given user. */
		msdyn_orderindex: number;
		/** Identifier to track the association of this record with a Copilot product type */
		msdyn_producttype: OptionSet.msdyn_vivacustomerlist.msdyn_producttype;
		/** Defines the configured sort for data in this Copilot for Sales customer list. Contains either CRM sort expression or Graph API sort expression, depending on the list type. */
		msdyn_sortexpression: string;
		/** Time range qualifier configured for this Copilot for Sales customer list. Used in conjunction with the msdyn_timerangetype field. Only used for list types other than "CRM list". */
		msdyn_timerangequalifier: number;
		/** Time range configured for this Copilot for Sales customer list. Only used for list types other than "CRM list". */
		msdyn_timerangetype: OptionSet.msdyn_vivacustomerlist.msdyn_timerangetype;
		/** AadObjectId of the owning user. */
		msdyn_userid: string;
		/** Unique identifier for entity instances */
		msdyn_vivacustomerlistId: string;
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
		/** Status of the Copilot for Sales customer list */
		statecode: OptionSet.msdyn_vivacustomerlist.statecode;
		/** Reason for the status of the Copilot for Sales customer list */
		statuscode: OptionSet.msdyn_vivacustomerlist.statuscode;
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
			/** Id of the view (saved query) backing this Copilot for Sales customer list. Only used for lists of the "CRM list" type. */
			readonly msdyn_backingview: string;
			/** Type of the Copilot for Sales customer list. */
			readonly msdyn_listtype: string;
			readonly msdyn_Name: string;
			/** Ordering index of this list. Used to declare orders of all lists for a given user. */
			readonly msdyn_orderindex: string;
			/** Identifier to track the association of this record with a Copilot product type */
			readonly msdyn_producttype: string;
			/** Defines the configured sort for data in this Copilot for Sales customer list. Contains either CRM sort expression or Graph API sort expression, depending on the list type. */
			readonly msdyn_sortexpression: string;
			/** Time range qualifier configured for this Copilot for Sales customer list. Used in conjunction with the msdyn_timerangetype field. Only used for list types other than "CRM list". */
			readonly msdyn_timerangequalifier: string;
			/** Time range configured for this Copilot for Sales customer list. Only used for list types other than "CRM list". */
			readonly msdyn_timerangetype: string;
			/** AadObjectId of the owning user. */
			readonly msdyn_userid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_vivacustomerlistId: string;
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
			/** Status of the Copilot for Sales customer list */
			readonly statecode: string;
			/** Reason for the status of the Copilot for Sales customer list */
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
	namespace msdyn_vivacustomerlist {
		enum msdyn_listtype {
			/** 192350005 */
			Contacts_to_reconnect_with,
			/** 192350002 */
			Contacts_with_upcoming_meetings,
			/** 192350000 */
			CRM_list,
			/** 192350007 */
			Frequently_contacted,
			/** 192350003 */
			Opportunities_with_follow_up_items_due_soon,
			/** 192350004 */
			Opportunities_with_overdue_items,
			/** 192350001 */
			Opportunities_with_upcoming_meetings,
			/** 192350006 */
			Recently_contacted
		}
		enum msdyn_producttype {
			/** 10000 */
			Copilot_for_Sales,
			/** 10001 */
			Copilot_for_Service,
			/** 11000 */
			Shared
		}
		enum msdyn_timerangetype {
			/** 192350006 */
			Last_month,
			/** 192350004 */
			Last_week,
			/** 192350005 */
			Last_X_days_192350005,
			/** 192350007 */
			Last_X_days_192350007,
			/** 192350008 */
			Last_X_months,
			/** 192350009 */
			Last_year,
			/** 192350002 */
			Next_X_days,
			/** 192350001 */
			This_week,
			/** 192350000 */
			Today,
			/** 192350003 */
			Yesterday
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}