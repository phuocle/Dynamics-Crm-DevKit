//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyusd_toolbarstrip_Information {
		interface tab_Conditions_Sections {
			Conditons_section_2: DevKit.Controls.Section;
		}
		interface tab_Styles_Sections {
			Custom_Styles: DevKit.Controls.Section;
		}
		interface tab_Conditions extends DevKit.Controls.ITab {
			Section: tab_Conditions_Sections;
		}
		interface tab_Styles extends DevKit.Controls.ITab {
			Section: tab_Styles_Sections;
		}
		interface Tabs {
			Conditions: tab_Conditions;
			Styles: tab_Styles;
		}
		interface Body {
			Tab: Tabs;
			msdyusd_Autoload: DevKit.Controls.OptionSet;
			/** Resource dictionary providing custom styles for a toolbar */
			msdyusd_CustomStyles: DevKit.Controls.String;
			msdyusd_EnabledCondition: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Controls.String;
			msdyusd_Order: DevKit.Controls.Integer;
			msdyusd_Title: DevKit.Controls.String;
			msdyusd_VisibleCondition: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Toolbar */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			Buttons: DevKit.Controls.Grid;
		}
	}
	class Formmsdyusd_toolbarstrip_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyusd_toolbarstrip_Information */
		Body: DevKit.Formmsdyusd_toolbarstrip_Information.Body;
		/** The Footer section of form msdyusd_toolbarstrip_Information */
		Footer: DevKit.Formmsdyusd_toolbarstrip_Information.Footer;
		/** The Process of form msdyusd_toolbarstrip_Information */
		Process: DevKit.Formmsdyusd_toolbarstrip_Information.Process;
		/** The Grid of form msdyusd_toolbarstrip_Information */
		Grid: DevKit.Formmsdyusd_toolbarstrip_Information.Grid;
		/** The SidePanes of form msdyusd_toolbarstrip_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyusd_toolbarstripApi {
		/**
		* DynamicsCrm.DevKit msdyusd_toolbarstripApi
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
		msdyusd_Autoload: OptionSet.msdyusd_toolbarstrip.msdyusd_Autoload;
		/** Resource dictionary providing custom styles for a toolbar */
		msdyusd_CustomStyles: string;
		msdyusd_EnabledCondition: string;
		/** The name of the custom entity. */
		msdyusd_name: string;
		msdyusd_Order: number;
		msdyusd_Title: string;
		/** Unique identifier for entity instances */
		msdyusd_toolbarstripId: string;
		msdyusd_VisibleCondition: string;
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
		/** Status of the Toolbar */
		statecode: OptionSet.msdyusd_toolbarstrip.statecode;
		/** Reason for the status of the Toolbar */
		statuscode: OptionSet.msdyusd_toolbarstrip.statuscode;
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
			readonly msdyusd_Autoload: string;
			/** Resource dictionary providing custom styles for a toolbar */
			readonly msdyusd_CustomStyles: string;
			readonly msdyusd_EnabledCondition: string;
			/** The name of the custom entity. */
			readonly msdyusd_name: string;
			readonly msdyusd_Order: string;
			readonly msdyusd_Title: string;
			/** Unique identifier for entity instances */
			readonly msdyusd_toolbarstripId: string;
			readonly msdyusd_VisibleCondition: string;
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
			/** Status of the Toolbar */
			readonly statecode: string;
			/** Reason for the status of the Toolbar */
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
	namespace msdyusd_toolbarstrip {
		enum msdyusd_Autoload {
			/** 803750001 */
			Application,
			/** 803750003 */
			Unified_Service_Desk_Control
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