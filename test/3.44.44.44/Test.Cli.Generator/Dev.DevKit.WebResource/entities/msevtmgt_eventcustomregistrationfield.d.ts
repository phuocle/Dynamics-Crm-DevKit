﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_eventcustomregistrationfield_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** The date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Tabs {
		}
		interface Body {
			msevtmgt_customregistrationfield: DevKit.Controls.Lookup;
			msevtmgt_event: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msevtmgt_name: DevKit.Controls.String;
			msevtmgt_order: DevKit.Controls.Integer;
		}
		interface Navigation {

		}
	}
	class Formmsevtmgt_eventcustomregistrationfield_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_eventcustomregistrationfield_Information */
		Body: DevKit.Formmsevtmgt_eventcustomregistrationfield_Information.Body;
		/** The Header section of form msevtmgt_eventcustomregistrationfield_Information */
		Header: DevKit.Formmsevtmgt_eventcustomregistrationfield_Information.Header;
		/** The Navigation of form msevtmgt_eventcustomregistrationfield_Information */
		Navigation: DevKit.Formmsevtmgt_eventcustomregistrationfield_Information.Navigation;
		/** The SidePanes of form msevtmgt_eventcustomregistrationfield_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsevtmgt_eventcustomregistrationfield_Quick_Create_Form {
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
			msevtmgt_customregistrationfield: DevKit.Controls.Lookup;
			msevtmgt_event: DevKit.Controls.Lookup;
			msevtmgt_order: DevKit.Controls.Integer;
		}
	}
	class Formmsevtmgt_eventcustomregistrationfield_Quick_Create_Form extends DevKit.IForm {
		/**
		* Quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_eventcustomregistrationfield_Quick_Create_Form */
		Body: DevKit.Formmsevtmgt_eventcustomregistrationfield_Quick_Create_Form.Body;
	}
	class msevtmgt_eventcustomregistrationfieldApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_eventcustomregistrationfieldApi
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
		/** Unique identifier of the user who created the record */
		readonly CreatedBy: string;
		/** The date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record */
		readonly CreatedOnBehalfBy: string;
		/** The sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** The date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		msevtmgt_customregistrationfield: string;
		msevtmgt_event: string;
		/** Unique identifier for entity instances */
		msevtmgt_eventcustomregistrationfieldId: string;
		/** The name of the custom entity */
		msevtmgt_name: string;
		msevtmgt_order: number;
		/** The date and time when the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record */
		readonly OwningUser: string;
		/** Status of the event custom registration field */
		statecode: OptionSet.msevtmgt_eventcustomregistrationfield.statecode;
		/** Reason for the status of the event custom registration field */
		statuscode: OptionSet.msevtmgt_eventcustomregistrationfield.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** The time zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record */
			readonly CreatedBy: string;
			/** The date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record */
			readonly CreatedOnBehalfBy: string;
			/** The sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** The date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			readonly msevtmgt_customregistrationfield: string;
			readonly msevtmgt_event: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_eventcustomregistrationfieldId: string;
			/** The name of the custom entity */
			readonly msevtmgt_name: string;
			readonly msevtmgt_order: string;
			/** The date and time when the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record */
			readonly OwningUser: string;
			/** Status of the event custom registration field */
			readonly statecode: string;
			/** Reason for the status of the event custom registration field */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** The time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msevtmgt_eventcustomregistrationfield {
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