//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMain_Information_Form {
		interface Header extends DevKit.Controls.IHeader {
			/** Status of the Catalog Submission Files */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Catalog Submission Files */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who created the record. */
			CreatedOnBehalfBy: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who modified the record. */
			ModifiedOnBehalfBy: DevKit.Controls.Lookup;
			/** File Item description */
			mspcat_Description: DevKit.Controls.String;
			mspcat_file: DevKit.Controls.File;
			/** Type of File Described */
			mspcat_FileType: DevKit.Controls.OptionSet;
			/** Size of Image Described */
			mspcat_ImageSize: DevKit.Controls.OptionSet;
			mspcat_Name: DevKit.Controls.String;
			/** Related Package Store Item. */
			mspcat_PackageStore: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormMain_Information_Form extends DevKit.IForm {
		/**
		* Main Information Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Main_Information_Form */
		Body: DevKit.FormMain_Information_Form.Body;
		/** The Header section of form Main_Information_Form */
		Header: DevKit.FormMain_Information_Form.Header;
		/** The Navigation of form Main_Information_Form */
		Navigation: DevKit.FormMain_Information_Form.Navigation;
		/** The SidePanes of form Main_Information_Form */
		SidePanes: DevKit.SidePanes;
	}
	class mspcat_CatalogSubmissionFilesApi {
		/**
		* DynamicsCrm.DevKit mspcat_CatalogSubmissionFilesApi
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
		/** Unique identifier for entity instances */
		mspcat_CatalogSubmissionFilesId: string;
		/** File Item description */
		mspcat_Description: string;
		/** File asset */
		readonly mspcat_File_name: string;
		/** Type of File Described */
		mspcat_FileType: OptionSet.mspcat_CatalogSubmissionFiles.mspcat_FileType;
		/** Size of Image Described */
		mspcat_ImageSize: OptionSet.mspcat_CatalogSubmissionFiles.mspcat_ImageSize;
		mspcat_Name: string;
		/** Related Package Store Item. */
		mspcat_PackageStore: string;
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
		/** Status of the Catalog Submission Files */
		statecode: OptionSet.mspcat_CatalogSubmissionFiles.statecode;
		/** Reason for the status of the Catalog Submission Files */
		statuscode: OptionSet.mspcat_CatalogSubmissionFiles.statuscode;
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
			/** Unique identifier for entity instances */
			readonly mspcat_CatalogSubmissionFilesId: string;
			/** File Item description */
			readonly mspcat_Description: string;
			/** File asset */
			readonly mspcat_File_name: string;
			/** Type of File Described */
			readonly mspcat_FileType: string;
			/** Size of Image Described */
			readonly mspcat_ImageSize: string;
			readonly mspcat_Name: string;
			/** Related Package Store Item. */
			readonly mspcat_PackageStore: string;
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
			/** Status of the Catalog Submission Files */
			readonly statecode: string;
			/** Reason for the status of the Catalog Submission Files */
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
	namespace mspcat_CatalogSubmissionFiles {
		enum mspcat_FileType {
			/** 526430001 */
			Document,
			/** 526430000 */
			Image,
			/** 526430002 */
			Video
		}
		enum mspcat_ImageSize {
			/** 526430001 */
			_216_x_216,
			/** 526430000 */
			_48_x_48,
			/** 526430002 */
			Screen_Shot
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