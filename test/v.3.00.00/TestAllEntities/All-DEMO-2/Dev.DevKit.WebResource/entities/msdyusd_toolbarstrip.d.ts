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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyusd_Autoload: DevKit.WebApi.OptionSetValue;
		/** Resource dictionary providing custom styles for a toolbar */
		msdyusd_CustomStyles: DevKit.WebApi.StringValue;
		msdyusd_EnabledCondition: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyusd_name: DevKit.WebApi.StringValue;
		msdyusd_Order: DevKit.WebApi.IntegerValue;
		msdyusd_Title: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyusd_toolbarstripId: DevKit.WebApi.GuidValue;
		msdyusd_VisibleCondition: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Toolbar */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Toolbar */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}