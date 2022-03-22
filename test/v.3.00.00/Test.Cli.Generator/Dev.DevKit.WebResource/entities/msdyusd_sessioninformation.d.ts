//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyusd_sessioninformation_Information {
		interface Tabs {
		}
		interface Body {
			msdyusd_Display: DevKit.Controls.String;
			/** Icon to be displayed along with session name */
			msdyusd_icon: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Controls.String;
			msdyusd_Order: DevKit.Controls.Integer;
			/** Unique identifier for Entity Numeric Mapping associated with Session Information. */
			msdyusd_SelectedEntity: DevKit.Controls.Lookup;
			msdyusd_type: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Session Information */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyusd_sessioninformation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyusd_sessioninformation_Information */
		Body: DevKit.Formmsdyusd_sessioninformation_Information.Body;
		/** The Footer section of form msdyusd_sessioninformation_Information */
		Footer: DevKit.Formmsdyusd_sessioninformation_Information.Footer;
		/** The Process of form msdyusd_sessioninformation_Information */
		Process: DevKit.Formmsdyusd_sessioninformation_Information.Process;
		/** The SidePanes of form msdyusd_sessioninformation_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyusd_sessioninformationApi {
		/**
		* DynamicsCrm.DevKit msdyusd_sessioninformationApi
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
		msdyusd_Display: string;
		/** Icon to be displayed along with session name */
		msdyusd_icon: string;
		/** The name of the custom entity. */
		msdyusd_name: string;
		msdyusd_Order: number;
		/** Unique identifier for Entity Numeric Mapping associated with Session Information. */
		msdyusd_SelectedEntity: string;
		/** Unique identifier for entity instances */
		msdyusd_sessioninformationId: string;
		msdyusd_type: OptionSet.msdyusd_sessioninformation.msdyusd_type;
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
		/** Status of the Session Information */
		statecode: OptionSet.msdyusd_sessioninformation.statecode;
		/** Reason for the status of the Session Information */
		statuscode: OptionSet.msdyusd_sessioninformation.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyusd_sessioninformation {
		enum msdyusd_type {
			/** 803750000 */
			Session_Name,
			/** 803750001 */
			Session_Overview_Line
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