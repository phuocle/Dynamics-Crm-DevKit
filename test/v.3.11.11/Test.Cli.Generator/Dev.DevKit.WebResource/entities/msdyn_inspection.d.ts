//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_inspection_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Status of the inspection template form */
			msdyn_state: DevKit.Controls.OptionSet;
		}
		interface tab__5B128D40_6C06_43BB_9357_608B66262519_Sections {
			InspectionFormSection: DevKit.Controls.Section;
		}
		interface tab__5B128D40_6C06_43BB_9357_608B66262519 extends DevKit.Controls.ITab {
			Section: tab__5B128D40_6C06_43BB_9357_608B66262519_Sections;
		}
		interface Tabs {
			_5B128D40_6C06_43BB_9357_608B66262519: tab__5B128D40_6C06_43BB_9357_608B66262519;
		}
		interface Body {
			Tab: Tabs;
			/** Description of the Inspection Template. */
			msdyn_Description: DevKit.Controls.String;
			/** The name of the Inspection Template entity. */
			msdyn_name: DevKit.Controls.String;
			/** Status of the inspection template form */
			msdyn_state: DevKit.Controls.OptionSet;
			/** Inspection definition Json */
			msdyn_surveydefinition: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_inspection_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_inspection_Information */
		Body: DevKit.Formmsdyn_inspection_Information.Body;
		/** The Header section of form msdyn_inspection_Information */
		Header: DevKit.Formmsdyn_inspection_Information.Header;
		/** The Process of form msdyn_inspection_Information */
		Process: DevKit.Formmsdyn_inspection_Information.Process;
		/** The SidePanes of form msdyn_inspection_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_inspectionApi {
		/**
		* DynamicsCrm.DevKit msdyn_inspectionApi
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
		/** Description of the Inspection Template. */
		msdyn_Description: string;
		/** Shows the date and time when the inspection template would be effective. By default its the inspection template published date. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		msdyn_EffectiveDate_UtcDateAndTime: Date;
		/** Unique identifier for entity instances */
		msdyn_inspectionId: string;
		/** The name of the Inspection Template entity. */
		msdyn_name: string;
		/** Shows the date and time when the record was Published. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		msdyn_publishedon_UtcDateOnly: Date;
		/** Status of the inspection template form */
		msdyn_state: OptionSet.msdyn_inspection.msdyn_state;
		/** Inspection definition Json */
		msdyn_surveydefinition: string;
		/** Version of the Inspection Template */
		msdyn_Version: string;
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
		/** Status of the Inspection Template */
		statecode: OptionSet.msdyn_inspection.statecode;
		/** Reason for the status of the Inspection Template */
		statuscode: OptionSet.msdyn_inspection.statuscode;
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
			/** Description of the Inspection Template. */
			readonly msdyn_Description: string;
			/** Shows the date and time when the inspection template would be effective. By default its the inspection template published date. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly msdyn_EffectiveDate_UtcDateAndTime: string;
			/** Unique identifier for entity instances */
			readonly msdyn_inspectionId: string;
			/** The name of the Inspection Template entity. */
			readonly msdyn_name: string;
			/** Shows the date and time when the record was Published. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly msdyn_publishedon_UtcDateOnly: string;
			/** Status of the inspection template form */
			readonly msdyn_state: string;
			/** Inspection definition Json */
			readonly msdyn_surveydefinition: string;
			/** Version of the Inspection Template */
			readonly msdyn_Version: string;
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
			/** Status of the Inspection Template */
			readonly statecode: string;
			/** Reason for the status of the Inspection Template */
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
	namespace msdyn_inspection {
		enum msdyn_state {
			/** 192350000 */
			Draft,
			/** 192350001 */
			Published
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