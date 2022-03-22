﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_iotfieldmapping_Information {
		interface tab__4D9E1ADB_E5B9_4215_99CE_9028EC28EDF5_Sections {
			_4D9E1ADB_E5B9_4215_99CE_9028EC28EDF5_SECTION_2: DevKit.Controls.Section;
			_F16376E7_2BAA_42D4_9A1A_3443CF1688C0: DevKit.Controls.Section;
		}
		interface tab__4D9E1ADB_E5B9_4215_99CE_9028EC28EDF5 extends DevKit.Controls.ITab {
			Section: tab__4D9E1ADB_E5B9_4215_99CE_9028EC28EDF5_Sections;
		}
		interface Tabs {
			_4D9E1ADB_E5B9_4215_99CE_9028EC28EDF5: tab__4D9E1ADB_E5B9_4215_99CE_9028EC28EDF5;
		}
		interface Body {
			Tab: Tabs;
			/** The direct path or the key path to retrieve the desired information for mapping. */
			msdyn_DirectPathOrKeyPath: DevKit.Controls.String;
			/** The data format of the field specified to map to. */
			msdyn_FieldDataFormat: DevKit.Controls.OptionSet;
			/** The field schema name to map to. */
			msdyn_FieldName: DevKit.Controls.String;
			/** The type of the mapping. */
			msdyn_MappingType: DevKit.Controls.OptionSet;
			/** The ML model's input field name. */
			msdyn_ModelInputFieldName: DevKit.Controls.String;
			/** The search type of this mapping. */
			msdyn_SearchType: DevKit.Controls.OptionSet;
			/** The path of the value to be retrieved. */
			msdyn_ValuePath: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_iotfieldmapping_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_iotfieldmapping_Information */
		Body: DevKit.Formmsdyn_iotfieldmapping_Information.Body;
		/** The Process of form msdyn_iotfieldmapping_Information */
		Process: DevKit.Formmsdyn_iotfieldmapping_Information.Process;
		/** The SidePanes of form msdyn_iotfieldmapping_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_iotfieldmappingApi {
		/**
		* DynamicsCrm.DevKit msdyn_iotfieldmappingApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_iotfieldmapping.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The direct path or the key path to retrieve the desired information for mapping. */
		msdyn_DirectPathOrKeyPath: string;
		/** The data format of the field specified to map to. */
		msdyn_FieldDataFormat: OptionSet.msdyn_iotfieldmapping.msdyn_FieldDataFormat;
		/** The field schema name to map to. */
		msdyn_FieldName: string;
		/** Unique identifier for entity instances */
		msdyn_iotfieldmappingId: string;
		/** The type of the mapping. */
		msdyn_MappingType: OptionSet.msdyn_iotfieldmapping.msdyn_MappingType;
		/** The ML model's input field name. */
		msdyn_ModelInputFieldName: string;
		/** The search type of this mapping. */
		msdyn_SearchType: OptionSet.msdyn_iotfieldmapping.msdyn_SearchType;
		/** The path of the value to be retrieved. */
		msdyn_ValuePath: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the IoT Field Mapping */
		statecode: OptionSet.msdyn_iotfieldmapping.statecode;
		/** Reason for the status of the IoT Field Mapping */
		statuscode: OptionSet.msdyn_iotfieldmapping.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_iotfieldmapping {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdyn_FieldDataFormat {
			/** 192350000 */
			Direct,
			/** 192350001 */
			JSON
		}
		enum msdyn_MappingType {
			/** 192350000 */
			Device_identifier,
			/** 192350002 */
			Device_property,
			/** 192350001 */
			Rule_identifier
		}
		enum msdyn_SearchType {
			/** 192350000 */
			Direct_Path,
			/** 192350001 */
			Key_Value_Path
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