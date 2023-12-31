//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormUII_nonhostedapplication_Information {
		interface tab__3F03D7E1_782C_4675_89FC_7D267AB86A51_Sections {
			_93C6EB99_73A4_4A74_AF4F_A603FC21D57A: DevKit.Controls.Section;
		}
		interface tab__8689B43C_88CD_4B09_9675_256324BBC29B_Sections {
			_AAC2AEE5_A5E4_44D1_809F_B2ED550CAA84: DevKit.Controls.Section;
		}
		interface tab__3F03D7E1_782C_4675_89FC_7D267AB86A51 extends DevKit.Controls.ITab {
			Section: tab__3F03D7E1_782C_4675_89FC_7D267AB86A51_Sections;
		}
		interface tab__8689B43C_88CD_4B09_9675_256324BBC29B extends DevKit.Controls.ITab {
			Section: tab__8689B43C_88CD_4B09_9675_256324BBC29B_Sections;
		}
		interface Tabs {
			_3F03D7E1_782C_4675_89FC_7D267AB86A51: tab__3F03D7E1_782C_4675_89FC_7D267AB86A51;
			_8689B43C_88CD_4B09_9675_256324BBC29B: tab__8689B43C_88CD_4B09_9675_256324BBC29B;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Command Line argument for the Non-Hosted application . */
			UII_CommandLine: DevKit.Controls.String;
			/** The name of the Non-Hosted Application entity. */
			UII_name: DevKit.Controls.String;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the UII Non-Hosted Application */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormUII_nonhostedapplication_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form UII_nonhostedapplication_Information */
		Body: DevKit.FormUII_nonhostedapplication_Information.Body;
		/** The Footer section of form UII_nonhostedapplication_Information */
		Footer: DevKit.FormUII_nonhostedapplication_Information.Footer;
		/** The Process of form UII_nonhostedapplication_Information */
		Process: DevKit.FormUII_nonhostedapplication_Information.Process;
		/** The SidePanes of form UII_nonhostedapplication_Information */
		SidePanes: DevKit.SidePanes;
	}
	class UII_nonhostedapplicationApi {
		/**
		* DynamicsCrm.DevKit UII_nonhostedapplicationApi
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
		/** Status of the UII Non-Hosted Application */
		statecode: OptionSet.UII_nonhostedapplication.statecode;
		/** Reason for the status of the UII Non-Hosted Application */
		statuscode: OptionSet.UII_nonhostedapplication.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Command Line argument for the Non-Hosted application . */
		UII_CommandLine: string;
		/** To specify if the Non-Hosted application is default application. */
		UII_DefaultApplication: boolean;
		/** The name of the Non-Hosted Application entity. */
		UII_name: string;
		/** Unique identifier for entity instances */
		UII_nonhostedapplicationId: string;
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
			/** Status of the UII Non-Hosted Application */
			readonly statecode: string;
			/** Reason for the status of the UII Non-Hosted Application */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Command Line argument for the Non-Hosted application . */
			readonly UII_CommandLine: string;
			/** To specify if the Non-Hosted application is default application. */
			readonly UII_DefaultApplication: string;
			/** The name of the Non-Hosted Application entity. */
			readonly UII_name: string;
			/** Unique identifier for entity instances */
			readonly UII_nonhostedapplicationId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace UII_nonhostedapplication {
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