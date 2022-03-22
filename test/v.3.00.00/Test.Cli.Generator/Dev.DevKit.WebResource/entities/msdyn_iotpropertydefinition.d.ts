﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_iotpropertydefinition_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_General_Sections {
			ChildParameters: DevKit.Controls.Section;
			Commands: DevKit.Controls.Section;
			General: DevKit.Controls.Section;
		}
		interface tab_General extends DevKit.Controls.ITab {
			Section: tab_General_Sections;
		}
		interface Tabs {
			General: tab_General;
		}
		interface Body {
			Tab: Tabs;
			msdyn_AdditionalProperties: DevKit.Controls.String;
			msdyn_AdditionalProperties1: DevKit.Controls.String;
			msdyn_Editable: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Refers to the parent property when building a nested property. */
			msdyn_ParentProperty: DevKit.Controls.Lookup;
			/** The data type of the parameter. */
			msdyn_Type: DevKit.Controls.OptionSet;
			/** Unit String for property definition */
			msdyn_unit: DevKit.Controls.String;
			msdyn_Visible: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			ChildParameters: DevKit.Controls.Grid;
			IoTDeviceCommandDefinitions: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_iotpropertydefinition_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_iotpropertydefinition_Information */
		Body: DevKit.Formmsdyn_iotpropertydefinition_Information.Body;
		/** The Header section of form msdyn_iotpropertydefinition_Information */
		Header: DevKit.Formmsdyn_iotpropertydefinition_Information.Header;
		/** The Process of form msdyn_iotpropertydefinition_Information */
		Process: DevKit.Formmsdyn_iotpropertydefinition_Information.Process;
		/** The Grid of form msdyn_iotpropertydefinition_Information */
		Grid: DevKit.Formmsdyn_iotpropertydefinition_Information.Grid;
		/** The SidePanes of form msdyn_iotpropertydefinition_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_iotpropertydefinitionApi {
		/**
		* DynamicsCrm.DevKit msdyn_iotpropertydefinitionApi
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
		msdyn_AdditionalProperties: string;
		msdyn_Editable: boolean;
		/** Unique identifier for entity instances */
		msdyn_iotpropertydefinitionId: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Refers to the parent property when building a nested property. */
		msdyn_ParentProperty: string;
		/** The data type of the parameter. */
		msdyn_Type: OptionSet.msdyn_iotpropertydefinition.msdyn_Type;
		/** Unit String for property definition */
		msdyn_unit: string;
		msdyn_Visible: boolean;
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
		/** Status of the IoT Property Definition */
		statecode: OptionSet.msdyn_iotpropertydefinition.statecode;
		/** Reason for the status of the IoT Property Definition */
		statuscode: OptionSet.msdyn_iotpropertydefinition.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_iotpropertydefinition {
		enum msdyn_Type {
			/** 192350003 */
			Boolean,
			/** 192350002 */
			Date_and_Time,
			/** 192350005 */
			Decimal_Number,
			/** 192350001 */
			Object,
			/** 192350000 */
			String,
			/** 192350004 */
			Whole_Number
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}