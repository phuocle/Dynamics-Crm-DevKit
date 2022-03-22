//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_FunctionalLocation_Information {
		interface tab_AssetsAndLocationsTab_Sections {
			AssetsAndLocationsSection: DevKit.Controls.Section;
		}
		interface tab_tab_3_Sections {
			AddressSection: DevKit.Controls.Section;
			tab_3_column_3_section_1: DevKit.Controls.Section;
			tab_3_section_1: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
		}
		interface tab_AssetsAndLocationsTab extends DevKit.Controls.ITab {
			Section: tab_AssetsAndLocationsTab_Sections;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface Tabs {
			AssetsAndLocationsTab: tab_AssetsAndLocationsTab;
			tab_3: tab_tab_3;
		}
		interface Body {
			Tab: Tabs;
			msdyn_Address1: DevKit.Controls.String;
			/** Street 2 */
			msdyn_Address2: DevKit.Controls.String;
			/** Street 3 */
			msdyn_Address3: DevKit.Controls.String;
			/** Address Name */
			msdyn_AddressName: DevKit.Controls.String;
			/** City */
			msdyn_City: DevKit.Controls.String;
			/** Country/Region */
			msdyn_Country: DevKit.Controls.String;
			/** Latitude */
			msdyn_Latitude: DevKit.Controls.Double;
			/** Longitude */
			msdyn_Longitude: DevKit.Controls.Double;
			/** Required name field */
			msdyn_Name: DevKit.Controls.String;
			/** Required name field */
			msdyn_Name1: DevKit.Controls.String;
			msdyn_ParentFunctionalLocation: DevKit.Controls.Lookup;
			/** Postal Code */
			msdyn_PostalCode: DevKit.Controls.String;
			/** State Or Province */
			msdyn_StateOrProvince: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_FunctionalLocation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_FunctionalLocation_Information */
		Body: DevKit.Formmsdyn_FunctionalLocation_Information.Body;
		/** The Process of form msdyn_FunctionalLocation_Information */
		Process: DevKit.Formmsdyn_FunctionalLocation_Information.Process;
		/** The SidePanes of form msdyn_FunctionalLocation_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormFunctional_Location_Quick_Create {
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
			msdyn_Address1: DevKit.Controls.String;
			/** Street 2 */
			msdyn_Address2: DevKit.Controls.String;
			/** City */
			msdyn_City: DevKit.Controls.String;
			/** Required name field */
			msdyn_Name: DevKit.Controls.String;
			msdyn_ParentFunctionalLocation: DevKit.Controls.Lookup;
			/** Postal Code */
			msdyn_PostalCode: DevKit.Controls.String;
			/** State Or Province */
			msdyn_StateOrProvince: DevKit.Controls.String;
		}
	}
	class FormFunctional_Location_Quick_Create extends DevKit.IForm {
		/**
		* Functional Location Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Functional_Location_Quick_Create */
		Body: DevKit.FormFunctional_Location_Quick_Create.Body;
	}
	class msdyn_FunctionalLocationApi {
		/**
		* DynamicsCrm.DevKit msdyn_FunctionalLocationApi
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
		msdyn_Address1: string;
		/** Street 2 */
		msdyn_Address2: string;
		/** Street 3 */
		msdyn_Address3: string;
		/** Address Name */
		msdyn_AddressName: string;
		/** City */
		msdyn_City: string;
		/** Country/Region */
		msdyn_Country: string;
		/** Unique identifier for entity instances */
		msdyn_FunctionalLocationId: string;
		/** Latitude */
		msdyn_Latitude: number;
		/** Longitude */
		msdyn_Longitude: number;
		/** Required name field */
		msdyn_Name: string;
		msdyn_ParentFunctionalLocation: string;
		/** Postal Code */
		msdyn_PostalCode: string;
		/** Relative order of functional location entity node in hierarchy control */
		msdyn_Sequence: number;
		/** State Or Province */
		msdyn_StateOrProvince: string;
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
		/** Status of the Functional Location */
		statecode: OptionSet.msdyn_FunctionalLocation.statecode;
		/** Reason for the status of the Functional Location */
		statuscode: OptionSet.msdyn_FunctionalLocation.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_FunctionalLocation {
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