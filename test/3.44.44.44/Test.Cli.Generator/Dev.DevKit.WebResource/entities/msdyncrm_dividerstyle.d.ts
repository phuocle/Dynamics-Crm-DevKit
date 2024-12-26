//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_dividerstyle_Information {
		interface Tabs {
		}
		interface Body {
			msdyncrm_alignment: DevKit.Controls.String;
			/** The colors present in the email body */
			msdyncrm_emailcolorpalette: DevKit.Controls.String;
			msdyncrm_linecolor: DevKit.Controls.String;
			msdyncrm_linesize: DevKit.Controls.String;
			msdyncrm_linestyle: DevKit.Controls.String;
			msdyncrm_marginbottom: DevKit.Controls.String;
			msdyncrm_marginleft: DevKit.Controls.String;
			msdyncrm_marginright: DevKit.Controls.String;
			msdyncrm_margintop: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_paddingbottom: DevKit.Controls.String;
			msdyncrm_paddingleft: DevKit.Controls.String;
			msdyncrm_paddingright: DevKit.Controls.String;
			msdyncrm_paddingtop: DevKit.Controls.String;
			msdyncrm_width: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyncrm_dividerstyle_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_dividerstyle_Information */
		Body: DevKit.Formmsdyncrm_dividerstyle_Information.Body;
		/** The Navigation of form msdyncrm_dividerstyle_Information */
		Navigation: DevKit.Formmsdyncrm_dividerstyle_Information.Navigation;
		/** The SidePanes of form msdyncrm_dividerstyle_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_dividerstyleApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_dividerstyleApi
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
		msdyncrm_alignment: string;
		/** Unique identifier for entity instances */
		msdyncrm_dividerstyleId: string;
		/** The colors present in the email body */
		msdyncrm_emailcolorpalette: string;
		msdyncrm_linecolor: string;
		msdyncrm_linesize: string;
		msdyncrm_linestyle: string;
		msdyncrm_marginbottom: string;
		msdyncrm_marginleft: string;
		msdyncrm_marginright: string;
		msdyncrm_margintop: string;
		/** The name of the custom entity. */
		msdyncrm_name: string;
		msdyncrm_paddingbottom: string;
		msdyncrm_paddingleft: string;
		msdyncrm_paddingright: string;
		msdyncrm_paddingtop: string;
		msdyncrm_width: string;
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
		/** Status of the Divider style */
		statecode: OptionSet.msdyncrm_dividerstyle.statecode;
		/** Reason for the status of the Divider style */
		statuscode: OptionSet.msdyncrm_dividerstyle.statuscode;
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
			readonly msdyncrm_alignment: string;
			/** Unique identifier for entity instances */
			readonly msdyncrm_dividerstyleId: string;
			/** The colors present in the email body */
			readonly msdyncrm_emailcolorpalette: string;
			readonly msdyncrm_linecolor: string;
			readonly msdyncrm_linesize: string;
			readonly msdyncrm_linestyle: string;
			readonly msdyncrm_marginbottom: string;
			readonly msdyncrm_marginleft: string;
			readonly msdyncrm_marginright: string;
			readonly msdyncrm_margintop: string;
			/** The name of the custom entity. */
			readonly msdyncrm_name: string;
			readonly msdyncrm_paddingbottom: string;
			readonly msdyncrm_paddingleft: string;
			readonly msdyncrm_paddingright: string;
			readonly msdyncrm_paddingtop: string;
			readonly msdyncrm_width: string;
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
			/** Status of the Divider style */
			readonly statecode: string;
			/** Reason for the status of the Divider style */
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
	namespace msdyncrm_dividerstyle {
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