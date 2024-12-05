//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_basestyle_Information {
		interface tab__2774A41A_FC4E_4616_A4EA_A1B975E46892_Sections {
			_8B9DE7A1_650A_4DD2_8BE1_FA228B831970: DevKit.Controls.Section;
			Size: DevKit.Controls.Section;
			Spacing: DevKit.Controls.Section;
			styles_section: DevKit.Controls.Section;
		}
		interface tab__2774A41A_FC4E_4616_A4EA_A1B975E46892 extends DevKit.Controls.ITab {
			Section: tab__2774A41A_FC4E_4616_A4EA_A1B975E46892_Sections;
		}
		interface Tabs {
			_2774A41A_FC4E_4616_A4EA_A1B975E46892: tab__2774A41A_FC4E_4616_A4EA_A1B975E46892;
		}
		interface Body {
			Tab: Tabs;
			msdyncrm_backgroundColor: DevKit.Controls.String;
			msdyncrm_backgroundImage: DevKit.Controls.String;
			msdyncrm_borderColor: DevKit.Controls.String;
			msdyncrm_borderRadius: DevKit.Controls.String;
			msdyncrm_borderstyle: DevKit.Controls.String;
			msdyncrm_borderWidth: DevKit.Controls.String;
			/** The colors present in the email body */
			msdyncrm_emailcolorpalette: DevKit.Controls.String;
			msdyncrm_marginBottom: DevKit.Controls.String;
			msdyncrm_marginLeft: DevKit.Controls.String;
			msdyncrm_marginRight: DevKit.Controls.String;
			msdyncrm_marginTop: DevKit.Controls.String;
			msdyncrm_minHeight: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_paddingBottom: DevKit.Controls.String;
			msdyncrm_paddingLeft: DevKit.Controls.String;
			msdyncrm_paddingRight: DevKit.Controls.String;
			msdyncrm_paddingTop: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyncrm_basestyle_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_basestyle_Information */
		Body: DevKit.Formmsdyncrm_basestyle_Information.Body;
		/** The Navigation of form msdyncrm_basestyle_Information */
		Navigation: DevKit.Formmsdyncrm_basestyle_Information.Navigation;
		/** The SidePanes of form msdyncrm_basestyle_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_basestyleApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_basestyleApi
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
		msdyncrm_align: OptionSet.msdyncrm_basestyle.msdyncrm_align;
		msdyncrm_backgroundColor: string;
		msdyncrm_backgroundImage: string;
		/** Unique identifier for entity instances */
		msdyncrm_basestyleId: string;
		msdyncrm_borderColor: string;
		msdyncrm_borderRadius: string;
		msdyncrm_borderstyle: string;
		msdyncrm_borderWidth: string;
		/** The colors present in the email body */
		msdyncrm_emailcolorpalette: string;
		msdyncrm_marginBottom: string;
		msdyncrm_marginLeft: string;
		msdyncrm_marginRight: string;
		msdyncrm_marginTop: string;
		msdyncrm_minHeight: string;
		/** The name of the custom entity. */
		msdyncrm_name: string;
		msdyncrm_paddingBottom: string;
		msdyncrm_paddingLeft: string;
		msdyncrm_paddingRight: string;
		msdyncrm_paddingTop: string;
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
		/** Status of the basestyle */
		statecode: OptionSet.msdyncrm_basestyle.statecode;
		/** Reason for the status of the basestyle */
		statuscode: OptionSet.msdyncrm_basestyle.statuscode;
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
			readonly msdyncrm_align: string;
			readonly msdyncrm_backgroundColor: string;
			readonly msdyncrm_backgroundImage: string;
			/** Unique identifier for entity instances */
			readonly msdyncrm_basestyleId: string;
			readonly msdyncrm_borderColor: string;
			readonly msdyncrm_borderRadius: string;
			readonly msdyncrm_borderstyle: string;
			readonly msdyncrm_borderWidth: string;
			/** The colors present in the email body */
			readonly msdyncrm_emailcolorpalette: string;
			readonly msdyncrm_marginBottom: string;
			readonly msdyncrm_marginLeft: string;
			readonly msdyncrm_marginRight: string;
			readonly msdyncrm_marginTop: string;
			readonly msdyncrm_minHeight: string;
			/** The name of the custom entity. */
			readonly msdyncrm_name: string;
			readonly msdyncrm_paddingBottom: string;
			readonly msdyncrm_paddingLeft: string;
			readonly msdyncrm_paddingRight: string;
			readonly msdyncrm_paddingTop: string;
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
			/** Status of the basestyle */
			readonly statecode: string;
			/** Reason for the status of the basestyle */
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
	namespace msdyncrm_basestyle {
		enum msdyncrm_align {
			/** 164230002 */
			Center,
			/** 164230001 */
			Left,
			/** 164230000 */
			None,
			/** 164230003 */
			Right
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